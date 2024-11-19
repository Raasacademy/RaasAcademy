/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home-two',
                permanent: true, // Use true for a 301 redirect (permanent), false for a 302 redirect (temporary)
            },
        ];
    },
};

export default nextConfig;
