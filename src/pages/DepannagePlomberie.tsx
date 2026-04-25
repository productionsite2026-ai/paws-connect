import { AlertTriangle, Droplet, Phone, Clock, Shield, Zap, Search, Wrench, Snowflake, Award } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

const DepannagePlomberie = () => {
  const url = `${ORIGIN}${content.routes.depannage}`;

  useSEO({
    title: "Dépannage plomberie urgent à Saint-Louis (68300) — 7j/7 24h/24",
    description:
      "Plombier urgentiste à Saint-Louis : fuite d'eau, débouchage, dégât des eaux, chasse d'eau. Intervention rapide 7j/7. Prix annoncés, devis transparent.",
    keywords:
      "dépannage plomberie Saint-Louis, plombier urgence 68300, fuite d'eau, débouchage canalisation, dégât des eaux, plombier 24h Saint-Louis",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Dépannage plomberie", url },
    ]),
    serviceSchema(
      "Dépannage plomberie urgent",
      "Service de dépannage plomberie 7j/7 à Saint-Louis : fuite, débouchage, dégât des eaux, chasse d'eau.",
      "Plombier urgentiste",
    ),
    speakableSchema(url, "Dépannage plomberie urgent à Saint-Louis"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="depannage"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Dépannage plomberie" }]}
        badge={{ label: "Urgence 7j/7 — 24h/24", icon: <AlertTriangle className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Dépannage <span className="text-gradient-brand">plomberie urgent</span> à Saint-Louis — fuite, débouchage, dégât des eaux
          </>
        }
        hook="Une fuite, une canalisation bouchée, plus d'eau ? Notre plombier urgentiste intervient sous 1 à 2 heures à Saint-Louis et alentours. Tarifs transparents, pas de surcoût caché."
        trustBadges={[
          { label: "Intervention < 2h", variant: "serviceRose", icon: <Clock className="h-3.5 w-3.5" /> },
          { label: "7j/7 — 24h/24", variant: "serviceOrange", icon: <Phone className="h-3.5 w-3.5" /> },
          { label: "Devis avant intervention", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie 2 ans", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Qui appeler en urgence pour une fuite d'eau à Saint-Louis ?"
        answer="En cas de fuite d'eau urgente à Saint-Louis (68300), commencez par fermer le robinet général d'arrivée d'eau, puis appelez Artisant Saint Louis au 06 12 34 56 78. Notre plombier urgentiste intervient en 1 à 2 heures, 7 jours sur 7, 24 heures sur 24. Diagnostic immédiat, devis annoncé avant toute réparation, pas de surcoût caché — même la nuit ou le dimanche."
      />

      {/* Bandeau urgence */}
      <section className="py-8 bg-service-rose/10 border-y border-service-rose/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-service-rose text-white animate-pulse-ring">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-service-rose">Urgence ? Nous décrochons</p>
                <p className="font-display font-extrabold text-2xl text-foreground">{content.company.contact.phoneMobile}</p>
              </div>
            </div>
            <Button variant="accent" size="lg" asChild>
              <a href={`tel:${content.company.contact.mobileRaw}`}>Appeler maintenant</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Présentation détaillée */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Service d'urgence</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Plombier urgentiste à Saint-Louis : intervention rapide, prix annoncé
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Une fuite d'eau peut transformer votre logement en sinistre en quelques heures : sol gonflé, plâtre détérioré, voisins inondés, factures qui explosent. Chaque minute compte. Artisant Saint Louis met à votre disposition un <strong className="text-foreground">service d'urgence plomberie 7j/7</strong> sur Saint-Louis et l'ensemble du bassin de vie alsacien.
              </p>
              <p>
                Contrairement aux dépanneurs « pirates » qui rôdent autour des fuites, nous sommes un <strong className="text-foreground">artisan local installé à Saint-Louis</strong>, identifiable, déclaré, assuré. Pas d'arnaque au kilométrage, pas de surcoût week-end abusif, pas de pièces gonflées. Notre principe : prix annoncé au téléphone, devis remis sur place avant toute intervention, paiement après réparation.
              </p>
              <p>
                Nos camions ateliers sont équipés en permanence des pièces les plus courantes — joints, raccords, flexibles, mécanismes de chasse, vannes, tuyaux cuivre et multicouche — ce qui nous permet de <strong className="text-foreground">résoudre 90 % des urgences au premier passage</strong>, sans deuxième visite.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos urgences"
        title="Les pannes que nous résolvons en express"
        services={[
          {
            icon: Droplet,
            badge: "Fuite",
            badgeVariant: "serviceRose",
            title: "Fuite d'eau & dégât des eaux",
            description: "Identification immédiate, isolation de la zone, réparation et constat pour votre assurance.",
            features: ["Localisation rapide", "Réparation immédiate", "Constat assurance"],
          },
          {
            icon: Wrench,
            badge: "Débouchage",
            badgeVariant: "serviceOrange",
            title: "Débouchage canalisation",
            description: "Évier, douche, WC, baignoire bouchés ? Curage mécanique ou hydrocurage selon le cas.",
            features: ["Furet manuel & électrique", "Hydrocurage haute pression", "Sans démontage"],
          },
          {
            icon: Search,
            badge: "Diagnostic",
            badgeVariant: "serviceCyan",
            title: "Recherche de fuite non destructive",
            description: "Caméra thermique, gaz traceur, corrélation acoustique : on trouve la fuite sans casser.",
            features: ["Caméra thermique", "Gaz traceur", "Rapport assurance"],
          },
          {
            icon: Zap,
            badge: "Urgence",
            badgeVariant: "serviceViolet",
            title: "Plus d'eau ou plus de pression",
            description: "Coupure totale, baisse de pression : diagnostic compteur, vannes, ballon, surpresseur.",
            features: ["Vérif compteur & vannes", "Test surpresseur", "Réparation ou remplacement"],
          },
          {
            icon: Snowflake,
            badge: "Hiver",
            badgeVariant: "serviceBlue",
            title: "Canalisations gelées",
            description: "Dégel par méthode douce et contrôle d'éventuelles fissures dues au gel.",
            features: ["Dégel sécurisé", "Contrôle fissures", "Isolation préventive"],
          },
          {
            icon: AlertTriangle,
            badge: "Sécurité",
            badgeVariant: "serviceAmber",
            title: "WC bouché ou cassé",
            description: "Débouchage, remplacement de mécanisme, joint de cuvette, abattant.",
            features: ["Débouchage WC", "Mécanisme chasse d'eau", "Joint cuvette"],
          },
        ]}
      />

      <UseCasesSection
        title="Quand appeler un plombier d'urgence ?"
        cases={[
          { title: "Fuite visible (jet, suintement)", description: "Coupez l'arrivée d'eau générale et appelez immédiatement. Plus vous attendez, plus les dégâts s'aggravent.", urgent: true },
          { title: "Plus du tout d'eau", description: "Vérifiez le compteur. Si rien d'anormal, le problème est interne — appelez sans attendre.", urgent: true },
          { title: "WC ou évier débordant", description: "Bouchon profond ou problème d'évacuation : intervention nécessaire pour éviter le débordement.", urgent: true },
          { title: "Eau colorée ou nauséabonde", description: "Possible contamination du réseau interne : ne consommez pas, appelez un professionnel." },
          { title: "Bruit anormal dans les canalisations", description: "Coup de bélier, sifflement, vibration : symptôme d'un problème de pression ou de raccord." },
          { title: "Trace d'humidité au plafond", description: "Fuite probable chez le voisin du dessus ou dans la canalisation enterrée. Diagnostic à prévoir." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="FAQ — Dépannage plomberie urgent"
        faqs={[
          { q: "Combien coûte un dépannage plomberie en urgence à Saint-Louis ?", a: "Le tarif d'une intervention d'urgence en journée se situe entre 90 et 150 € HT pour le déplacement et la première heure, hors pièces. La nuit et le week-end, une majoration de 30 à 50 % s'applique. Nous annonçons toujours le tarif AVANT le déplacement, par téléphone." },
          { q: "Combien de temps pour intervenir en urgence ?", a: "Sur Saint-Louis et l'agglomération immédiate, nos délais d'intervention en urgence sont compris entre 30 minutes et 2 heures. En périphérie (Bartenheim, Sierentz), comptez jusqu'à 3 heures." },
          { q: "Que faire en attendant le plombier en cas de fuite ?", a: "1) Coupez l'arrivée d'eau générale (vanne près du compteur). 2) Coupez l'électricité dans la zone si l'eau s'approche d'une prise. 3) Épongez et protégez vos meubles. 4) Photographiez les dégâts pour votre assurance. 5) Appelez votre plombier." },
          { q: "Êtes-vous remboursé par l'assurance habitation ?", a: "Oui, dans le cadre d'un dégât des eaux, votre assurance habitation prend généralement en charge la recherche de fuite et les réparations consécutives. Nous fournissons un rapport d'intervention détaillé pour votre dossier." },
          { q: "Intervenez-vous la nuit et les jours fériés ?", a: "Oui, notre service d'urgence est disponible 24h/24, 7j/7, y compris dimanches et jours fériés. Une majoration tarifaire s'applique mais elle reste raisonnable et toujours annoncée." },
          { q: "Que faire si mon WC déborde ?", a: "Coupez immédiatement l'arrivée d'eau du WC (petit robinet à droite ou à gauche derrière la cuvette). N'utilisez plus aucune autre évacuation (douche, évier) qui pourrait aggraver le problème. Appelez-nous : intervention sous 1 à 2h." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Quels équipements sanitaires installer en rénovation ?", href: content.routes.plomberie, pageLabel: "Plomberie générale" },
          { question: "Ma chaudière ne démarre plus, est-ce une urgence ?", href: content.routes.chauffageEntretien, pageLabel: "Chauffage entretien" },
          { question: "Quelle chaudière choisir en remplacement urgent ?", href: content.routes.chauffageInstall, pageLabel: "Chauffage installation" },
          { question: "Voir l'ensemble de nos services", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Une urgence plomberie ? Une seconde compte."
        subtitle="Coupez l'eau, appelez-nous : intervention rapide, devis annoncé, réparation soignée."
      />
    </PageLayout>
  );
};

export default DepannagePlomberie;
