const words = [
  "SEO Técnico",
  "GEO para IAs",
  "Google AI Overviews",
  "Sites em Next.js",
  "Landing Pages",
  "Google Ads",
  "Meta Ads",
  "Core Web Vitals",
  "Conteúdo Estratégico",
  "Performance Max",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-codex-100 bg-white py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-extrabold tracking-[0.2em] whitespace-nowrap text-codex-800 uppercase">
            {w}
            <span className="size-1.5 rounded-full bg-media-400" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white" />
    </div>
  );
}
