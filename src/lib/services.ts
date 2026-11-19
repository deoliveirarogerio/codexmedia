import type { LucideIcon } from "lucide-react";
import { BrainCircuit, MonitorSmartphone, Megaphone, Search, Target } from "lucide-react";

export type ServiceSlug = "seo-geo" | "sites-landing-pages" | "google-ads" | "meta-ads";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  highlights: string[];
  deliverables: { title: string; text: string }[];
  outcomes: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "seo-geo",
    title: "SEO & GEO: apareça no Google e nas respostas das IAs",
    shortTitle: "SEO & GEO",
    tagline: "Seja encontrado por quem busca e citado por quem responde.",
    summary:
      "Unimos SEO técnico e de conteúdo com GEO (Generative Engine Optimization) para posicionar sua marca no Google, no Google AI Overviews, no ChatGPT, no Gemini e no Perplexity.",
    icon: Search,
    image: "/images/seo.jpg",
    imageAlt: "Profissional analisando métricas de tráfego orgânico em um notebook",
    highlights: [
      "Auditoria técnica completa (Core Web Vitals, indexação, rastreio)",
      "Estratégia de palavras-chave e clusters de conteúdo",
      "Dados estruturados (Schema.org) para resultados ricos",
      "Otimização de entidades e autoridade para IAs generativas",
    ],
    deliverables: [
      {
        title: "SEO técnico",
        text: "Corrigimos velocidade, arquitetura, sitemap, canonicals, rastreio e indexação para o Google entender e priorizar seu site.",
      },
      {
        title: "Conteúdo que ranqueia",
        text: "Pautas guiadas por intenção de busca, com copy escrita para converter e estrutura pensada para featured snippets.",
      },
      {
        title: "GEO — otimização para IAs",
        text: "Estruturamos conteúdo, entidades, citações e dados para que ChatGPT, Gemini, Perplexity e AI Overviews recomendem sua marca.",
      },
      {
        title: "SEO local",
        text: "Perfil da Empresa no Google otimizado, avaliações, NAP consistente e páginas locais para dominar o mapa da sua região.",
      },
      {
        title: "Link building e autoridade",
        text: "Menções e backlinks relevantes em portais do seu nicho para aumentar a confiança do Google e das IAs na sua marca.",
      },
      {
        title: "Relatórios claros",
        text: "Painel mensal com posições, tráfego, leads orgânicos e presença em respostas de IA — sem jargão.",
      },
    ],
    outcomes: ["Mais tráfego qualificado", "Leads sem custo por clique", "Marca citada por IAs", "Autoridade de longo prazo"],
    faq: [
      {
        q: "O que é GEO e qual a diferença para o SEO?",
        a: "SEO otimiza seu site para os mecanismos de busca tradicionais. GEO (Generative Engine Optimization) otimiza sua marca e seu conteúdo para serem citados em respostas geradas por IAs como ChatGPT, Gemini, Perplexity e Google AI Overviews. Os dois se complementam.",
      },
      {
        q: "Em quanto tempo o SEO traz resultado?",
        a: "Ajustes técnicos costumam gerar ganhos em semanas. Resultados consistentes de conteúdo e autoridade aparecem, em geral, entre 3 e 6 meses, dependendo da concorrência do nicho.",
      },
    ],
  },
  {
    slug: "sites-landing-pages",
    title: "Sites e landing pages rápidos, bonitos e feitos para converter",
    shortTitle: "Sites & Landing Pages",
    tagline: "Código de verdade, design de marca e performance de topo.",
    summary:
      "Desenvolvemos sites institucionais, landing pages e e-commerces com tecnologia moderna (Next.js, React, TypeScript), SEO nativo e foco absoluto em conversão.",
    icon: MonitorSmartphone,
    image: "/images/web.jpg",
    imageAlt: "Tela de notebook exibindo código de um site em desenvolvimento",
    highlights: [
      "Design exclusivo alinhado à sua marca",
      "Nota alta no PageSpeed e Core Web Vitals",
      "SEO e dados estruturados desde a primeira linha",
      "Integrações com CRM, WhatsApp, pixels e analytics",
    ],
    deliverables: [
      {
        title: "Sites institucionais",
        text: "Presença digital profissional que transmite credibilidade e transforma visitantes em contatos.",
      },
      {
        title: "Landing pages de alta conversão",
        text: "Páginas focadas em uma única ação, com copy persuasiva, prova social e testes A/B para campanhas de tráfego pago.",
      },
      {
        title: "Performance extrema",
        text: "Carregamento em menos de 2 segundos, imagens otimizadas e código limpo — velocidade que o Google e o usuário recompensam.",
      },
      {
        title: "Responsivo de verdade",
        text: "Experiência pensada primeiro para o celular, onde está a maior parte do seu público.",
      },
      {
        title: "Painel e autonomia",
        text: "Gerenciamento de conteúdo simples para você atualizar textos, imagens e posts sem depender de ninguém.",
      },
      {
        title: "Rastreamento completo",
        text: "GA4, Google Tag Manager, pixel da Meta e eventos de conversão configurados para medir cada lead.",
      },
    ],
    outcomes: ["Mais conversões", "Menor custo por lead", "Marca mais forte", "Base sólida para SEO"],
    faq: [
      {
        q: "Quanto tempo leva para desenvolver um site?",
        a: "Landing pages ficam prontas em média de 7 a 15 dias. Sites institucionais levam de 3 a 6 semanas, conforme o escopo.",
      },
      {
        q: "Vocês cuidam de hospedagem e domínio?",
        a: "Sim. Indicamos e configuramos a melhor infraestrutura para o seu projeto, com SSL, CDN e backups.",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads: esteja no topo exatamente quando o cliente procura",
    shortTitle: "Google Ads",
    tagline: "Capture a demanda que já existe, com custo controlado.",
    summary:
      "Campanhas de Pesquisa, Performance Max, Display, YouTube e Shopping gerenciadas com estratégia, dados e otimização contínua para maximizar o retorno sobre o investimento.",
    icon: Target,
    image: "/images/analytics.jpg",
    imageAlt: "Painel de analytics com gráficos de desempenho de campanhas",
    highlights: [
      "Campanhas de Pesquisa, PMax, Display e YouTube",
      "Pesquisa de palavras-chave e negativação estratégica",
      "Conversões offline e integração com CRM",
      "Otimização semanal de lances, anúncios e públicos",
    ],
    deliverables: [
      {
        title: "Estrutura orientada a lucro",
        text: "Contas organizadas por intenção e margem, para investir mais onde o retorno é maior.",
      },
      {
        title: "Anúncios que convertem",
        text: "Copy testada, extensões completas e páginas de destino alinhadas à busca do usuário.",
      },
      {
        title: "Mensuração precisa",
        text: "Tags, conversões avançadas e importação de vendas para o algoritmo aprender com o que realmente gera receita.",
      },
      {
        title: "Gestão contínua",
        text: "Acompanhamento ativo, testes A/B e relatórios com CPA, ROAS e próximos passos.",
      },
    ],
    outcomes: ["Leads em poucos dias", "CPA previsível", "ROAS crescente", "Escala com segurança"],
    faq: [
      {
        q: "Qual o investimento mínimo em Google Ads?",
        a: "Depende do nicho e da região. Fazemos um estudo de palavras-chave e custo por clique antes de recomendar uma verba inicial realista.",
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads: gere demanda no Instagram e no Facebook",
    shortTitle: "Meta Ads",
    tagline: "Criativos que param o scroll e campanhas que vendem.",
    summary:
      "Estratégias de tráfego pago no Instagram, Facebook, Messenger e WhatsApp com funis completos, criativos estratégicos e públicos inteligentes.",
    icon: Megaphone,
    image: "/images/meta-ads.jpg",
    imageAlt: "Smartphone exibindo aplicativos de redes sociais",
    highlights: [
      "Funis de topo, meio e fundo de funil",
      "Campanhas para WhatsApp, leads e vendas",
      "Direção criativa e testes de anúncios",
      "API de Conversões e pixel configurados",
    ],
    deliverables: [
      {
        title: "Estratégia de funil",
        text: "Atraímos, aquecemos e convertemos com campanhas específicas para cada etapa da jornada.",
      },
      {
        title: "Criativos estratégicos",
        text: "Roteiros, ganchos e variações de anúncios em imagem, carrossel e vídeo pensados para performance.",
      },
      {
        title: "Públicos inteligentes",
        text: "Remarketing, lookalikes e segmentações construídas a partir dos seus melhores clientes.",
      },
      {
        title: "Rastreamento server-side",
        text: "Pixel + API de Conversões para dados confiáveis mesmo com bloqueios de cookies.",
      },
    ],
    outcomes: ["Mais mensagens no WhatsApp", "Audiência qualificada", "Vendas recorrentes", "Marca lembrada"],
    faq: [
      {
        q: "Vocês produzem os criativos?",
        a: "Sim. Fazemos a direção criativa, copy e peças estáticas. Para vídeos, roteirizamos e orientamos a gravação ou produzimos conforme o pacote.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const geoIcon = BrainCircuit;
