const siteData = {
  businessName: "Jean Dupont Plomberie",
  trade: "Plombier chauffagiste",
  city: "Lyon",
  phone: "+33612345678",
  email: "test@ethosagency.fr",
  address: "12 rue de la Paix, 69001 Lyon",
  hours: "Lundi-Vendredi 8h-19h, Samedi 9h-17h",
  emergency: "Urgences 24h/24 7j/7",
  tagline: "Votre plombier de confiance à Lyon depuis 15 ans",
  experience: 15,
  serviceArea: "Lyon et agglomération (30km)",
  clientTypes: ["particulier", "professionnel"],
  description: "Plombier chauffagiste intervenant sur Lyon et sa banlieue depuis 15 ans. Specialiste depannage urgent, installation sanitaire et entretien chaudiere.",
  services: [
    {
      title: "Dépannage plomberie",
      description: "Intervention rapide fuites, bouchons, robinetterie",
      price: "à partir de 80€",
      icon: "WrenchScrewdriverIcon",
      features: ["Diagnostic gratuit", "Intervention sous 2h", "Devis immédiat", "Garantie pièces et main d'œuvre"]
    },
    {
      title: "Installation sanitaire",
      description: "Salle de bain, WC, cuisine complète",
      price: "sur devis",
      icon: "HomeIcon",
      features: ["Projet clé en main", "Matériel de qualité", "Respect des délais", "Garantie décennale"]
    },
    {
      title: "Chauffage",
      description: "Installation et entretien chaudière gaz/fioul",
      price: "à partir de 120€",
      icon: "FireIcon",
      features: ["Contrat entretien", "Dépannage rapide", "Économies d'énergie", "Mise aux normes"]
    },
    {
      title: "Urgences 24h/24",
      description: "Dégât des eaux, fuite de gaz",
      price: "tarif majoré nuit/weekend",
      icon: "ExclamationTriangleIcon",
      features: ["Disponible 7j/7", "Intervention sous 1h", "Équipe d'astreinte", "Assurance responsabilité"]
    }
  ],
  testimonials: [
    {
      name: "Marie L.",
      text: "Intervention rapide pour une fuite d'eau en pleine nuit. Professionnel et efficace, je recommande vivement !",
      rating: 5,
      location: "Lyon 3ème"
    },
    {
      name: "Philippe D.",
      text: "Excellent travail pour la rénovation complète de ma salle de bain. Délais respectés et finitions impeccables.",
      rating: 5,
      location: "Lyon 6ème"
    },
    {
      name: "Sophie M.",
      text: "Très satisfaite de l'entretien annuel de ma chaudière. Technicien ponctuel et très professionnel.",
      rating: 5,
      location: "Villeurbanne"
    },
    {
      name: "Antoine R.",
      text: "Dépannage efficace pour un problème de canalisation bouchée. Prix raisonnable et intervention propre.",
      rating: 5,
      location: "Lyon 7ème"
    }
  ],
  faq: [
    {
      question: "Quels sont vos délais d'intervention ?",
      answer: "Pour les urgences, nous intervenons sous 1 heure. Pour les dépannages classiques, comptez 2 à 4 heures. Les installations sont planifiées selon vos disponibilités."
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous proposer la meilleure solution."
    },
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "Nous intervenons sur tout Lyon et son agglomération dans un rayon de 30 km : Villeurbanne, Caluire, Vénissieux, Bron, Oullins, etc."
    },
    {
      question: "Acceptez-vous les paiements en plusieurs fois ?",
      answer: "Oui, pour les travaux importants, nous proposons des facilités de paiement en 3 ou 4 fois sans frais."
    },
    {
      question: "Êtes-vous agréé pour l'entretien des chaudières ?",
      answer: "Oui, nous sommes agréés pour l'entretien de toutes marques de chaudières gaz et fioul, avec remise d'attestation conforme."
    }
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  certifications: [
    "RGE Qualibat",
    "Professionnel du Gaz",
    "Artisan de confiance",
    "Garantie décennale"
  ]
}

export default siteData
