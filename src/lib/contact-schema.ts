import { z } from "zod";

export const interests = ["SEO & GEO", "Site / Landing page", "Google Ads", "Meta Ads", "Pacote completo"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  email: z.string().trim().email("E-mail inválido"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{10,20}$/, "Telefone inválido"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.enum(interests, { message: "Escolha um serviço" }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // honeypot anti-spam: deve ficar vazio
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
