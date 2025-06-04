import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(ts|tsx|js|jsx|mdx)?$/],
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
    /* config options here */
    images: {
        domains: ['avatars.githubusercontent.com', 'cdn.yoursite.com'],
    },
};

export default nextConfig;
