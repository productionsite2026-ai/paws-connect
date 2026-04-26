import { Recycle, FileCheck, Shield, Clock, Award, Calendar, ClipboardCheck, Settings, Flame, Droplets } from "lucide-react";
import heroEntretien from "@/assets/hero-entretien-maintenance.jpg";
import imgAttestation from "@/assets/card-attestation-entretien.jpg";
import imgBruleur from "@/assets/card-entretien-brûleur.jpg";
import imgChaudiere from "@/assets/card-chaudiere-condensation.jpg";
import imgRadiateur from "@/assets/card-radiateur-thermostat.jpg";
import imgGranules from "@/assets/card-chaudiere-granules.jpg";
import imgRobinet from "@/assets/card-pose-robinetterie.jpg";
import imgRecherche from "@/assets/card-recherche-fuite.jpg";
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

const EntretienMaintenance = () => {
  const url = `${ORIGIN}${content.routes.entretien}`;

  useSEO({
    title: "Entretien chaudière & maintenance plomberie à Paris — Contrat annuel",
    description:
      "Entretien annuel chaudière obligatoire à Paris & Île-de-France. Contrats sur-mesure, maintenance plomberie, attestation officielle, ramonage. Toutes marques.",
    keywords:
      "entretien chaudière Paris, contrat maintenance chauffage Paris, ramonage Île-de-France, attestation entretien chaudière, maintenance plomberie Paris",
    canonicalUrl: url,
  });

  useJsonLd([
    breadcrumbSchema([
      { name: "Accueil", url: `${ORIGIN}/` },
      { name: "Entretien & Maintenance", url },
    ]),
    serviceSchema(
      "Entretien & maintenance plomberie chauffage",
      "Entretien annuel chaudière, contrats de maintenance et entretien plomberie à Paris et en Île-de-France. Attestation officielle, toutes marques.",
      "Maintenance chauffage et plomberie",
    ),
    speakableSchema(url, "Entretien chaudière à Paris"),
  ]);

  return (
    <PageLayout>
      <HeroWithForm
        defaultService="entretien"
        backgroundImage={heroEntretien}
        backgroundImageAlt="Technicien Artisan Saint Louis effectuant l'entretien annuel d'une chaudière gaz à condensation à Paris avec clipboard de contrôle"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Entretien & Maintenance" }]}
        badge={{ label: "Contrat annuel & maintenance", icon: <Recycle className="h-3.5 w-3.5" /> }}
        h1={
          <>
            Entretien & maintenance <span className="text-gradient-brand">plomberie & chauffage</span> à Paris
          </>
        }
        hook="Entretien annuel chaudière obligatoire, contrats de maintenance sur-mesure, vérifications plomberie : prolongez la durée de vie de vos équipements et restez en règle. Attestation officielle remise après chaque visite."
        trustBadges={[
          { label: "Attestation officielle", variant: "serviceBlue", icon: <FileCheck className="h-3.5 w-3.5" /> },
          { label: "Toutes marques", variant: "serviceEmerald", icon: <Award className="h-3.5 w-3.5" /> },
          { label: "Contrats sur-mesure", variant: "serviceViolet", icon: <Calendar className="h-3.5 w-3.5" /> },
          { label: "Intervention rapide", variant: "serviceOrange", icon: <Clock className="h-3.5 w-3.5" /> },
        ]}
      />

      {/* QuickAnswer déplacé après ServicesGrid */}

      <ServicesGrid
        eyebrow="Nos prestations"
        title="Entretien chaudière, contrats & maintenance plomberie"
        services={[
          {
            icon: ClipboardCheck,
            badge: "Chauffage",
            badgeVariant: "serviceBlue",
            title: "Entretien annuel chaudière",
            description: "Visite complète conforme décret 2009-649, attestation officielle remise sous 15 jours.",
            features: ["Nettoyage corps de chauffe", "Mesure CO et combustion", "Attestation officielle"],
            image: imgBruleur,
            imageAlt: "Nettoyage du brûleur d'une chaudière par un technicien Artisan Saint Louis lors de l'entretien annuel à Paris",
            stat: { value: "Décret 2009-649", label: "Conforme" },
          },
          {
            icon: Calendar,
            badge: "Chauffage",
            badgeVariant: "serviceEmerald",
            title: "Contrat de maintenance annuel",
            description: "Entretien programmé, dépannage prioritaire, conditions préférentielles. Trois formules au choix.",
            features: ["Formule Essentiel / Confort / Sérénité", "Dépannage prioritaire", "Conditions préférentielles"],
            image: imgAttestation,
            imageAlt: "Attestation d'entretien chaudière remise par Artisan Saint Louis dans le cadre d'un contrat de maintenance à Paris",
            stat: { value: "3 formules", label: "Sur-mesure" },
          },
          {
            icon: Flame,
            badge: "Chauffage",
            badgeVariant: "serviceOrange",
            title: "Ramonage conduit",
            description: "Ramonage des conduits de fumée pour chaudières fioul, bois et granulés.",
            features: ["Conduit fioul / bois", "Attestation ramonage", "Conformité assurance"],
            image: imgGranules,
            imageAlt: "Ramonage d'un conduit de chaudière à granulés par Artisan Saint Louis à Paris",
            stat: { value: "Attestation", label: "Assurance" },
          },
          {
            icon: Settings,
            badge: "Chauffage",
            badgeVariant: "serviceCyan",
            title: "Optimisation & réglages",
            description: "Réglage combustion, équilibrage radiateurs, courbe de chauffe : confort et efficacité retrouvés.",
            features: ["Réglage combustion", "Équilibrage radiateurs", "Confort homogène"],
            image: imgRadiateur,
            imageAlt: "Équilibrage et réglage d'un radiateur en fonte par Artisan Saint Louis dans un appartement haussmannien à Paris",
            stat: { value: "Confort", label: "Optimisé" },
          },
          {
            icon: Droplets,
            badge: "Plomberie",
            badgeVariant: "serviceViolet",
            title: "Détartrage & maintenance plomberie",
            description: "Détartrage canalisations, contrôle vannes, étanchéité, entretien d'adoucisseur.",
            features: ["Détartrage", "Contrôle vannes", "Maintenance adoucisseur"],
            image: imgRobinet,
            imageAlt: "Détartrage et entretien d'une robinetterie par Artisan Saint Louis dans une salle de bain parisienne",
            stat: { value: "Eau dure", label: "Maîtrisée" },
          },
          {
            icon: Shield,
            badge: "Sécurité",
            badgeVariant: "serviceAmber",
            title: "Diagnostic sécurité gaz",
            description: "Contrôle des organes de sécurité, étanchéité gaz, mesure CO. Mise en conformité si besoin.",
            features: ["Étanchéité gaz", "Mesure monoxyde", "Mise en conformité"],
            image: imgChaudiere,
            imageAlt: "Contrôle de sécurité gaz et mesure de monoxyde de carbone sur une chaudière à Paris",
            stat: { value: "CO contrôlé", label: "Sécurité" },
          },
        ]}
      />

      <QuickAnswer
        question="L'entretien annuel d'une chaudière est-il obligatoire à Paris ?"
        answer="Oui, l'entretien annuel d'une chaudière fonctionnant au gaz, au fioul, au bois ou à charbon (puissance entre 4 et 400 kW) est obligatoire en France depuis le décret n°2009-649. À Paris et en Île-de-France, cette visite est à la charge de l'occupant (locataire ou propriétaire). Elle doit être réalisée par un professionnel qualifié qui remet une attestation officielle dans les 15 jours. Artisan Saint Louis assure cet entretien avec ou sans contrat de maintenance, sur toutes marques."
      />

      <UseCasesSection
        title="Quand faire appel à nous pour l'entretien ?"
        cases={[
          { title: "Vous n'avez pas fait l'entretien depuis 12 mois", description: "L'entretien chaudière est obligatoire chaque année. Sans attestation, votre assurance peut refuser un sinistre.", image: imgAttestation, imageAlt: "Attestation d'entretien chaudière obligatoire chaque année à Paris", badge: "Obligatoire" },
          { title: "Votre chaudière fait du bruit", description: "Cliquetis, sifflement, vibrations : symptômes d'une chaudière qui se dérègle. Diagnostic à prévoir.", image: imgBruleur, imageAlt: "Diagnostic d'un brûleur de chaudière qui fait du bruit à Paris", urgent: true },
          { title: "Vos consommations grimpent sans raison", description: "Une chaudière entartrée ou mal réglée consomme davantage. Un entretien remet tout à plat.", image: imgChaudiere, imageAlt: "Chaudière à condensation entretenue pour optimiser la consommation par Artisan Saint Louis à Paris", badge: "Optimisation" },
          { title: "Vous voulez un contrat tranquillité", description: "Maintenance programmée + dépannage prioritaire : ne pensez plus à votre chaudière.", image: imgRadiateur, imageAlt: "Contrat de maintenance annuel avec équilibrage des radiateurs par Artisan Saint Louis", badge: "Sérénité" },
          { title: "Vente ou location de votre bien", description: "Attestation d'entretien obligatoire pour la vente et exigée par les locataires sérieux.", image: imgGranules, imageAlt: "Attestation d'entretien chaudière à granulés exigée pour la vente d'un bien à Paris", badge: "Vente / Location" },
          { title: "Eau dure et entartrage rapide", description: "L'eau parisienne est calcaire : un détartrage régulier prolonge la vie de vos équipements.", image: imgRecherche, imageAlt: "Diagnostic de l'entartrage d'une installation par Artisan Saint Louis à Paris", badge: "Anti-tartre" },
        ]}
      />

      <FAQSection
        title="FAQ — Entretien & maintenance"
        faqs={[
          { q: "Quelle différence entre entretien et contrat de maintenance ?", a: "L'entretien est une visite ponctuelle annuelle, payée à l'acte. Le contrat de maintenance est un engagement annuel qui inclut la visite + un dépannage prioritaire en cas de panne (selon formule), des conditions préférentielles sur la main-d'œuvre et le déplacement." },
          { q: "Que se passe-t-il si je n'entretiens pas ma chaudière ?", a: "Trois risques : 1) Votre assurance habitation peut refuser un sinistre lié à la chaudière. 2) Vous perdez la garantie constructeur. 3) Votre chaudière consomme davantage et tombe en panne plus souvent, avec un risque accru de production de monoxyde de carbone." },
          { q: "Quelles marques de chaudières entretenez-vous ?", a: "Toutes les marques principales : Saunier Duval, Viessmann, Bosch, De Dietrich, Atlantic, Frisquet, Vaillant, Chappée, Geminox, ELM Leblanc, Riello, Buderus. Nos techniciens sont formés régulièrement par les fabricants." },
          { q: "L'entretien est-il à la charge du propriétaire ou du locataire ?", a: "Selon le décret n°87-712 et la loi du 6 juillet 1989, l'entretien annuel d'une chaudière est à la charge du LOCATAIRE (charge récupérable). Les grosses réparations restent à la charge du propriétaire bailleur." },
          { q: "Combien de temps prend une visite d'entretien ?", a: "Une visite d'entretien complète prend en moyenne 45 minutes à 1 heure pour une chaudière gaz, et 1h à 1h30 pour une chaudière fioul ou granulés. L'attestation officielle est remise sur place ou envoyée sous 15 jours." },
          { q: "Que comprend une visite d'entretien complète ?", a: "Nettoyage du corps de chauffe et du brûleur, vérification des organes de sécurité, contrôle des pressions, mesure des fumées et du monoxyde de carbone (CO), réglage de la combustion, vérification du conduit et des raccordements, nettoyage du condenseur (chaudières condensation)." },
        ]}
        meshLinks={[
          { question: "Quelle nouvelle chaudière installer en remplacement ?", href: content.routes.installation, pageLabel: "Installation & Rénovation" },
          { question: "Que faire en cas de fuite ou panne urgente ?", href: content.routes.depannage, pageLabel: "Dépannage urgent" },
          { question: "Découvrir tous nos services", href: "/", pageLabel: "Accueil" },
        ]}
      />

      <FinalCTA
        title="Réservez votre entretien à Paris"
        subtitle="Visite programmée, attestation officielle, conseils d'optimisation : protégez votre installation."
      />
    </PageLayout>
  );
};

export default EntretienMaintenance;
