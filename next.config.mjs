/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./backend/static",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
