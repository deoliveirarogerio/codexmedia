import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";
import type { ContactInput } from "@/lib/contact-schema";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/fx/Reveal";
import { Tilt } from "@/components/fx/Tilt";
import { ScrollPerspective } from "@/components/fx/ScrollPerspective";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

type Props = { params: Promise<{ slug: string }> };

const interestBySlug: Record<string, ContactInput["interest"]> = {
  "seo-geo": "SEO & GEO",
  "sites-landing-pages": "Site / Landing page",
  "google-ads": "Google Ads",
  "meta-ads": "Meta Ads",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.shortTitle,
    description: s.summary,
    alternates: { canonical: `/servicos/${s.slug}` },
    openGraph: { title: `${s.shortTitle} | Codex Media`, description: s.summary, images: [{ url: s.image, alt: s.imageAlt }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = s.icon;
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.shortTitle,
          description: s.summary,
          serviceType: s.shortTitle,
          url: `${site.url}/servicos/${s.slug}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: "BR",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: site.url },
            { "@type": "ListItem", position: 2, name: s.shortTitle, item: `${site.url}/servicos/${s.slug}` },
          ],
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-codex-950 pt-32 pb-20 text-white">
        <div aria-hidden="true" className="absolute -top-32 -left-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-codex-600/30 blur-[140px]" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <nav aria-label="Trilha" className="text-xs font-semibold text-white/50">
              <Link href="/" className="hover:text-white">Início</Link> <span className="mx-1.5">/</span>
              <Link href="/#servicos" className="hover:text-white">Serviços</Link> <span className="mx-1.5">/</span>
              <span className="text-white/80">{s.shortTitle}</span>
            </nav>
            <span className="eyebrow-dark mt-6">
              <Icon className="size-3.5" /> {s.shortTitle}
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-black tracking-tight text-balance sm:text-5xl">{s.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{s.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contato" className="btn-light py-3.5">
                Solicitar proposta <ArrowRight className="size-4" />
              </Link>
              <Link href="#entregas" className="btn-ghost py-3.5">O que está incluso</Link>
            </div>
          </div>
          <ScrollPerspective fromRotateX={0} fromRotateY={-18} fromScale={0.95}>
            <Tilt max={10} className="rounded-[2rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 95vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-codex-950/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-xs text-xl font-extrabold">{s.tagline}</p>
              </div>
            </Tilt>
          </ScrollPerspective>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="border-b border-codex-100 bg-white py-12">
        <ul className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm font-semibold text-codex-900">
              <CheckCircle2 className="size-5 shrink-0 text-codex-600" /> {h}
            </li>
          ))}
        </ul>
      </section>

      {/* ENTREGAS */}
      <section id="entregas" className="scroll-mt-20 py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">O que entregamos</span>
            <h2 className="heading mt-5 text-codex-900">Um trabalho completo, de ponta a ponta</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <Tilt max={9} className="rounded-3xl">
                  <div className="h-full rounded-3xl border border-codex-100 bg-white p-7 shadow-lg shadow-codex-900/5">
                    <span className="text-sm font-black text-media-400">0{i + 1}</span>
                    <h3 className="mt-3 text-xl font-extrabold text-codex-900">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-media-600">{d.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-[2rem] bg-gradient-to-br from-codex-800 to-codex-950 p-8 text-white sm:p-12">
            <h2 className="text-2xl font-extrabold sm:text-3xl">O que você pode esperar</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {s.outcomes.map((o) => (
                <li key={o} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-bold">{o}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq items={s.faq} title={`Dúvidas sobre ${s.shortTitle}`} />

      {/* OUTROS SERVIÇOS */}
      <section className="py-24">
        <div className="container-x">
          <h2 className="text-2xl font-extrabold text-codex-900">Potencialize com outros serviços</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Tilt key={o.slug} max={8} className="group rounded-3xl">
                  <Link href={`/servicos/${o.slug}`} className="flex h-full flex-col rounded-3xl border border-codex-100 bg-white p-7 shadow-lg shadow-codex-900/5">
                    <OIcon className="size-7 text-codex-600" />
                    <h3 className="mt-4 text-lg font-extrabold text-codex-900">{o.shortTitle}</h3>
                    <p className="mt-2 flex-1 text-sm text-media-600">{o.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-codex-700">
                      Conhecer <ArrowUpRight className="size-4" />
                    </span>
                  </Link>
                </Tilt>
              );
            })}
          </div>
        </div>
      </section>

      <Contact defaultInterest={interestBySlug[s.slug]} />
    </>
  );
}
