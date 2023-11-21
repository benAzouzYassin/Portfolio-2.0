/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["cdn.simpleicons.org", "cdn.jsdelivr.net"], dangerouslyAllowSVG: true }, compiler: { styledComponents: true }
}

module.exports = nextConfig
