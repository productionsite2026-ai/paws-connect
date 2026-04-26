import { Droplets, Award, Clock, Shield, Wrench, Flame, Hammer, Recycle, MapPin, Users, ThumbsUp } from "lucide-react";
import installationImg from "@/assets/installation-chaudiere-paris.jpg";
import depannageImg from "@/assets/depannage-urgence-paris.jpg";
import entretienImg from "@/assets/entretien-chaudiere-annuel.jpg";
import fuiteImg from "@/assets/fuite-plomberie-paris.jpg";
import bainImg from "@/assets/renovation-salle-bain.jpg";
import pacImg from "@/assets/pompe-chaleur-paris.jpg";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import HeroWithForm from "@/components/HeroWithForm";
import QuickAnswer from "@/components/QuickAnswer";
import ServicesGrid from "@/components/ServicesGrid";
import UseCasesSection from "@/components/UseCasesSection";
import InterventionsSection from "@/components/InterventionsSection";
import FAQSection from "@/components/FAQSection";
import FAQMeshSection from "@/components/FAQMeshSection";
import FinalCTA from "@/components/FinalCTA";
import { Badge } from "@/components/ui/badge";
import { useSEO, useJsonLd } from "@/hooks/useSEO";
import { content } from "@/data/content";
import { localBusinessSchema, breadcrumbSchema, speakableSchema, ORIGIN } from "@/lib/schemas";
import { fadeUp, staggerItem } from "@/lib/animations";

const Index = () => {
  useSEO({
    title: "Artisan Saint Louis — Plombier & Chauffagiste à Paris & Île-de-France",
    description:
      "Plombier chauffagiste à Paris centre & toute l'Île-de-France : installation & rénovation, dépannage 7j/7, entretien chaudière. Devis gratuit en 60s.",
    keywords:
      "plombier Paris, chauffagiste Paris, dépannage plomberie urgence Paris, installation chaudière Île-de-France, entretien chaudière annuel Paris, artisan plombier banlieue",
    canonicalUrl: `${ORIGIN}/`,
  });

  useJsonLd([
    localBusinessSchema,
    breadcrumbSchema([{ name: "Accueil", url: `${ORIGIN}/` }]),
    speakableSchema(`${ORIGIN}/`, "Artisan Saint Louis — Plombier & Chauffagiste Paris"),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: content.company.name,
      url: ORIGIN,
      potentialAction: {
        "@type": "SearchAction",
        target: `${ORIGIN}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        badge={{ label: "Artisan certifié — Paris & Île-de-France", icon: <Award className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Plombier & Chauffagiste à <span className="text-gradient-brand">Paris</span> — intervention 7j/7 partout en Île-de-France
          </>
        }
        hook="Artisan Saint Louis : votre expert local en installation & rénovation, dépannage urgent et entretien plomberie-chauffage. Paris centre et toute la banlieue. Devis gratuit, intervention sous 24h, garantie décennale."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Urgence 7j/7", variant: "serviceRose", icon: <Clock className="h-3.5 w-3.5" /> },
          { label: "Artisan parisien certifié", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceOrange", icon: <Shield className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Qui appeler pour une fuite, une panne de chaudière ou une installation à Paris ?"
        answer="Pour toute intervention plomberie ou chauffage à Paris et en Île-de-France — fuite d'eau, panne de chaudière, installation neuve, rénovation de salle de bain, entretien annuel obligatoire — contactez Artisan Saint Louis au 06 12 34 56 78. Plombier-chauffagiste local certifié basé à Paris centre, nous couvrons tous les arrondissements parisiens et toute la banlieue (92, 93, 94, 78, 91, 95, 77). Diagnostic gratuit, devis transparent avant toute intervention, urgences 7j/7 24h/24."
      />

      {/* Présentation */}
      <section className="py-16 md:py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <Badge variant="accentSoft" className="mb-3">À propos</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Votre artisan plombier-chauffagiste à Paris et en Île-de-France
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Implantés à Paris centre, nous intervenons sur l'ensemble de la capitale et de la banlieue (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines, Essonne, Val-d'Oise, Seine-et-Marne). Notre équipe d'artisans qualifiés cumule plus de 15 ans d'expérience en <strong>plomberie sanitaire</strong>, <strong>dépannage urgent</strong>, <strong>installation de chaudière</strong> (gaz, granulés, pompe à chaleur) et <strong>entretien annuel</strong> obligatoire.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nous croyons à un artisanat honnête : devis détaillé avant intervention, prix annoncés respectés, conseils personnalisés et garantie décennale sur tous nos travaux. Notre objectif : vous éviter les mauvaises surprises et faire durer vos installations.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Users, label: "+1 200", desc: "Clients satisfaits" },
                  { icon: ThumbsUp, label: "98 %", desc: "Satisfaction" },
                  { icon: MapPin, label: "Paris + IDF", desc: "Zone couverte" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="text-center p-4 rounded-xl bg-card border border-border">
                      <Icon className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="font-display font-bold text-xl text-foreground">{s.label}</div>
                      <div className="text-xs text-muted-foreground">{s.desc}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Hammer, title: "Installation & Rénovation", color: "bg-service-blue/10 text-service-blue" },
                { icon: Wrench, title: "Dépannage urgent", color: "bg-service-rose/10 text-service-rose" },
                { icon: Recycle, title: "Entretien annuel", color: "bg-service-emerald/10 text-service-emerald" },
                { icon: Droplets, title: "Plomberie sanitaire", color: "bg-service-cyan/10 text-service-cyan" },
                { icon: Flame, title: "Chaudières & PAC", color: "bg-service-orange/10 text-service-orange" },
                { icon: Award, title: "Mise aux normes", color: "bg-service-amber/10 text-service-amber" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    {...staggerItem(i)}
                    className="bg-card p-5 rounded-xl border border-border card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${s.color} mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm">{s.title}</h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos 3 services principaux"
        title="Installation, dépannage, entretien : un seul artisan"
        subtitle="Plomberie & chauffage couverts par 3 expertises complémentaires."
        services={[
          {
            icon: Hammer,
            badge: "Installation & Rénovation",
            badgeVariant: "serviceBlue",
            title: "Installation & Rénovation",
            description: "Pose neuve, remplacement et rénovation complète : salle de bain, sanitaires, chaudière, pompe à chaleur, radiateurs.",
            features: ["Plomberie sanitaire complète", "Chaudière, PAC, granulés", "Aides MaPrimeRénov' calculées"],
            image: installationImg,
            imageAlt: "Installation de chaudière gaz à condensation par un artisan plombier-chauffagiste à Paris",
            stat: { value: "+1 200", label: "Installations" },
          },
          {
            icon: Wrench,
            badge: "Dépannage",
            badgeVariant: "serviceRose",
            title: "Dépannage 7j/7 24h/24",
            description: "Intervention rapide pour fuites, dégâts des eaux, pannes chaudière, débouchage, plus d'eau chaude.",
            features: ["Urgence < 2h", "Plomberie + chauffage", "Devis annoncé avant intervention"],
            image: depannageImg,
            imageAlt: "Camion de dépannage plomberie d'urgence Artisan Saint Louis dans une rue de Paris la nuit",
            stat: { value: "< 2h", label: "Intervention" },
          },
          {
            icon: Recycle,
            badge: "Entretien",
            badgeVariant: "serviceEmerald",
            title: "Entretien & Maintenance",
            description: "Entretien annuel chaudière obligatoire, contrats de maintenance, ramonage, détartrage plomberie.",
            features: ["Attestation officielle", "Contrats sur-mesure", "Toutes marques"],
            image: entretienImg,
            imageAlt: "Technicien chauffagiste effectuant l'entretien annuel obligatoire d'une chaudière à Paris",
            stat: { value: "98 %", label: "Satisfaction" },
          },
        ]}
      />

      <UseCasesSection
        title="Dans quels cas faire appel à nous ?"
        cases={[
          {
            title: "Fuite ou dégât des eaux",
            description: "Une canalisation perce, un joint lâche : intervention prioritaire pour limiter les dégâts dans votre appartement parisien.",
            urgent: true,
            image: fuiteImg,
            imageAlt: "Plombier réparant une fuite d'évier de cuisine dans un appartement à Paris",
            stat: { value: "30 min", label: "Délai moyen" },
          },
          {
            title: "Plus d'eau chaude",
            description: "Votre chaudière ou cumulus ne produit plus d'eau chaude ? Diagnostic rapide et réparation souvent immédiate.",
            urgent: true,
            image: entretienImg,
            imageAlt: "Diagnostic d'une chaudière par un chauffagiste à Paris pour panne d'eau chaude",
            stat: { value: "7j/7", label: "Disponible" },
          },
          {
            title: "Chaudière en panne",
            description: "Code erreur, mise en sécurité, ne démarre plus : nous intervenons sur toutes marques (Saunier Duval, Viessmann, Bosch, De Dietrich…).",
            urgent: true,
            image: depannageImg,
            imageAlt: "Intervention d'urgence chauffagiste pour chaudière en panne à Paris",
            badge: "Toutes marques",
          },
          {
            title: "Rénovation salle de bain",
            description: "Salle de bain vieillissante ou peu pratique : conception sur-mesure, plomberie complète, pose de douche italienne, baignoire ou WC suspendu.",
            image: bainImg,
            imageAlt: "Salle de bain parisienne moderne rénovée avec douche italienne en marbre et robinetterie laiton",
            badge: "Sur-mesure",
            stat: { value: "Devis gratuit", label: "En 48h" },
          },
          {
            title: "Installation pompe à chaleur",
            description: "Remplacement chaudière fioul/gaz par une PAC air-eau : étude énergétique, calcul des aides MaPrimeRénov' et CEE inclus.",
            image: pacImg,
            imageAlt: "Pompe à chaleur air-eau installée sur la façade en pierre d'un immeuble parisien",
            badge: "MaPrimeRénov'",
            stat: { value: "-70 %", label: "Sur facture" },
          },
          {
            title: "Entretien annuel obligatoire",
            description: "L'entretien de votre chaudière gaz est obligatoire chaque année (décret 2009-649). Contrat sur-mesure ou intervention ponctuelle avec attestation officielle.",
            image: installationImg,
            imageAlt: "Entretien annuel obligatoire d'une chaudière gaz à condensation par Artisan Saint Louis",
            badge: "Obligatoire",
            stat: { value: "+30 %", label: "Durée de vie" },
          },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="Vos questions sur la plomberie & le chauffage à Paris"
        subtitle="Délais, tarifs, garanties : tout ce qu'il faut savoir avant d'appeler un artisan."
        faqs={[
          { q: "Combien coûte un plombier à Paris ?", a: "Le tarif d'un plombier à Paris dépend de la nature de l'intervention. Comptez en moyenne 80 à 120 € HT/h pour une intervention courante, hors pièces. Chez Artisan Saint Louis, le devis est toujours gratuit et le déplacement offert pour toute intervention validée." },
          { q: "Intervenez-vous en banlieue parisienne ?", a: "Oui, nous couvrons Paris intra-muros (tous arrondissements) et toute l'Île-de-France : Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Yvelines (78), Essonne (91), Val-d'Oise (95) et Seine-et-Marne (77)." },
          { q: "Intervenez-vous en urgence le week-end ?", a: "Oui, nous assurons un service d'urgence 7j/7 pour les fuites, les pannes de chaudière et les dégâts des eaux. Appelez le 06 12 34 56 78, nous décrochons même la nuit pour les situations critiques." },
          { q: "Faut-il faire entretenir sa chaudière chaque année ?", a: "Oui, l'entretien annuel d'une chaudière gaz, fioul ou bois est légalement obligatoire en France (décret 2009-649). Cela garantit votre sécurité, prolonge la durée de vie de l'équipement de 30 à 50 % et maintient les garanties constructeur." },
          { q: "Quelles marques de chaudière installez-vous ?", a: "Nous installons et entretenons les principales marques du marché : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Chappée. Nous sommes formés sur les chaudières à condensation, pompes à chaleur et systèmes hybrides." },
          { q: "Êtes-vous certifié et assuré ?", a: "Oui, Artisan Saint Louis dispose de la certification professionnelle, de l'assurance responsabilité civile et de la garantie décennale pour tous nos travaux. Nos devis incluent systématiquement ces mentions légales." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Comment se passe une installation ou rénovation complète ?", href: content.routes.installation, pageLabel: "Installation & Rénovation" },
          { question: "Comment réagir face à une fuite ou une chaudière en panne ?", href: content.routes.depannage, pageLabel: "Dépannage urgent" },
          { question: "Quand faire l'entretien annuel obligatoire ?", href: content.routes.entretien, pageLabel: "Entretien" },
        ]}
      />

      <FinalCTA />
    </PageLayout>
  );
};

export default Index;
