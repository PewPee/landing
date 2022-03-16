/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
