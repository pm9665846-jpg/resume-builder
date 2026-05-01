/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mysql2', 'bcryptjs', 'puppeteer', 'puppeteer-core'],
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
