import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['admin.primeidea.in', 'https://admin.primeidea.in', 'https://admin.primeidea.in/wp-content/uploads', 'secure.gravatar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://admin.primeidea.in/',
        port: '',
        pathname: 'https://admin.primeidea.in/**',
      }
    ]
  }
}
export default nextConfig
