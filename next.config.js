/**
 * @type {import('next').NextConfig}
 */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let nextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
};

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  nextConfig = {
    output: 'export',
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}`,
    images: {
      unoptimized: true,
    },
  };
}

module.exports = nextConfig;
