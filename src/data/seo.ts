import { PageRoute } from '../types/site';

export interface RouteSeoMetadata {
  title: string;
  description: string;
  path: string;
}

export const SEO_BY_ROUTE: Record<PageRoute, RouteSeoMetadata> = {
  accueil: {
    title: "ABHYGO — Produits d'hygiène professionnelle & EPI au Maroc",
    description:
      "Produits d'hygiène professionnelle au Maroc et équipements de protection individuelle à Belfaa. Demandez votre devis B2B auprès d'ABHYGO.",
    path: '/',
  },
  hygiene: {
    title: "Produits d'hygiène professionnelle au Maroc | ABHYGO",
    description:
      "Découvrez les catégories de produits d'hygiène professionnelle au Maroc : nettoyage, désinfection, savons, essuyage et distributeurs ABHYGO.",
    path: '/produits-hygiene',
  },
  epi: {
    title: 'Équipements de protection individuelle Maroc | ABHYGO',
    description:
      'Fournisseur EPI Maroc basé à Belfaa : gants, masques, lunettes, casques, chaussures et vêtements de protection. Demande de devis B2B.',
    path: '/epi',
  },
  apropos: {
    title: "À propos d'ABHYGO — Fournisseur hygiène & EPI Maroc",
    description:
      "ABHYGO, fournisseur B2B à Belfaa (Maroc) spécialisé en produits d'hygiène professionnelle et équipements de protection individuelle (EPI).",
    path: '/a-propos',
  },
  contact: {
    title: 'Contact & Devis B2B — ABHYGO Belfaa, Maroc',
    description:
      "Contactez ABHYGO à Belfaa, Maroc (+212 668 057 197) par téléphone, WhatsApp ou email pour votre devis d'hygiène professionnelle et EPI.",
    path: '/contact',
  },
};
