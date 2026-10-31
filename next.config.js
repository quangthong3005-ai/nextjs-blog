const isProd = process.env.NODE_ENV === 'production';

// The site is served at https://quangthong3005-ai.github.io/nextjs-blog
// so production needs the repo name as the base path.
const basePath = isProd ? '/nextjs-blog' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // build static HTML into the "out" folder
  basePath,
  images: {
    unoptimized: true, // image optimization needs a server
  },
};

module.exports = nextConfig;
