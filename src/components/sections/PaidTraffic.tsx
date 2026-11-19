import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { getService } from "@/lib/services";
import { Reveal } from "@/components/fx/Reveal";
import { Tilt } from "@/components/fx/Tilt";
import { ScrollPerspective } from "@/components/fx/ScrollPerspective";

const cards = [
  { slug: "google-ads", badge: "Demanda ativa", lead: "Apareça para quem já está procurando o que você vende." },
  { slug: "meta-ads", badge: "Geração de demanda", lead: "Desperte desejo em quem ainda não conhece sua marca." },
] as const;

export function PaidTraffic() {
  return (
    <section id="trafego" className="scroll-mt-20 bg-codex-50/60 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Tráfego pago</span>
          <h2 className="heading mt-5 text-codex-900">
            Google Ads + Meta Ads: <span className="text-codex-600">cada real investido com propósito</span>
          </h2>
          <p className="mt-5 text-lg text-media-600">
            Campanhas guiadas por dados, com rastreamento de ponta a ponta e otimização contínua para reduzir o custo por cliente e escalar o que funciona.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cards.map((c, i) => {
            const s = getService(c.slug)!;
            const Icon = s.icon;
            return (
              <ScrollPerspective key={c.slug} fromRotateX={14} fromRotateY={i === 0 ? 16 : -16} fromScale={0.92}>
                <Tilt max={6} className="group rounded-[2rem]">
                  <article className="relative h-full overflow-hidden rounded-[2rem] bg-codex-900 text-white shadow-2xl shadow-codex-900/30">
                    <div className="relative h-64">
                      <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-70 transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-codex-900 via-codex-900/50 to-transparent" />
                      <span className="absolute top-5 left-6 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wider uppercase backdrop-blur">{c.badge}</span>
                    </div>
                    <div className="relative -mt-14 p-8">
                      <span className="grid size-14 place-items-center rounded-2xl bg-white text-codex-800 shadow-xl">
                        <Icon className="size-7" />
                      </span>
                      <h3 className="mt-5 text-3xl font-extrabold">{s.shortTitle}</h3>
                      <p className="mt-2 text-white/70">{c.lead}</p>
                      <ul className="mt-6 grid gap-3 text-sm">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <Check className="mt-0.5 size-4 shrink-0 text-codex-300" /> {h}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/servicos/${s.slug}`} className="mt-8 inline-flex items-center gap-1.5 font-bold text-codex-200 hover:text-white">
                        Ver como trabalhamos <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                </Tilt>
              </ScrollPerspective>
            );
          })}
        </div>
      </div>
    </section>
  );
}
