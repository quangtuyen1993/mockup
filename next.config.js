module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        swcMinify: true,
        experimental: {
            appDir: true,
        },
        webpack5: true,
        webpack: (config) => {
            config.resolve.fallback = { fs: false };
            return config;
        },
        reactStrictMode: true,
    }
    return nextConfig
}