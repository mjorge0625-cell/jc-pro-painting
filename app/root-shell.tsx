import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Lang } from "./seo";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });

// Each language has its own layout so <html lang> is right for screen readers and translation tools.
export function RootShell({ lang, children }: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  return (
    <html lang={lang}>
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
