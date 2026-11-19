import { BRAND_INFO } from '../data/brand';
import { QuoteBasketItem, QuoteCategory, QuoteFormData } from '../types/site';

const CATEGORY_LABELS: Record<QuoteCategory, string> = {
  hygiene: "Produits d'hygiène",
  epi: 'Équipements de Protection Individuelle (EPI)',
  'les-deux': "Produits d'hygiène & EPI",
};

const WHATSAPP_NUMBER = '212668057197';

export function buildQuoteSummaryText(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[]
): string {
  const lines: string[] = [
    'Bonjour ABHYGO,',
    'Je souhaite obtenir un devis B2B avec les informations suivantes :',
    '',
    `Nom complet : ${formData.fullName.trim()}`,
  ];

  if (formData.company.trim()) {
    lines.push(`Société : ${formData.company.trim()}`);
  }

  lines.push(
    `Téléphone : ${formData.phone.trim()}`,
    `Email : ${formData.email.trim()}`,
    `Ville : ${formData.city.trim()}`,
    `Domaine : ${CATEGORY_LABELS[formData.category]}`,
    ''
  );

  if (basketItems.length > 0) {
    lines.push('Produits sélectionnés :');
    basketItems.forEach((item, index) => {
      const qtyPart = item.quantity.trim()
        ? ` — Quantité : ${item.quantity.trim()}`
        : '';
      const specPart = item.specifications.trim()
        ? ` — Précisions : ${item.specifications.trim()}`
        : '';
      lines.push(
        `${index + 1}. ${item.name} (${item.categoryLabel})${qtyPart}${specPart}`
      );
    });
    lines.push('');
  }

  if (formData.requestedProducts.trim()) {
    lines.push(
      `Produits demandés (complément) : ${formData.requestedProducts.trim()}`
    );
  }

  if (formData.quantities.trim()) {
    lines.push(`Quantités estimées : ${formData.quantities.trim()}`);
  }

  if (formData.message.trim()) {
    lines.push('', 'Message :', formData.message.trim());
  }

  return lines.join('\n');
}

export function buildWhatsAppQuoteUrl(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[]
): string {
  const text = buildQuoteSummaryText(formData, basketItems);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoQuoteUrl(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[]
): string {
  const companySuffix = formData.company.trim()
    ? ` - ${formData.company.trim()}`
    : '';
  const subject = `Demande de devis ABHYGO (${formData.fullName.trim()}${companySuffix})`;
  const body = buildQuoteSummaryText(formData, basketItems);
  return `${BRAND_INFO.emailHref}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
