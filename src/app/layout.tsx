import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

// Montserrat: geométrica, mesma família visual do logotipo Codex Media
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Codex Media | Agência de SEO, GEO, Sites, Google Ads e Meta Ads",
    template: "%s | Codex Media",
  },
  description: site.description,
  keywords: ["agência de marketing digital", "SEO", "GEO", "otimização para IA", "criação de sites", "landing page", "Google Ads", "Meta Ads", "tráfego pago"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Codex Media | Marketing que é encontrado. Código que converte.",
    description: site.description,
    images: [{ url: "/images/team.jpg", width: 1400, height: 933, alt: "Codex Media — marketing digital e desenvolvimento web" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#24104a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="min-h-dvh overflow-x-hidden">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-codex-900">
          Pular para o conteúdo
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${site.url}/#organization`,
            name: site.name,
            url: site.url,
            logo: `${site.url}/logo-codex.png`,
            image: `${site.url}/images/team.jpg`,
            description: site.description,
            email: site.email,
            areaServed: "BR",
            sameAs: [site.instagram, site.linkedin],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Serviços de marketing digital e desenvolvimento web",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.shortTitle, description: s.summary, url: `${site.url}/servicos/${s.slug}` },
              })),
            },
          }}
        />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
