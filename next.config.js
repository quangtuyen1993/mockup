module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        swcMinify: true,
        experimental: {
            appDir: true,
            allowMiddlewareResponseBody: true
        },
        reactStrictMode: true
    };
    return nextConfig;
};
