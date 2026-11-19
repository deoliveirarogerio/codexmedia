import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
