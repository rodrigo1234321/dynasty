import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/dynasty" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;