import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/** Logotipo em texto vetorial, fiel à marca: CODEX (roxo, extra-bold) + MEDIA (cinza, medium) + ®. */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const codex = variant === "light" ? "text-white" : "text-codex-800";
  const media = variant === "light" ? "text-media-300" : "text-media-500";
  return (
    <Link href="/" aria-label="Codex Media — página inicial" className={`inline-flex items-start leading-none select-none ${className}`}>
      <span className={`text-xl font-extrabold tracking-wide sm:text-2xl ${codex}`}>CODEX</span>
      <span className={`ml-1.5 text-xl font-medium tracking-wide sm:text-2xl ${media}`}>MEDIA</span>
      <span className={`ml-0.5 text-[0.55rem] font-semibold ${media}`}>®</span>
    </Link>
  );
}
