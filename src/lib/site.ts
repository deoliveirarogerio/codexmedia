export const site = {
  name: "Codex Media",
  legalName: "Codex Media",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codexmedia.com.br",
  description:
    "Agência de marketing digital e desenvolvimento web: SEO, GEO (otimização para IAs generativas), sites, landing pages, Google Ads e Meta Ads com foco em resultado.",
  email: "contato@codexmedia.com.br",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5511999999999",
  instagram: "https://instagram.com/codexmedia",
  linkedin: "https://linkedin.com/company/codexmedia",
} as const;

export const whatsappLink = (message = "Olá! Vim pelo site da Codex Media e quero conversar sobre um projeto.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Serviços", href: "/#servicos" },
  { label: "SEO & GEO", href: "/servicos/seo-geo" },
  { label: "Sites", href: "/servicos/sites-landing-pages" },
  { label: "Tráfego Pago", href: "/#trafego" },
  { label: "Processo", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
] as const;
