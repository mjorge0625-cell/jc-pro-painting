import { HomePage } from "../../home";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata("es");

export default function SpanishHome() {
  return <HomePage lang="es" />;
}
