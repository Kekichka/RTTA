/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ігнорувати помилки TypeScript при збірці (ВАЖЛИВО)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ігнорувати помилки ESLint при збірці
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;