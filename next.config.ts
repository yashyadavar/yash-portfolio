/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js server-side image optimization
  },
  // This tells Next.js your site lives inside a sub-folder on GitHub
  basePath: '/yash-portfolio',
  assetPrefix: '/yash-portfolio',
};

export default nextConfig;