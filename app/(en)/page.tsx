import { HomePage } from "../home";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("en");

export default function EnglishHome() {
  return <HomePage lang="en" />;
}
