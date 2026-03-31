const siteData = {
  businessName: "Jean Dupont Plomberie",
  trade: "Plombier chauffagiste",
  tradeFull: "Plomberie et chauffage",
  city: "Lyon",
  phone: "+33612345678",
  email: "test@ethosagency.fr",
  address: "12 rue de la Paix, 69001 Lyon",
  hours: "Lundi-Vendredi 8h-19h, Samedi 9h-17h",
  emergency: "Urgences 24h/24 7j/7",
  tagline: "Votre plombier de confiance à Lyon depuis 15 ans",
  experience: 15,
  description: "Plombier chauffagiste intervenant sur Lyon et sa banlieue depuis 15 ans. Specialiste depannage urgent, installation sanitaire et entretien chaudiere.",
  serviceArea: "Lyon et agglomération (30km)",
  services: [
    { 
      title: "Dépannage plomberie", 
      description: "Intervention rapide pour fuites, bouchons et robinetterie défaillante. Diagnostic précis et réparation durable garantie. Disponible 7j/7 pour vos urgences.",
      icon: "WrenchScrewdriverIcon",
      price: "à partir de 80€"
    },
    { 
      title: "Installation sanitaire", 
      description: "Création et rénovation complète de salle de bain, WC et cuisine. Pose d'équipements neufs avec garantie décennale. Devis gratuit et travail soigné.",
      icon: "HomeModernIcon",
      price: "sur devis"
    },
    { 
      title: "Chauffage", 
      description: "Installation et entretien de chaudière gaz et fioul. Contrats de maintenance annuelle disponibles. Amélioration des performances énergétiques.",
      icon: "FireIcon",
      price: "à partir de 120€"
    },
    { 
      title: "Urgences 24h/24", 
      description: "Intervention rapide pour dégât des eaux et fuite de gaz. Équipe mobilisable en moins de 30 minutes. Tarif transparent communiqué avant intervention.",
      icon: "ExclamationTriangleIcon",
      price: "tarif majoré nuit/weekend"
    },
    {
      title: "Détection de fuites",
      description: "Localisation précise des fuites cachées sans destruction. Utilisation de caméra thermique et détecteur acoustique. Rapport détaillé avec photos fourni.",
      icon: "MagnifyingGlassIcon",
      price: "à partir de 150€"
    },
    {
      title: "Débouchage canalisation",
      description: "Débouchage professionnel par haute pression et furet électrique. Traitement préventif des canalisations disponible. Garantie de résultat ou intervention gratuite.",
      icon: "ArrowPathIcon",
      price: "à partir de 90€"
    }
  ],
  testimonials: [
    { 
      name: "Marie Dubois", 
      text: "Intervention très rapide pour une fuite importante un dimanche soir. Monsieur Dupont a été professionnel et efficace. Je recommande vivement ses services pour tout problème de plomberie.",
      rating: 5 
    },
    { 
      name: "Pierre Martin", 
      text: "Excellent travail pour la rénovation complète de notre salle de bain. Respect des délais et du devis initial. Un artisan sérieux qui prend le temps d'expliquer les travaux réalisés.",
      rating: 5 
    },
    { 
      name: "Sophie Bernard", 
      text: "Dépannage en urgence pour notre chaudière en panne en plein hiver. Diagnostic précis et réparation rapide. Les tarifs sont transparents et justifiés par la qualité du service.",
      rating: 5 
    },
    { 
      name: "Jacques Rousseau", 
      text: "Très satisfait de l'installation de notre nouvelle cuisine. Travail propre et soigné, avec de bons conseils pour l'entretien. Un plombier de confiance que je garde dans mes contacts.",
      rating: 4 
    },
    {
      name: "Émilie Petit",
      text: "Intervention efficace pour un dégât des eaux dans notre commerce. Réactivité exemplaire et gestion professionnelle de la situation. Merci pour votre disponibilité et votre expertise.",
      rating: 5
    }
  ],
  faq: [
    { 
      question: "Intervenez-vous en urgence le weekend et les jours fériés ?",
      answer: "Oui, nous assurons un service d'urgence 24h/24 et 7j/7 pour les situations critiques comme les fuites importantes ou les dégâts des eaux. Un supplément tarifaire est appliqué pour les interventions de nuit et weekend, toujours communiqué avant intervention."
    },
    { 
      question: "Dans quels délais pouvez-vous intervenir ?",
      answer: "Pour les urgences, nous intervenons dans les 30 minutes à 2 heures selon votre localisation. Pour les travaux planifiés, nous proposons généralement un rendez-vous sous 48 à 72 heures. Les gros chantiers sont programmés selon vos disponibilités."
    },
    { 
      question: "Proposez-vous des devis gratuits ?",
      answer: "Oui, tous nos devis sont gratuits et sans engagement pour les travaux d'installation et de rénovation. Pour les dépannages simples, nous communiquons nos tarifs standards par téléphone. Un devis détaillé est fourni pour tout travail supérieur à 300€."
    },
    { 
      question: "Quels sont vos moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par chèque, espèces, virement bancaire et carte bancaire via terminal mobile. Pour les gros travaux, un acompte de 30% est demandé à la commande. Possibilité de paiement en plusieurs fois pour les montants importants."
    },
    {
      question: "Vos travaux sont-ils garantis ?",
      answer: "Tous nos travaux sont couverts par notre assurance décennale et bénéficient d'une garantie de 2 ans sur la main d'œuvre. Les pièces changées sont garanties selon les conditions du fabricant. Nous intervenons gratuitement en cas de problème lié à notre intervention."
    },
    {
      question: "Intervenez-vous sur tous types de chauffage ?",
      answer: "Nous sommes spécialisés dans l'installation et l'entretien des chaudières gaz et fioul. Nous intervenons également sur les radiateurs, planchers chauffants et chauffe-eau. Pour les pompes à chaleur, nous travaillons avec un partenaire certifié."
    }
  ],
  stats: [
    { value: 15, suffix: "", label: "Années d'expérience", icon: "CalendarDaysIcon" },
    { value: 2500, suffix: "+", label: "Clients satisfaits", icon: "UserGroupIcon" },
    { value: 98, suffix: "%", label: "Taux de satisfaction", icon: "HandThumbUpIcon" },
    { value: 24, suffix: "/7", label: "Disponibilité urgences", icon: "ClockIcon" }
  ],
  gallery: [
    { 
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600", 
      alt: "Installation de robinetterie moderne dans une salle de bain"
    },
    { 
      src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600", 
      alt: "Réparation de tuyauterie en cuivre par un plombier professionnel"
    },
    { 
      src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600", 
      alt: "Installation d'un nouveau chauffe-eau dans une buanderie"
    },
    { 
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600", 
      alt: "Travaux de plomberie sous évier de cuisine"
    },
    { 
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600", 
      alt: "Entretien d'une chaudière gaz moderne"
    },
    { 
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600", 
      alt: "Installation complète de salle de bain rénovée"
    }
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Galerie", href: "/gallery" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  legalInfo: {
    companyName: "Jean Dupont Plomberie",
    legalForm: "Entreprise individuelle",
    siret: "[SIRET A COMPLETER]",
    address: "12 rue de la Paix, 69001 Lyon",
    phone: "+33612345678",
    email: "test@ethosagency.fr",
    director: "Jean Dupont",
    host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA"
  }
}

export default siteData
