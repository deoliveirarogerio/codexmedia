import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot preenchido = bot. Responde OK sem processar.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const { website: _hp, ...lead } = parsed.data;
  const payload = { ...lead, source: "site-codexmedia", createdAt: new Date().toISOString() };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
    } catch (err) {
      console.error("[contact] falha ao enviar lead", err);
      return NextResponse.json({ ok: false, error: "Não foi possível enviar agora." }, { status: 502 });
    }
  } else {
    console.info("[contact] novo lead (configure CONTACT_WEBHOOK_URL para encaminhar):", payload);
  }

  return NextResponse.json({ ok: true });
}
