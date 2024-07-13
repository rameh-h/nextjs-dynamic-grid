/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "cloudflare-ipfs.com",
            port: "",
            pathname: "/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/**"
        }]
    }
};

export default nextConfig;
