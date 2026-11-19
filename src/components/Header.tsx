"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-codex-100 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo variant={solid ? "dark" : "light"} />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                solid ? "text-codex-900 hover:bg-codex-50" : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contato" className={`hidden sm:inline-flex ${solid ? "btn-primary" : "btn-light"} py-2.5`}>
            Diagnóstico grátis
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid size-11 place-items-center rounded-full lg:hidden ${solid ? "text-codex-900 hover:bg-codex-50" : "text-white hover:bg-white/10"}`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Menu móvel" className="container-x flex h-[calc(100dvh-4.5rem)] flex-col gap-1 bg-white pb-8 lg:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-4 py-4 text-lg font-bold text-codex-900 hover:bg-codex-50">
              {item.label}
            </Link>
          ))}
          <Link href="/#contato" className="btn-primary mt-4 py-4">
            Quero um diagnóstico grátis
          </Link>
        </nav>
      )}
    </header>
  );
}
