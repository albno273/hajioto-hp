import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    dirs: ['src'],
  },

  compiler: {
    styledComponents: true,
  },

  pageExtensions: ['page.tsx', 'page.ts'],

  images: {
    domains: ['images.microcms-assets.io'],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

export default nextConfig;
