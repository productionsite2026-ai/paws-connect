import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import QuoteFunnelForm from "@/components/QuoteFunnelForm";
import { content, type ServiceKey, type DomainKey } from "@/data/content";
import { heroEntry } from "@/lib/animations";

interface HeroProps {
  badge?: { label: string; icon?: ReactNode };
  h1: ReactNode;
  hook: string;
  trustBadges?: { label: string; variant: "serviceBlue" | "serviceOrange" | "serviceEmerald" | "serviceRose" | "serviceCyan" | "serviceViolet" | "serviceAmber"; icon?: ReactNode }[];
  breadcrumb?: { label: string; href?: string }[];
  defaultService?: ServiceKey;
  defaultDomain?: DomainKey;
  /** Image de fond panoramique placée derrière le titre (SEO + contexte visuel) */
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

/**
 * Hero standardisé avec formulaire chevauchant la 1ère section.
 * Le formulaire est en colonne droite sur desktop, et chevauche le hero sur mobile.
 */
const HeroWithForm = ({ badge, h1, hook, trustBadges = [], breadcrumb, defaultService, defaultDomain }: HeroProps) => {
  return (
    <section className="relative pt-24 pb-12 md:pb-32 bg-water-pattern overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 bg-water-gradient -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4">
        {breadcrumb && (
          <nav aria-label="Fil d'ariane" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {b.href ? (
                  <Link to={b.href} className="hover:text-accent transition-smooth">{b.label}</Link>
                ) : (
                  <span className="text-foreground font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-start">
          {/* Colonne gauche : contenu */}
          <motion.div {...heroEntry(0)} className="max-w-2xl">
            {badge && (
              <Badge variant="accent" className="px-3 py-1.5 rounded-full text-sm font-semibold mb-5">
                {badge.icon} {badge.label}
              </Badge>
            )}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] mb-5 text-foreground">
              {h1}
            </h1>
            <p className="hero-description text-base md:text-lg text-muted-foreground mb-7 leading-relaxed" data-speakable>
              {hook}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Button size="lg" variant="accent" asChild className="gap-2">
                <a href="#devis">
                  Devis gratuit en 60s <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2">
                <a href={`tel:${content.company.contact.mobileRaw}`}>
                  <Phone className="h-4 w-4" /> {content.company.contact.phoneMobile}
                </a>
              </Button>
            </div>

            {trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <Badge key={b.label} variant={b.variant}>
                    {b.icon} {b.label}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>

          {/* Colonne droite : formulaire chevauchant */}
          <motion.div
            id="devis"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-24 w-full"
          >
            <QuoteFunnelForm variant="overlay" defaultService={defaultService} defaultDomain={defaultDomain} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
