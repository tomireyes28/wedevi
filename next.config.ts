/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esta es la clave para Hostinger
  images: {
    unoptimized: true, // Requerido para exportación estática
  },
};

export default nextConfig;