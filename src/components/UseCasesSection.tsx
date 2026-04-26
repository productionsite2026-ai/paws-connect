import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface UseCase {
  title: string;
  description: string;
  urgent?: boolean;
  image?: string;
  imageAlt?: string;
  stat?: { value: string; label: string };
  badge?: string;
}

interface UseCasesSectionProps {
  title?: string;
  subtitle?: string;
  cases: UseCase[];
}

/**
 * Section "Dans quels cas faire appel à nous" — OBLIGATOIRE sur chaque page.
 * Optimisée SEO + IA + conversion : photos réelles avec alt SEO, badges, datas.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              {...staggerItem(i)}
              className={`relative rounded-2xl overflow-hidden border transition-smooth hover:-translate-y-1 card-shadow hover:card-shadow-hover bg-card flex flex-col ${
                c.urgent ? "border-service-rose/30" : "border-border"
              }`}
            >
              {/* Image SEO */}
              {c.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.imageAlt || c.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  {/* Overlay gradient pour lisibilité badge — léger pour rester visible sur mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/5 to-transparent pointer-events-none" />
                  {c.urgent && (
                    <Badge
                      variant="serviceRose"
                      className="absolute top-2.5 right-2.5 z-10 shadow-lg font-bold gap-1 text-[11px] px-2 py-0.5"
                    >
                      <AlertTriangle className="h-3 w-3" /> Urgent
                    </Badge>
                  )}
                  {c.badge && !c.urgent && (
                    <Badge
                      variant="serviceBlue"
                      className="absolute top-2.5 right-2.5 z-10 shadow-lg font-bold text-[11px] px-2 py-0.5 max-w-[60%] truncate"
                    >
                      {c.badge}
                    </Badge>
                  )}
                  {c.stat && (
                    <div className="absolute bottom-2.5 left-2.5 z-10 bg-card/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-border shadow-lg max-w-[70%]">
                      <div className="font-display font-bold text-sm text-accent leading-none truncate">{c.stat.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5 truncate">{c.stat.label}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 ${
                      c.urgent ? "bg-service-rose/15 text-service-rose" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1.5 text-base leading-tight">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-speakable>
                      {c.description}
                    </p>
                  </div>
                </div>

                {/* Badges fallback (sans image) */}
                {!c.image && (c.urgent || c.badge) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {c.urgent && (
                      <Badge variant="serviceRose" className="text-[11px] gap-1 font-bold">
                        <AlertTriangle className="h-3 w-3" /> Urgent
                      </Badge>
                    )}
                    {c.badge && !c.urgent && (
                      <Badge variant="serviceBlue" className="text-[11px] font-bold">
                        {c.badge}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
