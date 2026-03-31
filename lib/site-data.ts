
const servicesArray = [
  {
    title: "Depannage d'urgence 24h/24",
    name: "Depannage d'urgence 24h/24",
    description: "Intervention rapide pour tous vos problemes de plomberie : fuites, canalisations bouchees, panne de chaudiere.",
    icon: "ExclamationTriangleIcon",
    features: ["Intervention en moins de 30 minutes", "Disponible nuit et weekend", "Tarifs transparents"]
  },
  {
    title: "Installation sanitaire",
    name: "Installation sanitaire",
    description: "Installation complete de salles de bain, cuisine, WC, douche a l'italienne avec finitions soignees.",
    icon: "HomeIcon",
    features: ["Douche a l'italienne", "Renovation complete", "Devis gratuit"]
  },
  {
    title: "Chauffage et climatisation",
    name: "Chauffage et climatisation",
    description: "Installation, entretien et depannage de chaudieres, radiateurs, pompes a chaleur et systemes de climatisation.",
    icon: "FireIcon",
    features: ["Chaudiere gaz et fioul", "Pompe a chaleur", "Contrat d'entretien"]
  },
  {
    title: "Renovation complete",
    name: "Renovation complete",
    description: "Renovation de salles de bain et cuisines, remplacement de canalisations anciennes.",
    icon: "CogIcon",
    features: ["Salle de bain cle en main", "Cuisine equipee", "Canalisations neuves"]
  },
  {
    title: "Entretien preventif",
    name: "Entretien preventif",
    description: "Contrats d'entretien pour chaudieres, verification annuelle de vos installations.",
    icon: "ShieldCheckIcon",
    features: ["Contrat annuel", "Economies d'energie", "Conformite garantie"]
  },
  {
    title: "Plomberie professionnelle",
    name: "Plomberie professionnelle",
    description: "Services pour entreprises, commerces et syndics : maintenance, depannage, installations.",
    icon: "BuildingOfficeIcon",
    features: ["Commerces et bureaux", "Syndics de copropriete", "Maintenance reguliere"]
  }
];

const siteData = {
  businessName: "Jean Dupont Plomberie",
  phone: "+33612345678",
  phoneFormatted: "06 12 34 56 78",
  email: "contact@dupont-plomberie-lyon.fr",
  address: "12 rue de la Paix, 69001 Lyon",
  hours: "Lundi-Vendredi 8h-19h, Samedi 9h-17h",
  emergency: "Urgences 24h/24 7j/7",
  title: "Jean Dupont Plomberie - Plombier chauffagiste Lyon",
  description: "Votre plombier de confiance a Lyon depuis 15 ans. Depannage, installation sanitaire, chauffage. Intervention rapide 24h/24.",
  tagline: "Votre plombier de confiance a Lyon depuis 15 ans",
  tradeFull: "Plombier chauffagiste",
  experience: 15,

  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Galerie", href: "/gallery" },
    { name: "A propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  services: servicesArray,

  servicesSection: {
    title: "Nos Services",
    subtitle: "Une expertise complete en plomberie et chauffage pour tous vos besoins",
    items: servicesArray,
  },

  stats: [
    { label: "Clients satisfaits", value: 500, suffix: "+", icon: "UsersIcon" },
    { label: "Ans d'experience", value: 15, suffix: "", icon: "TrophyIcon" },
    { label: "Interventions par an", value: 1000, suffix: "+", icon: "WrenchScrewdriverIcon" },
    { label: "Disponibilite", value: 24, suffix: "h/24", icon: "ClockIcon" },
  ],

  testimonials: [
    { name: "Marie Dubois", location: "Lyon 6eme", rating: 5, text: "Intervention tres rapide pour une fuite dans ma salle de bain. Travail propre et tarif honnete. Je recommande vivement !" },
    { name: "Pierre Martin", location: "Villeurbanne", rating: 5, text: "Excellent service pour l'installation de ma nouvelle chaudiere. Professionnel et ponctuel." },
    { name: "Sophie Leroy", location: "Lyon 3eme", rating: 5, text: "Renovation complete de ma salle de bain. Resultat parfait et dans les delais convenus." },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop", alt: "Renovation salle de bain moderne", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop", title: "Renovation salle de bain moderne", description: "Transformation complete avec douche a l'italienne", category: "Renovation" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop", alt: "Installation chaudiere gaz", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop", title: "Installation chaudiere gaz", description: "Remplacement chaudiere ancienne", category: "Chauffage" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", alt: "Cuisine equipee", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", title: "Cuisine equipee", description: "Installation complete plomberie cuisine", category: "Installation" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop", alt: "Robinetterie haut de gamme", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop", title: "Robinetterie haut de gamme", description: "Pose de robinets et mitigeurs design", category: "Installation" },
    { src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&h=600&fit=crop", alt: "Salle de bain luxe", image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&h=600&fit=crop", title: "Salle de bain luxe", description: "Renovation complete haut de gamme", category: "Renovation" },
    { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop", alt: "Depannage en cours", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop", title: "Depannage en cours", description: "Intervention rapide fuites", category: "Depannage" },
  ],

  trustBadges: {
    title: "Pourquoi nous choisir",
    subtitle: "Des garanties de qualite pour votre tranquillite",
    badges: [
      { title: "Certifie RGE", description: "Reconnu garant de l'environnement", icon: "ShieldCheckIcon" },
      { title: "Garantie decennale", description: "Tous nos travaux sont garantis", icon: "CheckBadgeIcon" },
      { title: "Devis gratuit", description: "Estimation transparente sans engagement", icon: "CalendarDaysIcon" },
      { title: "24h/24 7j/7", description: "Disponible pour toutes les urgences", icon: "ClockIcon" },
    ],
  },

  faq: [
    { question: "Intervenez-vous vraiment 24h/24 ?", answer: "Oui, nous assurons un service de depannage d'urgence 24h/24 et 7j/7 pour tous vos problemes de plomberie urgents : fuites importantes, canalisations bouchees, pannes de chaudiere." },
    { question: "Vos devis sont-ils gratuits ?", answer: "Tous nos devis sont entierement gratuits et sans engagement. Nous nous deplacons pour evaluer vos besoins et vous proposer une solution adaptee a votre budget." },
    { question: "Etes-vous assures et certifies ?", answer: "Oui, nous sommes entierement assures responsabilite civile et decennale. Nos techniciens sont certifies et formes aux dernieres normes en vigueur." },
    { question: "Quels sont vos delais d'intervention ?", answer: "Pour les urgences, nous intervenons dans l'heure qui suit votre appel sur Lyon et sa proche banlieue. Pour les autres interventions, nous nous adaptons a vos disponibilites." },
  ],

  legalInfo: {
    companyName: "Jean Dupont Plomberie",
    legalForm: "Entreprise individuelle",
    address: "12 rue de la Paix, 69001 Lyon",
    siret: "[SIRET A COMPLETER]",
    phone: "+33612345678",
    email: "contact@dupont-plomberie-lyon.fr",
    director: "Jean Dupont",
  },
};

export default siteData;
