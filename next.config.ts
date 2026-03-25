import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: { unoptimized: true }, // Required for static export with next/image
  allowedDevOrigins: ['192.168.1.7', 'localhost', '*'],
};

export default nextConfig;
