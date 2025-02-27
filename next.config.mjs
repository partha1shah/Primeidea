import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['verification.primeidea.in', 'https://verification.primeidea.in', 'login.primeidea.in', 'https://login.primeidea.in', 'admin.primeidea.in', 'https://admin.primeidea.in', 'https://admin.primeidea.in/wp-content/uploads', 'secure.gravatar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://admin.primeidea.in/',
        port: '',
        pathname: 'https://admin.primeidea.in/**',
      }, {
        protocol: 'https',
        hostname: 'https://login.primeidea.in',
        port: '',
        pathname: 'https://login.primeidea.in/**',
      }, {
        protocol: 'https',
        hostname: 'https://verification.primeidea.in',
        port: '',
        pathname: 'https://verification.primeidea.in/**',
      }
    ]
  }
}
export default nextConfig
