import { HygieneCategory, HygieneProductItem } from '../types/site';

/**
 * Centralized provisional hygiene categories and demonstration product entries.
 * Replace or extend entries here when real product references and technical sheets are confirmed.
 */
export const HYGIENE_CATALOGUE_NOTICE = {
  eyebrow: 'Catalogue fournisseur · FastMosk',
  text: "Les catégories et références ci-dessous présentent la gamme fournisseur FastMosk intégrée à ABHYGO. Les conditionnements, disponibilités et caractéristiques finales sont confirmés lors du devis.",
} as const;

export const HYGIENE_CATEGORIES: HygieneCategory[] = [
  {
    id: 'produits-nettoyage',
    label: 'Produits de nettoyage',
    description: "Solutions d'entretien courant et détergents pour sols et surfaces professionnelles.",
  },
  {
    id: 'produits-desinfectants',
    label: 'Produits désinfectants',
    description: "Solutions destinées au traitement hygiénique des surfaces et zones sensibles.",
  },
  {
    id: 'savons-hygiene-mains',
    label: 'Savons et hygiène des mains',
    description: "Produits lavants et solutions pour l'hygiène cutanée des équipes et sanitaires.",
  },
  {
    id: 'essuyage-papier-sanitaire',
    label: 'Essuyage et papier sanitaire',
    description: "Bobines d'essuyage, essuie-mains et papiers sanitaires à usage professionnel.",
  },
  {
    id: 'distributeurs-accessoires',
    label: 'Distributeurs et accessoires',
    description: "Appareils muraux et accessoires de distribution pour savons et consommables papier.",
  },
  {
    id: 'materiel-nettoyage',
    label: 'Matériel de nettoyage',
    description: "Outils manuels, textiles techniques et équipements de mise en œuvre sur site.",
  },
];

export const HYGIENE_DEMO_PRODUCTS: HygieneProductItem[] = [
  {
    id: 'demo-nettoyage-sols',
    name: 'Détergent neutre multi-surfaces',
    categoryId: 'produits-nettoyage',
    description:
      "Exemple de produit d'entretien courant pour le lavage manuel ou mécanisé des sols et surfaces lavables.",
    imageSrc: '/images/demo_cat_nettoyage_1795121769918-800.webp',
    imageAlt: 'Visuel générique de bidons et pulvérisateur pour produits de nettoyage',
    isDemo: false,
  },
  {
    id: 'demo-degraissant-pro',
    name: 'Dégraissant professionnel polyvalent',
    categoryId: 'produits-nettoyage',
    description:
      "Exemple de solution destinée au dégraissage des plans de travail, ateliers et zones techniques.",
    imageSrc: '/images/demo_cat_nettoyage_1795121769918-800.webp',
    imageAlt: 'Visuel générique de contenant professionnel de dégraissant',
    isDemo: false,
  },
  {
    id: 'demo-desinfectant-surfaces',
    name: 'Solution désinfectante pour surfaces',
    categoryId: 'produits-desinfectants',
    description:
      "Exemple de produit destiné à l'entretien hygiénique des surfaces fréquemment sollicitées.",
    imageSrc: '/images/demo_cat_desinfectant_1795121772139-800.webp',
    imageAlt: 'Visuel générique de bidons et vaporisateurs désinfectants',
    isDemo: false,
  },
  {
    id: 'demo-desinfectant-sanitaires',
    name: 'Nettoyant désinfectant sanitaires',
    categoryId: 'produits-desinfectants',
    description:
      "Exemple de formulation dédiée à l'hygiène quotidienne des blocs sanitaires et vestiaires.",
    imageSrc: '/images/demo_cat_desinfectant_1795121772139-800.webp',
    imageAlt: 'Visuel générique de bidons sanitaires',
    isDemo: false,
  },
  {
    id: 'demo-savon-lavant-doux',
    name: 'Savon liquide lavant usage fréquent',
    categoryId: 'savons-hygiene-mains',
    description:
      "Exemple de savon liquide destiné au lavage régulier des mains dans les espaces professionnels.",
    imageSrc: '/images/demo_cat_savon_mains_1795121771359-800.webp',
    imageAlt: 'Visuel générique de flacons pompe et recharge pour savon mains',
    isDemo: false,
  },
  {
    id: 'demo-gel-hygiene-mains',
    name: 'Lotion pour hygiène des mains',
    categoryId: 'savons-hygiene-mains',
    description:
      "Exemple de solution dédiée à l'hygiène rapide des mains aux points d'accès et postes de travail.",
    imageSrc: '/images/demo_cat_savon_mains_1795121771359-800.webp',
    imageAlt: "Visuel générique de flacon pour hygiène des mains",
    isDemo: false,
  },
  {
    id: 'demo-bobine-essuyage',
    name: "Bobine d'essuyage industriel",
    categoryId: 'essuyage-papier-sanitaire',
    description:
      "Exemple de bobine papier destinée aux besoins d'essuyage en atelier, laboratoire ou entrepôt.",
    imageSrc: '/images/demo_cat_essuyage_papier_1795121772208-800.webp',
    imageAlt: "Visuel générique de bobines d'essuyage et papier sanitaire",
    isDemo: false,
  },
  {
    id: 'demo-essuie-mains-papier',
    name: 'Essuie-mains pliés & papier sanitaire',
    categoryId: 'essuyage-papier-sanitaire',
    description:
      "Exemple de consommables papier pour l'équipement des sanitaires et points de lavage.",
    imageSrc: '/images/demo_cat_essuyage_papier_1795121772208-800.webp',
    imageAlt: 'Visuel générique de rouleaux et essuie-mains papier',
    isDemo: false,
  },
  {
    id: 'demo-distributeur-savon',
    name: 'Distributeur mural pour savon',
    categoryId: 'distributeurs-accessoires',
    description:
      "Exemple de distributeur mural conçu pour un dosage régulier dans les zones sanitaires.",
    imageSrc: '/images/demo_cat_distributeurs_1795121771820-800.webp',
    imageAlt: 'Visuel générique de distributeur mural de savon et papier',
    isDemo: false,
  },
  {
    id: 'demo-distributeur-papier',
    name: 'Distributeur de papier essuie-mains',
    categoryId: 'distributeurs-accessoires',
    description:
      "Exemple d'appareil mural destiné à la distribution contrôlée d'essuie-mains ou de rouleaux.",
    imageSrc: '/images/demo_cat_distributeurs_1795121771820-800.webp',
    imageAlt: 'Visuel générique de distributeur mural essuie-mains',
    isDemo: false,
  },
  {
    id: 'demo-balai-microfibre',
    name: 'Système de lavage à plat microfibre',
    categoryId: 'materiel-nettoyage',
    description:
      "Exemple d'ensemble manche, support et bandeau microfibre pour l'entretien des sols.",
    imageSrc: '/images/demo_cat_materiel_nettoyage_1795121771753-800.webp',
    imageAlt: 'Visuel générique de balai microfibre, raclette et lavettes',
    isDemo: false,
  },
  {
    id: 'demo-lavettes-raclettes',
    name: 'Lavettes microfibres & raclette sol',
    categoryId: 'materiel-nettoyage',
    description:
      "Exemple de textiles techniques et accessoires manuels pour l'entretien quotidien des locaux.",
    imageSrc: '/images/demo_cat_materiel_nettoyage_1795121771753-800.webp',
    imageAlt: 'Visuel générique de raclette et textiles microfibres',
    isDemo: false,
  },
  {
    id: "supplier-hypo-javel-24", name: "Hypo Javel 24", categoryId: "produits-desinfectants",
    description: "Hypo Javel 24 proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/hypo-javel-24.webp", imageAlt: "Hypo Javel 24 pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-hypo-javel-12", name: "Hypo Javel 12", categoryId: "produits-desinfectants",
    description: "Hypo Javel 12 proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/hypo-javel-12.webp", imageAlt: "Hypo Javel 12 pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-hand", name: "Eroma Hand", categoryId: "savons-hygiene-mains",
    description: "Eroma Hand proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-hand.webp", imageAlt: "Eroma Hand pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-gel", name: "Eroma Gel", categoryId: "savons-hygiene-mains",
    description: "Eroma Gel proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-gel.webp", imageAlt: "Eroma Gel pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-asp", name: "Eroma ASP", categoryId: "produits-desinfectants",
    description: "Eroma ASP proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-asp.webp", imageAlt: "Eroma ASP pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-sol-citron", name: "Eroma Sol Citron", categoryId: "produits-desinfectants",
    description: "Eroma Sol Citron proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-sol-citron.webp", imageAlt: "Eroma Sol Citron pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-sol-dl", name: "Eroma Sol DL", categoryId: "produits-desinfectants",
    description: "Eroma Sol DL proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-sol-dl.webp", imageAlt: "Eroma Sol DL pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-sol-fleur", name: "Eroma Sol Fleur", categoryId: "produits-desinfectants",
    description: "Eroma Sol Fleur proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-sol-fleur.webp", imageAlt: "Eroma Sol Fleur pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-eroma-sol-lavande", name: "Eroma Sol Lavande", categoryId: "produits-desinfectants",
    description: "Eroma Sol Lavande proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/eroma-sol-lavande.webp", imageAlt: "Eroma Sol Lavande pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-balai-alimentaire", name: "Balai Alimentaire", categoryId: "materiel-nettoyage",
    description: "Balai Alimentaire proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/balai-alimentaire.webp", imageAlt: "Balai Alimentaire pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-balai-dur", name: "Balai Dur", categoryId: "materiel-nettoyage",
    description: "Balai Dur proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/balai-dur.webp", imageAlt: "Balai Dur pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-balai-souple", name: "Balai Souple", categoryId: "materiel-nettoyage",
    description: "Balai Souple proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/balai-souple.webp", imageAlt: "Balai Souple pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-chamoisines", name: "Chamoisines", categoryId: "materiel-nettoyage",
    description: "Chamoisines proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/chamoisines.webp", imageAlt: "Chamoisines pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-chiffons-en-microfibre", name: "Chiffons En Microfibre", categoryId: "materiel-nettoyage",
    description: "Chiffons En Microfibre proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/chiffons-en-microfibre.webp", imageAlt: "Chiffons En Microfibre pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-jex-abrasif", name: "Jex Abrasif", categoryId: "materiel-nettoyage",
    description: "Jex Abrasif proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/jex-abrasif.webp", imageAlt: "Jex Abrasif pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-manche-en-bois", name: "Manche En Bois", categoryId: "materiel-nettoyage",
    description: "Manche En Bois proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/manche-en-bois.webp", imageAlt: "Manche En Bois pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-manche", name: "Manche", categoryId: "materiel-nettoyage",
    description: "Manche proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/manche.webp", imageAlt: "Manche pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-pelle-avec-manche", name: "Pelle Avec Manche", categoryId: "materiel-nettoyage",
    description: "Pelle Avec Manche proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/pelle-avec-manche.webp", imageAlt: "Pelle Avec Manche pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-pelle-en-plastique", name: "Pelle En Plastique", categoryId: "materiel-nettoyage",
    description: "Pelle En Plastique proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/pelle-en-plastique.webp", imageAlt: "Pelle En Plastique pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-raclette-sol-alimentaire", name: "Raclette Sol Alimentaire", categoryId: "materiel-nettoyage",
    description: "Raclette Sol Alimentaire proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/raclette-sol-alimentaire.webp", imageAlt: "Raclette Sol Alimentaire pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-raclette-vitre-inox", name: "Raclette Vitre Inox", categoryId: "materiel-nettoyage",
    description: "Raclette Vitre Inox proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/raclette-vitre-inox.webp", imageAlt: "Raclette Vitre Inox pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-serpilliere-couleur", name: "Serpilliere Couleur", categoryId: "materiel-nettoyage",
    description: "Serpilliere Couleur proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/serpilliere-couleur.webp", imageAlt: "Serpilliere Couleur pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-distributeur-de-desinfectant-automatique", name: "Distributeur De Desinfectant Automatique", categoryId: "distributeurs-accessoires",
    description: "Distributeur De Desinfectant Automatique proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/distributeur-de-desinfectant-automatique.webp", imageAlt: "Distributeur De Desinfectant Automatique pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-distributeur-savon-jvd-cleanline", name: "Distributeur Savon Jvd Cleanline", categoryId: "distributeurs-accessoires",
    description: "Distributeur Savon Jvd Cleanline proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/distributeur-savon-jvd-cleanline.webp", imageAlt: "Distributeur Savon Jvd Cleanline pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-papier-hygienique", name: "Papier Hygienique", categoryId: "essuyage-papier-sanitaire",
    description: "Papier Hygienique proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/papier-hygienique.webp", imageAlt: "Papier Hygienique pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-papier-essuie-main", name: "Papier Essuie Main", categoryId: "essuyage-papier-sanitaire",
    description: "Papier Essuie Main proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/papier-essuie-main.webp", imageAlt: "Papier Essuie Main pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-papier-essuie-tout", name: "Papier Essuie Tout", categoryId: "essuyage-papier-sanitaire",
    description: "Papier Essuie Tout proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/papier-essuie-tout.webp", imageAlt: "Papier Essuie Tout pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-papier-jumbo", name: "Papier Jumbo", categoryId: "essuyage-papier-sanitaire",
    description: "Papier Jumbo proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/papier-jumbo.webp", imageAlt: "Papier Jumbo pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-papier-zig-zag", name: "Papier Zig Zag", categoryId: "essuyage-papier-sanitaire",
    description: "Papier Zig Zag proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/papier-zig-zag.webp", imageAlt: "Papier Zig Zag pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-planet-container", name: "Planet Container", categoryId: "distributeurs-accessoires",
    description: "Planet Container proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/planet-container.webp", imageAlt: "Planet Container pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-poubelle-ronde-inox", name: "Poubelle Ronde Inox", categoryId: "distributeurs-accessoires",
    description: "Poubelle Ronde Inox proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/poubelle-ronde-inox.webp", imageAlt: "Poubelle Ronde Inox pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-sac-poubelle", name: "Sac Poubelle", categoryId: "distributeurs-accessoires",
    description: "Sac Poubelle proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/sac-poubelle.webp", imageAlt: "Sac Poubelle pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-scotche-transparent", name: "Scotche Transparent", categoryId: "distributeurs-accessoires",
    description: "Scotche Transparent proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/scotche-transparent.webp", imageAlt: "Scotche Transparent pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-poste-dappatage-total-box-noir", name: "Poste d'appâtage Total Box noir", categoryId: "distributeurs-accessoires",
    description: "Poste d'appâtage Total Box noir proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages à confirmer sur devis.",
    imageSrc: "/images/fastmosk/poste-dappatage-total-box-noir.webp", imageAlt: "Poste d'appâtage Total Box noir pour environnement professionnel",
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },

];
