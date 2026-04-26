/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hanya ini yang benar-benar kita butuhkan untuk koneksi HP
  allowedDevOrigins: ['192.168.1.4:3000', '192.168.1.4'],
  
  // Jika kamu pakai gambar eksternal
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

module.exports = nextConfig;