import type { Metadata } from "next";

// Business facts in one place, so the page text, the page <head> and the data search engines read cannot drift apart.
// Only facts Junior has confirmed belong here: no hours, prices, street address, ratings or reviews until he gives them.
export const siteUrl = process.env.SITE_URL || "https://jcpropaintingco.com";
export const businessName = "JC Pro Painting";
export const phoneDisplay = "208-410-0547";
export const phoneHref = "+12084100547";
export const email = "jcpropaintllc@gmail.com";
export const areas = ["Nampa", "Boise", "Meridian", "Caldwell", "Eagle", "Kuna", "Star", "Middleton", "Garden City", "Emmett", "Marsing", "Homedale"];
// Change only when the page content really changes; search engines distrust a date that moves on every build.
const lastUpdated = "2026-11-24";

export type Lang = "en" | "es";
export const paths: Record<Lang, string> = { en: "/", es: "/es" };

const head = {
  en: {
    title: "House Painters in Nampa, ID | JC Pro Painting",
    description: "Locally owned interior and exterior painters in Nampa, serving the whole Treasure Valley in English and Spanish. Call or text 208-410-0547 for a free quote.",
    locale: "en_US",
  },
  es: {
    title: "Pintores de casas en Nampa, Idaho | JC Pro Painting",
    description: "Pintores locales de interiores y exteriores en Nampa y todo el Treasure Valley. Atención en español. Llame o escriba al 208-410-0547: presupuesto gratis.",
    locale: "es_US",
  },
} as const;

export function pageMetadata(lang: Lang): Metadata {
  const { title, description, locale } = head[lang];
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: paths[lang], languages: { en: paths.en, es: paths.es, "x-default": paths.en } },
    openGraph: {
      type: "website", siteName: businessName, title, description, url: paths[lang], locale,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: head[lang].title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
    icons: { icon: "/favicon.svg" },
  };
}

// schema.org "HousePainter" is the specific type for this trade. A service-area business lists its town, not a street.
export function businessData(serviceNames: readonly string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${siteUrl}/#business`,
    name: businessName,
    url: `${siteUrl}/`,
    telephone: phoneHref,
    email,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/jc-pro-logo.jpg`,
    address: { "@type": "PostalAddress", addressLocality: "Nampa", addressRegion: "ID", addressCountry: "US" },
    areaServed: areas.map((area) => ({ "@type": "City", name: `${area}, Idaho` })),
    knowsLanguage: ["en", "es"],
    founder: { "@type": "Person", name: "Junior Cosio" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting services",
      itemListElement: serviceNames.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}

export const sitemapEntries = (["en", "es"] as const).map((lang) => ({
  url: `${siteUrl}${paths[lang]}`,
  lastModified: lastUpdated,
}));
