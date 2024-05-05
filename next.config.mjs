/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/home',
            destination: '/',
            permanent: false, // Or true for permanent
          },
        ];
      },
};

export default nextConfig;
