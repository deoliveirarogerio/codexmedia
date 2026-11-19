// Loader para export estático: serve a imagem original de /public, prefixando o basePath.
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src}?w=${width}`;
}
