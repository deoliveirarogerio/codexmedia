import type { NextConfig } from "next";

// Subcaminho onde o site é servido. No GitHub Pages (https://usuario.github.io/codexmedia)
// é "/codexmedia"; com domínio próprio ou localmente fica vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Gera HTML/CSS/JS estáticos em `out/` (necessário para o GitHub Pages)
  output: "export",
  basePath,
  trailingSlash: true,
  // Sem servidor não há otimização de imagens: o loader só prefixa o basePath
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
  turbopack: { root: __dirname },
};

export default nextConfig;
