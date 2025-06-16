/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Ini akan mengabaikan error saat `next build`
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
