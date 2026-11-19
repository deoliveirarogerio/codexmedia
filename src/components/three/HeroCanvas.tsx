"use client";

import dynamic from "next/dynamic";

/** Carrega a cena WebGL apenas no cliente, sem bloquear o primeiro render (bom para Core Web Vitals). */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="size-56 animate-pulse rounded-full bg-gradient-to-br from-codex-500/40 to-codex-900/10 blur-2xl" />
    </div>
  ),
});

export function HeroCanvas() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <HeroScene />
    </div>
  );
}
