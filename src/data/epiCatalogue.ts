import { EpiCategory, EpiProductItem } from '../types/site';

/**
 * Centralized provisional EPI categories and demonstration product entries.
 * Replace or extend entries here once confirmed inventory and manufacturer documentation are provided.
 * Do not add unverified EN/CE/chemical resistance claims without real product sheets.
 */
export const EPI_CATALOGUE_NOTICE = {
  eyebrow: 'Catalogue provisoire · Démonstration',
  text: "Les catégories et fiches ci-dessous sont présentées à titre de démonstration sans confirmation de stock, de marque ou de niveau normatif. Les spécifications exactes et documents techniques sont communiqués exclusivement sur base de références confirmées lors de votre devis.",
} as const;

export const EPI_CATEGORIES: EpiCategory[] = [
  {
    id: 'gants-protection',
    label: 'Gants de protection',
    description: "Équipements destinés à la protection des mains pour les tâches de manutention et d'atelier.",
  },
  {
    id: 'masques-protection',
    label: 'Masques de protection',
    description: "Solutions de protection respiratoire individuelle adaptées aux environnements professionnels.",
  },
  {
    id: 'lunettes-visieres',
    label: 'Lunettes et visières',
    description: "Équipements dédiés à la protection des yeux et du visage contre les projections courantes.",
  },
  {
    id: 'casques-securite',
    label: 'Casques de sécurité',
    description: "Protections crâniennes pour chantiers, zones industrielles et opérations techniques.",
  },
  {
    id: 'chaussures-securite',
    label: 'Chaussures de sécurité',
    description: "Chaussures et bottes professionnelles dédiées aux environnements de travail exigeants.",
  },
  {
    id: 'vetements-combinaisons',
    label: 'Vêtements et combinaisons de protection',
    description: "Tenues professionnelles, gilets haute visibilité et combinaisons pour équipes sur site.",
  },
];

export const EPI_DEMO_PRODUCTS: EpiProductItem[] = [
  {
    id: 'demo-epi-gants-manutention',
    name: 'Gants de protection pour manutention',
    categoryId: 'gants-protection',
    shortDescription:
      "Exemple de paire de gants tricotés avec enduction paume pour les opérations courantes de manutention en entrepôt ou atelier.",
    galleryImages: [
      {
        src: '/images/demo_epi_gants_1795122050776-800.webp',
        alt: 'Visuel générique de gants de protection pour manutention',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: "Ensemble d'équipements de protection individuelle",
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-gants-atelier',
    name: "Gants de protection d'atelier",
    categoryId: 'gants-protection',
    shortDescription:
      "Exemple de gants professionnels conçus pour les postes techniques nécessitant préhension et confort d'usage.",
    galleryImages: [
      {
        src: '/images/demo_epi_gants_1795122050776-800.webp',
        alt: "Visuel générique de gants de protection d'atelier",
      },
      {
        src: '/images/hero_abhygo_supply_1795119463619-800.webp',
        alt: 'Fournitures professionnelles et équipements EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-masque-coque',
    name: 'Masque de protection respiratoire moulé',
    categoryId: 'masques-protection',
    shortDescription:
      "Exemple de masque à coque préformée destiné aux environnements nécessitant une barrière respiratoire individuelle.",
    galleryImages: [
      {
        src: '/images/demo_epi_masques_1795122051045-800.webp',
        alt: 'Visuel générique de masques de protection respiratoire',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: "Vue complémentaire d'équipements EPI",
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-masque-pliable',
    name: 'Masque de protection pliable à usage professionnel',
    categoryId: 'masques-protection',
    shortDescription:
      "Exemple de masque individuel pliable adapté à une distribution pratique sur site pour les équipes.",
    galleryImages: [
      {
        src: '/images/demo_epi_masques_1795122051045-800.webp',
        alt: 'Visuel générique de masques pliables de protection',
      },
      {
        src: '/images/hero_abhygo_supply_1795119463619-800.webp',
        alt: 'Contexte professionnel hygiène et EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-lunettes-claires',
    name: 'Lunettes de protection panoramiques',
    categoryId: 'lunettes-visieres',
    shortDescription:
      "Exemple de lunettes transparentes à branches enveloppantes destinées à la protection oculaire quotidienne.",
    galleryImages: [
      {
        src: '/images/demo_epi_lunettes_1795122050662-800.webp',
        alt: 'Visuel générique de lunettes de protection et visière',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: 'Lunettes et équipements de sécurité sur table',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-visiere-faciale',
    name: 'Visière de protection faciale transparente',
    categoryId: 'lunettes-visieres',
    shortDescription:
      "Exemple d'écran facial réglable couvrant l'ensemble du visage lors des tâches exposées.",
    galleryImages: [
      {
        src: '/images/demo_epi_lunettes_1795122050662-800.webp',
        alt: 'Visuel générique de visière faciale de protection',
      },
      {
        src: '/images/hero_abhygo_supply_1795119463619-800.webp',
        alt: 'Équipements de sécurité et hygiène professionnelle',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-casque-chantier',
    name: 'Casque de sécurité à coque ventilée',
    categoryId: 'casques-securite',
    shortDescription:
      "Exemple de casque industriel avec harnais réglable destiné aux zones de chantier et de manutention.",
    galleryImages: [
      {
        src: '/images/demo_epi_casques_1795122051598-800.webp',
        alt: 'Visuel générique de casques de sécurité blancs et bleu marine',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: 'Casque de sécurité et vêtements haute visibilité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-casque-industriel',
    name: 'Casque de sécurité polyvalent avec jugulaire',
    categoryId: 'casques-securite',
    shortDescription:
      "Exemple de protection crânienne avec maintien par sangle pour les interventions sur site technique.",
    galleryImages: [
      {
        src: '/images/demo_epi_casques_1795122051598-800.webp',
        alt: 'Visuel générique de casque industriel de sécurité',
      },
      {
        src: '/images/hero_abhygo_supply_1795119463619-800.webp',
        alt: 'Casque et lunettes de sécurité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-chaussures-montantes',
    name: 'Chaussures de sécurité montantes',
    categoryId: 'chaussures-securite',
    shortDescription:
      "Exemple de chaussures montantes à lacets pour le maintien de la cheville et le travail en environnement industriel.",
    galleryImages: [
      {
        src: '/images/demo_epi_chaussures_1795122050970-800.webp',
        alt: 'Visuel générique de chaussures de sécurité montantes',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: 'Sélection générale EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-chaussures-chantier',
    name: 'Chaussures de travail semelle crantée',
    categoryId: 'chaussures-securite',
    shortDescription:
      "Exemple de modèle conçu pour l'adhérence et l'endurance lors des déplacements quotidiens sur site.",
    galleryImages: [
      {
        src: '/images/demo_epi_chaussures_1795122050970-800.webp',
        alt: 'Visuel générique de chaussures de travail professionnelles',
      },
      {
        src: '/images/hero_abhygo_supply_1795119463619-800.webp',
        alt: 'Environnement industriel EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-veste-travail',
    name: 'Veste de travail professionnelle multi-poches',
    categoryId: 'vetements-combinaisons',
    shortDescription:
      "Exemple de veste professionnelle fonctionnelle adaptée aux interventions en atelier, maintenance ou logistique.",
    galleryImages: [
      {
        src: '/images/demo_epi_vetements_1795122051283-800.webp',
        alt: 'Visuel générique de veste de travail et gilet haute visibilité',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: 'Tenue professionnelle haute visibilité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-gilet-signalisation',
    name: 'Gilet et combinaison de protection haute visibilité',
    categoryId: 'vetements-combinaisons',
    shortDescription:
      "Exemple de vêtement équipé de bandes rétro-réfléchissantes pour améliorer le repérage visuel des équipes.",
    galleryImages: [
      {
        src: '/images/demo_epi_vetements_1795122051283-800.webp',
        alt: 'Visuel générique de gilet haute visibilité',
      },
      {
        src: '/images/epi_protection_showcase_1795119463291-800.webp',
        alt: 'Équipement textile haute visibilité',
      },
    ],
    isDemo: true,
  },
  {
    id: "supplier-blouse-a-usage-unique", name: "Blouse A Usage Unique", categoryId: "vetements-combinaisons",
    shortDescription: "Blouse A Usage Unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/blouse-a-usage-unique.webp", alt: "Blouse A Usage Unique" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-charlotte-a-usage-unique", name: "Charlotte A Usage Unique", categoryId: "vetements-combinaisons",
    shortDescription: "Charlotte A Usage Unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/charlotte-a-usage-unique.webp", alt: "Charlotte A Usage Unique" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-couvre-botte-a-usage-unique", name: "Couvre Botte A Usage Unique", categoryId: "chaussures-securite",
    shortDescription: "Couvre Botte A Usage Unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/couvre-botte-a-usage-unique.webp", alt: "Couvre Botte A Usage Unique" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-couvre-chaussure-a-usage-unique", name: "Couvre Chaussure A Usage Unique", categoryId: "vetements-combinaisons",
    shortDescription: "Couvre Chaussure A Usage Unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/couvre-chaussure-a-usage-unique.webp", alt: "Couvre Chaussure A Usage Unique" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-gant-jetable-en-nitrile-bleu", name: "Gant Jetable En Nitrile Bleu", categoryId: "gants-protection",
    shortDescription: "Gant Jetable En Nitrile Bleu proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/gant-jetable-en-nitrile-bleu.webp", alt: "Gant Jetable En Nitrile Bleu" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-gant-jetable-en-nitrile-bleu-2", name: "Gant jetable en nitrile bleu renforcé", categoryId: "gants-protection",
    shortDescription: "Gant jetable en nitrile bleu renforcé proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/gant-jetable-en-nitrile-bleu-2.webp", alt: "Gant jetable en nitrile bleu renforcé" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-gant-jetable-en-vinyle", name: "Gant Jetable En Vinyle", categoryId: "gants-protection",
    shortDescription: "Gant Jetable En Vinyle proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/gant-jetable-en-vinyle.webp", alt: "Gant Jetable En Vinyle" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-manchette-a-usage-unique", name: "Manchette A Usage Unique", categoryId: "gants-protection",
    shortDescription: "Manchette A Usage Unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/manchette-a-usage-unique.webp", alt: "Manchette A Usage Unique" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-botte-de-protection-alimentaire-blanche", name: "Botte De Protection Alimentaire Blanche", categoryId: "chaussures-securite",
    shortDescription: "Botte De Protection Alimentaire Blanche proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/botte-de-protection-alimentaire-blanche.webp", alt: "Botte De Protection Alimentaire Blanche" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-botte-en-pvc-vert", name: "Botte en PVC vert", categoryId: "chaussures-securite",
    shortDescription: "Botte en PVC vert proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/botte-en-pvc-vert.webp", alt: "Botte en PVC vert" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-botte-en-pvc-alimentaire-blanche", name: "Botte En Pvc Alimentaire Blanche", categoryId: "chaussures-securite",
    shortDescription: "Botte En Pvc Alimentaire Blanche proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/botte-en-pvc-alimentaire-blanche.webp", alt: "Botte En Pvc Alimentaire Blanche" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-casque-anti-bruit", name: "Casque Anti Bruit", categoryId: "casques-securite",
    shortDescription: "Casque Anti Bruit proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/casque-anti-bruit.webp", alt: "Casque Anti Bruit" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-chaussures-de-securite-ars", name: "Chaussures De Securite Ars", categoryId: "chaussures-securite",
    shortDescription: "Chaussures De Securite Ars proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/chaussures-de-securite-ars.webp", alt: "Chaussures De Securite Ars" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-chaussures-de-securite-mts", name: "Chaussures De Securite Mts", categoryId: "chaussures-securite",
    shortDescription: "Chaussures De Securite Mts proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/chaussures-de-securite-mts.webp", alt: "Chaussures De Securite Mts" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-gant-bicolore", name: "Gant Bicolore", categoryId: "gants-protection",
    shortDescription: "Gant Bicolore proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/gant-bicolore.webp", alt: "Gant Bicolore" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-lunette-de-protection", name: "Lunette De Protection", categoryId: "lunettes-visieres",
    shortDescription: "Lunette De Protection proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/lunette-de-protection.webp", alt: "Lunette De Protection" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-masque-climax", name: "Masque Climax", categoryId: "masques-protection",
    shortDescription: "Masque Climax proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/masque-climax.webp", alt: "Masque Climax" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },
  {
    id: "supplier-sabot", name: "Sabot", categoryId: "chaussures-securite",
    shortDescription: "Sabot proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.",
    galleryImages: [{ src: "/images/fastmosk/sabot.webp", alt: "Sabot" }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.', isDemo: false,
  },

];
