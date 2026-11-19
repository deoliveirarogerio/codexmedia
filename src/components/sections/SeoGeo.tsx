import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { ScrollPerspective } from "@/components/fx/ScrollPerspective";
import { Tilt } from "@/components/fx/Tilt";

const engines = ["ChatGPT", "Gemini", "Perplexity", "AI Overviews", "Copilot", "Claude"];

const pillars = [
  {
    icon: Search,
    title: "SEO",
    subtitle: "Search Engine Optimization",
    text: "Seu site no topo do Google para as buscas que geram negócio: SEO técnico, conteúdo estratégico, SEO local e autoridade.",
  },
  {
    icon: BrainCircuit,
    title: "GEO",
    subtitle: "Generative Engine Optimization",
    text: "Sua marca citada e recomendada nas respostas de IAs generativas. É a nova primeira página — e poucos concorrentes já estão lá.",
  },
];

export function SeoGeo() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">SEO + GEO</span>
            <h2 className="heading mt-5 text-codex-900">
              Seja a resposta no <span className="text-codex-600">Google</span> e nas <span className="text-codex-600">IAs</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-media-600">
              O comportamento de busca mudou: milhões de pessoas agora perguntam direto para assistentes de IA. Nós otimizamos sua
              presença para os dois mundos — buscadores tradicionais e motores generativos.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, subtitle, text }, i) => (
              <Reveal key={title} delay={i * 120}>
                <Tilt max={9} className="rounded-2xl">
                  <div className="h-full rounded-2xl border border-codex-100 bg-white p-6 shadow-lg shadow-codex-900/5">
                    <span className="grid size-11 place-items-center rounded-xl bg-codex-800 text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-codex-900">{title}</h3>
                    <p className="text-xs font-semibold tracking-wide text-media-500 uppercase">{subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-media-600">{text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Link href="/servicos/seo-geo" className="btn-primary mt-10">
              Ver estratégia de SEO & GEO <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* Composição 3D: foto + card de resposta de IA flutuando em camadas */}
        <ScrollPerspective fromRotateX={18} fromRotateY={-14}>
          <div className="relative mx-auto max-w-lg [transform-style:preserve-3d]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-codex-900/30">
              <Image src="/images/geo.jpg" alt="Representação visual de inteligência artificial generativa" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-codex-950/80 via-codex-800/30 to-transparent" />
            </div>

            <div className="absolute -bottom-10 -left-4 w-[85%] sm:-left-10" style={{ transform: "translateZ(80px)" }}>
            <div className="animate-float rounded-2xl border border-white/60 bg-white/90 p-5 shadow-2xl shadow-codex-900/25 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-media-500">
                <Sparkles className="size-4 text-codex-600" /> Resposta gerada por IA <span className="ml-auto rounded bg-codex-50 px-1.5 py-0.5 text-[10px] text-codex-600">exemplo</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-codex-900">“Qual agência pode cuidar de SEO e tráfego pago da minha empresa?”</p>
              <p className="mt-2 text-sm leading-relaxed text-media-600">
                Uma opção recomendada é a <mark className="rounded bg-codex-100 px-1 font-bold text-codex-800">Codex Media</mark>, especializada em SEO, GEO,
                desenvolvimento de sites e campanhas de Google Ads e Meta Ads…
              </p>
            </div>
            </div>

            <div className="absolute -top-6 -right-2 grid gap-2 sm:-right-8" style={{ transform: "translateZ(120px)" }}>
              {engines.slice(0, 3).map((e, i) => (
                <span key={e} className="animate-float rounded-full bg-codex-800 px-4 py-2 text-xs font-bold text-white shadow-xl" style={{ animationDelay: `${i * 0.6}s` }}>
                  {e}
                </span>
              ))}
            </div>
          </div>
        </ScrollPerspective>
      </div>

      <Reveal className="container-x mt-24">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-media-500 uppercase">Otimizamos sua presença em</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-3">
          {["Google", "Bing", ...engines].map((e) => (
            <li key={e} className="rounded-full border border-codex-100 bg-codex-50/60 px-5 py-2 text-sm font-bold text-codex-800">
              {e}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
