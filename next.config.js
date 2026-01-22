/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export to Cloudflare Pages
  trailingSlash: true, // Recommended for static exports
  images: {
    unoptimized: true, // Required for static export - disables Next.js image optimization
  },
  // Since we're using static export, we don't need rewrites or redirects here
  // These would be handled by Cloudflare Pages configuration
};

module.exports = nextConfig;