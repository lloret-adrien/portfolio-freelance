export const EXPERTISES = [
  {
    id: '1',
    title: 'Developpement Web Fullstack',
    description: 'Conception et developpement d\'applications web solides, maintenables et pretes a scaler.',
    details: ['Architectures modernes (SPA, SSR, Headless)', 'Frontend exigeant (UX, performances, accessibilite)', 'APIs robustes & donnees maitrisees'],
    icon: 'Terminal'
  },
  {
    id: '2',
    title: 'E-commerce',
    description: 'Mise en place de boutiques e-commerce simples, performantes et bien pensees pour lancer une marque rapidement, sans complexite inutile ni surcout.',
    details: ['Pret a vendre en quelques semaines', 'Experience claire et rassurante', 'Paiements & Facturation Stripe', 'Referencement', 'Suivi des performances & donnees cles'],
    icon: 'ShoppingBag'
  },
  {
    id: '3',
    title: 'Analytics',
    description: 'Mise en place d\'outils de suivi pour comprendre comment les utilisateurs naviguent reellement sur votre site et identifier les leviers d\'amelioration.',
    details: ['Suivi du trafic et des sources', 'Evenements personnalises', 'Taux de rebond', 'Points de friction'],
    icon: 'Zap'
  },
  {
    id: '4',
    title: 'IA & Productivite',
    description: 'Exploiter l\'IA pour concevoir, prototyper et l\'integrer efficacement dans vos projets.',
    details: [
      'Prototypage rapide',
      'Analyse d\'images',
      'Integration workflow',
      'Prompts optimises'
    ],
    icon: 'Cpu',
  },
  {
    id: 'cta-card',
    title: 'On discute?',
    description: 'Un projet en tete ou une vision a partager ? Ecrivez-moi ou retrouvez-moi sur les reseaux.',
    color: 'bg-[#FF6D4D]',
    textColor: 'text-white',
    isCTA: true
  }
]

export const PROJECTS = [
  {
    id: 'deuxbrins',
    slug: 'deuxbrins',
    name: 'Deuxbrins',
    type: 'E-commerce',
    shortDescription: 'Site e-commerce d\'une boutique de bijou personnalisees avec de l\'ADN',
    fullDescription: 'Conception et integration d\'une landing page moderne et animee, mettant en valeur l\'univers maritime et l\'esprit d\'aventure du projet.',
    techs: ['Vue', 'Nuxt', 'Stripe', 'Tailwind', 'Posthog'],
    impact: 'Amelioration de l\'image de marque',
    context: 'Besoin d\'une refonte de leur boutique afin d\'ameliorer l\'UX',
    role: 'Developpeur Web',
    solution: 'Refonte sur-mesure avec l\'aide de Gemini pour le prototypage',
    results: [
      'Meilleure conversion',
      'Amilioration SEO & Performances',
      'Experience utilisateurs'
    ],
    imageUrl: '/images/deuxbrins.png',
    link: 'https://deuxbrins.com'
  },

  {
    id: 'p1',
    slug: 'bestframe-ai',
    name: 'Bestframe AI',
    type: 'SaaS',
    shortDescription: 'SaaS IA qui detecte et extrait automatiquement les meilleurs moments d\'une video.',
    fullDescription: 'BestFrame AI est une plateforme SaaS exploitant l\'intelligence artificielle pour analyser des videos et identifier automatiquement les moments les plus engageants, optimisant ainsi la creation de contenus courts.',
    techs: ['Nuxt', 'Vue', 'Supabase', 'Python', 'FastAPI'],
    impact: 'Produit en cours de developpement',
    context: 'Le besoin de creer rapidement des extraits video pertinents sans montage manuel.',
    role: 'Founder & Fullstack Developer',
    solution: 'Pipeline IA d\'analyse video avec extraction automatique et interface SaaS simple.',
    results: [
      'Extraction automatique des highlights',
      'Architecture scalable orientee SaaS',
      'Paiement integre via Stripe'
    ],
    imageUrl: '/images/bestframe.png',
    link: 'https://bestframe.pro'
  },


  {
    id: 'portfolio',
    slug: 'portfolio',
    name: 'Portfolio',
    type: 'Portfolio Premium',
    shortDescription: 'Mon portfolio personnel, concu pour allier design minimaliste et performances optimales.',
    fullDescription: 'Ce portfolio est la vitrine de mon savoir-faire technique et creatif. Developpe avec React et Tailwind CSS, il met l\'accent sur l\'experience utilisateur et les animations fluides.',
    techs: ['Nuxt', 'Tailwind', 'PostHog'],
    impact: 'Identite visuelle forte',
    context: 'Besoin d\'un espace centralise pour presenter mes projets et mon parcours de maniere haut de gamme.',
    role: 'Product Designer & Lead Dev',
    solution: 'Architecture basee sur des composants reutilisables et animations personnalisees.',
    results: [
      'Experience immersive fluide',
      'Score Performance optimal',
      'Design minimaliste et impactant'
    ],
    imageUrl: '/images/portfolio.png',
    link: 'https://adrien-lloret.com'
  },

  {
    id: 'p2',
    slug: 'interactive-3d-portfolio',
    name: 'Portfolio 3D',
    type: 'Portfolio experimental',
    shortDescription: 'Portfolio 3D immersif mettant en avant le design experimental et le motion.',
    fullDescription: 'Un portfolio interactif en 3D concu pour explorer de nouvelles formes de narration visuelle et valoriser une identite personnelle forte a travers le mouvement et l\'interaction.',
    techs: ['Vue', 'Three.js', 'GSAP'],
    impact: 'Projet vitrine personnel',
    context: 'Se differencier visuellement avec une experience immersive plutot qu\'un portfolio classique.',
    role: 'Developpeur Web',
    solution: 'Scene 3D interactive animee avec GSAP et WebGL.',
    results: [
      'Experience immersive fluide',
      'Narration visuelle differenciante',
      'Forte identite personnelle'
    ],
    imageUrl: '/images/3D.png',
    link: 'adrien-3d.netlify.app'
  },

  {
    id: 'p3',
    slug: 'slym',
    name: 'Slym',
    type: 'Plateforme communautaire',
    shortDescription: 'Plateforme permettant de creer des hubs, gerer des groupes et vendre des produits digitaux.',
    fullDescription: 'Slym est une plateforme collaborative orientee communaute, facilitant la creation de hubs, la gestion de groupes et la monetisation via des produits numeriques.',
    techs: ['Vue', 'Inertia.js', 'Laravel', 'Tailwind'],
    impact: 'Plateforme utilisee par des createurs et communautes',
    context: 'Centraliser communautes, contenus et ventes sur une seule plateforme.',
    role: 'Web Integrator',
    solution: 'Integration frontend robuste connectee a une stack Laravel/Inertia.',
    results: [
      'Interfaces claires et performantes',
      'Integration de fonctionnalites communautaires',
      'Experience utilisateur fluide'
    ],
    imageUrl: '/images/slym.png',
    link: 'https://slym.co'
  },
]


export const EXPERIENCE = [
  {
    id: 1,
    year: "2023 - Aujourd'hui",
    title: "Developpeur Web Freelance",
    type: 'work' as const,
    description: "Prestation de services, conception et developpement de produits SaaS sur mesure pour des clients."
  },
  {
    id: 2,
    year: "2023",
    title: "Developpeur FrontEnd",
    subtitle: "U'RSELF",
    type: 'work' as const,
    description: "Participation a l'amelioration des applications clientes et interne, optimisation des performances et amelioration de l'experience utilisateur."
  },
  {
    id: 3,
    year: "2022 - 2023",
    title: "Master Tech Lead",
    subtitle: "Specialisation en Cybersecurite",
    type: 'education' as const,
    description: "Acquisition de competences avancees en architecture logicielle, pratiques de codage securise et methodologies de management d'equipe technique."
  },
  {
    id: 4,
    year: "2021 - 2022",
    title: "Developpeur Fullstack",
    subtitle: "Mycater",
    type: 'work' as const,
    description: "Developpement et maintenance du site e-commerce, integration front-end et back-end, et participation a l'evolution des technos."
  },
  {
    id: 5,
    year: "2021 - 2022",
    title: "Bachelor en Developpement Web",
    subtitle: "Digital Campus | Bordeaux",
    type: 'education' as const,
    description: "Approfondissement des frameworks modernes, des bonnes pratiques de developpement et de gestion de projet."
  },
  {
    id: 6,
    year: "2021",
    title: "Stage Developpement Web",
    subtitle: "Groupama G2S",
    type: 'work' as const,
    description: "Participation au developpement d'un outil a usage interne de gestion de fichiers clients."
  },
  {
    id: 7,
    year: "2019 - 2021",
    title: "DUT Informatique",
    subtitle: "IUT Montpellier",
    type: 'education' as const,
    description: "Acquisition d'une solide base des principes fondamentaux (Gestion de projet, Reseaux, Securite, PHP, HTML/CSS, JavaScript, SQL)"
  }
]