import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/fx/Reveal";
import { site, whatsappLink } from "@/lib/site";
import type { ContactInput } from "@/lib/contact-schema";

export function Contact({ defaultInterest }: { defaultInterest?: ContactInput["interest"] }) {
  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden bg-codex-950 py-24 text-white">
      <div aria-hidden="true" className="absolute -right-40 -bottom-40 h-[36rem] w-[36rem] rounded-full bg-codex-600/30 blur-[150px]" />
      <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow-dark">Diagnóstico gratuito</span>
          <h2 className="heading mt-5">
            Vamos fazer sua marca <span className="text-gradient">crescer de verdade?</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Conte um pouco sobre seu negócio. Faremos uma análise do seu site, da sua presença no Google e nas IAs e das suas
            campanhas — e apresentaremos um plano de ação, sem compromisso.
          </p>
          <div className="mt-10 grid gap-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-codex-300/50">
              <MessageCircle className="size-6 text-codex-300" />
              <span>
                <span className="block text-xs font-semibold text-white/50 uppercase">WhatsApp</span>
                <span className="font-bold">{site.whatsappDisplay}</span>
                <span className="block text-sm text-white/60">Fale agora com um especialista</span>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <ContactForm defaultInterest={defaultInterest} />
        </Reveal>
      </div>
    </section>
  );
}
