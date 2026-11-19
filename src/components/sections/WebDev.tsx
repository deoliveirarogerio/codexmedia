import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, LayoutTemplate, MonitorSmartphone, PlugZap } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { Tilt } from "@/components/fx/Tilt";

const features = [
  { icon: Gauge, title: "Ultra rápidos", text: "Next.js, imagens otimizadas e nota alta no PageSpeed." },
  { icon: MonitorSmartphone, title: "Mobile first", text: "Experiência impecável em qualquer tela." },
  { icon: LayoutTemplate, title: "Design de marca", text: "Layout exclusivo, nada de template genérico." },
  { icon: PlugZap, title: "Integrados", text: "CRM, WhatsApp, GA4, Tag Manager e pixels." },
];

/** Janela de navegador estilizada usada nas camadas 3D. */
function BrowserFrame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/20 bg-codex-950 shadow-2xl shadow-codex-950/50">
      <div className="flex items-center gap-1.5 bg-codex-900 px-3 py-2">
        <span className="size-2 rounded-full bg-white/30" />
        <span className="size-2 rounded-full bg-white/30" />
        <span className="size-2 rounded-full bg-white/30" />
        <span className="ml-3 truncate rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/60">{label}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 35vw, 80vw" className="object-cover" />
      </div>
    </div>
  );
}

export function WebDev() {
  return (
    <section className="relative overflow-hidden bg-codex-950 py-24 text-white">
      <div aria-hidden="true" className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-codex-600/25 blur-[140px]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Pilha isométrica de telas: perspectiva 3D real com camadas em profundidade */}
        <Reveal className="order-2 lg:order-1">
          <Tilt max={12} glare={false}>
            <div className="relative mx-auto aspect-square max-w-xl [perspective:1600px]">
              <div className="absolute inset-0 grid place-items-center [transform-style:preserve-3d] [transform:rotateX(52deg)_rotateZ(-38deg)]">
                <div className="absolute w-[78%] [transform:translate3d(10%,10%,0)] opacity-60">
                  <BrowserFrame src="/images/strategy.jpg" alt="Planejamento de estratégia de marketing" label="codexmedia.com.br/estrategia" />
                </div>
                <div className="absolute w-[78%] [transform:translate3d(0,0,110px)] opacity-85">
                  <BrowserFrame src="/images/landing.jpg" alt="Landing page com gráficos de conversão" label="seusite.com.br/oferta" />
                </div>
                <div className="absolute w-[78%] [transform:translate3d(-10%,-10%,220px)]">
                  <BrowserFrame src="/images/web.jpg" alt="Código-fonte de site em desenvolvimento" label="seusite.com.br" />
                </div>
              </div>
              <div className="absolute right-[6%] bottom-[10%] animate-float rounded-2xl bg-white p-4 text-codex-900 shadow-2xl">
                <p className="text-[10px] font-bold tracking-widest text-media-500 uppercase">PageSpeed</p>
                <p className="text-3xl font-black text-codex-700">98<span className="text-base text-media-500">/100</span></p>
              </div>
            </div>
          </Tilt>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow-dark">Sites & Landing Pages</span>
            <h2 className="heading mt-5">
              Sites que <span className="text-gradient">carregam rápido</span> e vendem ainda mais rápido
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Do institucional à landing page de campanha: desenvolvemos com código moderno, design exclusivo e SEO nativo. Cada
              página é pensada para transformar visitante em cliente.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-codex-400/50 hover:bg-white/[0.07]">
                  <Icon className="size-6 shrink-0 text-codex-300" />
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-white/60">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link href="/servicos/sites-landing-pages" className="btn-light mt-10">
              Quero um site de alta performance <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
