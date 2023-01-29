/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images-static.nykaa.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig


