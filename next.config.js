/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["cdn.simpleicons.org", "cdn.jsdelivr.net" , "http://localhost:3000", "yassinebenazouz.vercel.app"], dangerouslyAllowSVG: true }, compiler: { styledComponents: true }
}

module.exports = nextConfig
