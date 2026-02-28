import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["jiti", "cloudflared"],
  devIndicators: false,
};

export default nextConfig;
