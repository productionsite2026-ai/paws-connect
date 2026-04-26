import { Hammer, Droplets, Flame, Wind, Leaf, Bath, Award, Shield, Clock, Thermometer } from "lucide-react";
import heroInstall from "@/assets/hero-installation-renovation.jpg";
import imgChaudiere from "@/assets/card-chaudiere-condensation.jpg";
import imgPAC from "@/assets/card-pompe-chaleur-facade.jpg";
import imgWC from "@/assets/card-wc-suspendu.jpg";
import imgRobinet from "@/assets/card-pose-robinetterie.jpg";
import imgGranules from "@/assets/card-chaudiere-granules.jpg";
import imgPlancher from "@/assets/card-plancher-chauffant.jpg";
import imgRadiateur from "@/assets/card-radiateur-thermostat.jpg";
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
        backgroundImage={heroInstall}
        backgroundImageAlt="Salle de bain rénovée par Artisan Saint Louis dans un appartement parisien avec marbre, vasque sur plan en bois et robinetterie laiton"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Installation & Rénovation" }]}
        badge={{ label: "Installation & Rénovation", icon: <Hammer className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Installation & Rénovation à <span className="text-gradient-brand">Paris</span> — plomberie & chauffage
          </>
        }
        hook="Pose neuve, remplacement ou rénovation complète : votre artisan plombier-chauffagiste à Paris vous accompagne du plan au démarrage. Devis détaillé, accompagnement aides MaPrimeRénov', garantie décennale."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Aides MaPrimeRénov'", variant: "serviceOrange", icon: <Leaf className="h-3.5 w-3.5" /> },
          { label: "Intervention rapide", variant: "serviceCyan", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      {/* QuickAnswer déplacé après ServicesGrid */}

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
            image: imgWC,
            imageAlt: "Salle de bain moderne avec WC suspendu et vasque sur plan en bois rénovée par Artisan Saint Louis à Paris",
            stat: { value: "Clé en main", label: "Du plan à la pose" },
          },
          {
            icon: Droplets,
            badge: "Plomberie",
            badgeVariant: "serviceCyan",
            title: "Pose sanitaires & robinetterie",
            description: "WC suspendus, douches, baignoires, vasques, mitigeurs thermostatiques toutes marques.",
            features: ["WC suspendus & au sol", "Cabines & receveurs", "Robinetterie thermostatique"],
            image: imgRobinet,
            imageAlt: "Pose d'un mitigeur chromé sur une vasque par un plombier d'Artisan Saint Louis dans une salle de bain à Paris",
            stat: { value: "Toutes marques", label: "Grohe, Hansgrohe…" },
          },
          {
            icon: Flame,
            badge: "Chauffage",
            badgeVariant: "serviceOrange",
            title: "Chaudière gaz à condensation",
            description: "La référence en rénovation : compacte, performante, éligible aux aides CEE et TVA réduite.",
            features: ["Haut rendement", "Compacte murale", "Aides CEE incluses"],
            image: imgChaudiere,
            imageAlt: "Chaudière gaz à condensation murale blanche installée à Paris par Artisan Saint Louis avec raccordement cuivre",
            stat: { value: "TVA 5,5 %", label: "Travaux d'amélioration" },
          },
          {
            icon: Wind,
            badge: "Chauffage",
            badgeVariant: "serviceEmerald",
            title: "Pompe à chaleur air/eau",
            description: "Énergie renouvelable, éligible MaPrimeRénov'. Idéal en maison ou immeuble bien isolé.",
            features: ["Énergie renouvelable", "MaPrimeRénov' éligible", "Chauffage + ECS"],
            image: imgPAC,
            imageAlt: "Pompe à chaleur air-eau installée sur la façade d'un immeuble parisien par Artisan Saint Louis",
            stat: { value: "MaPrimeRénov'", label: "Aides cumulables" },
          },
          {
            icon: Leaf,
            badge: "Chauffage",
            badgeVariant: "serviceViolet",
            title: "Chaudière à granulés (pellets)",
            description: "Énergie biomasse renouvelable, autonomie élevée, parfait pour maisons avec espace de stockage.",
            features: ["Combustible local", "Autonomie élevée", "Aides MaPrimeRénov'"],
            image: imgGranules,
            imageAlt: "Chaudière à granulés de bois (pellets) installée par Artisan Saint Louis dans une maison de banlieue parisienne",
            stat: { value: "Biomasse", label: "Énergie verte" },
          },
          {
            icon: Thermometer,
            badge: "Chauffage",
            badgeVariant: "serviceAmber",
            title: "Radiateurs & plancher chauffant",
            description: "Pose et remplacement de radiateurs eau chaude et plancher chauffant hydraulique basse température.",
            features: ["Radiateurs alu / fonte", "Plancher chauffant", "Régulation pièce par pièce"],
            image: imgPlancher,
            imageAlt: "Plancher chauffant hydraulique en cours d'installation par Artisan Saint Louis avec tubes PER rouges",
            stat: { value: "Basse temp.", label: "Confort homogène" },
          },
        ]}
      />

      <QuickAnswer
        question="Que comprend une installation plomberie ou chauffage à Paris ?"
        answer="Une installation à Paris (et en Île-de-France) couvre la pose neuve ou le remplacement complet de vos équipements : en plomberie — sanitaires (WC, douche, baignoire), robinetterie, réseau cuivre/multicouche, salle de bain ; en chauffage — chaudière gaz à condensation, pompe à chaleur, chaudière à granulés, radiateurs, plancher chauffant. Artisan Saint Louis étudie votre logement (appartement haussmannien, immeuble récent, maison de banlieue), dimensionne, pose, met en service et garantit l'installation 10 ans."
      />

      <UseCasesSection
        title="Dans quels cas faire appel à nous pour une installation ?"
        cases={[
          {
            title: "Vous rénovez votre salle de bain",
            description: "Refaire à neuf une salle de bain demande coordination, savoir-faire et respect des normes d'étanchéité.",
            image: imgWC,
            imageAlt: "Salle de bain rénovée à Paris avec WC suspendu et carrelage gris large format",
            badge: "Sur-mesure",
          },
          {
            title: "Votre chaudière a plus de 15 ans",
            description: "Au-delà, le rendement chute et les pannes se multiplient : le remplacement devient économiquement justifié.",
            image: imgChaudiere,
            imageAlt: "Remplacement de chaudière ancienne par un modèle gaz à condensation à Paris",
            badge: "Remplacement",
          },
          {
            title: "Vous construisez ou rénovez en profondeur",
            description: "Étude thermique, dimensionnement, pose et mise en service d'un système plomberie + chauffage complet.",
            image: imgPlancher,
            imageAlt: "Chantier de rénovation lourde avec plancher chauffant hydraulique en pose",
            badge: "Clé en main",
          },
          {
            title: "Vous changez vos sanitaires",
            description: "Remplacement WC, douche, baignoire, robinetterie : intervention propre et rapide en appartement parisien.",
            image: imgRobinet,
            imageAlt: "Remplacement de robinetterie sur une vasque par Artisan Saint Louis à Paris",
            badge: "Propre & rapide",
          },
          {
            title: "Vous voulez réduire vos consommations",
            description: "Passage à la pompe à chaleur, chaudière condensation ou granulés : accompagnement aides MaPrimeRénov'.",
            image: imgPAC,
            imageAlt: "Pompe à chaleur installée pour réduire la consommation énergétique d'un logement parisien",
            badge: "MaPrimeRénov'",
          },
          {
            title: "Vous achetez un bien ancien",
            description: "Diagnostic complet et mise aux normes plomberie + chauffage avant d'emménager.",
            image: imgRadiateur,
            imageAlt: "Diagnostic de l'installation de chauffage d'un bien ancien par Artisan Saint Louis à Paris",
            badge: "Mise aux normes",
          },
        ]}
      />

      <FAQSection
        title="FAQ — Installation & Rénovation"
        faqs={[
          { q: "Quelles aides financières puis-je obtenir ?", a: "Plusieurs dispositifs cumulables existent : MaPrimeRénov' (selon revenus et équipement), CEE Coup de pouce chauffage, TVA réduite à 5,5 % et éco-PTZ. Nous montons gratuitement votre dossier d'aides en fonction de votre situation." },
          { q: "Une pompe à chaleur est-elle adaptée à un appartement parisien ?", a: "En appartement parisien, la PAC air/air est souvent plus pertinente que la PAC air/eau, qui exige davantage de contraintes techniques (unité extérieure, réseau hydraulique). Nous étudions votre logement avant toute préconisation." },
          { q: "Combien de temps prend une installation ?", a: "Un remplacement de chaudière à l'identique : environ 1 jour. Une PAC complète avec ballon ECS : 2 à 4 jours. Une rénovation de salle de bain complète : 5 à 12 jours selon l'ampleur des travaux et la coordination des corps de métier." },
          { q: "Garantissez-vous vos installations ?", a: "Oui, tous nos travaux bénéficient de la garantie décennale (10 ans pour les éléments structurels et l'étanchéité), de la garantie biennale (2 ans pour les équipements) et de la garantie de parfait achèvement (1 an)." },
          { q: "Travaillez-vous avec quelles marques ?", a: "Nous travaillons avec les marques reconnues du marché : Grohe, Hansgrohe, Geberit (sanitaires), Saunier Duval, Viessmann, Bosch, Daikin, Atlantic (chauffage). Nous adaptons les équipements à votre projet et budget." },
          { q: "Intervenez-vous en copropriété ?", a: "Oui, nous gérons les démarches techniques en copropriété (conformité, ventilation, évacuations) et fournissons les documents nécessaires au syndic. Nous travaillons aussi bien dans l'ancien que dans le neuf." },
        ]}
        meshLinks={[
          { question: "Que faire en cas de fuite urgente après une installation ?", href: content.routes.depannage, pageLabel: "Dépannage urgent" },
          { question: "L'entretien annuel chaudière est-il vraiment obligatoire ?", href: content.routes.entretien, pageLabel: "Entretien" },
          { question: "Voir tous les services Artisan Saint Louis", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Un projet d'installation à Paris ou en banlieue ?"
        subtitle="Devis gratuit, accompagnement aides, conseil honnête : appelez votre artisan plombier-chauffagiste."
      />
    </PageLayout>
  );
};

export default InstallationRenovation;
