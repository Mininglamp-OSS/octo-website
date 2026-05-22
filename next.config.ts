import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static: generates an out/ directory of HTML/CSS/JS
  trailingSlash: true,
};

export default nextConfig;
