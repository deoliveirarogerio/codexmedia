"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, interests, type ContactInput } from "@/lib/contact-schema";

type Errors = Partial<Record<keyof ContactInput, string>>;
type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:border-codex-300 focus:bg-white/10 focus:outline-none";

export function ContactForm({ defaultInterest }: { defaultInterest?: ContactInput["interest"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fe).map(([k, v]) => [k, v?.[0]])) as Errors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-center" role="status">
        <CheckCircle2 className="size-14 text-codex-300" />
        <h3 className="text-2xl font-extrabold text-white">Recebemos sua mensagem!</h3>
        <p className="text-white/70">Um especialista da Codex Media entrará em contato em até 1 dia útil.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-2">
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const err = (k: keyof ContactInput) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-xs font-medium text-red-300">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-white/70">Nome *</label>
        <input id="name" name="name" autoComplete="name" className={field} placeholder="Seu nome" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-white/70">Empresa</label>
        <input id="company" name="company" autoComplete="organization" className={field} placeholder="Nome da empresa" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-white/70">E-mail *</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="voce@empresa.com.br" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-white/70">WhatsApp *</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="(11) 99999-9999" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
        {err("phone")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold text-white/70">Qual serviço te interessa? *</label>
        <select id="interest" name="interest" defaultValue={defaultInterest ?? ""} className={`${field} [&>option]:text-codex-950`} aria-invalid={!!errors.interest}>
          <option value="" disabled>Selecione</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        {err("interest")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-white/70">Conte sobre seu projeto</label>
        <textarea id="message" name="message" rows={4} className={`${field} resize-none`} placeholder="Objetivos, prazos, investimento previsto…" />
      </div>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">Seus dados estão seguros. Respondemos em até 1 dia útil.</p>
        <button type="submit" disabled={status === "loading"} className="btn-light disabled:opacity-60">
          {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          Quero meu diagnóstico
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-300 sm:col-span-2" role="alert">
          Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.
        </p>
      )}
    </form>
  );
}
