import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { tsconfigPath: "tsconfig.vercel.json" },
  // Spanish used to live at /?lang=es. Forward old links so nobody lands on the English page by mistake.
  async redirects() {
    return [{ source: "/", has: [{ type: "query", key: "lang", value: "es" }], destination: "/es", permanent: true }];
  },
};

export default nextConfig;
