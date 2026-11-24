import { RootShell } from "../root-shell";

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es">{children}</RootShell>;
}
