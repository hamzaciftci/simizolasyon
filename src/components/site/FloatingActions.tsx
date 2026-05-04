import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
        className="pulse-ring inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl hover:scale-105 hover:bg-whatsapp-deep transition-all"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phone1Tel}`}
        aria-label="Telefon ile arayın"
        className="md:hidden inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cta text-cta-foreground shadow-cta hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
