import { motion } from "framer-motion";
import { Wrench, Hammer, Recycle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

const interventions = [
  {
    icon: Wrench,
    color: "serviceRose" as const,
    title: "Dépannage",
    desc: "Intervention rapide pour vos urgences plomberie et chauffage.",
    items: ["Urgence 7j/7", "Réparation rapide", "Diagnostic gratuit"],
  },
  {
    icon: Hammer,
    color: "serviceBlue" as const,
    title: "Installation",
    desc: "Pose d'équipements neufs et mise aux normes complète.",
    items: ["Équipements neufs", "Mise aux normes", "Conseil personnalisé"],
  },
  {
    icon: Recycle,
    color: "serviceEmerald" as const,
    title: "Entretien",
    desc: "Maintenance préventive pour prolonger la durée de vie.",
    items: ["Maintenance annuelle", "Prévention pannes", "Contrats sur-mesure"],
  },
];

/**
 * Section transversale obligatoire — présente sur TOUTES les pages.
 * Couvre les 3 axes métier : Dépannage / Installation / Entretien.
 */
const InterventionsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="accentSoft" className="mb-3">🛠️ Notre approche</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nos interventions couvrent
          </h2>
          <p className="text-muted-foreground">
            De l'urgence à la maintenance, un artisan unique pour tous vos besoins en plomberie et chauffage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {interventions.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                {...staggerItem(i)}
                className="group bg-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1"
              >
                <Badge variant={it.color} className="mb-4 px-2.5 py-1">
                  <Icon className="h-3.5 w-3.5" />
                  {it.title}
                </Badge>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{it.desc}</p>
                <ul className="space-y-2">
                  {it.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="#devis"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                >
                  Demander un devis <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterventionsSection;
