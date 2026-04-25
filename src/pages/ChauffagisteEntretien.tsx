import { Recycle, FileCheck, Shield, Clock, Award, Wrench, Calendar, ClipboardCheck, Settings, Flame } from "lucide-react";
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

const ChauffagisteEntretien = () => {
  const url = `${ORIGIN}${content.routes.chauffageEntretien}`;

  useSEO({
    title: "Entretien & réparation chaudière à Saint-Louis (68300) — Contrat annuel",
    description:
      "Entretien annuel chaudière obligatoire à Saint-Louis. Contrats sur-mesure, réparation toutes marques, attestation officielle. Tarifs transparents.",
    keywords:
      "entretien chaudière Saint-Louis, contrat entretien chaudière, réparation chaudière 68300, ramonage Sud-Alsace, attestation entretien chaudière",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Chauffage — Entretien & Réparation", url },
    ]),
    serviceSchema(
      "Entretien et réparation de chaudière",
      "Entretien annuel obligatoire et réparation de chaudières gaz, fioul, granulés à Saint-Louis. Contrats sur-mesure.",
      "Maintenance chauffage",
    ),
    speakableSchema(url, "Entretien chaudière à Saint-Louis"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="chauffage_entretien"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Chauffage — Entretien & Réparation" }]}
        badge={{ label: "Contrat annuel & SAV", icon: <Recycle className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Entretien & réparation <span className="text-gradient-brand">chaudière</span> à Saint-Louis
          </>
        }
        hook="Entretien annuel obligatoire, contrats de maintenance sur-mesure, réparation toutes marques. Attestation officielle remise après chaque visite — exigée par votre assurance et votre bailleur."
        trustBadges={[
          { label: "Attestation officielle", variant: "serviceBlue", icon: <FileCheck className="h-3.5 w-3.5" /> },
          { label: "Toutes marques", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Contrats sur-mesure", variant: "serviceViolet", icon: <Calendar className="h-3.5 w-3.5" /> },
          { label: "Intervention sous 24h", variant: "serviceOrange", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      <QuickAnswer
        question="L'entretien annuel d'une chaudière est-il obligatoire ?"
        answer="Oui, l'entretien annuel d'une chaudière fonctionnant au gaz, au fioul, au bois ou à charbon (puissance entre 4 et 400 kW) est obligatoire en France depuis le décret n°2009-649. Cette visite annuelle est à la charge de l'occupant (locataire ou propriétaire). Elle doit être réalisée par un professionnel qualifié qui remet une attestation officielle dans les 15 jours. À Saint-Louis, Artisant Saint Louis assure cet entretien dès 89 € TTC, avec ou sans contrat."
      />

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <Badge variant="accentSoft" className="mb-3">Maintenance préventive</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Pourquoi entretenir sa chaudière chaque année ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                L'entretien annuel n'est pas qu'une obligation légale : c'est un <strong className="text-foreground">investissement rentable</strong>. Une chaudière entretenue consomme 8 à 12 % de moins, dure 30 à 50 % plus longtemps, et tombe nettement moins souvent en panne. À l'échelle d'une chaudière de 25 kW, l'économie annuelle de combustible compense souvent à elle seule le coût de l'entretien.
              </p>
              <p>
                Notre <strong className="text-foreground">protocole d'entretien complet</strong> couvre : nettoyage du corps de chauffe et du brûleur, vérification des organes de sécurité, contrôle des pressions, mesure des fumées et du monoxyde de carbone (CO), réglage de la combustion, vérification du conduit et des raccordements, nettoyage du condenseur (chaudières condensation). À l'issue de la visite, nous remettons une attestation conforme au décret, exigible par votre bailleur et votre assurance.
              </p>
              <p>
                Pour les particuliers et les professionnels qui souhaitent <strong className="text-foreground">ne plus s'en occuper</strong>, nous proposons des contrats annuels avec entretien programmé, dépannage prioritaire (intervention sous 24h), tarif main-d'œuvre préférentiel et déplacement offert. Trois formules au choix : Essentiel (entretien seul), Confort (entretien + dépannage main d'œuvre), Sérénité (entretien + dépannage + pièces).
              </p>
              <p>
                Côté <strong className="text-foreground">réparation</strong>, nos techniciens interviennent sur toutes les grandes marques : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Chappée, Geminox, ELM Leblanc, Riello. Diagnostic au premier passage, devis transparent, pièces d'origine garanties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid
        eyebrow="Nos prestations"
        title="Entretien, contrats & réparation"
        services={[
          {
            icon: ClipboardCheck,
            badge: "Visite annuelle",
            badgeVariant: "serviceBlue",
            title: "Entretien annuel chaudière",
            description: "Visite complète conforme décret 2009-649, attestation officielle remise sous 15 jours.",
            features: ["Nettoyage corps de chauffe", "Mesure CO et combustion", "Attestation officielle"],
          },
          {
            icon: Calendar,
            badge: "Contrat",
            badgeVariant: "serviceEmerald",
            title: "Contrat de maintenance annuel",
            description: "Entretien programmé, dépannage prioritaire, tarif préférentiel. Trois formules au choix.",
            features: ["Formule Essentiel / Confort / Sérénité", "Dépannage prioritaire 24h", "-15 % main-d'œuvre"],
          },
          {
            icon: Wrench,
            badge: "Dépannage",
            badgeVariant: "serviceRose",
            title: "Réparation chaudière toutes marques",
            description: "Code erreur, mise en sécurité, plus d'eau chaude, bruit anormal : diagnostic et réparation.",
            features: ["Toutes marques", "Pièces d'origine", "Garantie 1 an pièces"],
          },
          {
            icon: Settings,
            badge: "Réglage",
            badgeVariant: "serviceCyan",
            title: "Optimisation & réglages",
            description: "Réglage combustion, équilibrage radiateurs, courbe de chauffe : économies et confort.",
            features: ["Réglage combustion", "Équilibrage radiateurs", "Économies 5 à 15 %"],
          },
          {
            icon: Flame,
            badge: "Ramonage",
            badgeVariant: "serviceOrange",
            title: "Ramonage conduit",
            description: "Ramonage des conduits de fumée pour chaudières fioul, bois et granulés.",
            features: ["Conduit fioul / bois", "Attestation ramonage", "Conformité assurance"],
          },
          {
            icon: Shield,
            badge: "Sécurité",
            badgeVariant: "serviceAmber",
            title: "Diagnostic sécurité",
            description: "Contrôle des organes de sécurité, étanchéité gaz, mesure CO. Mise en conformité si besoin.",
            features: ["Étanchéité gaz", "Mesure monoxyde", "Mise en conformité"],
          },
        ]}
      />

      <UseCasesSection
        title="Quand faire appel à nous pour l'entretien ou la réparation ?"
        cases={[
          { title: "Vous n'avez pas fait l'entretien depuis 12 mois", description: "L'entretien est obligatoire chaque année. Sans attestation, votre assurance peut refuser un sinistre." },
          { title: "Votre chaudière fait du bruit", description: "Cliquetis, sifflement, vibrations : symptômes d'une chaudière qui se dérègle. Diagnostic à prévoir." },
          { title: "Plus d'eau chaude ou eau tiède", description: "Échangeur entartré, sonde HS, thermostat dérèglé : diagnostic et réparation rapides.", urgent: true },
          { title: "Code erreur affiché", description: "Chaque code correspond à une panne précise. Nous diagnostiquons et réparons toutes marques." },
          { title: "Mise en sécurité répétée", description: "Symptôme d'un problème récurrent : mauvaise combustion, sécurité défaillante, surchauffe." },
          { title: "Vente ou location du bien", description: "Attestation d'entretien obligatoire pour la vente et exigée par les locataires sérieux." },
        ]}
      />

      <InterventionsSection />

      <FAQSection
        title="FAQ — Entretien & réparation chaudière"
        faqs={[
          { q: "Combien coûte un entretien de chaudière à Saint-Louis ?", a: "Comptez entre 89 et 150 € TTC pour un entretien annuel d'une chaudière gaz murale, selon la marque et le modèle. Les chaudières fioul et granulés sont légèrement plus chères (110-180 €) car elles demandent un nettoyage plus poussé." },
          { q: "Quelle est la différence entre entretien et contrat de maintenance ?", a: "L'entretien est une visite ponctuelle annuelle, payée à l'acte. Le contrat de maintenance est un engagement annuel qui inclut la visite + un dépannage prioritaire en cas de panne (selon formule), un tarif préférentiel sur la main-d'œuvre et le déplacement offert." },
          { q: "Que se passe-t-il si je n'entretiens pas ma chaudière ?", a: "Trois risques : 1) Votre assurance habitation peut refuser un sinistre lié à la chaudière. 2) Vous perdez la garantie constructeur. 3) Votre chaudière consomme jusqu'à 12 % de plus et tombe en panne 2 à 3 fois plus souvent." },
          { q: "Quelles marques de chaudières réparez-vous ?", a: "Toutes les marques principales : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Chappée, Geminox, ELM Leblanc, Riello, Buderus. Nos techniciens sont formés régulièrement par les fabricants." },
          { q: "L'entretien est-il à la charge du propriétaire ou du locataire ?", a: "Selon le décret n°87-712 et la loi du 6 juillet 1989, l'entretien annuel d'une chaudière est à la charge du LOCATAIRE (charge récupérable). Les grosses réparations restent à la charge du propriétaire bailleur." },
          { q: "Combien de temps prend une visite d'entretien ?", a: "Une visite d'entretien complète prend en moyenne 45 minutes à 1 heure pour une chaudière gaz, et 1h à 1h30 pour une chaudière fioul ou granulés. L'attestation officielle est remise sur place ou envoyée sous 15 jours." },
        ]}
      />

      <FAQMeshSection
        links={[
          { question: "Quelle nouvelle chaudière installer en remplacement ?", href: content.routes.chauffageInstall, pageLabel: "Chauffage installation" },
          { question: "Que faire en cas de fuite chaudière urgente ?", href: content.routes.depannage, pageLabel: "Dépannage plomberie" },
          { question: "Quels travaux de plomberie puis-je grouper ?", href: content.routes.plomberie, pageLabel: "Plomberie générale" },
          { question: "Découvrir tous nos services", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Réservez votre entretien chaudière à Saint-Louis"
        subtitle="Visite programmée, attestation officielle, conseils d'optimisation : protégez votre installation et vos finances."
      />
    </PageLayout>
  );
};

export default ChauffagisteEntretien;
