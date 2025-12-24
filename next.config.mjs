/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // SWC minification (faster than Terser)
    swcMinify: true,

    // Optimize production builds
    productionBrowserSourceMaps: false,

    // Enable React strict mode for better development experience
    reactStrictMode: true,

    // Optimize fonts
    optimizeFonts: true,

    // Compress responses
    compress: true,

    // Power optimizations
    poweredByHeader: false,
};

export default nextConfig;
