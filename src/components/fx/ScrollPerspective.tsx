"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollPerspectiveProps {
  children: ReactNode;
  className?: string;
  /** Rotação inicial em X (graus) quando o elemento entra pela parte de baixo da tela */
  fromRotateX?: number;
  /** Rotação em Y (graus) — use valores negativos/positivos para variar o lado */
  fromRotateY?: number;
  /** Escala inicial */
  fromScale?: number;
}

/**
 * Gira o conteúdo em profundidade conforme a rolagem: ele "deita" no espaço 3D
 * e se endireita ao chegar no centro da tela, criando sensação de perspectiva real.
 */
export function ScrollPerspective({ children, className = "", fromRotateX = 22, fromRotateY = 0, fromScale = 0.9 }: ScrollPerspectiveProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quando o topo do elemento está no fundo da tela, 1 quando o centro do elemento chega ao centro da tela
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh / 2 + rect.height / 2)));
      const t = 1 - Math.pow(1 - progress, 3);
      const inv = 1 - t;
      el.style.transform = `rotateX(${fromRotateX * inv}deg) rotateY(${fromRotateY * inv}deg) scale(${fromScale + (1 - fromScale) * t})`;
      el.style.opacity = String(0.35 + 0.65 * t);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [fromRotateX, fromRotateY, fromScale]);

  return (
    <div className="[perspective:1400px]">
      <div ref={ref} className={`origin-bottom will-change-transform [transform-style:preserve-3d] ${className}`}>
        {children}
      </div>
    </div>
  );
}
