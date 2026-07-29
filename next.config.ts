import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'dynasty';
}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: repo ? `/${repo}` : '',
  },
};

export default nextConfig;