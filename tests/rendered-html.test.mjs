import assert from "node:assert/strict";
import test from "node:test";

const site = "https://jcpropaintingco.com";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

const html = async (path) => (await render(path)).text();
// React writes &amp; inside attributes; decode the few entities we use so length checks count real characters.
const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
const meta = (page, name) => decode(page.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`))?.[1] ?? "");
const title = (page) => decode(page.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
const jsonLd = (page) => JSON.parse(page.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);

test("renders bilingual contact and quote paths", async () => {
  const response = await render();
  const english = await response.text();

  assert.equal(response.status, 200);
  assert.match(english, /Fresh color/);
  assert.match(english, /entire Treasure Valley/);
  assert.match(english, /Junior Cosio/);
  assert.match(english, /208-410-0547/);
  assert.match(english, /jcpropaintllc@gmail\.com/);
  assert.match(english, /src="\/jc-pro-logo\.jpg"/);
  assert.match(english, /action="https:\/\/formsubmit\.co\/jcpropaintllc@gmail\.com"/);
  assert.match(english, /name="_subject"/);
  assert.match(english, /McCall projects by arrangement/);
  assert.match(english, /Garden City/);
  assert.doesNotMatch(english, /map8-/);
  assert.doesNotMatch(english, /coverage-panel/);
  assert.match(english, /id="quote"/);
  assert.doesNotMatch(english, /Cabinets/);

  const spanish = await html("/es");
  assert.match(spanish, /Color renovado/);
  assert.match(spanish, /Pintura de interiores/);
  assert.match(spanish, /Presupuesto gratis/);
  assert.match(spanish, /Como nuevo/);
  assert.match(spanish, /Llámenos o mándenos mensaje/);
  assert.match(spanish, /espacio luzca como/);
});

test("tells the story as an Idaho local business, not an immigrant story", async () => {
  const english = await html("/");
  const spanish = await html("/es");

  for (const page of [english, spanish]) assert.doesNotMatch(page, /immigrant|inmigrante|M[eé]xico/i);
  assert.match(english, /locally owned family business in Nampa, Idaho/);
  assert.match(english, /Idaho local/);
  assert.match(spanish, /negocio familiar y local de Nampa, Idaho/);
});

test("each language has its own address, language tag, title and description", async () => {
  const english = await html("/");
  const spanish = await html("/es");

  assert.match(english, /<html lang="en"/);
  assert.match(spanish, /<html lang="es"/);

  for (const [page, path, place] of [[english, "/", /Nampa, ID/], [spanish, "/es", /Nampa, Idaho/]]) {
    assert.match(title(page), place);
    assert.match(title(page), /JC Pro Painting$/);
    assert.ok(title(page).length >= 30 && title(page).length <= 60, `title length ${title(page).length}: ${title(page)}`);
    const description = meta(page, "description");
    assert.ok(description.length >= 120 && description.length <= 160, `description length ${description.length}: ${description}`);
    assert.match(description, /208-410-0547/);

    assert.match(page, new RegExp(`<link rel="canonical" href="${site}${path === "/" ? "/?" : path}"`));
    assert.match(page, new RegExp(`<link rel="alternate" hrefLang="en" href="${site}/?"`));
    assert.match(page, new RegExp(`<link rel="alternate" hrefLang="es" href="${site}/es"`));
    assert.match(page, new RegExp(`<link rel="alternate" hrefLang="x-default" href="${site}/?"`));
    assert.equal(meta(page, "og:image"), `${site}/og-image.jpg`);
    assert.equal(meta(page, "twitter:card"), "summary_large_image");
  }
  assert.notEqual(title(english), title(spanish));
});

test("the old Spanish address forwards to the new one", async () => {
  const response = await render("/?lang=es");
  assert.ok([301, 307, 308].includes(response.status), `status ${response.status}`);
  // The old query string rides along; the page's canonical address still says /es.
  assert.match(response.headers.get("location"), /\/es(\?lang=es)?$/);
});

test("has one main heading that names the trade and the town", async () => {
  for (const [path, words] of [["/", /house painters.*Nampa, Idaho/is], ["/es", /Pintores.*Nampa, Idaho/is]]) {
    const page = await html(path);
    const headings = page.match(/<h1[\s>].*?<\/h1>/gs);
    assert.equal(headings.length, 1);
    assert.match(headings[0], words);
  }
});

test("describes the business to search engines using only facts shown on the page", async () => {
  for (const path of ["/", "/es"]) {
    const page = await html(path);
    const business = jsonLd(page);

    assert.equal(business["@type"], "HousePainter");
    assert.equal(business.name, "JC Pro Painting");
    assert.equal(business.telephone, "+12084100547");
    assert.equal(business.email, "jcpropaintllc@gmail.com");
    assert.equal(business.url, `${site}/`);
    assert.deepEqual(business.address, { "@type": "PostalAddress", addressLocality: "Nampa", addressRegion: "ID", addressCountry: "US" });
    assert.ok(business.areaServed.some((area) => area.name === "Nampa, Idaho"));
    assert.equal(business.areaServed.length, 12);
    for (const area of business.areaServed) assert.match(page, new RegExp(`>${area.name.replace(", Idaho", "")}<`));
    assert.deepEqual(business.knowsLanguage, ["en", "es"]);
    assert.equal(business.founder.name, "Junior Cosio");

    // No reviews, ratings, prices or hours exist yet, so none may be claimed.
    for (const invented of ["aggregateRating", "review", "priceRange", "openingHours", "openingHoursSpecification", "geo"]) {
      assert.equal(business[invented], undefined, `${invented} must not be claimed`);
    }
  }
});

test("promises are not dressed up as customer reviews", async () => {
  for (const path of ["/", "/es"]) {
    const page = await html(path);
    assert.doesNotMatch(page, /★/);
    assert.doesNotMatch(page, /<blockquote/);
  }
});

test("every picture has a description and a reserved size, and the first one loads first", async () => {
  for (const path of ["/", "/es"]) {
    const page = await html(path);
    const images = page.match(/<img [^>]*>/g);
    assert.ok(images.length >= 7);
    for (const image of images) {
      assert.match(image, / alt="/, image);
      assert.match(image, / width="\d+"/, image);
      assert.match(image, / height="\d+"/, image);
    }
    const hero = images.find((image) => /exterior/.test(image));
    assert.match(hero, /fetchPriority="high"|fetchpriority="high"/);
    assert.doesNotMatch(hero, /loading="lazy"/);
    assert.match(page, /<source type="image\/webp"/);
  }
});

test("answers common questions in plain text", async () => {
  const english = await html("/");
  assert.match(english, /What areas do you serve\?/);
  assert.match(english, /Are estimates free\?/);
  assert.match(english, /Do you speak Spanish\?/);
  assert.match(await html("/es"), /¿Qué zonas atienden\?/);
});

test("phones get a call button and a quote button that stay on screen", async () => {
  const page = await html("/");
  assert.match(page, /class="mobile-actions"/);
  assert.match(page, /class="mobile-actions".*?href="tel:\+12084100547"/s);
});

test("publishes a sitemap and lets search engines in", async () => {
  const sitemap = await html("/sitemap.xml");
  assert.match(sitemap, new RegExp(`<loc>${site}/?</loc>`));
  assert.match(sitemap, new RegExp(`<loc>${site}/es</loc>`));
  assert.doesNotMatch(sitemap, /lang=es/);

  const robots = await html("/robots.txt");
  assert.match(robots, /Allow: \//);
  assert.match(robots, new RegExp(`Sitemap: ${site}/sitemap.xml`));
});
