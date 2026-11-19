import Image from "next/image";
import { Compass, LineChart, Rocket, Wrench } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { Tilt } from "@/components/fx/Tilt";

const steps = [
  { icon: Compass, title: "Diagnóstico", text: "Analisamos seu site, concorrentes, buscas e contas de anúncio para encontrar as maiores oportunidades." },
  { icon: Wrench, title: "Estratégia", text: "Montamos um plano com metas claras, canais prioritários, cronograma e indicadores de sucesso." },
  { icon: Rocket, title: "Execução", text: "Desenvolvimento, conteúdo, SEO e campanhas no ar — com qualidade técnica e velocidade." },
  { icon: LineChart, title: "Otimização", text: "Medimos tudo, testamos sem parar e reinvestimos no que traz mais retorno. Relatórios mensais transparentes." },
];

const reasons = [
  "Time que entende de código e de marketing",
  "Estratégia integrada: orgânico + pago",
  "Relatórios claros, sem métricas de vaidade",
  "Atendimento próximo e consultivo",
];

export function Process() {
  return (
    <section id="processo" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Como trabalhamos</span>
          <h2 className="heading mt-5 text-codex-900">
            Um método simples, <span className="text-codex-600">focado em resultado</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100}>
              <Tilt max={12} className="rounded-3xl">
                <div className="relative h-full overflow-hidden rounded-3xl border border-codex-100 bg-white p-7 shadow-lg shadow-codex-900/5">
                  <span className="absolute -top-4 -right-1 text-8xl font-black text-codex-50 select-none" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-codex-600 to-codex-900 text-white shadow-lg shadow-codex-700/30">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-extrabold text-codex-900">
                    <span className="text-media-400">0{i + 1}.</span> {title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-media-600">{text}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </ol>

        <div className="mt-24 grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-codex-800 to-codex-950 p-8 text-white sm:p-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow-dark">Por que a Codex Media</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Uma agência que fala a língua do marketing e do código</h2>
            <ul className="mt-8 grid gap-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 font-semibold">
                  <span className="grid size-7 place-items-center rounded-full bg-white/15 text-sm">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <Tilt max={8} className="rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
                <Image src="/images/team.jpg" alt="Equipe reunida colaborando em um projeto digital" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-codex-950/60 to-transparent" />
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
