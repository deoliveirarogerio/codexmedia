import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Tilt } from "@/components/fx/Tilt";
import { Reveal } from "@/components/fx/Reveal";

export function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-gradient-to-b from-white to-codex-50/60 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="heading mt-5 text-codex-900">
            Tudo o que sua marca precisa para <span className="text-codex-600">crescer no digital</span>
          </h2>
          <p className="mt-5 text-lg text-media-600">
            Quatro frentes integradas, um único time. Estratégia, tecnologia e mídia trabalhando juntas pelo mesmo resultado: mais clientes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 90}>
                <Tilt max={7} className="group rounded-3xl">
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-codex-100 bg-white shadow-xl shadow-codex-900/5 transition-shadow hover:shadow-2xl hover:shadow-codex-900/15 [transform-style:preserve-3d]"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-codex-950/90 via-codex-900/40 to-codex-800/10" />
                      <div
                        className="absolute bottom-5 left-6 flex items-center gap-3 text-white"
                        style={{ transform: "translateZ(50px)" }}
                      >
                        <span className="grid size-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/25">
                          <Icon className="size-6" />
                        </span>
                        <span className="text-2xl font-extrabold">{s.shortTitle}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7" style={{ transform: "translateZ(30px)" }}>
                      <p className="text-media-600">{s.summary}</p>
                      <ul className="mt-5 grid gap-2 text-sm font-medium text-codex-900">
                        {s.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-codex-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-codex-700">
                        Saiba mais <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
