import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { site } from "@/lib/site";

// Libera buscadores e crawlers de IA (GEO): ser lido é pré-requisito para ser citado.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
