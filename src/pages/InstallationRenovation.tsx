import { Hammer, Droplets, Flame, Wind, Leaf, Bath, Award, Shield, Clock, Settings, Thermometer, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroWithForm from "@/components/HeroWithForm";
import QuickAnswer from "@/components/QuickAnswer";
import ServicesGrid from "@/components/ServicesGrid";
import UseCasesSection from "@/components/UseCasesSection";
import FAQSection from "@/components/FAQSection";
import FAQMeshSection from "@/components/FAQMeshSection";
import FinalCTA from "@/components/FinalCTA";
import { useSEO, useJsonLd } from "@/hooks/useSEO";
import { content } from "@/data/content";
import { breadcrumbSchema, serviceSchema, speakableSchema, ORIGIN } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/animations";

const InstallationRenovation = () => {
  const url = `${ORIGIN}${content.routes.installation}`;

  useSEO({
    title: "Installation & Rénovation plomberie chauffage à Paris — Artisan Saint Louis",
    description:
      "Installation et rénovation plomberie & chauffage à Paris et toute l'Île-de-France : salle de bain, chaudière gaz, pompe à chaleur, sanitaires. Devis gratuit, garantie décennale.",
    keywords:
      "installation plomberie Paris, rénovation salle de bain Paris, installation chaudière Paris, pompe à chaleur Île-de-France, chauffagiste Paris installation",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Installation & Rénovation", url },
    ]),
    serviceSchema(
      "Installation & Rénovation plomberie chauffage",
      "Installation et rénovation complète en plomberie et chauffage à Paris et en Île-de-France : sanitaires, chaudières, pompes à chaleur, salle de bain.",
      "Installation plomberie chauffage",
    ),
    speakableSchema(url, "Installation & Rénovation à Paris"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="installation"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Installation & Rénovation" }]}
        badge={{ label: "Installation & Rénovation", icon: <Hammer className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Installation & Rénovation à <span className="text-gradient-brand">Paris</span> — plomberie & chauffage
          </>
        }
        hook="Pose neuve, remplacement ou rénovation complète : votre artisan plombier-chauffagiste à Paris vous accompagne du plan au démarrage. Devis détaillé, aides MaPrimeRénov' calculées, garantie décennale."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Aides MaPrimeRénov'", variant: "serviceOrange", icon: <Leaf className="h-3.5 w-3.5" /> },
          { label: "Intervention sous 48h", variant: "serviceCyan", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Que comprend une installation plomberie ou chauffage à Paris ?"
        answer="Une installation à Paris (et en Île-de-France) couvre la pose neuve ou le remplacement complet de vos équipements : en plomberie — sanitaires (WC, douche, baignoire), robinetterie, réseau cuivre/multicouche, salle de bain ; en chauffage — chaudière gaz à condensation, pompe à chaleur, chaudière à granulés, radiateurs, plancher chauffant. Artisan Saint Louis étudie votre logement (appartement haussmannien, immeuble récent, maison de banlieue), dimensionne, pose, met en service et garantit l'installation 10 ans."
      />

      {/* Présentation détaillée */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Notre expertise</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Une seule équipe pour vos installations plomberie et chauffage
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                À Paris et en banlieue, chaque installation est unique : un appartement haussmannien du 4ᵉ ne se traite pas comme un pavillon de Bagneux ou un studio neuf à Saint-Denis. Notre équipe de <strong className="text-foreground">plombiers-chauffagistes certifiés à Paris</strong> applique les normes DTU 60.1 / 60.11 (plomberie) et RGE QualiPAC / Qualigaz (chauffage), travaille avec du matériel de marques reconnues (Grohe, Hansgrohe, Geberit, Saunier Duval, Viessmann, Daikin) et garantit ses travaux 10 ans.
              </p>
              <p>
                Nous prenons en charge la <strong className="text-foreground">conception complète</strong> : étude technique, dimensionnement, choix matériel, devis détaillé, planification, pose, mise en service et finitions. Pour le chauffage, nous calculons gratuitement vos aides MaPrimeRénov', CEE Coup de pouce, TVA réduite à 5,5 % et éco-PTZ — sur une pompe à chaleur, les aides peuvent couvrir <strong className="text-foreground">jusqu'à 50 % du coût total</strong>.
              </p>
              <p>
                Nous intervenons aussi bien chez les particuliers (appartements parisiens, copropriétés, maisons individuelles en banlieue) que dans le tertiaire (bureaux, commerces, restaurants). Notre engagement : <strong className="text-foreground">prix annoncé respecté</strong>, planning tenu, finitions soignées, aucune mauvaise surprise sur la facture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos prestations"
        title="Plomberie & chauffage : tout ce que nous installons"
        subtitle="2 domaines, un seul artisan : votre projet d'installation pris en charge de A à Z."
        services={[
          {
            icon: Bath,
            badge: "Plomberie",
            badgeVariant: "serviceBlue",
            title: "Rénovation salle de bain complète",
            description: "Conception, plomberie, sanitaires, carrelage : rénovation clé en main, du plan 3D à la pose.",
            features: ["Étude & plan personnalisé", "Coordination corps de métier", "Garantie décennale globale"],
          },
          {
            icon: Droplets,
            badge: "Plomberie",
            badgeVariant: "serviceCyan",
            title: "Pose sanitaires & robinetterie",
            description: "WC suspendus, douches, baignoires, vasques, mitigeurs thermostatiques toutes marques.",
            features: ["WC suspendus & au sol", "Cabines & receveurs", "Robinetterie thermostatique"],
          },
          {
            icon: Flame,
            badge: "Chauffage",
            badgeVariant: "serviceOrange",
            title: "Chaudière gaz à condensation",
            description: "La référence en rénovation : compacte, performante, éligible aux aides CEE et TVA 5,5 %.",
            features: ["Rendement +15 %", "Compacte murale", "Aides CEE incluses"],
          },
          {
            icon: Wind,
            badge: "Chauffage",
            badgeVariant: "serviceEmerald",
            title: "Pompe à chaleur air/eau",
            description: "Énergie renouvelable, MaPrimeRénov' jusqu'à 5 000 €. Idéal en maison ou immeuble bien isolé.",
            features: ["COP 3,5 à 4,5", "MaPrimeRénov' jusqu'à 5 000 €", "Chauffage + ECS"],
          },
          {
            icon: Leaf,
            badge: "Chauffage",
            badgeVariant: "serviceViolet",
            title: "Chaudière à granulés (pellets)",
            description: "Énergie biomasse renouvelable, autonomie élevée, parfait pour maisons avec espace de stockage.",
            features: ["Combustible local", "Autonomie 1 à 2 semaines", "Aides MaPrimeRénov'"],
          },
          {
            icon: Thermometer,
            badge: "Chauffage",
            badgeVariant: "serviceAmber",
            title: "Radiateurs & plancher chauffant",
            description: "Pose et remplacement de radiateurs eau chaude et plancher chauffant hydraulique basse température.",
            features: ["Radiateurs alu / fonte", "Plancher chauffant", "Régulation pièce par pièce"],
          },
        ]}
      />

      <UseCasesSection
        title="Dans quels cas faire appel à nous pour une installation ?"
        cases={[
          { title: "Vous rénovez votre salle de bain", description: "Refaire à neuf une salle de bain demande coordination, savoir-faire et respect des normes d'étanchéité." },
          { title: "Votre chaudière a plus de 15 ans", description: "Au-delà, le rendement chute et les pannes se multiplient : le remplacement devient économiquement justifié." },
          { title: "Vous construisez ou rénovez en profondeur", description: "Étude thermique, dimensionnement, pose et mise en service d'un système plomberie + chauffage complet." },
          { title: "Vous changez vos sanitaires", description: "Remplacement WC, douche, baignoire, robinetterie : intervention propre et rapide en appartement parisien." },
          { title: "Vous voulez réduire vos factures", description: "Passage à la pompe à chaleur, chaudière condensation ou granulés : aides MaPrimeRénov' calculées." },
          { title: "Vous achetez un bien ancien", description: "Diagnostic complet et mise aux normes plomberie + chauffage avant d'emménager." },
        ]}
      />


      <FAQSection
        title="FAQ — Installation & Rénovation"
        faqs={[
          { q: "Combien coûte une rénovation de salle de bain à Paris ?", a: "Une rénovation complète de salle de bain à Paris se situe en moyenne entre 6 000 € et 15 000 € selon la surface, le niveau de gamme et les contraintes d'évacuation (immeuble haussmannien, copropriété). Notre devis détaillé inclut la dépose, la plomberie, l'électricité, le carrelage et la pose des sanitaires." },
          { q: "Combien coûte l'installation d'une chaudière gaz à condensation ?", a: "Comptez entre 4 000 et 7 500 € TTC pose comprise pour une chaudière gaz à condensation murale 25 kW. Avec les aides CEE et la TVA à 5,5 %, le reste à charge moyen tombe entre 3 000 et 5 500 €." },
          { q: "Une pompe à chaleur est-elle rentable à Paris et en Île-de-France ?", a: "Oui, à condition que le logement soit correctement isolé. Avec un COP saisonnier de 3,5 à 4,5 et MaPrimeRénov' jusqu'à 5 000 €, le retour sur investissement se fait en 7 à 10 ans en maison individuelle de banlieue. En appartement parisien, la PAC air/air est souvent plus adaptée." },
          { q: "Quelles aides financières puis-je obtenir ?", a: "Trois dispositifs cumulables : MaPrimeRénov' (jusqu'à 11 000 € pour PAC selon revenus), CEE Coup de pouce chauffage (jusqu'à 5 000 €), TVA réduite à 5,5 % et éco-PTZ jusqu'à 50 000 €. Nous montons gratuitement votre dossier d'aides." },
          { q: "Combien de temps prend une installation ?", a: "Un remplacement de chaudière à l'identique : 1 jour. Une PAC complète avec ballon ECS : 2 à 4 jours. Une rénovation de salle de bain complète : 5 à 12 jours selon l'ampleur." },
          { q: "Garantissez-vous vos installations ?", a: "Oui, tous nos travaux bénéficient de la garantie décennale (10 ans pour les éléments structurels et l'étanchéité), de la garantie biennale (2 ans pour les équipements) et de la garantie de parfait achèvement (1 an)." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Que faire en cas de fuite urgente après une installation ?", href: content.routes.depannage, pageLabel: "Dépannage urgent" },
          { question: "L'entretien annuel chaudière est-il vraiment obligatoire ?", href: content.routes.entretien, pageLabel: "Entretien" },
          { question: "Voir tous les services Artisan Saint Louis", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Un projet d'installation à Paris ou en banlieue ?"
        subtitle="Devis gratuit, calcul des aides, conseil honnête : appelez votre artisan plombier-chauffagiste."
      />
    </PageLayout>
  );
};

export default InstallationRenovation;
