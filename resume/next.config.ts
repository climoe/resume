import type { NextConfig } from "next";

import path from 'path';


const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    useTypeScriptCli: true,
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    root: path.join(__dirname, '..'),
  },
};

export default nextConfig;
