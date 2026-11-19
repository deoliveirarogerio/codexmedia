# Codex Media — site institucional

Site da agência Codex Media (SEO & GEO, sites e landing pages, Google Ads e Meta Ads).

## Stack
- **Next.js 16** (App Router, SSG) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 4** (tokens da marca em `src/app/globals.css`)
- **Three.js / React Three Fiber / drei**: cena 3D do hero
- **Zod**: validação do formulário (cliente e servidor)
- **lucide-react**: ícones

## Rodando
```bash
npm install
cp .env.example .env.local   # ajuste URL, WhatsApp e webhook
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
```

## Publicação (GitHub Pages)
O site é exportado como HTML estático (`output: "export"`) e publicado pelo workflow `.github/workflows/deploy.yml` a cada push na `main`.
- Em **Settings → Pages**, a fonte deve ser **GitHub Actions**.
- WhatsApp e webhook podem ser definidos em **Settings → Secrets and variables → Actions → Variables** (`NEXT_PUBLIC_WHATSAPP`, `NEXT_PUBLIC_CONTACT_WEBHOOK_URL`).
- Com domínio próprio, remova `NEXT_PUBLIC_BASE_PATH` do workflow e ajuste `NEXT_PUBLIC_SITE_URL`.

## Estrutura
```
src/
  app/
    page.tsx                  home
    servicos/[slug]/page.tsx  páginas de serviço (SSG)
    sitemap.ts, robots.ts     SEO + liberação de crawlers de IA (GEO)
  components/
    sections/                 seções da home
    three/                    cena WebGL (carregada só no cliente)
    fx/                       Tilt 3D, ScrollPerspective, Reveal
  lib/
    site.ts                   dados da empresa (e-mail, redes, WhatsApp)
    services.ts               conteúdo dos serviços (fonte única)
```

## Identidade visual
- Roxo da marca `#341761` (`codex-800`), escala `codex-50…950`
- Cinza da marca `#7a7a7e` (`media-500`)
- Tipografia **Montserrat** (400–900), mesma família geométrica do logotipo

## SEO / GEO já incluídos
Metadata e Open Graph por página, dados estruturados JSON-LD (ProfessionalService, Service, FAQPage, BreadcrumbList),
sitemap, robots liberando GPTBot/PerplexityBot/ClaudeBot/Google-Extended, HTML estático e imagens otimizadas (AVIF/WebP).

## Animações 3D
- **Hero:** cena WebGL com núcleo líquido, anéis orbitais e sólidos flutuantes que seguem o mouse (parallax de câmera).
- **Cards:** inclinação 3D em perspectiva com reflexo de luz (`Tilt`).
- **Rolagem:** imagens que se endireitam no espaço conforme o scroll (`ScrollPerspective`) e uma pilha isométrica de telas.
- Tudo respeita `prefers-reduced-motion`.

## Pendências antes de publicar
- Substituir no `.env.local`/`src/lib/site.ts`: WhatsApp real, e-mail, Instagram, LinkedIn e domínio.
- Configurar `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` (n8n, Make, Zapier ou CRM; precisa aceitar CORS). Sem ele, o formulário abre o WhatsApp com os dados preenchidos.
- As fotos são do Unsplash (licença livre). Troque por fotos reais da equipe e de cases quando houver.
- O card "Resposta gerada por IA" e a nota "PageSpeed 98" são ilustrações, não métricas reais.
