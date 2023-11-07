
// Next.js uses its own image optimization, which doesn’t play nicely with GitHub Pages by default. We change this to the akamai option which works properly. You can read more about this here
// We need to define an asset prefix because GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with _ which Next.js uses

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  export default nextConfig;
