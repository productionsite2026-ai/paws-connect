import { Droplets, Award, Clock, Shield, Wrench, Flame, Hammer, Recycle, MapPin, Users, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    title: "Artisant Saint Louis — Plombier & Chauffagiste à Saint-Louis (68300)",
    description:
      "Artisan plombier chauffagiste à Saint-Louis 68300 : dépannage 7j/7, installation chaudière, entretien. Devis gratuit en 60s. Intervention rapide en Sud-Alsace.",
    keywords:
      "plombier Saint-Louis, chauffagiste Saint-Louis 68300, dépannage plomberie urgence, installation chaudière Sud-Alsace, entretien chaudière annuel, artisan plombier Huningue",
    canonicalUrl: `${ORIGIN}/`,
  });

  useJsonLd([
    localBusinessSchema,
    breadcrumbSchema([{ name: "Accueil", url: `${ORIGIN}/` }]),
    speakableSchema(`${ORIGIN}/`, "Artisant Saint Louis — Plombier & Chauffagiste"),
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
        badge={{ label: "Artisan certifié — Sud-Alsace", icon: <Award className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Plombier & Chauffagiste à <span className="text-gradient-brand">Saint-Louis</span> — intervention rapide 7j/7
          </>
        }
        hook="Artisant Saint Louis : votre expert local en plomberie, dépannage urgence, installation et entretien de chauffage. Devis gratuit, intervention sous 24h, garantie décennale."
        trustBadges={[
          { label: "Devis gratuit", variant: "serviceBlue", icon: <Shield className="h-3.5 w-3.5" /> },
          { label: "Urgence 7j/7", variant: "serviceRose", icon: <Clock className="h-3.5 w-3.5" /> },
          { label: "Artisan local certifié", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Garantie décennale", variant: "serviceOrange", icon: <Shield className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="Qui appeler pour une fuite ou une panne de chaudière à Saint-Louis ?"
        answer="Pour une fuite d'eau, un dégât des eaux, une chaudière en panne ou tout besoin urgent en plomberie ou chauffage à Saint-Louis (68300) et alentours, contactez Artisant Saint Louis au 06 12 34 56 78. Plombier-chauffagiste local certifié, nous intervenons 7 jours sur 7, avec un diagnostic gratuit et un devis transparent avant toute réparation."
      />

      {/* Présentation */}
      <section className="py-16 md:py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <Badge variant="accentSoft" className="mb-3">À propos</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Votre artisan plombier-chauffagiste de proximité à Saint-Louis
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Implantés au cœur du Sud-Alsace, nous intervenons sur l'ensemble du bassin de Saint-Louis (68300), Huningue, Village-Neuf, Hégenheim, Hésingue, Bartenheim et Sierentz. Notre équipe d'artisans qualifiés cumule plus de 15 ans d'expérience en <strong>plomberie sanitaire</strong>, <strong>dépannage urgent</strong>, <strong>installation de chaudière</strong> (gaz, fioul, granulés, pompe à chaleur) et <strong>entretien annuel</strong> obligatoire.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nous croyons à un artisanat honnête : devis détaillé avant intervention, prix annoncés respectés, conseils personnalisés et garantie décennale sur tous nos travaux. Notre objectif : vous éviter les mauvaises surprises et faire durer vos installations.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Users, label: "+1 200", desc: "Clients satisfaits" },
                  { icon: ThumbsUp, label: "98 %", desc: "Satisfaction" },
                  { icon: MapPin, label: "20 km", desc: "Rayon d'action" },
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
                { icon: Droplets, title: "Plomberie sanitaire", color: "bg-service-blue/10 text-service-blue" },
                { icon: Wrench, title: "Dépannage urgent", color: "bg-service-rose/10 text-service-rose" },
                { icon: Flame, title: "Chaudières & PAC", color: "bg-service-orange/10 text-service-orange" },
                { icon: Recycle, title: "Entretien annuel", color: "bg-service-emerald/10 text-service-emerald" },
                { icon: Hammer, title: "Rénovation", color: "bg-service-violet/10 text-service-violet" },
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
        eyebrow="Nos expertises"
        title="Une équipe, 5 expertises clés"
        subtitle="Plomberie, dépannage, chauffage : un seul interlocuteur pour tous vos besoins."
        services={[
          {
            icon: Droplets,
            badge: "Plomberie générale",
            badgeVariant: "serviceBlue",
            title: "Plomberie générale",
            description: "Installation et rénovation sanitaire complète : robinetterie, WC, douches, canalisations, raccordements.",
            features: ["Pose sanitaires neufs", "Rénovation complète", "Détection de fuite"],
          },
          {
            icon: Wrench,
            badge: "Dépannage",
            badgeVariant: "serviceRose",
            title: "Dépannage plomberie",
            description: "Intervention rapide pour fuites, débouchages, dégâts des eaux et urgences sanitaires 7j/7.",
            features: ["Urgence 24h/7j", "Débouchage canalisation", "Recherche fuite non destructive"],
          },
          {
            icon: Flame,
            badge: "Chauffage neuf",
            badgeVariant: "serviceOrange",
            title: "Chauffagiste — Installation",
            description: "Installation de chaudières gaz, fioul, granulés, pompes à chaleur et radiateurs.",
            features: ["Chaudière condensation", "Pompe à chaleur", "Plancher chauffant"],
          },
          {
            icon: Recycle,
            badge: "Entretien annuel",
            badgeVariant: "serviceEmerald",
            title: "Chauffagiste — Entretien",
            description: "Maintenance annuelle obligatoire, contrats sur-mesure, réparation tous types de chaudières.",
            features: ["Entretien annuel certifié", "Contrats maintenance", "Pièces d'origine"],
          },
          {
            icon: Hammer,
            badge: "Rénovation",
            badgeVariant: "serviceViolet",
            title: "Rénovation salle de bain",
            description: "Conception et rénovation complète de salles de bain et cuisines, du plan à la pose.",
            features: ["Étude personnalisée", "Coordination corps de métier", "Garantie décennale"],
          },
          {
            icon: Shield,
            badge: "Mise aux normes",
            badgeVariant: "serviceAmber",
            title: "Mise aux normes gaz / sécurité",
            description: "Diagnostic et mise en conformité de vos installations gaz et sanitaires.",
            features: ["Certificat de conformité", "Diagnostic obligatoire", "Sécurisation"],
          },
        ]}
      />

      <UseCasesSection
        title="Dans quels cas faire appel à nous ?"
        cases={[
          { title: "Fuite ou dégât des eaux", description: "Une canalisation perce, un joint lâche, vous voyez de l'eau là où il ne faut pas : intervention prioritaire pour limiter les dégâts.", urgent: true },
          { title: "Plus d'eau chaude", description: "Votre chaudière ou cumulus ne produit plus d'eau chaude ? Diagnostic rapide et réparation souvent immédiate.", urgent: true },
          { title: "Chaudière en panne", description: "Code erreur, mise en sécurité, ne démarre plus : nous intervenons sur toutes marques (Saunier Duval, Viessmann, Bosch, De Dietrich…).", urgent: true },
          { title: "Installation neuve", description: "Construction, rénovation, remplacement de chaudière : étude personnalisée et devis détaillé." },
          { title: "Entretien annuel obligatoire", description: "L'entretien de votre chaudière gaz est obligatoire chaque année. Contrat sur-mesure ou intervention ponctuelle." },
          { title: "Mise aux normes", description: "Mise en conformité gaz, raccordement aux réseaux, certification : nous vous accompagnons." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="Vos questions sur la plomberie & le chauffage à Saint-Louis"
        subtitle="Délais, tarifs, garanties : tout ce qu'il faut savoir avant d'appeler un artisan."
        faqs={[
          { q: "Combien coûte un plombier à Saint-Louis ?", a: "Le tarif d'un plombier à Saint-Louis dépend de la nature de l'intervention. Comptez en moyenne 60 à 90 € HT/h pour une intervention courante, hors pièces. Chez Artisant Saint Louis, le devis est toujours gratuit et le déplacement offert pour toute intervention validée." },
          { q: "Intervenez-vous en urgence le week-end ?", a: "Oui, nous assurons un service d'urgence 7j/7 pour les fuites, les pannes de chaudière et les dégâts des eaux. Appelez le 06 12 34 56 78, nous décrochons même la nuit pour les situations critiques." },
          { q: "Faut-il faire entretenir sa chaudière chaque année ?", a: "Oui, l'entretien annuel d'une chaudière gaz, fioul ou bois est légalement obligatoire en France (décret 2009-649). Cela garantit votre sécurité, prolonge la durée de vie de l'équipement de 30 à 50 % et maintient les garanties constructeur." },
          { q: "Quelles marques de chaudière installez-vous ?", a: "Nous installons et entretenons les principales marques du marché : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Chappée. Nous sommes formés sur les chaudières à condensation, pompes à chaleur et systèmes hybrides." },
          { q: "Êtes-vous certifié et assuré ?", a: "Oui, Artisant Saint Louis dispose de la certification professionnelle, de l'assurance responsabilité civile et de la garantie décennale pour tous nos travaux. Nos devis incluent systématiquement ces mentions légales." },
          { q: "Quelle zone géographique couvrez-vous ?", a: "Nous intervenons à Saint-Louis (68300), Huningue, Village-Neuf, Hégenheim, Hésingue, Bartenheim, Sierentz et toute la bande rhénane du Sud-Alsace dans un rayon de 20 km autour de Saint-Louis." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Comment réparer une fuite de canalisation rapidement ?", href: content.routes.depannage, pageLabel: "Dépannage", },
          { question: "Quel chauffage choisir : gaz, PAC ou granulés ?", href: content.routes.chauffageInstall, pageLabel: "Chauffage installation" },
          { question: "Quand faire l'entretien de sa chaudière ?", href: content.routes.chauffageEntretien, pageLabel: "Chauffage entretien" },
          { question: "Que comprend une rénovation de salle de bain complète ?", href: content.routes.plomberie, pageLabel: "Plomberie générale" },
        ]}
      />

      <FinalCTA />
    </PageLayout>
  );
};

export default Index;
