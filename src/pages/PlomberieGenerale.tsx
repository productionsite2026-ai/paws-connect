import { Droplets, ShowerHead, Wrench, Settings, Award, Shield, Clock, Hammer, Pipette, Bath } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroWithForm from "@/components/HeroWithForm";
import QuickAnswer from "@/components/QuickAnswer";
import ServicesGrid from "@/components/ServicesGrid";
import UseCasesSection from "@/components/UseCasesSection";
import InterventionsSection from "@/components/InterventionsSection";
import FAQSection from "@/components/FAQSection";
import FAQMeshSection from "@/components/FAQMeshSection";
import FinalCTA from "@/components/FinalCTA";
import { useSEO, useJsonLd } from "@/hooks/useSEO";
import { content } from "@/data/content";
import { breadcrumbSchema, serviceSchema, speakableSchema, ORIGIN } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/animations";

const PlomberieGenerale = () => {
  const url = `${ORIGIN}${content.routes.plomberie}`;

  useSEO({
    title: "Plomberie générale à Saint-Louis (68300) — Installation & rénovation sanitaire",
    description:
      "Plombier à Saint-Louis pour installation sanitaire, rénovation salle de bain, robinetterie, WC, canalisations. Devis gratuit, garantie décennale. Intervention sous 48h.",
    keywords:
      "plomberie Saint-Louis, plombier 68300, installation sanitaire, rénovation salle de bain Saint-Louis, robinetterie, raccordement plomberie",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Plomberie générale", url },
    ]),
    serviceSchema(
      "Plomberie générale",
      "Installation, rénovation et entretien sanitaire pour particuliers et professionnels à Saint-Louis et en Sud-Alsace.",
      "Plomberie",
    ),
    speakableSchema(url, "Plomberie générale à Saint-Louis"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="plomberie"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Plomberie générale" }]}
        badge={{ label: "Plomberie sanitaire complète", icon: <Droplets className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Plomberie générale à <span className="text-gradient-brand">Saint-Louis</span> — installation & rénovation
          </>
        }
        hook="De la pose d'un robinet à la rénovation complète de votre salle de bain : votre artisan plombier local intervient avec savoir-faire, transparence et garantie décennale."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Intervention sous 48h", variant: "serviceOrange", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Que fait un plombier généraliste ?"
        answer="Un plombier généraliste installe, rénove et entretient l'ensemble de votre installation sanitaire : alimentation et évacuation d'eau, robinetterie, WC, baignoires, douches, lavabos, raccordement aux réseaux et étanchéité. À Saint-Louis, Artisant Saint Louis intervient pour tout projet — d'une simple fuite de robinet à une rénovation complète de salle de bain."
      />

      {/* Présentation détaillée */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Notre expertise</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Votre plombier de confiance pour des installations qui durent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                La plomberie est au cœur du confort de votre logement : eau chaude, eau froide, évacuation, étanchéité. Une installation mal posée, c'est des fuites cachées, une surconsommation et des dégâts coûteux à terme. Notre équipe de <strong className="text-foreground">plombiers certifiés à Saint-Louis</strong> applique les normes DTU 60.1 et 60.11, utilise du matériel de marques reconnues (Grohe, Hansgrohe, Geberit, Roca) et garantit ses travaux 10 ans.
              </p>
              <p>
                Nous intervenons aussi bien chez les particuliers (appartements, maisons individuelles) que dans le tertiaire (bureaux, commerces, restaurants). Notre approche : <strong className="text-foreground">écouter votre besoin</strong>, vous proposer plusieurs solutions adaptées à votre budget, et tenir nos engagements de prix et de délai. Aucun frais caché, aucune surprise sur la facture.
              </p>
              <p>
                Que vous soyez en construction neuve, en rénovation, ou simplement à la recherche d'un artisan pour remplacer un équipement vieillissant, nous mettons à votre disposition <strong className="text-foreground">15 ans de pratique terrain</strong> et une connaissance fine des spécificités du bâti alsacien — vieilles pierres, immeubles haussmanniens du Centre-ville de Saint-Louis, pavillons modernes des nouvelles ZAC.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos prestations"
        title="Tout ce qu'un plombier expert peut faire pour vous"
        services={[
          {
            icon: ShowerHead,
            badge: "Sanitaires",
            badgeVariant: "serviceBlue",
            title: "Pose & remplacement de sanitaires",
            description: "Installation de WC, lavabos, douches, baignoires, robinetterie. Toutes marques, sur-mesure ou standard.",
            features: ["WC suspendus & au sol", "Cabines de douche, baignoires", "Robinetterie thermostatique"],
          },
          {
            icon: Bath,
            badge: "Rénovation",
            badgeVariant: "serviceViolet",
            title: "Rénovation de salle de bain",
            description: "Conception complète, du plan 3D à la pose carrelage et meubles, en coordination avec nos partenaires.",
            features: ["Étude & plan personnalisé", "Coordination tous corps d'état", "Garantie décennale globale"],
          },
          {
            icon: Pipette,
            badge: "Canalisations",
            badgeVariant: "serviceCyan",
            title: "Canalisations & raccordements",
            description: "Pose de réseaux d'arrivée et d'évacuation en cuivre, multicouche ou PVC, conforme DTU.",
            features: ["Cuivre, multicouche, PVC", "Raccordement réseau public", "Mise aux normes"],
          },
          {
            icon: Settings,
            badge: "Cuisine",
            badgeVariant: "serviceOrange",
            title: "Plomberie cuisine",
            description: "Raccordement évier, lave-vaisselle, machine à laver, adoucisseur d'eau, osmoseur.",
            features: ["Pose évier & mitigeur", "Adoucisseur d'eau", "Évacuation lave-vaisselle"],
          },
          {
            icon: Hammer,
            badge: "Construction neuve",
            badgeVariant: "serviceEmerald",
            title: "Plomberie construction neuve",
            description: "Études & réalisation complète de l'installation sanitaire dans les constructions neuves.",
            features: ["Étude réseau", "Pose multicouche", "Test étanchéité"],
          },
          {
            icon: Wrench,
            badge: "Maintenance",
            badgeVariant: "serviceAmber",
            title: "Petites interventions",
            description: "Joint qui fuit, chasse d'eau capricieuse, robinet bloqué : nous intervenons aussi pour les petites pannes.",
            features: ["Remplacement joints", "Réglage chasse d'eau", "Détartrage"],
          },
        ]}
      />

      <UseCasesSection
        title="Dans quels cas faire appel à un plombier à Saint-Louis ?"
        cases={[
          { title: "Vous rénovez votre salle de bain", description: "Refaire à neuf une salle de bain demande coordination, savoir-faire et respect des normes d'étanchéité." },
          { title: "Vous construisez votre maison", description: "L'installation sanitaire d'une maison neuve doit être conçue dès le départ pour durer 30 ans." },
          { title: "Vous changez vos sanitaires", description: "Remplacement WC, douche, baignoire, robinetterie : intervention propre et rapide." },
          { title: "Vous voulez installer un adoucisseur", description: "L'eau dure du Sud-Alsace abîme vos appareils. Un adoucisseur prolonge leur durée de vie." },
          { title: "Vous suspectez une fuite cachée", description: "Surconsommation, traces d'humidité : un diagnostic rapide évite les dégâts importants.", urgent: true },
          { title: "Mise aux normes après achat", description: "Vous venez d'acheter un bien ancien ? Diagnostic complet pour mettre votre installation en conformité." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="FAQ — Plomberie générale"
        faqs={[
          { q: "Quel est le tarif moyen d'une rénovation de salle de bain ?", a: "Une rénovation complète de salle de bain à Saint-Louis se situe en moyenne entre 4 500 € et 12 000 € selon la surface, le niveau de gamme et les contraintes techniques. Notre devis détaillé inclut la dépose, la plomberie, l'électricité, le carrelage et la pose des sanitaires." },
          { q: "Combien de temps prend l'installation de WC suspendus ?", a: "L'installation d'un WC suspendu (avec bâti-support et habillage) prend généralement entre 4 et 8 heures, selon l'état du mur porteur et la nécessité de modifier l'évacuation. Nous garantissons une finition propre et étanche." },
          { q: "Quels matériaux utilisez-vous pour les canalisations ?", a: "Nous travaillons principalement en cuivre (durabilité), multicouche PER (souplesse, rapidité) et PVC pour les évacuations. Le choix dépend du contexte : rénovation, neuf, accessibilité, budget." },
          { q: "Faut-il un adoucisseur à Saint-Louis ?", a: "L'eau de Saint-Louis et du Sud-Alsace affiche une dureté entre 25 et 35 °f (eau dure à très dure). Un adoucisseur prolonge la durée de vie de votre chaudière, de vos appareils électroménagers et de votre robinetterie." },
          { q: "Garantissez-vous vos travaux de plomberie ?", a: "Oui, tous nos travaux de plomberie bénéficient de la garantie décennale (10 ans pour les éléments structurels et l'étanchéité), de la garantie biennale (2 ans pour les équipements) et de la garantie de parfait achèvement (1 an)." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Comment réagir face à une fuite urgente ?", href: content.routes.depannage, pageLabel: "Dépannage plomberie" },
          { question: "Quel chauffage installer dans une maison neuve ?", href: content.routes.chauffageInstall, pageLabel: "Chauffage installation" },
          { question: "L'entretien chaudière est-il vraiment obligatoire ?", href: content.routes.chauffageEntretien, pageLabel: "Chauffage entretien" },
          { question: "Voir tous les services Artisant Saint Louis", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Un projet de plomberie à Saint-Louis ?"
        subtitle="Devis gratuit, conseil personnalisé, intervention soignée — appelez votre artisan local."
      />
    </PageLayout>
  );
};

export default PlomberieGenerale;
