/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
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
