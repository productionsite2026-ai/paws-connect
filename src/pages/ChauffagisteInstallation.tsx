import { Flame, Wind, Leaf, Zap, Award, Shield, Clock, Wrench, Thermometer, Settings } from "lucide-react";
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

const ChauffagisteInstallation = () => {
  const url = `${ORIGIN}${content.routes.chauffageInstall}`;

  useSEO({
    title: "Chauffagiste installation & dépannage à Saint-Louis (68300) — Chaudière, PAC",
    description:
      "Installation et dépannage chauffage à Saint-Louis : chaudière gaz, condensation, pompe à chaleur, granulés. Devis gratuit, aides MaPrimeRénov'. Garantie décennale.",
    keywords:
      "chauffagiste Saint-Louis, installation chaudière 68300, pompe à chaleur Sud-Alsace, chaudière condensation, MaPrimeRénov, dépannage chaudière",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Chauffage — Installation", url },
    ]),
    serviceSchema(
      "Installation et dépannage de chauffage",
      "Installation de chaudières gaz, condensation, pompes à chaleur et granulés à Saint-Louis et en Sud-Alsace.",
      "Chauffagiste",
    ),
    speakableSchema(url, "Chauffagiste installation à Saint-Louis"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="chauffage_install"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Chauffagiste — Installation" }]}
        badge={{ label: "Installation neuve & dépannage", icon: <Flame className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Chauffagiste à <span className="text-gradient-brand">Saint-Louis</span> — installation & dépannage chaudière
          </>
        }
        hook="Chaudière gaz à condensation, pompe à chaleur, chaudière granulés : nous étudions votre projet, vous conseillons, posons et garantissons votre installation 10 ans. Aides MaPrimeRénov' calculées pour vous."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Aides MaPrimeRénov'", variant: "serviceOrange", icon: <Leaf className="h-3.5 w-3.5" /> },
          { label: "Dépannage 7j/7", variant: "serviceRose", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Quel chauffage installer en 2025 à Saint-Louis ?"
        answer="En 2025, le choix entre chaudière gaz à condensation, pompe à chaleur air/eau et chaudière à granulés dépend de votre logement, isolation et budget. À Saint-Louis (climat continental), la pompe à chaleur reste rentable en maison bien isolée ; la chaudière gaz condensation séduit en appartement ou rénovation rapide ; les granulés conviennent aux maisons individuelles avec espace de stockage. Artisant Saint Louis vous conseille gratuitement et calcule vos aides MaPrimeRénov' et CEE."
      />

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Notre métier</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Installation et dépannage de chauffage : un savoir-faire complet
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le chauffage représente <strong className="text-foreground">60 à 70 % de la facture énergétique</strong> d'un foyer. Le bon équipement, bien dimensionné et bien installé, c'est jusqu'à 40 % d'économies par an. Notre équipe de chauffagistes à Saint-Louis intervient sur l'ensemble du territoire sud-alsacien pour vous conseiller, installer et dépanner tous types de générateurs : chaudières gaz à condensation, chaudières fioul, pompes à chaleur air/eau et air/air, chaudières à granulés (pellets), systèmes hybrides.
              </p>
              <p>
                Nous travaillons exclusivement avec les <strong className="text-foreground">marques reconnues du marché</strong> : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Daikin, Mitsubishi, Hitachi, Atlantic, Auer. Cette polyvalence nous permet de vous orienter vers la solution la plus adaptée — pas la plus rentable pour nous, mais celle qui correspond réellement à votre logement, votre usage et votre budget.
              </p>
              <p>
                Côté <strong className="text-foreground">aides financières</strong>, nous prenons en charge le calcul et le montage de vos dossiers MaPrimeRénov', CEE (Coup de pouce chauffage), TVA réduite à 5,5 % et éco-prêt à taux zéro. Sur une installation de pompe à chaleur, les aides peuvent couvrir jusqu'à 50 % du coût total.
              </p>
              <p>
                Nous assurons aussi le <strong className="text-foreground">dépannage de votre chaudière</strong> en cas de panne : code erreur, mise en sécurité, eau chaude défaillante, bruit anormal. Nos techniciens diagnostiquent rapidement et réparent la plupart des pannes au premier passage, grâce aux pièces détachées en stock dans nos camions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos installations"
        title="Quel équipement choisir pour votre logement ?"
        services={[
          {
            icon: Flame,
            badge: "Gaz condensation",
            badgeVariant: "serviceOrange",
            title: "Chaudière gaz à condensation",
            description: "La référence en rénovation : compacte, performante, éligible aux aides. Idéal en appartement et maison reliée au gaz.",
            features: ["Rendement +15 % vs ancienne", "Compacte murale", "Éligible CEE & TVA 5,5 %"],
          },
          {
            icon: Wind,
            badge: "Pompe à chaleur",
            badgeVariant: "serviceCyan",
            title: "Pompe à chaleur air/eau",
            description: "Énergie renouvelable, rentable en maison bien isolée. Aides jusqu'à 50 % du coût total via MaPrimeRénov'.",
            features: ["COP 3,5 à 4,5", "MaPrimeRénov' jusqu'à 5 000 €", "Chauffage + ECS"],
          },
          {
            icon: Leaf,
            badge: "Granulés",
            badgeVariant: "serviceEmerald",
            title: "Chaudière à granulés (pellets)",
            description: "Énergie biomasse renouvelable, autonomie élevée, parfait pour maisons individuelles avec espace de stockage.",
            features: ["Combustible local", "Autonomie 1 à 2 semaines", "Aides MaPrimeRénov'"],
          },
          {
            icon: Zap,
            badge: "Hybride",
            badgeVariant: "serviceViolet",
            title: "Système hybride PAC + gaz",
            description: "Le meilleur des deux mondes : PAC en mi-saison, gaz en grand froid. Performance maximale toute l'année.",
            features: ["Optimisation auto", "Confort toute saison", "ROI rapide"],
          },
          {
            icon: Thermometer,
            badge: "Radiateurs",
            badgeVariant: "serviceBlue",
            title: "Radiateurs & plancher chauffant",
            description: "Pose et remplacement de radiateurs eau chaude, plancher chauffant hydraulique basse température.",
            features: ["Radiateurs alu / fonte", "Plancher chauffant", "Régulation pièce par pièce"],
          },
          {
            icon: Wrench,
            badge: "Dépannage",
            badgeVariant: "serviceRose",
            title: "Dépannage chaudière toutes marques",
            description: "Code erreur, mise en sécurité, fuite, bruit anormal : diagnostic et réparation rapide, toutes marques.",
            features: ["Toutes marques", "Pièces en stock", "Intervention < 24h"],
          },
        ]}
      />

      <UseCasesSection
        title="Dans quels cas faire appel à un chauffagiste ?"
        cases={[
          { title: "Votre chaudière a plus de 15 ans", description: "Au-delà, le rendement chute et les pannes se multiplient. Le remplacement devient économiquement justifié." },
          { title: "Vos factures explosent", description: "Une chaudière mal dimensionnée ou vieillissante peut coûter 30 % de plus qu'un équipement récent." },
          { title: "Construction neuve", description: "Étude thermique RE 2020, dimensionnement, pose et mise en service d'un système complet." },
          { title: "Rénovation énergétique", description: "Remplacement chaudière fioul, passage à la PAC, isolation : nous coordonnons et chiffrons les aides." },
          { title: "Chaudière en panne", description: "Code erreur, mise en sécurité, plus d'eau chaude : intervention rapide pour diagnostic et réparation.", urgent: true },
          { title: "Vente / achat immobilier", description: "Diagnostic complet de l'installation chauffage avant transaction. Rapport remis en main propre." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="FAQ — Installation chauffage"
        faqs={[
          { q: "Combien coûte l'installation d'une chaudière gaz à condensation ?", a: "Comptez entre 4 000 et 7 500 € TTC pose comprise pour une chaudière gaz à condensation murale 25 kW (marque reconnue, modèle standard). Avec les aides CEE et TVA 5,5 %, le reste à charge moyen tombe entre 3 000 et 5 500 €." },
          { q: "Une pompe à chaleur est-elle rentable à Saint-Louis ?", a: "Oui, à condition que le logement soit correctement isolé (RT 2012 ou rénovation énergétique). Le climat continental de Saint-Louis impose une PAC bien dimensionnée. Avec un COP saisonnier de 3,5 à 4,5 et MaPrimeRénov' jusqu'à 5 000 €, le retour sur investissement se fait en 7 à 10 ans." },
          { q: "Quelles aides financières puis-je obtenir ?", a: "Trois dispositifs cumulables : MaPrimeRénov' (selon revenus, jusqu'à 11 000 € pour PAC), CEE Coup de pouce chauffage (jusqu'à 5 000 €), TVA réduite à 5,5 % et éco-PTZ jusqu'à 50 000 € sans intérêts. Nous montons gratuitement votre dossier d'aides." },
          { q: "Puis-je remplacer ma chaudière fioul par une PAC ?", a: "Oui, et c'est même fortement encouragé : depuis juillet 2022, les chaudières fioul ne peuvent plus être installées en neuf. Le remplacement par une PAC ou chaudière biomasse est éligible à des aides bonifiées (jusqu'à 11 000 € de MaPrimeRénov')." },
          { q: "Combien de temps prend l'installation d'une chaudière ?", a: "Un remplacement de chaudière à l'identique prend en moyenne 1 jour. Une installation neuve avec modification du circuit prend 2 à 3 jours. Une PAC complète avec ballon ECS demande 2 à 4 jours selon la configuration." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "L'entretien annuel chaudière est-il obligatoire ?", href: content.routes.chauffageEntretien, pageLabel: "Chauffage entretien" },
          { question: "Que faire si ma chaudière fuit ?", href: content.routes.depannage, pageLabel: "Dépannage plomberie" },
          { question: "Comment intégrer un plancher chauffant en rénovation ?", href: content.routes.plomberie, pageLabel: "Plomberie générale" },
          { question: "Découvrir tous nos services", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Un projet de chauffage à Saint-Louis ?"
        subtitle="Étude gratuite, calcul des aides MaPrimeRénov' et CEE, devis détaillé sous 48h."
      />
    </PageLayout>
  );
};

export default ChauffagisteInstallation;
