/**
 * @type {import('next').NextConfig}
 */

const isExport = process.env.BUILD_EXPORT || false;
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let nextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
};

if (isExport && isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  nextConfig = {
    output: "export",
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}`,
    images: {
      unoptimized: true,
    },
  };
}

module.exports = nextConfig;
