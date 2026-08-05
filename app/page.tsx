import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JC Pro Painting | Treasure Valley Painters",
  description: "Bilingual, family-run interior and exterior painting across the Treasure Valley and as far as McCall, Idaho.",
};

const phoneDisplay = "208-410-0547";
const phoneHref = "+12084100547";
const email = "jcpropaintllc@gmail.com";
const quoteEndpoint = process.env.QUOTE_FORM_ENDPOINT || `https://formsubmit.co/${email}`;
const areas = ["Nampa", "Boise", "Meridian", "Caldwell", "Eagle", "Kuna", "Star", "Middleton", "Garden City", "Emmett", "Marsing", "Homedale"];

const copy = {
  en: {
    announcement: "Ready for a fresh start?",
    announcementLink: "Fill out the free quote form at the bottom.",
    callText: "Call or text",
    emailText: "Email",
    language: "Choose website language",
    nav: ["Services", "Work", "About"],
    freeQuote: "Get a free quote",
    heroEyebrow: "Family-run · Nampa, Idaho · English & Spanish",
    heroTitle: ["Fresh color.", "Honest craft."],
    heroIntro: "Thoughtful interior and exterior painting, done with care by two brothers who believe quality work should come at a fair price.",
    planProject: "Plan your project",
    seeApproach: "See our approach",
    heroAlt: "Freshly painted blue home exterior",
    imageNote: ["A better first impression", "starts at the curb."],
    scroll: "Scroll to transform",
    promises: ["Clear, fair estimates", "Careful preparation", "Respect for your space", "A finish we stand behind"],
    storyEyebrow: "The JC way",
    storyTitle: ["From lived-in", "to loved again."],
    storyAlt: "Professional painter applying a clean interior finish",
    madeNew: "Made new",
    storyCaption: "Every clean finish starts with the work you don’t see.",
    process: [
      ["Walk the space", "We listen, look closely, and help shape a practical plan."],
      ["Prep it right", "Protection, patching, sanding, and clean edges come first."],
      ["Finish with care", "Even coverage, crisp details, and a tidy handoff."],
    ],
    servicesEyebrow: "What we paint",
    servicesTitle: ["Color that works", "hard for your space."],
    servicesIntro: "From one room to a complete exterior, we bring the same steady attention to every surface.",
    services: [
      ["Interior painting", "Walls, ceilings, trim, doors, and whole-home refreshes with careful prep and clean lines."],
      ["Exterior painting", "Durable finishes for siding, trim, doors, and outbuildings—chosen for Idaho weather."],
      ["Homes & businesses", "Reliable interior and exterior painting for residential, rental, and light commercial properties."],
    ],
    galleryEyebrow: "The finish",
    galleryTitle: ["Work that feels", "like home."],
    galleryIntro: "Project photography is coming soon. For now, these scenes show the kind of careful, clean transformations we create.",
    gallery: [["Exterior character", "Weather-ready finish"], ["Careful coverage", "Prep to final coat"], ["Interior refresh", "Clean, bright spaces"]],
    ownerAlt: "Junior Cosio, owner of JC Pro Painting, seated on horseback in a white cowboy hat",
    owner: "Owner",
    family: "Family",
    run: "run",
    aboutEyebrow: "Our story",
    aboutTitle: ["Built on hard work.", "Kept by our word."],
    aboutLead: "JC Pro Painting is a family business led by Junior Cosio and his brother. Immigrants from Mexico, they built their company around a simple belief: work hard, treat people right, and let the quality of the finish speak for itself.",
    aboutBody: "That means showing up, communicating clearly, protecting your space, and pricing the work fairly. It is personal to us—because our name is on every job.",
    reputationEyebrow: "Our reputation",
    reputationTitle: ["Good work travels", "by word of mouth."],
    reputationIntro: "Verified customer stories will join this page with our project portfolio. Until then, here is the standard behind every JC Pro job.",
    reviews: [
      ["“A clear quote, honest guidance, and no surprises along the way.”", "Our communication promise"],
      ["“Careful in the details and respectful of the home around the work.”", "Our craftsmanship promise"],
      ["“A clean finish at a fair price—exactly what we would want ourselves.”", "Our value promise"],
    ],
    areaEyebrow: "Where we work",
    areaTitle: ["Nampa at heart.", "Treasure Valley wide."],
    areaBody: "Based in Nampa and serving homes and businesses across the entire Treasure Valley.",
    askAddress: "Ask about your address",
    mccall: "McCall projects by arrangement · about 120 road miles",
    everywhere: "& everywhere between",
    quoteEyebrow: "Free estimate",
    quoteTitle: ["Let’s make your", "space feel new."],
    quoteIntro: "Tell us a little about the project. We will follow up to talk through the space, timing, and a fair estimate.",
    quoteSteps: [["Share your project", "A few details are enough to start."], ["We’ll connect", "Junior will follow up personally."], ["Get a clear plan", "Scope, timing, and pricing—up front."]],
    directTitle: "Prefer to reach out directly?",
    form: {
      first: "First name", last: "Last name", phone: "Phone", project: "Project type", select: "Select one", city: "City",
      options: ["Interior painting", "Exterior painting", "Home or business painting", "Other"],
      message: "Tell us about the space", placeholder: "Rooms, surfaces, timing, color ideas…", submit: "Request my free quote",
      status: "Your request will be emailed directly to JC Pro Painting.",
    },
    footer: ["Family-run painting · Nampa, Idaho", "Serving the entire Treasure Valley to McCall"],
    footerNav: ["Services", "About", "Free quote"],
  },
  es: {
    announcement: "¿Listo para renovar su espacio?",
    announcementLink: "Complete el formulario de presupuesto gratis al final.",
    callText: "Llame o mande mensaje",
    emailText: "Correo",
    language: "Elija el idioma del sitio",
    nav: ["Servicios", "Trabajo", "Nosotros"],
    freeQuote: "Presupuesto gratis",
    heroEyebrow: "Negocio familiar · Nampa, Idaho · Inglés y español",
    heroTitle: ["Color renovado.", "Trabajo honesto."],
    heroIntro: "Pintura interior y exterior hecha con cuidado por dos hermanos que creen en el trabajo de calidad a un precio justo.",
    planProject: "Planee su proyecto",
    seeApproach: "Conozca nuestro proceso",
    heroAlt: "Exterior de una casa azul recién pintada",
    imageNote: ["Una mejor primera impresión", "comienza desde la calle."],
    scroll: "Deslice para transformar",
    promises: ["Presupuestos claros y justos", "Preparación cuidadosa", "Respeto por su espacio", "Respaldamos nuestro acabado"],
    storyEyebrow: "La manera JC",
    storyTitle: ["De espacio vivido", "a espacio renovado."],
    storyAlt: "Pintor profesional aplicando un acabado limpio en un interior",
    madeNew: "Como nuevo",
    storyCaption: "Todo acabado limpio comienza con el trabajo que no se ve.",
    process: [
      ["Conocemos el espacio", "Escuchamos, revisamos con cuidado y creamos un plan práctico."],
      ["Preparamos bien", "Primero protegemos, resanamos, lijamos y marcamos líneas limpias."],
      ["Terminamos con cuidado", "Cobertura uniforme, detalles precisos y un espacio limpio al entregar."],
    ],
    servicesEyebrow: "Lo que pintamos",
    servicesTitle: ["Color que trabaja", "por su espacio."],
    servicesIntro: "Desde una habitación hasta un exterior completo, damos la misma atención constante a cada superficie.",
    services: [
      ["Pintura de interiores", "Paredes, techos, molduras, puertas y renovaciones completas con preparación cuidadosa y líneas limpias."],
      ["Pintura de exteriores", "Acabados duraderos para revestimientos, molduras, puertas y edificios exteriores, elegidos para el clima de Idaho."],
      ["Casas y negocios", "Pintura interior y exterior confiable para viviendas, propiedades de renta y negocios pequeños."],
    ],
    galleryEyebrow: "El acabado",
    galleryTitle: ["Trabajo que se siente", "como hogar."],
    galleryIntro: "Pronto agregaremos fotos de proyectos. Por ahora, estas escenas muestran el tipo de transformaciones cuidadosas y limpias que realizamos.",
    gallery: [["Carácter exterior", "Acabado para todo clima"], ["Cobertura cuidadosa", "De preparación a capa final"], ["Renovación interior", "Espacios limpios y luminosos"]],
    ownerAlt: "Junior Cosio, propietario de JC Pro Painting, montado a caballo con sombrero vaquero blanco",
    owner: "Propietario",
    family: "Negocio",
    run: "familiar",
    aboutEyebrow: "Nuestra historia",
    aboutTitle: ["Fundado con trabajo duro.", "Sostenido por nuestra palabra."],
    aboutLead: "JC Pro Painting es un negocio familiar dirigido por Junior Cosio y su hermano. Como inmigrantes de México, construyeron su compañía con una creencia sencilla: trabajar duro, tratar bien a la gente y dejar que la calidad del acabado hable por sí sola.",
    aboutBody: "Eso significa llegar a tiempo, comunicarnos claramente, proteger su espacio y cobrar un precio justo. Es algo personal para nosotros, porque nuestro nombre está en cada trabajo.",
    reputationEyebrow: "Nuestra reputación",
    reputationTitle: ["El buen trabajo viaja", "de boca en boca."],
    reputationIntro: "Agregaremos reseñas verificadas junto con nuestro portafolio. Mientras tanto, este es el estándar detrás de cada trabajo de JC Pro.",
    reviews: [
      ["“Un presupuesto claro, orientación honesta y sin sorpresas durante el proyecto.”", "Nuestra promesa de comunicación"],
      ["“Cuidado en los detalles y respeto por el hogar alrededor del trabajo.”", "Nuestra promesa de calidad"],
      ["“Un acabado limpio a precio justo, exactamente lo que quisiéramos para nosotros.”", "Nuestra promesa de valor"],
    ],
    areaEyebrow: "Dónde trabajamos",
    areaTitle: ["Nampa es nuestro hogar.", "Todo el Treasure Valley."],
    areaBody: "Con base en Nampa y servicio para hogares y negocios en todo el Treasure Valley.",
    askAddress: "Pregunte por su dirección",
    mccall: "Proyectos en McCall por acuerdo · aprox. 120 millas por carretera",
    everywhere: "y todos los lugares intermedios",
    quoteEyebrow: "Presupuesto gratis",
    quoteTitle: ["Hagamos que su", "espacio se sienta nuevo."],
    quoteIntro: "Cuéntenos un poco sobre el proyecto. Nos comunicaremos para hablar del espacio, el tiempo y un precio justo.",
    quoteSteps: [["Comparta su proyecto", "Unos pocos detalles son suficientes para comenzar."], ["Nos comunicaremos", "Junior dará seguimiento personalmente."], ["Reciba un plan claro", "Alcance, tiempo y precio desde el principio."]],
    directTitle: "¿Prefiere comunicarse directamente?",
    form: {
      first: "Nombre", last: "Apellido", phone: "Teléfono", project: "Tipo de proyecto", select: "Seleccione uno", city: "Ciudad",
      options: ["Pintura de interiores", "Pintura de exteriores", "Pintura de casa o negocio", "Otro"],
      message: "Cuéntenos sobre el espacio", placeholder: "Habitaciones, superficies, fechas, ideas de color…", submit: "Solicitar mi presupuesto gratis",
      status: "Su solicitud se enviará directamente por correo a JC Pro Painting.",
    },
    footer: ["Pintura familiar · Nampa, Idaho", "Servicio en todo el Treasure Valley hasta McCall"],
    footerNav: ["Servicios", "Nosotros", "Presupuesto gratis"],
  },
} as const;

export default async function Home({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const c = copy[lang];

  return (
    <main lang={lang}>
      <aside className="announcement" aria-label={c.announcement}>
        <div className="announcement-inner">
          <p><strong>{c.announcement}</strong> <a href="#quote">{c.announcementLink}</a></p>
          <div className="top-contact">
            <a href={`tel:${phoneHref}`}>{c.callText}: {phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </aside>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="JC Pro Painting home">
          <img className="brand-logo" src="/jc-pro-logo.jpg" alt="" />
          <span><strong>JC Pro</strong><small>Painting</small></span>
        </a>
        <nav aria-label={lang === "es" ? "Navegación principal" : "Primary navigation"}>
          <a href="#services">{c.nav[0]}</a><a href="#work">{c.nav[1]}</a><a href="#about">{c.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={c.language}>
            <a href="/" aria-current={lang === "en" ? "page" : undefined}>EN</a>
            <a href="?lang=es" aria-current={lang === "es" ? "page" : undefined}>ES</a>
          </div>
          <a className="button button-small" href="#quote">{c.freeQuote}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {c.heroEyebrow}</p>
          <h1>{c.heroTitle[0]}<br /><em>{c.heroTitle[1]}</em></h1>
          <p className="hero-intro">{c.heroIntro}</p>
          <div className="hero-actions">
            <a className="button" href="#quote">{c.planProject} <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#work">{c.seeApproach} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label={c.heroAlt}>
          <div className="paint-swatch swatch-one" /><div className="paint-swatch swatch-two" /><div className="hero-image" />
          <p className="image-note">{c.imageNote[0]}<br />{c.imageNote[1]}</p>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>{c.scroll}</span><i /></div>
      </section>

      <section className="promise-strip" aria-label={lang === "es" ? "Nuestras promesas" : "Our promises"}>
        {c.promises.map((promise, index) => <span className="promise-item" key={promise}><p>{promise}</p>{index < 3 && <i aria-hidden="true">✦</i>}</span>)}
      </section>

      <section className="story section-shell" id="work">
        <div className="story-heading reveal"><p className="eyebrow"><span /> {c.storyEyebrow}</p><h2>{c.storyTitle[0]}<br /><em>{c.storyTitle[1]}</em></h2></div>
        <div className="story-frame reveal">
          <div className="story-image" role="img" aria-label={c.storyAlt} />
          <div className="paint-reveal" aria-hidden="true"><span>{c.madeNew}</span></div>
          <p className="frame-caption">{c.storyCaption}</p>
        </div>
        <div className="process-grid">{c.process.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-intro reveal"><p className="eyebrow light"><span /> {c.servicesEyebrow}</p><h2>{c.servicesTitle[0]}<br />{c.servicesTitle[1]}</h2><p>{c.servicesIntro}</p></div>
        <div className="service-list">{c.services.map((service, index) => <article className="service-card" key={service[0]}><span>0{index + 1}</span><h3>{service[0]}</h3><p>{service[1]}</p><i aria-hidden="true">↗</i></article>)}</div>
      </section>

      <section className="gallery section-shell" aria-labelledby="gallery-title">
        <div className="gallery-heading reveal"><div><p className="eyebrow"><span /> {c.galleryEyebrow}</p><h2 id="gallery-title">{c.galleryTitle[0]}<br /><em>{c.galleryTitle[1]}</em></h2></div><p>{c.galleryIntro}</p></div>
        <div className="gallery-grid">
          <figure className="gallery-large reveal"><div className="gallery-photo exterior" /><figcaption><strong>{c.gallery[0][0]}</strong><span>{c.gallery[0][1]}</span></figcaption></figure>
          <figure className="gallery-tall reveal"><div className="gallery-photo craft" /><figcaption><strong>{c.gallery[1][0]}</strong><span>{c.gallery[1][1]}</span></figcaption></figure>
          <figure className="gallery-wide reveal"><div className="gallery-photo interior" /><figcaption><strong>{c.gallery[2][0]}</strong><span>{c.gallery[2][1]}</span></figcaption></figure>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-portrait reveal"><div className="portrait-placeholder"><img className="portrait-photo" src="/junior-cosio.jpg" alt={c.ownerAlt} /><span className="portrait-label">Junior Cosio<br />{c.owner}</span></div><div className="portrait-stamp"><strong>{c.family}</strong><span>{c.run}</span></div></div>
        <div className="about-copy reveal"><p className="eyebrow"><span /> {c.aboutEyebrow}</p><h2>{c.aboutTitle[0]}<br /><em>{c.aboutTitle[1]}</em></h2><p className="lead">{c.aboutLead}</p><p>{c.aboutBody}</p><div className="signature"><span>Junior Cosio</span><small>{c.owner} · JC Pro Painting</small></div></div>
      </section>

      <section className="reviews section-shell" id="reviews">
        <div className="reviews-heading reveal"><p className="eyebrow light"><span /> {c.reputationEyebrow}</p><h2>{c.reputationTitle[0]}<br /><em>{c.reputationTitle[1]}</em></h2><p>{c.reputationIntro}</p></div>
        <div className="review-values">{c.reviews.map((review) => <article key={review[1]}><span aria-hidden="true">★★★★★</span><blockquote>{review[0]}</blockquote><p>{review[1]}</p></article>)}</div>
      </section>

      <section className="area section-shell" id="area">
        <div className="area-copy reveal">
          <div><p className="eyebrow"><span /> {c.areaEyebrow}</p><h2>{c.areaTitle[0]}<br /><em>{c.areaTitle[1]}</em></h2></div>
          <div className="area-copy-detail"><p>{c.areaBody}</p><a className="text-link" href="#quote">{c.askAddress} <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="area-locations">
          <div className="area-list" aria-label={lang === "es" ? "Comunidades atendidas" : "Communities served"}>{areas.map((area) => <span key={area}>{area}</span>)}<span>{c.everywhere}</span></div>
          <p className="area-range">{c.mccall}</p>
        </div>
      </section>

      <section className="quote section-shell" id="quote">
        <div className="quote-copy reveal">
          <p className="eyebrow light"><span /> {c.quoteEyebrow}</p><h2>{c.quoteTitle[0]}<br />{c.quoteTitle[1].split(" ").slice(0, -1).join(" ")} <em>{c.quoteTitle[1].split(" ").at(-1)}</em></h2><p>{c.quoteIntro}</p>
          {c.quoteSteps.map((step, index) => <div className="quote-note" key={step[0]}><span>0{index + 1}</span><p><strong>{step[0]}</strong><br />{step[1]}</p></div>)}
          <div className="direct-contact"><strong>{c.directTitle}</strong><a href={`tel:${phoneHref}`}>{c.callText}<span>{phoneDisplay}</span></a><a href={`mailto:${email}`}>{c.emailText}<span>{email}</span></a></div>
        </div>

        <form className="quote-form" action={quoteEndpoint} method="post">
          <input type="hidden" name="_subject" value="New JC Pro Painting quote request" />
          <input type="hidden" name="_template" value="table" />
          <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="field-row"><label>{c.form.first}<input name="firstName" autoComplete="given-name" required /></label><label>{c.form.last}<input name="lastName" autoComplete="family-name" required /></label></div>
          <label>{c.emailText}<input name="email" type="email" autoComplete="email" required /></label>
          <label>{c.form.phone}<input name="phone" type="tel" autoComplete="tel" required /></label>
          <div className="field-row"><label>{c.form.project}<select name="projectType" defaultValue="" required><option value="" disabled>{c.form.select}</option>{c.form.options.map((option) => <option key={option}>{option}</option>)}</select></label><label>{c.form.city}<input name="city" autoComplete="address-level2" required /></label></div>
          <label>{c.form.message}<textarea name="message" rows={4} placeholder={c.form.placeholder} required /></label>
          <button className="button submit-button" type="submit">{c.form.submit} <span aria-hidden="true">↗</span></button>
          <p className="form-status" role="status">{c.form.status}</p>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="JC Pro Painting home"><img className="brand-logo" src="/jc-pro-logo.jpg" alt="" /><span><strong>JC Pro</strong><small>Painting</small></span></a>
        <p>{c.footer[0]}<br />{c.footer[1]}<br /><a href={`tel:${phoneHref}`}>{phoneDisplay}</a> · <a href={`mailto:${email}`}>{email}</a></p>
        <div><a href="#services">{c.footerNav[0]}</a><a href="#about">{c.footerNav[1]}</a><a href="#quote">{c.footerNav[2]}</a></div>
        <p className="copyright">© {new Date().getFullYear()} JC Pro Painting</p>
      </footer>
    </main>
  );
}
