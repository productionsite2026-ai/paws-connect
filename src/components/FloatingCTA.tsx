import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { content } from "@/data/content";

/**
 * Bouton flottant — visible sur toutes les pages, mobile + desktop.
 * Bouton 1 : appel immédiat (tel:)
 * Bouton 2 : scroll vers formulaire de devis (#devis)
 */
const FloatingCTA = () => {
  const scrollToDevis = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("devis");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6"
    >
      <a
        href={`tel:${content.company.contact.mobileRaw}`}
        aria-label={`Appeler ${content.company.name} — ${content.company.contact.phoneMobile}`}
        className="group flex items-center gap-2 rounded-full bg-flame-gradient text-secondary-foreground px-4 py-3 shadow-floating hover:scale-105 transition-spring animate-pulse-ring"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-foreground/15">
          <Phone className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline font-bold text-sm">Appeler maintenant</span>
        <span className="sm:hidden font-bold text-sm">Appel</span>
      </a>

      <a
        href="#devis"
        onClick={scrollToDevis}
        aria-label="Demander un devis rapide"
        className="group flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-3 shadow-floating hover:scale-105 transition-spring"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/15">
          <FileText className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline font-bold text-sm">Devis rapide</span>
        <span className="sm:hidden font-bold text-sm">Devis</span>
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
