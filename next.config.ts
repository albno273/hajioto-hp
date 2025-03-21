import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  eslint: {
    dirs: ["src"],
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;
