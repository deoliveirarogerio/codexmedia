import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from "./SocialIcons";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-codex-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Agência de marketing digital e desenvolvimento web. Unimos estratégia, tecnologia e dados para fazer sua marca ser
            encontrada no Google, recomendada pelas IAs e escolhida pelos clientes.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.instagram, label: "Instagram", Icon: Instagram },
              { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: whatsappLink(), label: "WhatsApp", Icon: MessageCircle },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-codex-300 hover:text-white">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest text-media-300 uppercase">Serviços</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}`} className="text-white/70 transition hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest text-media-300 uppercase">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: {site.whatsappDisplay}</a></li>
            <li><Link href="/#contato" className="hover:text-white">Solicitar diagnóstico</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Codex Media®. Todos os direitos reservados.</p>
          <p>Feito com Next.js + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
