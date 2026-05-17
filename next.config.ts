import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/claude-starts',
  assetPrefix: '/claude-starts/',
  images: { unoptimized: true },
};

export default nextConfig;
