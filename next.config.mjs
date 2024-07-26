/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true
    },
    env: {
      NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    },
  };
  
  export default nextConfig;