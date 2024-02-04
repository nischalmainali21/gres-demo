/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
// ["cdn.dummyjson.com"]
