import { EpiCategory, EpiProductItem } from '../types/site';

/**
 * Centralized provisional EPI categories and demonstration product entries.
 * Replace or extend entries here once confirmed inventory and manufacturer documentation are provided.
 * Do not add unverified EN/CE/chemical resistance claims without real product sheets.
 */
export const EPI_CATALOGUE_NOTICE = {
  eyebrow: 'Catalogue fournisseur · FastMosk',
  text: "Les catégories et références ci-dessous présentent la gamme fournisseur FastMosk intégrée à ABHYGO. Les disponibilités et caractéristiques finales sont confirmées lors du devis.",
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
