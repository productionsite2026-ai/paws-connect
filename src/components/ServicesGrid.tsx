import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export interface ServiceCard {
  icon: LucideIcon;
  badge: string;
  badgeVariant: "serviceBlue" | "serviceCyan" | "serviceOrange" | "serviceEmerald" | "serviceRose" | "serviceViolet" | "serviceAmber";
  title: string;
  description: string;
  features: string[];
}

interface ServicesGridProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  services: ServiceCard[];
  ctaLabel?: string;
}

const ServicesGrid = ({ eyebrow, title, subtitle, services, ctaLabel = "Demander un devis" }: ServicesGridProps) => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          {eyebrow && <Badge variant="accentSoft" className="mb-3">{eyebrow}</Badge>}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                {...staggerItem(i)}
                className="group bg-section-gradient rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1 flex flex-col"
              >
                <Badge variant={s.badgeVariant} className="self-start mb-4 px-2.5 py-1">
                  <Icon className="h-3.5 w-3.5" />
                  {s.badge}
                </Badge>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{s.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent-outline" size="sm" asChild className="w-full mt-auto">
                  <a href="#devis">{ctaLabel}</a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
