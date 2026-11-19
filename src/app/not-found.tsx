import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80dvh] place-items-center bg-codex-950 px-4 pt-24 text-center text-white">
      <div>
        <p className="text-8xl font-black text-codex-400">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">Página não encontrada</h1>
        <p className="mt-3 text-white/60">O conteúdo que você procura não existe ou foi movido.</p>
        <Link href="/" className="btn-light mt-8">Voltar para o início</Link>
      </div>
    </section>
  );
}
