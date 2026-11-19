import { Plus } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/fx/Reveal";

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: "O que é GEO e por que minha empresa precisa disso?",
    a: "GEO (Generative Engine Optimization) é a otimização da sua marca para ser citada em respostas de IAs como ChatGPT, Gemini, Perplexity e Google AI Overviews. Cada vez mais pessoas pesquisam direto nessas ferramentas — se sua marca não aparece ali, o concorrente aparece.",
  },
  {
    q: "Vocês atendem empresas de qualquer porte?",
    a: "Sim. Atendemos desde negócios locais até empresas com operação nacional, adaptando o escopo e o investimento à fase de cada cliente.",
  },
  {
    q: "Preciso contratar todos os serviços juntos?",
    a: "Não. Você pode começar por um serviço (por exemplo, uma landing page com Google Ads) e evoluir. Mas a integração entre SEO, site e tráfego pago costuma gerar os melhores resultados.",
  },
  {
    q: "Como acompanho os resultados?",
    a: "Você recebe relatórios mensais com indicadores de negócio — leads, custo por lead, vendas, posições e tráfego — além de reuniões de alinhamento.",
  },
  {
    q: "A verba de anúncios está inclusa na gestão?",
    a: "Não. A verba de mídia é paga diretamente ao Google e à Meta, na sua conta. Cobramos apenas a gestão estratégica e operacional das campanhas.",
  },
];

export function Faq({ items = homeFaq, title = "Perguntas frequentes" }: { items?: FaqItem[]; title?: string }) {
  return (
    <section id="faq" className="scroll-mt-20 bg-codex-50/60 py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="container-x max-w-4xl">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading mt-5 text-codex-900">{title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-4">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-codex-100 bg-white p-6 shadow-sm transition open:shadow-lg open:shadow-codex-900/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-codex-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="size-5 shrink-0 text-codex-600 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 leading-relaxed text-media-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
