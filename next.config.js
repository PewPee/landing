/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '_next',
  // async redirects() {
  //   return [
  //     {
  //       source: '/en',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  experimental: {
    outputStandalone: true
  },
}

module.exports = nextConfig
