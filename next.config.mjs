/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mysql2', 'bcryptjs'],
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
