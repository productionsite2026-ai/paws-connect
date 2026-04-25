import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerItem } from "@/lib/animations";

interface FAQLink {
  question: string;
  href: string;
  pageLabel: string;
}

interface FAQMeshSectionProps {
  /** Liens vers les FAQ des autres pages — maillage interne fort */
  links: FAQLink[];
}

/**
 * FAQ Maillée — chaque page renvoie vers les FAQ des autres pages.
 * Levier SEO majeur (autorité globale) + IA (parcours sémantique).
 */
const FAQMeshSection = ({ links }: FAQMeshSectionProps) => {
  return (
    <section className="py-14 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-8">
          <Badge variant="serviceViolet" className="mb-3">🔗 Allez plus loin</Badge>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Questions liées sur nos autres expertises
          </h2>
          <p className="text-muted-foreground text-sm">
            Plomberie, dépannage, chauffage : explorez les réponses de nos autres pages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {links.map((l, i) => (
            <motion.div key={l.href + l.question} {...staggerItem(i)}>
              <Link
                to={l.href}
                className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-section-gradient hover:border-accent/40 hover:shadow-md transition-smooth"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-0.5">{l.pageLabel}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-smooth">
                    {l.question}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQMeshSection;
