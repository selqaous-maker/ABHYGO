import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Trash2,
} from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { BRAND_INFO } from '../data/brand';
import {
  PageRoute,
  QuoteBasketItem,
  QuoteCategory,
  QuoteFormData,
} from '../types/site';
import {
  buildMailtoQuoteUrl,
  buildQuoteSummaryText,
  buildWhatsAppQuoteUrl,
} from '../utils/quoteLinks';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

interface ContactPageProps {
  initialCategory?: QuoteCategory;
  initialMessage?: string;
  basketItems: QuoteBasketItem[];
  onUpdateBasketItem: (
    id: string,
    updates: Partial<Pick<QuoteBasketItem, 'quantity' | 'specifications'>>
  ) => void;
  onRemoveBasketItem: (id: string) => void;
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

type FormErrors = Partial<Record<keyof QuoteFormData, string>>;

const CATEGORY_LABELS: Record<QuoteCategory, string> = {
  hygiene: "Produits d'hygiène",
  epi: 'EPI',
  'les-deux': 'Hygiène & EPI',
};

export const ContactPage: React.FC<ContactPageProps> = ({
  initialCategory = 'les-deux',
  initialMessage = '',
  basketItems,
  onUpdateBasketItem,
  onRemoveBasketItem,
  onNavigate,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    category: initialCategory,
    requestedProducts: '',
    quantities: '',
    message: initialMessage,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [preparedSubmission, setPreparedSubmission] = useState<{
    data: QuoteFormData;
    basketSnapshot: QuoteBasketItem[];
  } | null>(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      category: initialCategory,
      message: initialMessage || prev.message,
    }));
  }, [initialCategory, initialMessage]);

  const validate = (data: QuoteFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      nextErrors.fullName = 'Veuillez renseigner votre nom complet.';
    }

    const phoneDigits = data.phone.replace(/[^\d+]/g, '');
    if (!data.phone.trim() || phoneDigits.length < 8) {
      nextErrors.phone = 'Veuillez saisir un numéro de téléphone valide.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
      nextErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!data.city.trim()) {
      nextErrors.city = 'Veuillez indiquer votre ville.';
    }

    if (basketItems.length === 0 && !data.requestedProducts.trim()) {
      nextErrors.requestedProducts =
        'Veuillez sélectionner des produits dans les catalogues ou indiquer les produits demandés.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setPreparedSubmission({
        data: formData,
        basketSnapshot: basketItems.map((item) => ({ ...item })),
      });
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
      }
    }
  };

  const handleFieldChange = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  const dispatchLinks = useMemo(() => {
    if (!preparedSubmission) return null;
    return {
      whatsappUrl: buildWhatsAppQuoteUrl(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot
      ),
      mailtoUrl: buildMailtoQuoteUrl(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot
      ),
      previewText: buildQuoteSummaryText(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot
      ),
    };
  }, [preparedSubmission]);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#101D3B]/10 bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('accueil')}
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-[#1765BD] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Retour à l&apos;accueil</span>
          </button>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#70BF35]" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#3D7514]">
                CONTACT &amp; DEMANDE DE DEVIS · {BRAND_INFO.location.toUpperCase()}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#101D3B] sm:text-4xl text-balance">
              Échanger avec {BRAND_INFO.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Contactez-nous directement par téléphone, WhatsApp ou email, ou préparez votre demande
              de devis B2B en quelques instants.
            </p>
          </div>
        </div>
      </section>

      {/* Split-Screen Contact Layout */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Contact Cards + Town-Level Map Area */}
            <aside aria-labelledby="contact-direct-heading" className="space-y-6 lg:col-span-5">
              <h2 id="contact-direct-heading" className="sr-only">
                Coordonnées directes et localisation à {BRAND_INFO.location}
              </h2>
              <Reveal>
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {/* Phone Card */}
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#23B9ED]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">Téléphone</p>
                      <p className="mt-1 text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD] tabular-nums">
                        {BRAND_INFO.phoneDisplay}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        Appel direct vers notre ligne professionnelle
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={BRAND_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#70BF35]/70 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#70BF35]">
                      <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <span>WhatsApp</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </div>
                      <p className="mt-1 text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD] tabular-nums">
                        {BRAND_INFO.phoneDisplay}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        Ouvrir une discussion avec message pré-rempli
                      </p>
                    </div>
                  </a>

                  {/* Email Card */}
                  <a
                    href={BRAND_INFO.emailHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:col-span-2 lg:col-span-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#23B9ED]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">Email professionnel</p>
                      <p className="mt-1 break-all text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD]">
                        {BRAND_INFO.email}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        Demandes d&apos;offres tarifaires et renseignements
                      </p>
                    </div>
                  </a>
                </div>
              </Reveal>

              {/* Town-Level Map Area: Belfaa, Maroc only */}
              <Reveal delay={0.05}>
                <div className="overflow-hidden rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#EAF1FA] via-[#F5F8FC] to-[#E2ECF8]">
                    {/* Subtle Swiss architectural grid lines (town-level visual only, no invented streets) */}
                    <svg
                      aria-hidden="true"
                      className="h-full w-full text-[#1765BD]/15"
                      viewBox="0 0 400 200"
                      fill="none"
                    >
                      <defs>
                        <pattern
                          id="belfaa-grid"
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 32 0 L 0 0 0 32"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="400" height="200" fill="url(#belfaa-grid)" />
                      <circle
                        cx="200"
                        cy="94"
                        r="52"
                        stroke="#1765BD"
                        strokeOpacity="0.18"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="200"
                        cy="94"
                        r="26"
                        fill="#23B9ED"
                        fillOpacity="0.12"
                      />
                    </svg>

                    {/* Centered Town-Level Pin */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#101D3B] text-[#70BF35] shadow-md ring-4 ring-white">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-2.5 text-sm font-semibold text-[#101D3B]">
                        {BRAND_INFO.location}
                      </p>
                      <p className="text-xs text-slate-600">
                        Localisation au niveau de la ville uniquement
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[#101D3B]/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#101D3B]">
                        {BRAND_INFO.location}
                      </p>
                      <p className="text-xs text-slate-500">
                        Région Souss-Massa · Maroc
                      </p>
                    </div>

                    <a
                      href={BRAND_INFO.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#101D3B]/20 bg-[#F5F8FC] px-4 py-2 text-xs font-medium text-[#101D3B] whitespace-nowrap transition-colors hover:border-[#1765BD] hover:text-[#1765BD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <span>Voir Belfaa sur la carte</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Privacy Note */}
              <div className="rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-4 text-xs leading-relaxed text-slate-600">
                <div className="flex items-start gap-2.5">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                  <p>
                    Confidentialité : vos informations restent dans votre navigateur jusqu&apos;à
                    l&apos;ouverture volontaire de WhatsApp ou de votre logiciel de messagerie.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Enquiry Form or Prepared Dispatch Panel */}
            <div className="lg:col-span-7">
              {preparedSubmission && dispatchLinks ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#1765BD]/30 bg-[#F5F8FC] p-6 sm:p-10"
                >
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#3D7514]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-[#101D3B] sm:text-2xl">
                        Votre demande est prête à être envoyée
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                        Ce site ne transmet pas automatiquement de messages en arrière-plan.
                        Cliquez sur le bouton WhatsApp ou Email ci-dessous pour envoyer votre
                        demande complète directement à notre équipe.
                      </p>
                    </div>
                  </div>

                  {/* Primary Sending Action: WhatsApp + Email Option */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href={dispatchLinks.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-[#1765BD] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#101D3B] motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <MessageSquare className="h-4 w-4 text-[#23B9ED]" aria-hidden="true" />
                      <span>Envoyer sur WhatsApp ({BRAND_INFO.phoneDisplay})</span>
                    </a>

                    <a
                      href={dispatchLinks.mailtoUrl}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#101D3B]/20 bg-white px-5 py-3 text-sm font-medium text-[#101D3B] transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-[#1765BD] hover:text-[#1765BD] motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <Mail className="h-4 w-4 text-[#1765BD]" aria-hidden="true" />
                      <span>Envoyer par email ({BRAND_INFO.email})</span>
                    </a>
                  </div>

                  {/* Message Preview */}
                  <div className="mt-7 rounded-xl border border-[#101D3B]/10 bg-white p-5">
                    <p className="text-xs font-semibold tracking-[0.04em] text-[#1765BD]">
                      APERÇU DU MESSAGE PRÉ-REMPLI
                    </p>
                    <pre className="mt-3 whitespace-pre-wrap break-words font-[family-name:var(--font-sans)] text-sm leading-relaxed text-slate-700">
                      {dispatchLinks.previewText}
                    </pre>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setPreparedSubmission(null)}
                    >
                      Modifier ma demande
                    </Button>
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={() => {
                        setPreparedSubmission(null);
                        setHasSubmittedAttempt(false);
                        setErrors({});
                        setFormData({
                          fullName: '',
                          company: '',
                          phone: '',
                          email: '',
                          city: '',
                          category: initialCategory,
                          requestedProducts: '',
                          quantities: '',
                          message: '',
                        });
                      }}
                    >
                      Réinitialiser le formulaire
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-xl border border-[#101D3B]/10 bg-white p-6 sm:p-8"
                >
                  <div className="border-b border-[#101D3B]/10 pb-5">
                    <h2 className="text-xl font-semibold text-[#101D3B]">
                      Formulaire de demande de devis
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Complétez vos coordonnées pour générer votre demande prête à l&apos;envoi.
                    </p>
                  </div>

                  {hasSubmittedAttempt && errorCount > 0 && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50/70 px-4 py-3 text-xs text-red-800 sm:text-sm"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        Merci de vérifier les {errorCount} champ
                        {errorCount > 1 ? 's obligatoires signalés' : ' obligatoire signalé'} ci-dessous.
                      </span>
                    </div>
                  )}

                  {/* Segmented Category Selector */}
                  <div className="mt-6">
                    <span className="block text-sm font-medium text-[#101D3B]">
                      Pôle concerné
                    </span>
                    <div
                      role="group"
                      aria-label="Pôle concerné"
                      className="mt-2.5 inline-flex flex-wrap gap-1 rounded-lg border border-[#101D3B]/10 bg-[#F5F8FC] p-1"
                    >
                      {(Object.keys(CATEGORY_LABELS) as QuoteCategory[]).map((cat) => {
                        const active = formData.category === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleFieldChange('category', cat)}
                            aria-pressed={active}
                            className={`min-h-10 rounded-md px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                              active
                                ? 'border border-[#101D3B]/10 bg-white text-[#101D3B] shadow-xs'
                                : 'text-slate-600 hover:text-[#101D3B]'
                            }`}
                          >
                            {CATEGORY_LABELS[cat]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Basket Items Summary */}
                  {basketItems.length > 0 && (
                    <div className="mt-6 rounded-xl border border-[#1765BD]/20 bg-[#F5F8FC] p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#101D3B]">
                          <ClipboardList
                            className="h-4 w-4 text-[#1765BD]"
                            aria-hidden="true"
                          />
                          <span>
                            Articles dans votre demande ({basketItems.length})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onNavigate('hygiene')}
                          className="rounded-sm text-xs font-medium text-[#1765BD] hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                        >
                          Ajouter d&apos;autres articles
                        </button>
                      </div>

                      <ul className="mt-4 space-y-3">
                        {basketItems.map((item) => (
                          <li
                            key={item.id}
                            className="rounded-lg border border-[#101D3B]/10 bg-white p-3.5"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-medium text-[#1765BD]">
                                  {item.categoryLabel}
                                  {item.isDemo ? ' · Démonstration' : ''}
                                </p>
                                <p className="mt-0.5 text-sm font-semibold text-[#101D3B]">
                                  {item.name}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => onRemoveBasketItem(item.id)}
                                aria-label={`Retirer ${item.name}`}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-[#F5F8FC] hover:text-red-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                              >
                                <Trash2 className="h-4 w-4" aria-hidden="true" />
                              </button>
                            </div>

                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                              <input
                                type="text"
                                value={item.quantity}
                                onChange={(e) =>
                                  onUpdateBasketItem(item.id, {
                                    quantity: e.target.value,
                                  })
                                }
                                aria-label={`Quantité pour ${item.name}`}
                                placeholder="Quantité souhaitée (optionnel)"
                                className="min-h-10 rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC]/40 px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                              />
                              <input
                                type="text"
                                value={item.specifications}
                                onChange={(e) =>
                                  onUpdateBasketItem(item.id, {
                                    specifications: e.target.value,
                                  })
                                }
                                aria-label={`Spécifications demandées pour ${item.name}`}
                                placeholder="Spécifications demandées (optionnel)"
                                className="min-h-10 rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC]/40 px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Customer Contact Inputs */}
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="quote-fullname"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Nom complet *
                      </label>
                      <input
                        id="quote-fullname"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-fullname' : undefined}
                        placeholder="Votre nom et prénom"
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {errors.fullName && (
                        <p
                          id="error-fullname"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-company"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Société <span className="font-normal text-slate-500">(optionnel)</span>
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleFieldChange('company', e.target.value)}
                        placeholder="Nom de votre entreprise ou organisme"
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Téléphone *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        placeholder="+212 6..."
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 tabular-nums focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Email *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="contact@entreprise.ma"
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="quote-city"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Ville *
                      </label>
                      <input
                        id="quote-city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleFieldChange('city', e.target.value)}
                        aria-invalid={Boolean(errors.city)}
                        aria-describedby={errors.city ? 'error-city' : undefined}
                        placeholder="Ex. Belfaa, Agadir, Casablanca..."
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {errors.city && (
                        <p
                          id="error-city"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-products"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Produits demandés{' '}
                        {basketItems.length === 0 ? '*' : '(complément optionnel)'}
                      </label>
                      <input
                        id="quote-products"
                        type="text"
                        value={formData.requestedProducts}
                        onChange={(e) =>
                          handleFieldChange('requestedProducts', e.target.value)
                        }
                        aria-invalid={Boolean(errors.requestedProducts)}
                        aria-describedby={
                          errors.requestedProducts ? 'error-products' : undefined
                        }
                        placeholder={
                          basketItems.length > 0
                            ? 'Autres articles non listés ci-dessus...'
                            : 'Ex. Gants de protection, savon liquide...'
                        }
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {errors.requestedProducts && (
                        <p
                          id="error-products"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.requestedProducts}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-quantities"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        Quantités <span className="font-normal text-slate-500">(optionnel)</span>
                      </label>
                      <input
                        id="quote-quantities"
                        type="text"
                        value={formData.quantities}
                        onChange={(e) => handleFieldChange('quantities', e.target.value)}
                        placeholder="Ex. 20 cartons, 50 paires..."
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="quote-message"
                      className="block text-sm font-medium text-[#101D3B]"
                    >
                      Message <span className="font-normal text-slate-500">(optionnel)</span>
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder="Précisez vos contraintes d'utilisation, fréquences de réapprovisionnement ou modalités souhaitées..."
                      className="mt-1.5 block w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[#101D3B]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      * Champs obligatoires. Vos données servent uniquement à générer votre message
                      WhatsApp ou email.
                    </p>
                    <Button type="submit" variant="primary" size="lg">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>Préparer ma demande de devis</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
