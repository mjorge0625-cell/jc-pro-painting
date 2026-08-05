import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders bilingual contact and quote paths", async () => {
  const response = await render();
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Fresh color/);
  assert.match(html, /entire Treasure Valley/);
  assert.match(html, /Junior Cosio/);
  assert.match(html, /208-410-0547/);
  assert.match(html, /jcpropaintllc@gmail\.com/);
  assert.match(html, /src="\/jc-pro-logo\.jpg"/);
  assert.match(html, /action="https:\/\/formsubmit\.co\/jcpropaintllc@gmail\.com"/);
  assert.match(html, /name="_subject"/);
  assert.match(html, /McCall projects by arrangement/);
  assert.match(html, /Garden City/);
  assert.doesNotMatch(html, /map8-/);
  assert.doesNotMatch(html, /coverage-panel/);
  assert.match(html, /id="quote"/);
  assert.doesNotMatch(html, /Cabinets/);

  const spanish = await (await render("/?lang=es")).text();
  assert.match(spanish, /Color renovado/);
  assert.match(spanish, /Pintura de interiores/);
  assert.match(spanish, /Presupuesto gratis/);
  assert.match(spanish, /Como nuevo/);
  assert.match(spanish, /Llámenos o mándenos mensaje/);
  assert.match(spanish, /espacio luzca como/);
});
