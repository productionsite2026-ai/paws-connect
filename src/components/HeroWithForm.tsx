import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, ArrowRight, Sparkles } from "lucide-react";
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
 * Hero centré + formulaire en "trait d'union" chevauchant la section suivante.
 * Le formulaire est positionné en bas du hero avec une marge négative pour
 * créer un effet de pont visuel entre les deux sections.
 */
const HeroWithForm = ({ badge, h1, hook, trustBadges = [], breadcrumb, defaultService, defaultDomain, backgroundImage, backgroundImageAlt }: HeroProps) => {
  return (
    <>
      <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
        {/* Image de fond visible (SEO + contexte visuel) */}
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt={backgroundImageAlt || ""}
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover -z-20"
              fetchPriority="high"
            />
            {/* Overlay sombre pour lisibilité du texte (clair sur fond sombre) */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-background/95 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/30 -z-10" />
          </>
        )}
        {/* Background décoratif (utilisé uniquement si pas d'image) */}
        {!backgroundImage && <div className="absolute inset-0 bg-water-gradient -z-10" />}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4">
          {breadcrumb && (
            <nav aria-label="Fil d'ariane" className="flex items-center gap-1.5 text-sm text-primary-foreground/80 mb-5">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {b.href ? (
                    <Link to={b.href} className="hover:text-accent transition-smooth">{b.label}</Link>
                  ) : (
                    <span className="text-primary-foreground font-medium">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Contenu hero centré */}
          <motion.div {...heroEntry(0)} className="max-w-4xl mx-auto text-center">
            {badge && (
              <Badge variant="accent" className="px-3 py-1.5 rounded-full text-sm font-semibold mb-5 inline-flex shadow-lg">
                {badge.icon} {badge.label}
              </Badge>
            )}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-5 text-primary-foreground drop-shadow-lg">
              {h1}
            </h1>
            <p className="hero-description text-base md:text-lg text-primary-foreground/90 mb-7 leading-relaxed max-w-2xl mx-auto drop-shadow" data-speakable>
              {hook}
            </p>

            <div className="flex flex-wrap gap-3 mb-6 justify-center">
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
              <div className="flex flex-wrap gap-2 justify-center">
                {trustBadges.map((b) => (
                  <Badge key={b.label} variant={b.variant}>
                    {b.icon} {b.label}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* === TRAIT D'UNION : Formulaire chevauchant entre Hero & section suivante === */}
      <div className="relative -mt-24 md:-mt-32 mb-12 md:mb-20 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            id="devis"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Lueur d'embellissement derrière le formulaire */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-2xl opacity-60 -z-10" aria-hidden="true" />
            <div className="absolute -inset-px bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-40 -z-10" aria-hidden="true" />

            {/* Pastille flottante d'accroche */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <Badge variant="accent" className="px-4 py-1.5 rounded-full shadow-lg gap-1.5 text-xs font-bold uppercase tracking-wide">
                <Sparkles className="h-3.5 w-3.5" /> Devis express — réponse sous 2 h
              </Badge>
            </div>

            <QuoteFunnelForm variant="overlay" defaultService={defaultService} defaultDomain={defaultDomain} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroWithForm;
