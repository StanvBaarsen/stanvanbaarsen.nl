/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
