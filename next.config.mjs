/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content2.mcqstudy.com',
      },
      {
        protocol: 'https',
        hostname: 'server3.mcqstudy.com',
      },
    ],
  },
  compiler: {
    reactRemoveProperties: true, // Optional: Ensures unused properties are removed
  },
};

export default nextConfig;
