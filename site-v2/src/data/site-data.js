// ============================================================
//  BEREC SARL — Données du site
//  Extrait et fidèle au contenu de www.berecsarl.com
// ============================================================

// ---------- Informations société ----------
export const company = {
  name: 'BEREC SARL',
  legalName: 'BENIN RENT A CAR (BEREC SARL)',
  founded: 'Plus de 25 ans d\'expérience',
  ceo: 'M. Antoine BONOU',
  mission: 'Fournir un plateau technique de qualité et à la pointe de la technologie dans les hôpitaux, cliniques et centres de santé',
  description:
    'Nous sommes spécialisés dans la fourniture, l\'installation, la mise en service et la maintenance des équipements hospitaliers. A ce titre, nous soumissionnons aux appels d\'offres lancés dans le domaine médical aussi bien au Bénin que dans tous les pays d\'Afrique : TCHAD, TOGO, COTE D\'IVOIRE, NIGER, BANGUI etc…',
  countries: ['Bénin', 'Tchad', 'Togo', 'Côte d\'Ivoire', 'Niger', 'Bangui (RCA)'],
  email: 'contact@berecsarl.com',
  email2: 'berecmedical@yahoo.fr',
  phone: '(+229) 01 66 63 35 35 / 01 21 33 09 15',
  address: 'C/343, quartier Ayélawadjè – Akpakpa',
  city: 'Cotonou – Bénin',
  hours: 'Lun – Vend : 8h00 – 18h00 · Sam : sur RDV',
  videoDirecteur: 'https://www.youtube.com/embed/kBDAe8J12mI',
};

// ---------- Les 3 départements ----------
export const departments = [
  {
    id: 'equipements-medicaux',
    title: 'Équipements Médicaux',
    subtitle: 'Le cœur de notre activité',
    percent: 90,
    description:
      'Ce secteur représente plus de 90% de notre CA avec comme services la fourniture, l\'installation, la mise en service et la maintenance des équipements hospitaliers. Nous intervenons en milieu hospitalier, cliniques et centres de santé.',
    image: '/images/sections/equipements-medicaux.webp',
    features: [
      'Fourniture d\'équipements hospitaliers',
      'Installation et mise en service',
      'Maintenance préventive et corrective',
      'Formation des utilisateurs et techniciens',
    ],
  },
  {
    id: 'location-voitures',
    title: 'Location de Voitures',
    subtitle: 'Parc de 22 véhicules',
    percent: 7,
    description:
      'Nous disposons d\'un parc de 22 véhicules composés de berlines, bus, camions et de véhicules tout-terrain. Ce dispositif logistique est associé à un personnel de chauffeurs expérimentés, disponibles et efficaces.',
    image: '/images/sections/location-voiture.webp',
    features: [
      'Berlines, bus, camions et 4x4',
      'Chauffeurs expérimentés',
      'Disponibilité permanente',
      'Location courte et longue durée',
    ],
  },
  {
    id: 'manutention',
    title: 'Manutention',
    subtitle: 'Logistique et entreposage',
    percent: 3,
    description:
      'Nous offrons comme service, le chargement déchargement de toutes les marchandises provenant des camions, wagons et navires ; l\'empotage et le dépotage des containers, le pointage et l\'arrivage sur le terre-plein et au magasin.',
    image: '/images/sections/manutention.webp',
    features: [
      'Chargement / déchargement',
      'Empotage et dépotage de containers',
      'Pointage et arrivage',
      'Gestion de magasin',
    ],
  },
];

// ---------- Domaines d'intervention ----------
export const services = [
  {
    id: 'maintenance',
    title: 'Maintenance hospitalière',
    icon: 'wrench',
    description:
      'Assurer la disponibilité et la fiabilité de vos équipements médicaux tout au long de leur cycle de vie.',
    items: ['Maintenance préventive', 'Maintenance corrective', 'Formation des utilisateurs et techniciens', 'Installation'],
  },
  {
    id: 'conseils',
    title: 'Conseils en équipements',
    icon: 'bulb',
    description:
      'Vous accompagner dans le choix et la configuration de votre plateau technique médical.',
    items: [
      'Conseil à l\'achat du matériel médical',
      'Conseil sur les normes de construction devant abriter les équipements médicaux',
      'Négociation',
    ],
  },
  {
    id: 'contrats',
    title: 'Accords de prestation',
    icon: 'handshake',
    description:
      'Des partenariats durables pour garantir la performance de vos infrastructures de santé.',
    items: ['Accord de prestation de contrat', 'Communication avec les utilisateurs, fabricants et distributeurs'],
  },
];

// ---------- 16 partenaires / marques ----------
export const partners = [
  { name: 'SCHILLER', image: '/images/partners/schiller.webp' },
  { name: 'DRÄGER', image: '/images/partners/drager.webp' },
  { name: 'MINDRAY', image: '/images/partners/mindray.webp' },
  { name: 'MAQUET', image: '/images/partners/maquet.webp' },
  { name: 'FUKUDA DENSHI', image: '/images/partners/fukuda.webp' },
  { name: 'HARTMANN', image: '/images/partners/hartmann.webp' },
  { name: 'FRESENIUS', image: '/images/partners/fresenius.webp' },
  { name: 'KAWE', image: '/images/partners/kawe.webp' },
  { name: 'LAMIDAY NOURY', image: '/images/partners/lamiday-noury.webp' },
  { name: 'MEDIPREMA', image: '/images/partners/mediprema.webp' },
  { name: 'PLANMECA', image: '/images/partners/planmeca.webp' },
  { name: 'POURET MEDICAL', image: '/images/partners/pouret.webp' },
  { name: 'SPENGLER', image: '/images/partners/spengler.webp' },
  { name: 'VITALOGRAPH', image: '/images/partners/vitalograph.webp' },
  { name: 'HOLTEX', image: '/images/partners/holtex.webp' },
  { name: 'GM MEDICAL', image: '/images/partners/gm-medical.webp' },
];

// ---------- Catégories de produits ----------
export const categories = [
  { slug: 'dispensaire', name: 'Dispensaire', image: '/images/categories/dispensaire.webp', icon: 'first-aid', description: 'Équipements essentiels pour les centres de santé et dispensaires.' },
  { slug: 'maternite', name: 'Maternité', image: '/images/categories/maternite.webp', icon: 'baby', description: 'Équipements pour la santé maternelle et néonatale.' },
  { slug: 'bloc-operatoire', name: 'Bloc Opératoire', image: '/images/categories/bloc-operatoire.webp', icon: 'surgery', description: 'Matériels chirurgicaux et de bloc opératoire.' },
  { slug: 'cardiologie', name: 'Cardiologie', image: '/images/categories/cardiologie.webp', icon: 'heart', description: 'Équipements de diagnostic et de suivi cardiologique.' },
  { slug: 'pediatrie', name: 'Pédiatrie', image: '/images/categories/pediatrie.webp', icon: 'child', description: 'Équipements dédiés aux soins pédiatriques et néonataux.' },
  { slug: 'mobilier-medical', name: 'Mobilier médical', image: '/images/categories/mobilier-medical.webp', icon: 'bed', description: 'Mobilier hospitalier et d\'examen.' },
  { slug: 'anesthesie', name: 'Anesthésie', image: '/images/sections/salle-operation.webp', icon: 'air', description: 'Stations d\'anesthésie et ventilation.' },
  { slug: 'reanimation', name: 'Réanimation', image: '/images/categories/reanimation.webp', icon: 'monitor', description: 'Ventilateurs et monitorage de réanimation.' },
  { slug: 'instruments-medicaux', name: 'Instruments médicaux', image: '/images/categories/instruments.webp', icon: 'scalpel', description: 'Instruments chirurgicaux et de précision.' },
  { slug: 'veterinaire', name: 'Vétérinaire', image: '/images/categories/imagerie.webp', icon: 'paw', description: 'Équipements pour la santé animale.' },
];

// ---------- Réalisations (extrait de la page À Propos) ----------
export const realisations = [
  {
    title: 'Blocs chirurgicaux',
    detail: 'Fourniture, livraison, installation et mise en service de blocs chirurgicaux au profit de l\'Hôpital de Zone de Sègbana et Centre de Santé de Kalalé.',
    ref: 'Marché n° 482/MFE/MDN/DNMP/SP du 09/05/09',
  },
  {
    title: 'Équipements médico-techniques — Covè',
    detail: 'Fourniture, installation et mise en service d\'équipements médico-techniques (Lot 2) au Profit du PADS pour l\'Hôpital de Zone de Covè.',
    ref: 'Marché n° 277/MFE/MS/DNCMP/SP du 02/09/14',
  },
  {
    title: 'Équipements de pédiatrie et néonatologie',
    detail: 'Fourniture, livraison, installation et mise en service d\'équipements de pédiatrie et de néonatologie (lot n°6) au profit du CNHU-HKM, HOMEL, des CH et des HZ.',
    ref: 'Marché n° 157/MFE/MS/DNMP/SP du 28/05/2010',
  },
  {
    title: '72 maternités — PADS',
    detail: 'Acquisition, installation et mise en service d\'équipements médicotechniques essentiels pour 72 maternités Zones d\'intervention du PADS (Lots 1 et 2).',
    ref: 'Marchés n°s 293-294/MFE/MS/DNCMP/SP du 12/09/14',
  },
  {
    title: 'Autoclaves — Ministère de la Santé',
    detail: 'Fourniture, installation et mise en service d\'autoclaves de taille moyenne au profit du Ministère de la Santé.',
    ref: 'Marché n° 212/MDEF/MSP/DNMP/SP du 19/05/11',
  },
  {
    title: 'Équipements de techniques opératoires',
    detail: 'Fourniture d\'équipements et matériels de techniques opératoires au profit des hôpitaux et centres de santé (Lot 5).',
    ref: 'Marché n° 167/MS/SPRMP/PASMI/SA du 27/06/17',
  },
  {
    title: 'Équipements médicotechniques — Djidja',
    detail: 'Fourniture, installation et mise en service d\'équipements médicotechniques au profit du PADS pour l\'Hôpital de Zone de Djidja.',
    ref: 'Marché n° 343/MFE/MS/DNCMP/SP du 09/09/13',
  },
  {
    title: 'Soins obstétricaux et néonataux',
    detail: 'Fourniture d\'équipements et matériels de soins obstétricaux et néonataux (Lot 4).',
    ref: 'Marché n° 167/MS/SPRMP/PASMI/SA du 27/06/17',
  },
];

// ---------- Bureaux (page Contacts) ----------
export const offices = [
  {
    country: 'Bénin',
    type: 'Direction Générale',
    city: 'Cotonou',
    contact: 'Antoine BONOU',
    phones: ['(+229) 01 21 33 09 15', '01 66 33 53 35'],
    emails: ['contact@berecsarl.com', 'berecmedical@yahoo.fr'],
    address: 'C/343, quartier Ayélawadjè – Akpakpa',
  },
  {
    country: "Côte d'Ivoire",
    type: 'Bureau',
    city: 'Abidjan',
    contact: 'DATE Abenan Marie-Yvonne',
    phones: ['(+225) 07 90 78 70', '05 54 32 92', '01 24 92 40'],
    emails: ['dameyego@yahoo.fr'],
  },
  {
    country: 'Niger',
    type: 'Bureau',
    city: 'Niamey',
    contact: 'Mr SIDIBE Mohamadou Mahaman Taher',
    phones: ['(+227) 97 97 79 40'],
    emails: ['sidibetaher@yahoo.fr'],
  },
  {
    country: 'Burkina-Faso',
    type: 'Bureau',
    city: 'Ouagadougou',
    contact: 'Monsieur ZINSOU A. Germain',
    phones: ['(+226) 50 30 00 89', '75 240 240', '61 41 25 01', '78 68 68 70'],
    emails: ['germinal12002@yahoo.fr'],
  },
  {
    country: 'Mali',
    type: 'Bureau',
    city: 'Bamako',
    contact: 'Mr Silly Sing',
    phones: [],
    emails: [],
  },
];

// ---------- Articles / Actualités ----------
export const articles = [
  {
    slug: 'fauteuil-dentaire-suru-lere',
    title: 'Acquisition et installation d\'une unité de fauteuil dentaire au profit de CHUZ de Suru-Léré',
    date: '2022-01-28',
    category: 'Actualités',
    excerpt:
      'BEREC SARL a procédé à l\'acquisition et l\'installation complète d\'une unité de fauteuil dentaire au profit du CHUZ de Suru-Léré le 14 janvier 2022.',
    images: ['/images/articles/fauteuil-dentaire-1.webp', '/images/articles/fauteuil-dentaire-2.webp', '/images/articles/fauteuil-dentaire-3.webp'],
    cover: '/images/articles/fauteuil-dentaire.webp',
    tags: ['Dentaire', 'Installation'],
  },
  {
    slug: 'hz-allada-autoclave-s500',
    title: 'HZ-Allada : Remise en état de l\'autoclave S-500',
    date: '2021-12-06',
    category: 'Actualités',
    excerpt: 'Remise en état complète de l\'autoclave S-500 de l\'Hôpital de Zone d\'Allada par les équipes techniques de BEREC SARL.',
    images: ['/images/articles/hz-allada-autoclave.webp', '/images/articles/hz-allada-1.webp'],
    cover: '/images/articles/hz-allada-1.webp',
    video: 'https://www.youtube.com/embed/GIVHoMY8qVU',
    tags: ['Autoclave', 'Maintenance'],
  },
  {
    slug: 'maintenance-radio-bmi-suru-lere',
    title: 'Maintenance et remise en service de la radio marque BMI du CHUZ Suru-Léré',
    date: '2021-12-06',
    category: 'Actualités',
    excerpt:
      'Le 26 Novembre 2021, nos techniciens ont assuré la maintenance et la remise en service de la radio marque BMI du CHUZ Suru-Léré.',
    images: ['/images/articles/radio-bmi-suru-lere.webp', '/images/articles/radio-bmi-2.webp'],
    cover: '/images/articles/radio-bmi-suru-lere.webp',
    tags: ['Radio', 'BMI', 'Maintenance'],
  },
  {
    slug: 'stimulateur-cardiaque',
    title: 'Stimulateur cardiaque',
    date: '2021-09-24',
    category: 'Actualités',
    excerpt:
      'La société BEREC intervient depuis 2006 dans ce domaine en mettant à disposition des praticiens les meilleurs pacemakers par le biais des fabricants.',
    images: ['/images/articles/stimulateur-cardiaque.webp'],
    cover: '/images/articles/stimulateur-cardiaque.webp',
    video: 'https://www.youtube.com/embed/iYxjJtvy0oc',
    tags: ['pacemaker', 'Cardiologie'],
  },
  {
    slug: 'spot-berec-sarl',
    title: 'SPOT BEREC SARL',
    date: '2021-09-02',
    category: 'Actualités',
    excerpt: 'Découvrez le spot de présentation de la société BEREC SARL : ses activités, ses références et son engagement au service de la santé.',
    images: ['/images/articles/award-berec.webp'],
    cover: '/images/articles/award-berec.webp',
    video: 'https://www.youtube.com/embed/kVSEtwbFVRI',
    tags: ['BEREC', 'Présentation'],
  },
  {
    slug: 'reparation-autoclave-bassila',
    title: 'Réparation sur autoclave de zone de Bassila',
    date: '2021-08-03',
    category: 'Actualités',
    excerpt: 'Réparation complète de l\'autoclave de zone de Bassila en 2019, garantissant la stérilisation des dispositifs médicaux.',
    images: ['/images/articles/bassila-autoclave.webp'],
    cover: '/images/articles/bassila-autoclave.webp',
    tags: ['Autoclave', 'Maintenance'],
  },
  {
    slug: 'installation-autoclave-hz-allada-2019',
    title: 'Installation Autoclave à HZ Allada',
    date: '2021-08-03',
    category: 'Actualités',
    excerpt: 'Installation d\'un autoclave à l\'Hôpital de Zone d\'Allada en 2019, dans le cadre du renforcement du plateau technique.',
    images: ['/images/articles/hz-allada-2.webp'],
    cover: '/images/articles/hz-allada-2.webp',
    tags: ['Autoclave', 'Installation'],
  },
  {
    slug: 'marche-hopital-kalale-2020',
    title: 'Marché Hôpital de zone Kalalé 2020',
    date: '2021-08-03',
    category: 'Actualités',
    excerpt: 'BEREC SARL a remporté et exécuté le marché d\'équipement de l\'Hôpital de Zone de Kalalé en 2020.',
    images: ['/images/articles/marche-kalale.webp'],
    cover: '/images/articles/marche-kalale.webp',
    tags: ['Marché', 'Hôpital'],
  },
  {
    slug: 'hia-cotonou-2021',
    title: 'HIA COTONOU 2021',
    date: '2021-07-28',
    category: 'Actualités',
    excerpt: 'BEREC SARL a participé à la 4ème édition du Salon International de l\'Équipement, des Technologies et Services de la Santé (HIA) à Cotonou en 2021.',
    images: ['/images/articles/hia-cotonou-1.webp', '/images/articles/hia-cotonou-2.webp', '/images/articles/hia-cotonou-3.webp'],
    cover: '/images/articles/hia-cotonou-1.webp',
    tags: ['Salon', 'HIA', 'Événement'],
  },
  {
    slug: 'drager-carina-compacite',
    title: 'DRAGER CARINA : Une merveille de compacité',
    date: '2018-06-06',
    category: 'Drager',
    excerpt:
      'Nouveau ventilateur de Soins Continus « Carina™ » : une solution très économique bénéficiant de fonctions ventilatoires très performantes.',
    images: ['/images/products/drager-carina.webp'],
    cover: '/images/products/drager-carina.webp',
    tags: ['DRAGER', 'Ventilateur'],
  },
  {
    slug: 'schiller-holter-medilog',
    title: 'Le système Holter medilog de SCHILLER',
    date: '2018-05-10',
    category: 'SCHILLER',
    excerpt:
      'Le système Holter medilog de SCHILLER pour un suivi ambulatoire complet de l\'ECG, la détection des arythmies et le diagnostic des cardiopathies.',
    images: ['/images/products/comed-laryngoscope.webp'],
    cover: '/images/products/comed-laryngoscope.webp',
    tags: ['ECG', 'Holter', 'Cardiologie'],
  },
];

// ---------- Témoignage du Directeur ----------
export const directorMessage = {
  title: 'MOT DU DIRECTEUR',
  quote:
    'L\'un des droits fondamentaux de tout être humain est la possession du meilleur état de santé qu\'il est capable d\'atteindre. Ce droit à la santé comprend l\'accès, en temps utile, à des soins de santé acceptables, d\'une qualité satisfaisante et d\'un coût abordable…',
  note:
    'Les principales exigences de la démarche de Berec Sarl reposent sur la mise en place d\'un organigramme approprié pour le Service biomédical et des ressources humaines, physiques et matérielles adéquates.',
  name: 'Antoine BONOU',
  role: 'Directeur Général',
  image: '/images/sections/directeur.webp',
};

export const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'À Propos', to: '/a-propos' },
  { label: 'Produits', to: '/produits' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contacts', to: '/contacts' },
];
