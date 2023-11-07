// Next.js uses its own image optimization, which doesn’t play nicely with GitHub Pages by default. We change this to the akamai option which works properly. You can read more about this here
// We need to define an asset prefix because GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with _ which Next.js uses

/**
 * @type {import('next').NextConfig}
 */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
