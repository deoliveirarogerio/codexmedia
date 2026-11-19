"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Inclinação máxima em graus */
  max?: number;
  /** Mostra reflexo de luz acompanhando o cursor */
  glare?: boolean;
}

/**
 * Card com inclinação 3D em perspectiva que segue o cursor.
 * Filhos com `style={{ transform: "translateZ(40px)" }}` ganham profundidade (efeito de camadas).
 */
export function Tilt({ children, className = "", max = 10, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
      el.style.setProperty("--go", "1");
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--go", "0");
  };

  return (
    <div className="[perspective:1100px]">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`relative h-full transition-transform duration-300 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] motion-reduce:[transform:none] ${className}`}
      >
        {children}
        {glare && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              opacity: "var(--go, 0)",
              background: "radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgb(255 255 255 / 0.22), transparent 55%)",
            }}
          />
        )}
      </div>
    </div>
  );
}
