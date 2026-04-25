// ============================================================
// CONTENU CENTRAL — Artisant Saint Louis (Plomberie & Chauffage)
// Modifier ici les coordonnées réelles avant publication.
// ============================================================

export const content = {
  company: {
    name: "Artisant Saint Louis",
    shortName: "Saint Louis",
    tagline: "Plombier & Chauffagiste de confiance",
    description:
      "Artisan plombier et chauffagiste à Saint-Louis (68300) et alentours. Dépannage rapide, installation de chaudière, entretien — intervention 7j/7.",
    contact: {
      phone: "03 89 00 00 00",
      phoneMobile: "06 12 34 56 78",
      phoneRaw: "+33389000000",
      mobileRaw: "+33612345678",
      email: "contact@artisan-saintlouis.fr",
      address: "12 rue de Mulhouse",
      postalCode: "68300",
      city: "Saint-Louis",
      region: "Grand Est",
      country: "FR",
      hours: "Lun-Sam 7h-20h · Urgences 7j/7 24h/24",
      areaServed: ["Saint-Louis", "Huningue", "Village-Neuf", "Hégenheim", "Hésingue", "Bartenheim", "Sierentz"],
    },
    social: {
      // Remplacer par les URLs réelles
    },
    legal: {
      siret: "000 000 000 00000",
      assurance: "Décennale assurée",
    },
    formspreeEndpoint: "https://formspree.io/f/REMPLACER_PAR_VOTRE_ID",
  },
  badges: [
    { label: "Devis gratuit", icon: "FileText" },
    { label: "Intervention 7j/7", icon: "Clock" },
    { label: "Artisan local certifié", icon: "Award" },
    { label: "Garantie décennale", icon: "Shield" },
  ],
  routes: {
    home: "/",
    plomberie: "/plomberie-generale",
    depannage: "/depannage-plomberie",
    chauffageInstall: "/chauffagiste-installation-depannage",
    chauffageEntretien: "/chauffagiste-entretien-reparation",
  },
} as const;

export const navLinks = [
  { label: "Accueil", href: content.routes.home },
  { label: "Plomberie générale", href: content.routes.plomberie },
  { label: "Dépannage plomberie", href: content.routes.depannage },
  { label: "Chauffage — Installation", href: content.routes.chauffageInstall },
  { label: "Chauffage — Entretien", href: content.routes.chauffageEntretien },
] as const;
