import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface UseCase {
  title: string;
  description: string;
  urgent?: boolean;
}

interface UseCasesSectionProps {
  title?: string;
  subtitle?: string;
  cases: UseCase[];
}

/**
 * Section "Dans quels cas faire appel à nous" — OBLIGATOIRE sur chaque page.
 * Optimisée SEO + IA + conversion.
 */
const UseCasesSection = ({
  title = "Dans quels cas faire appel à nous ?",
  subtitle = "Identifiez votre situation et obtenez la bonne intervention au bon moment.",
  cases,
}: UseCasesSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="serviceAmber" className="mb-3">🧠 Quand nous appeler</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              {...staggerItem(i)}
              className={`relative p-5 rounded-xl border transition-smooth hover:-translate-y-0.5 ${
                c.urgent
                  ? "border-service-rose/30 bg-service-rose/5"
                  : "border-border bg-section-gradient hover:border-accent/30"
              }`}
            >
              {c.urgent && (
                <Badge variant="serviceRose" className="absolute top-3 right-3 text-[10px]">
                  <AlertTriangle className="h-3 w-3" /> Urgent
                </Badge>
              )}
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 ${
                    c.urgent ? "bg-service-rose/15 text-service-rose" : "bg-accent/15 text-accent"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-foreground mb-1.5 text-base">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-speakable>
                    {c.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
