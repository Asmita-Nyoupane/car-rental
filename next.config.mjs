/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.lophoabroad.com",
      },
    ],
  },
};

export default nextConfig;
