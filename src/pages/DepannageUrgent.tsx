import { AlertTriangle, Droplet, Phone, Clock, Shield, Zap, Search, Wrench, Flame, Award } from "lucide-react";
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

const DepannageUrgent = () => {
  const url = `${ORIGIN}${content.routes.depannage}`;

  useSEO({
    title: "Dépannage plomberie & chauffage urgent à Paris — 7j/7 24h/24",
    description:
      "Plombier & chauffagiste urgentiste à Paris et Île-de-France : fuite, panne chaudière, débouchage, dégât des eaux. Intervention rapide 7j/7. Devis transparent.",
    keywords:
      "dépannage plomberie Paris, chauffagiste urgence Paris, fuite eau Paris, panne chaudière 75, plombier 24h Paris, débouchage canalisation Île-de-France",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Dépannage urgent", url },
    ]),
    serviceSchema(
      "Dépannage plomberie & chauffage urgent",
      "Service de dépannage 7j/7 24h/24 à Paris et en Île-de-France : fuite d'eau, panne chaudière, débouchage, dégât des eaux, plus d'eau chaude.",
      "Dépannage urgent",
    ),
    speakableSchema(url, "Dépannage urgent à Paris"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="depannage"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Dépannage urgent" }]}
        badge={{ label: "Urgence 7j/7 — 24h/24", icon: <AlertTriangle className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Dépannage <span className="text-gradient-brand">urgent</span> à Paris — plomberie & chauffage 7j/7
          </>
        }
        hook="Fuite d'eau, chaudière en panne, canalisation bouchée, plus d'eau chaude ? Notre plombier-chauffagiste urgentiste intervient sous 1 à 2 heures à Paris et en Île-de-France. Tarifs annoncés, pas de surcoût caché."
        trustBadges={[
          { label: "Intervention < 2h", variant: "serviceRose", icon: <Clock className="h-3.5 w-3.5" /> },
          { label: "7j/7 — 24h/24", variant: "serviceOrange", icon: <Phone className="h-3.5 w-3.5" /> },
          { label: "Devis avant intervention", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Garantie 2 ans", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Qui appeler en urgence pour une fuite ou une chaudière en panne à Paris ?"
        answer="En cas de fuite d'eau ou de panne de chaudière à Paris ou en Île-de-France, fermez d'abord le robinet général d'arrivée d'eau (ou la vanne gaz si nécessaire), puis appelez Artisan Saint Louis au 06 12 34 56 78. Notre plombier-chauffagiste urgentiste intervient en 1 à 2 heures, 7 jours sur 7, 24 heures sur 24, dans Paris intra-muros et toute la banlieue. Diagnostic immédiat, tarif annoncé avant toute réparation, pas de surcoût caché — même la nuit ou le dimanche."
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

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Service d'urgence</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Plombier & chauffagiste urgentiste à Paris : intervention rapide, prix annoncé
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Une fuite d'eau peut transformer un appartement parisien en sinistre en quelques heures : parquet gonflé, plâtre détérioré, voisin du dessous inondé, déclaration d'assurance. Une chaudière en panne en plein hiver, c'est plus d'eau chaude, plus de chauffage, et un confort qui s'écroule. <strong className="text-foreground">Chaque minute compte</strong>. Artisan Saint Louis met à votre disposition un service d'urgence plomberie & chauffage 7j/7 sur Paris et toute l'Île-de-France.
              </p>
              <p>
                Contrairement aux dépanneurs « pirates » qui rôdent autour des urgences parisiennes, nous sommes un <strong className="text-foreground">artisan déclaré, identifiable, assuré</strong>, basé à Paris centre. Pas d'arnaque au kilométrage, pas de surcoût week-end abusif, pas de pièces gonflées. Notre principe : prix annoncé au téléphone, devis remis sur place avant toute intervention, paiement après réparation.
              </p>
              <p>
                Nos camions ateliers sont équipés en permanence des pièces les plus courantes — joints, raccords, flexibles, mécanismes de chasse, vannes, pièces détachées chaudières (Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant) — ce qui nous permet de <strong className="text-foreground">résoudre 90 % des urgences au premier passage</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos urgences"
        title="Plomberie & chauffage : les pannes que nous résolvons en express"
        services={[
          {
            icon: Droplet,
            badge: "Plomberie",
            badgeVariant: "serviceRose",
            title: "Fuite d'eau & dégât des eaux",
            description: "Identification immédiate, isolation de la zone, réparation et constat pour votre assurance.",
            features: ["Localisation rapide", "Réparation immédiate", "Constat assurance"],
          },
          {
            icon: Wrench,
            badge: "Plomberie",
            badgeVariant: "serviceOrange",
            title: "Débouchage canalisation & WC",
            description: "Évier, douche, WC, baignoire bouchés ? Curage mécanique ou hydrocurage selon le cas.",
            features: ["Furet manuel & électrique", "Hydrocurage haute pression", "Sans démontage"],
          },
          {
            icon: Search,
            badge: "Plomberie",
            badgeVariant: "serviceCyan",
            title: "Recherche de fuite non destructive",
            description: "Caméra thermique, gaz traceur, corrélation acoustique : on trouve la fuite sans casser.",
            features: ["Caméra thermique", "Gaz traceur", "Rapport assurance"],
          },
          {
            icon: Flame,
            badge: "Chauffage",
            badgeVariant: "serviceAmber",
            title: "Chaudière en panne / mise en sécurité",
            description: "Code erreur, plus de chauffage, mise en sécurité : diagnostic et réparation toutes marques.",
            features: ["Toutes marques", "Pièces en stock", "Intervention < 24h"],
          },
          {
            icon: Zap,
            badge: "Chauffage",
            badgeVariant: "serviceViolet",
            title: "Plus d'eau chaude",
            description: "Chaudière, ballon, cumulus : diagnostic rapide pour rétablir l'eau chaude sanitaire.",
            features: ["Test ballon ECS", "Échangeur entartré", "Sonde / thermostat"],
          },
          {
            icon: AlertTriangle,
            badge: "Chauffage",
            badgeVariant: "serviceBlue",
            title: "Radiateur froid ou qui fuit",
            description: "Purge, équilibrage, remplacement de robinet thermostatique, raccord qui fuit.",
            features: ["Purge & équilibrage", "Robinet thermostatique", "Réparation fuite"],
          },
        ]}
      />

      <UseCasesSection
        title="Quand appeler un dépanneur d'urgence ?"
        cases={[
          { title: "Fuite visible (jet, suintement)", description: "Coupez l'arrivée d'eau générale et appelez immédiatement. Plus vous attendez, plus les dégâts s'aggravent.", urgent: true },
          { title: "Plus du tout d'eau", description: "Vérifiez le compteur. Si rien d'anormal, le problème est interne — appelez sans attendre.", urgent: true },
          { title: "Chaudière en sécurité, plus de chauffage", description: "Code erreur, voyant rouge, redémarrage impossible : nous intervenons sur toutes marques.", urgent: true },
          { title: "Plus d'eau chaude", description: "Ballon, cumulus, chaudière : diagnostic rapide et réparation souvent au premier passage.", urgent: true },
          { title: "WC ou évier débordant", description: "Bouchon profond ou problème d'évacuation : intervention nécessaire pour éviter le débordement." },
          { title: "Trace d'humidité, odeur de gaz", description: "Fuite probable ou problème gaz. Coupez les arrivées concernées et appelez immédiatement." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="FAQ — Dépannage urgent"
        faqs={[
          { q: "Combien coûte un dépannage en urgence à Paris ?", a: "Le tarif d'une intervention d'urgence en journée se situe entre 90 et 180 € HT pour le déplacement et la première heure, hors pièces. La nuit, le week-end et les jours fériés, une majoration de 30 à 50 % s'applique. Nous annonçons toujours le tarif AVANT le déplacement, par téléphone." },
          { q: "Combien de temps pour intervenir en urgence ?", a: "Sur Paris intra-muros et la petite couronne, nos délais d'intervention en urgence sont compris entre 30 minutes et 2 heures. En grande couronne (77, 78, 91, 95), comptez 1h30 à 3 heures selon le trafic." },
          { q: "Que faire en attendant le plombier en cas de fuite ?", a: "1) Coupez l'arrivée d'eau générale (vanne près du compteur). 2) Coupez l'électricité dans la zone si l'eau s'approche d'une prise. 3) Épongez et protégez vos meubles. 4) Photographiez les dégâts pour votre assurance. 5) Appelez-nous." },
          { q: "Que faire si ma chaudière se met en sécurité ?", a: "1) Notez le code erreur affiché. 2) Vérifiez la pression d'eau (si < 1 bar, complétez via le robinet de remplissage). 3) Tentez un seul réarmement. 4) Si la chaudière se remet en sécurité, ne forcez plus : appelez-nous, nous diagnostiquons le défaut." },
          { q: "Êtes-vous remboursé par l'assurance habitation ?", a: "Oui, dans le cadre d'un dégât des eaux, votre assurance habitation prend généralement en charge la recherche de fuite et les réparations consécutives. Nous fournissons un rapport d'intervention détaillé pour votre dossier." },
          { q: "Intervenez-vous la nuit, dimanche et jours fériés ?", a: "Oui, notre service d'urgence est disponible 24h/24, 7j/7, y compris dimanches et jours fériés. Une majoration tarifaire s'applique mais reste raisonnable et toujours annoncée à l'avance." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Quel équipement installer en remplacement urgent ?", href: content.routes.installation, pageLabel: "Installation & Rénovation" },
          { question: "Comment éviter les pannes via un contrat d'entretien ?", href: content.routes.entretien, pageLabel: "Entretien" },
          { question: "Voir l'ensemble de nos services", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Une urgence à Paris ? Une seconde compte."
        subtitle="Coupez l'eau ou le gaz, appelez-nous : intervention rapide, devis annoncé, réparation soignée."
      />
    </PageLayout>
  );
};

export default DepannageUrgent;
