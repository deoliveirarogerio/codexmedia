import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCanvas } from "@/components/three/HeroCanvas";

const chips = ["SEO", "GEO", "Sites", "Landing Pages", "Google Ads", "Meta Ads"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-codex-950 pt-28 pb-16 text-white sm:pt-32 lg:min-h-[100dvh] lg:pb-24">
      {/* camadas de fundo: grade em perspectiva + brilhos */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-codex-600/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-media-500/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 [perspective:600px]">
          <div className="grid-bg absolute inset-0 origin-bottom [transform:rotateX(60deg)] [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>
      </div>

      <div className="container-x grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10">
          <span className="eyebrow-dark">
            <Sparkles className="size-3.5" /> Marketing digital & desenvolvimento web
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Marketing que é <span className="text-gradient">encontrado.</span>
            <br />
            Código que <span className="text-gradient">converte.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Posicionamos sua marca no Google e nas respostas das IAs, criamos sites e landing pages de alta performance e
            escalamos suas vendas com Google Ads e Meta Ads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contato" className="btn-light py-3.5">
              Quero um diagnóstico grátis <ArrowRight className="size-4" />
            </Link>
            <Link href="/#servicos" className="btn-ghost py-3.5">
              Conhecer serviços
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Especialidades">
            {chips.map((c) => (
              <li key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative -mx-4 h-[22rem] sm:h-[28rem] lg:mx-0 lg:h-[38rem]">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}
