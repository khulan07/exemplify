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
    images: {
      domains: ["utfs.io", 'cdn.discordapp.com'],
      // Add any other domains you need here
    },
};

export default nextConfig;
