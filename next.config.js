/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: 'src/lib/utils/loader.ts',
    domains: ['ui-avatars.com'],
  },
};

module.exports = nextConfig
