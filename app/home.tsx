import { areas, businessData, email, paths, phoneDisplay, phoneHref, type Lang } from "./seo";

const quoteEndpoint = process.env.QUOTE_FORM_ENDPOINT || `https://formsubmit.co/${email}`;
const areaList = `${areas.slice(0, -1).join(", ")}`;

const copy = {
  en: {
    announcement: "Ready for a fresh start?",
    announcementLink: "Fill out the free quote form at the bottom.",
    callText: "Call or text",
    emailText: "Email",
    language: "Choose website language",
    nav: ["Services", "Work", "About"],
    freeQuote: "Get a free quote",
    heroEyebrow: "Locally owned house painters · Nampa, Idaho · English & Spanish",
    heroTitle: ["Fresh color.", "Honest craft."],
    heroIntro: "Thoughtful interior and exterior painting, done with care by two brothers who believe quality work should come at a fair price.",
    planProject: "Plan your project",
    seeApproach: "See our approach",
    heroAlt: "Two-story home with freshly painted blue-gray siding and white trim",
    imageNote: ["A better first impression", "starts at the curb."],
    scroll: "Scroll to transform",
    promises: ["Clear, fair estimates", "Careful preparation", "Respect for your space", "A finish we stand behind"],
    storyEyebrow: "The JC way",
    storyTitle: ["From lived-in", "to loved again."],
    storyAlt: "Painter in white coveralls rolling a fresh coat onto an interior wall",
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
    galleryIntro: "Photos from our own projects are on the way. Until then, these scenes show the kind of careful, clean finish we aim for on every job.",
    galleryAlt: ["Home exterior with crisp painted siding and trim", "Painter cutting a clean edge along interior trim", "Bright interior wall with a smooth, even finish"],
    gallery: [["Exterior character", "Weather-ready finish"], ["Careful coverage", "Prep to final coat"], ["Interior refresh", "Clean, bright spaces"]],
    ownerAlt: "Junior Cosio, owner of JC Pro Painting, seated on horseback in a white cowboy hat",
    owner: "Owner",
    family: "Idaho",
    run: "local",
    aboutEyebrow: "Our story",
    aboutTitle: ["Idaho local.", "Kept by our word."],
    aboutLead: "JC Pro Painting is a locally owned family business in Nampa, Idaho, led by Junior Cosio and his brother. They built their company around a simple belief: work hard, treat people right, and let the quality of the finish speak for itself.",
    aboutBody: "That means showing up, communicating clearly, protecting your space, and pricing the work fairly. It is personal to us—our name is on every job, and our customers are our neighbors here in the Treasure Valley.",
    reputationEyebrow: "Our standard",
    reputationTitle: ["Good work travels", "by word of mouth."],
    reputationIntro: "We would rather earn a review than write one. Until our customers’ own words are posted here, this is the standard behind every JC Pro job.",
    standards: [
      ["Communication", "A clear quote, honest guidance, and no surprises along the way."],
      ["Craftsmanship", "Careful in the details and respectful of the home around the work."],
      ["Value", "A clean finish at a fair price—exactly what we would want ourselves."],
    ],
    areaEyebrow: "Where we work",
    areaTitle: ["Nampa at heart.", "Treasure Valley wide."],
    areaBody: "Based in Nampa and serving homes and businesses across the entire Treasure Valley.",
    askAddress: "Ask about your address",
    mccall: "McCall projects by arrangement · about 120 road miles",
    everywhere: "& everywhere between",
    faqEyebrow: "Good to know",
    faqTitle: ["Questions,", "answered."],
    faq: [
      ["What areas do you serve?", `We are based in Nampa and paint homes and businesses across the Treasure Valley: ${areaList}, and Homedale. Projects in McCall are available by arrangement.`],
      ["Are estimates free?", "Yes. Send the form below, or call or text 208-410-0547. Junior follows up personally to talk through the space, the timing, and a fair price before any work starts."],
      ["Do you paint both interiors and exteriors?", "Yes. Inside, we paint walls, ceilings, trim, and doors, from a single room to a whole home. Outside, we paint siding, trim, doors, and outbuildings with finishes chosen for Idaho weather. We work on homes, rentals, and light commercial properties."],
      ["Do you speak Spanish?", "Yes. You can call, text, or get your estimate in English or Spanish, whichever is more comfortable for you."],
    ],
    mobileCall: "Call or text",
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
    footer: ["Locally owned, family-run painting · Nampa, Idaho", "Serving the entire Treasure Valley to McCall"],
    footerNav: ["Services", "About", "Free quote"],
  },
  es: {
    announcement: "¿Listo para renovar su espacio?",
    announcementLink: "Llene el formulario de presupuesto gratis al final.",
    callText: "Llámenos o mándenos mensaje",
    emailText: "Correo",
    language: "Elija el idioma del sitio",
    nav: ["Servicios", "Trabajo", "Nosotros"],
    freeQuote: "Presupuesto gratis",
    heroEyebrow: "Pintores locales de casas · Nampa, Idaho · Inglés y español",
    heroTitle: ["Color renovado.", "Trabajo honesto."],
    heroIntro: "Pintura de interiores y exteriores hecha con cuidado por dos hermanos que creen en el trabajo de calidad a un precio justo.",
    planProject: "Cuéntenos de su proyecto",
    seeApproach: "Vea cómo trabajamos",
    heroAlt: "Casa de dos pisos con revestimiento gris azulado y molduras blancas recién pintados",
    imageNote: ["Una mejor primera impresión", "comienza desde la calle."],
    scroll: "Siga bajando para ver el cambio",
    promises: ["Presupuestos claros y justos", "Preparación cuidadosa", "Respeto por su espacio", "Un acabado que respaldamos"],
    storyEyebrow: "Así trabaja JC",
    storyTitle: ["De un espacio desgastado", "a uno renovado."],
    storyAlt: "Pintor con overol blanco aplicando una capa nueva con rodillo en una pared interior",
    madeNew: "Como nuevo",
    storyCaption: "Un acabado limpio empieza con el trabajo que no se ve.",
    process: [
      ["Revisamos el espacio", "Escuchamos, revisamos con cuidado y preparamos un plan práctico."],
      ["Preparamos bien", "Primero protegemos, resanamos, lijamos y dejamos bordes limpios."],
      ["Terminamos con cuidado", "Cobertura uniforme, detalles precisos y todo limpio al entregar."],
    ],
    servicesEyebrow: "Lo que pintamos",
    servicesTitle: ["Color pensado", "para su espacio."],
    servicesIntro: "Desde un cuarto hasta un exterior completo, damos la misma atención a cada superficie.",
    services: [
      ["Pintura de interiores", "Paredes, techos, molduras, puertas y renovaciones completas con preparación cuidadosa y líneas limpias."],
      ["Pintura de exteriores", "Acabados duraderos para revestimientos, molduras, puertas y construcciones auxiliares, elegidos para el clima de Idaho."],
      ["Casas y negocios", "Pintura interior y exterior confiable para viviendas, propiedades de renta y negocios pequeños."],
    ],
    galleryEyebrow: "El acabado",
    galleryTitle: ["Trabajo que se siente", "como hogar."],
    galleryIntro: "Pronto agregaremos fotos de nuestros propios proyectos. Mientras tanto, estas escenas muestran el acabado cuidadoso y limpio que buscamos en cada trabajo.",
    galleryAlt: ["Exterior de una casa con revestimiento y molduras recién pintados", "Pintor delineando un borde limpio junto a una moldura interior", "Pared interior luminosa con un acabado liso y uniforme"],
    gallery: [["Carácter exterior", "Acabado para todo clima"], ["Cobertura cuidadosa", "De preparación a capa final"], ["Renovación interior", "Espacios limpios y luminosos"]],
    ownerAlt: "Junior Cosio, propietario de JC Pro Painting, montado a caballo con sombrero vaquero blanco",
    owner: "Propietario",
    family: "Local",
    run: "de Idaho",
    aboutEyebrow: "Nuestra historia",
    aboutTitle: ["Locales de Idaho.", "Respaldado por nuestra palabra."],
    aboutLead: "JC Pro Painting es un negocio familiar y local de Nampa, Idaho, dirigido por Junior Cosio y su hermano. Construyeron su compañía con una creencia sencilla: trabajar duro, tratar bien a la gente y dejar que la calidad del acabado hable por sí sola.",
    aboutBody: "Eso significa llegar a tiempo, comunicarnos claramente, proteger su espacio y cobrar un precio justo. Es algo personal para nosotros: nuestro nombre está en cada trabajo y nuestros clientes son nuestros vecinos aquí en el Treasure Valley.",
    reputationEyebrow: "Nuestro estándar",
    reputationTitle: ["El buen trabajo viaja", "de boca en boca."],
    reputationIntro: "Preferimos ganarnos una reseña que escribirla. Mientras publicamos aquí las palabras de nuestros clientes, este es el estándar detrás de cada trabajo de JC Pro.",
    standards: [
      ["Comunicación", "Un presupuesto claro, orientación honesta y sin sorpresas durante el proyecto."],
      ["Calidad", "Cuidado en los detalles y respeto por el hogar alrededor del trabajo."],
      ["Valor", "Un acabado limpio a precio justo, exactamente lo que quisiéramos para nosotros."],
    ],
    areaEyebrow: "Dónde trabajamos",
    areaTitle: ["Nampa es nuestro hogar.", "Todo el Treasure Valley."],
    areaBody: "Con base en Nampa y servicio para hogares y negocios en todo el Treasure Valley.",
    askAddress: "Consulte si llegamos a su dirección",
    mccall: "Proyectos en McCall con previa coordinación · aprox. 120 millas por carretera",
    everywhere: "y todos los lugares intermedios",
    faqEyebrow: "Bueno saber",
    faqTitle: ["Preguntas", "frecuentes."],
    faq: [
      ["¿Qué zonas atienden?", `Tenemos nuestra base en Nampa y pintamos casas y negocios en todo el Treasure Valley: ${areaList} y Homedale. Los proyectos en McCall se coordinan con anticipación.`],
      ["¿El presupuesto es gratis?", "Sí. Envíe el formulario de abajo, o llame o mande un mensaje al 208-410-0547. Junior le da seguimiento personalmente para hablar del espacio, los tiempos y un precio justo antes de comenzar cualquier trabajo."],
      ["¿Pintan interiores y exteriores?", "Sí. Por dentro pintamos paredes, techos, molduras y puertas, desde un solo cuarto hasta la casa completa. Por fuera pintamos revestimientos, molduras, puertas y construcciones auxiliares con acabados elegidos para el clima de Idaho. Trabajamos en casas, propiedades de renta y negocios pequeños."],
      ["¿Hablan español?", "Sí. Puede llamar, mandar mensaje o recibir su presupuesto en español o en inglés, como le resulte más cómodo."],
    ],
    mobileCall: "Llamar o mensaje",
    quoteEyebrow: "Presupuesto gratis",
    quoteTitle: ["Hagamos que su", "espacio luzca como nuevo."],
    quoteIntro: "Cuéntenos un poco sobre su proyecto. Nos pondremos en contacto para hablar del espacio, los tiempos y darle un precio justo.",
    quoteSteps: [["Cuéntenos de su proyecto", "Con unos cuantos detalles podemos comenzar."], ["Nos comunicaremos", "Junior dará seguimiento personalmente."], ["Reciba un plan claro", "Trabajo, tiempos y precio claros desde el principio."]],
    directTitle: "¿Prefiere comunicarse directamente?",
    form: {
      first: "Nombre", last: "Apellido", phone: "Teléfono", project: "Tipo de proyecto", select: "Seleccione uno", city: "Ciudad",
      options: ["Pintura de interiores", "Pintura de exteriores", "Pintura para casa o negocio", "Otro"],
      message: "Cuéntenos sobre el espacio", placeholder: "Habitaciones, superficies, fechas, ideas de color…", submit: "Solicitar mi presupuesto gratis",
      status: "Su solicitud llegará directamente al correo de JC Pro Painting.",
    },
    footer: ["Negocio familiar y local de pintura · Nampa, Idaho", "Servicio en todo el Treasure Valley hasta McCall"],
    footerNav: ["Servicios", "Nosotros", "Presupuesto gratis"],
  },
} as const;

// One photo, three downloads: the browser picks the smallest WebP that fits and falls back to the JPEG.
function Photo({ name, widths, fallback, alt, width, height, sizes, load = "lazy", className }: {
  name: string; widths: number[]; fallback: string; alt: string; width: number; height: number; sizes: string; load?: "first" | "eager" | "lazy"; className?: string;
}) {
  // "first" is the big picture people see on arrival; it must never wait. Everything below the fold waits until needed.
  const loading = load === "first" ? { fetchPriority: "high" as const } : load === "lazy" ? { loading: "lazy" as const, decoding: "async" as const } : {};
  return (
    <picture>
      <source type="image/webp" srcSet={widths.map((w) => `/${name}-${w}.webp ${w}w`).join(", ")} sizes={sizes} />
      <img className={className} src={fallback} alt={alt} width={width} height={height} {...loading} />
    </picture>
  );
}

function Brand({ className = "brand", load = "eager" }: { className?: string; load?: "eager" | "lazy" }) {
  return (
    <a className={className} href="#top">
      <Photo name="jc-pro-logo" widths={[164]} fallback="/jc-pro-logo.jpg" alt="" width={164} height={164} sizes="82px" className="brand-logo" load={load} />
      <span><strong>JC Pro</strong> <small>Painting</small></span>
    </a>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData(c.services.map((service) => service[0]))).replace(/</g, "\\u003c") }} />
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
        <Brand />
        <nav aria-label={lang === "es" ? "Navegación principal" : "Primary navigation"}>
          <a href="#services">{c.nav[0]}</a><a href="#work">{c.nav[1]}</a><a href="#about">{c.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={c.language}>
            <a href={paths.en} hrefLang="en" lang="en" aria-label="EN (English)" aria-current={lang === "en" ? "page" : undefined}>EN</a>
            <a href={paths.es} hrefLang="es" lang="es" aria-label="ES (Español)" aria-current={lang === "es" ? "page" : undefined}>ES</a>
          </div>
          <a className="button button-small" href="#quote">{c.freeQuote}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            <span className="eyebrow"><span /> {c.heroEyebrow}</span>
            <span className="hero-title">{c.heroTitle[0]}<br /><em>{c.heroTitle[1]}</em></span>
          </h1>
          <p className="hero-intro">{c.heroIntro}</p>
          <div className="hero-actions">
            <a className="button" href="#quote">{c.planProject} <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#work">{c.seeApproach} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="paint-swatch swatch-one" /><div className="paint-swatch swatch-two" />
          <div className="hero-image"><Photo name="exterior" widths={[800, 1200, 1600]} fallback="/exterior-web.jpg" alt={c.heroAlt} width={1600} height={1066} sizes="(max-width: 900px) 100vw, 54vw" load="first" /></div>
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
          <div className="story-image"><Photo name="interior" widths={[640, 1066]} fallback="/interior-web.jpg" alt={c.storyAlt} width={1066} height={1600} sizes="(max-width: 1240px) 100vw, 1240px" /></div>
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
          <figure className="gallery-large reveal"><div className="gallery-photo"><Photo name="exterior" widths={[800, 1200, 1600]} fallback="/exterior-web.jpg" alt={c.galleryAlt[0]} width={1600} height={1066} sizes="(max-width: 620px) 100vw, 56vw" /></div><figcaption><strong>{c.gallery[0][0]}</strong><span>{c.gallery[0][1]}</span></figcaption></figure>
          <figure className="gallery-tall reveal"><div className="gallery-photo craft"><Photo name="craft" widths={[640, 1066]} fallback="/craft-web.jpg" alt={c.galleryAlt[1]} width={1066} height={1600} sizes="(max-width: 620px) 100vw, 34vw" /></div><figcaption><strong>{c.gallery[1][0]}</strong><span>{c.gallery[1][1]}</span></figcaption></figure>
          <figure className="gallery-wide reveal"><div className="gallery-photo interior"><Photo name="interior" widths={[640, 1066]} fallback="/interior-web.jpg" alt={c.galleryAlt[2]} width={1066} height={1600} sizes="(max-width: 620px) 100vw, 34vw" /></div><figcaption><strong>{c.gallery[2][0]}</strong><span>{c.gallery[2][1]}</span></figcaption></figure>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-portrait reveal"><div className="portrait-placeholder"><Photo name="junior-cosio" widths={[480, 847]} fallback="/junior-cosio.jpg" alt={c.ownerAlt} width={847} height={900} sizes="(max-width: 900px) 100vw, 45vw" className="portrait-photo" /><span className="portrait-label">Junior Cosio<br />{c.owner}</span></div><div className="portrait-stamp"><strong>{c.family}</strong><span>{c.run}</span></div></div>
        <div className="about-copy reveal"><p className="eyebrow"><span /> {c.aboutEyebrow}</p><h2>{c.aboutTitle[0]}<br /><em>{c.aboutTitle[1]}</em></h2><p className="lead">{c.aboutLead}</p><p>{c.aboutBody}</p><div className="signature"><span>Junior Cosio</span><small>{c.owner} · JC Pro Painting</small></div></div>
      </section>

      <section className="reviews section-shell" id="reviews">
        <div className="reviews-heading reveal"><p className="eyebrow light"><span /> {c.reputationEyebrow}</p><h2>{c.reputationTitle[0]}<br /><em>{c.reputationTitle[1]}</em></h2><p>{c.reputationIntro}</p></div>
        <div className="review-values">{c.standards.map((standard, index) => <article key={standard[0]}><span aria-hidden="true">0{index + 1}</span><h3>{standard[0]}</h3><p>{standard[1]}</p></article>)}</div>
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

      <section className="faq section-shell" id="faq">
        <div className="faq-heading reveal"><p className="eyebrow"><span /> {c.faqEyebrow}</p><h2>{c.faqTitle[0]}<br /><em>{c.faqTitle[1]}</em></h2></div>
        <div className="faq-list">{c.faq.map((item) => <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
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
        <Brand className="brand footer-brand" load="lazy" />
        <p>{c.footer[0]}<br />{c.footer[1]}<br /><a href={`tel:${phoneHref}`}>{phoneDisplay}</a> · <a href={`mailto:${email}`}>{email}</a></p>
        <div><a href="#services">{c.footerNav[0]}</a><a href="#about">{c.footerNav[1]}</a><a href="#quote">{c.footerNav[2]}</a></div>
        <p className="copyright">© {new Date().getFullYear()} JC Pro Painting</p>
      </footer>

      <div className="mobile-actions" role="group" aria-label={lang === "es" ? "Contacto rápido" : "Quick contact"}>
        <a href={`tel:${phoneHref}`}>{c.mobileCall}</a>
        <a href="#quote">{c.freeQuote}</a>
      </div>
    </main>
  );
}
