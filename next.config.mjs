/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com'
      }
    ]
  },
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
