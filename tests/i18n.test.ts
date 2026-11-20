import assert from 'node:assert/strict';
import test from 'node:test';
import { AR_TRANSLATIONS as ar } from '../src/i18n/ar';
import { FR_TRANSLATIONS as fr } from '../src/i18n/fr';
import { HYGIENE_DEMO_PRODUCTS } from '../src/data/hygieneCatalogue';
import { EPI_DEMO_PRODUCTS } from '../src/data/epiCatalogue';
import { buildQuoteSummaryText, buildWhatsAppQuoteUrl, buildMailtoQuoteUrl, getLocalizedBasketItemMeta } from '../src/utils/quoteLinks';
import { formatCatalogueCount, formatBasketCountLabel, formatBasketTriggerAria } from '../src/utils/countFormat';
import { normalizeSearchText } from '../src/utils/search';
import type { QuoteBasketItem, QuoteFormData } from '../src/types/site';

function leaves(value: unknown, prefix = ''): Record<string, string> {
  if (typeof value === 'string') return { [prefix]: value };
  return Object.fromEntries(Object.entries(value as object).flatMap(([key, child]) => Object.entries(leaves(child, `${prefix}.${key}`))));
}

test('French and Arabic cover the same content, with no empty translations', () => {
  const arabic = leaves(ar);
  const french = leaves(fr);
  assert.deepEqual(Object.keys(arabic).sort(), Object.keys(french).sort());
  for (const [key, value] of Object.entries(arabic)) {
    assert.ok(value.trim(), key);
    assert.ok(!value.includes('\uFFFD'), `Invalid encoding at ${key}`);
    const tokens = (text: string) => text.match(/\{\w+\}/g)?.sort() ?? [];
    assert.deepEqual(tokens(value), tokens(french[key]), key);
  }
});

test('Every catalogue item preserves French and has complete Arabic content', () => {
  for (const product of HYGIENE_DEMO_PRODUCTS) {
    assert.equal(fr.hygiene.products[product.id].name, product.name);
    assert.equal(fr.hygiene.products[product.id].description, product.description);
    assert.match(ar.hygiene.products[product.id].name, /[\u0600-\u06ff]/);
    assert.ok(ar.hygiene.products[product.id].imageAlt);
    assert.ok(ar.hygiene.categories[product.categoryId].label);
  }
  for (const product of EPI_DEMO_PRODUCTS) {
    assert.equal(fr.epi.products[product.id].name, product.name);
    assert.equal(fr.epi.products[product.id].shortDescription, product.shortDescription);
    assert.match(ar.epi.products[product.id].name, /[\u0600-\u06ff]/);
    assert.equal(ar.epi.products[product.id].galleryAlts.length, product.galleryImages.length);
    assert.ok(ar.epi.categories[product.categoryId].label);
  }
});

const form: QuoteFormData = {fullName: 'أحمد أمين', company: 'Société & Fils', phone: '+212600000000', email: 'test@example.com', city: 'أكادير', category: 'les-deux', requestedProducts: 'صابون إضافي', quantities: '20', message: 'مقاس M & L'};
const basket: QuoteBasketItem[] = [
  {id: HYGIENE_DEMO_PRODUCTS[0].id, division: 'hygiene', name: 'Stored French name', categoryLabel: 'Stored category', isDemo: true, quantity: '10 عبوات', specifications: '5 L'},
  {id: EPI_DEMO_PRODUCTS[0].id, division: 'epi', name: 'Stored French name', categoryLabel: 'Stored category', isDemo: true, quantity: '25', specifications: 'L'},
];

test('Switching language localizes a basket added in the other language without changing user entries', () => {
  const before = JSON.stringify(basket);
  assert.equal(getLocalizedBasketItemMeta(basket[0], ar).name, ar.hygiene.products[basket[0].id].name);
  assert.equal(getLocalizedBasketItemMeta(basket[1], fr).name, EPI_DEMO_PRODUCTS[0].name);
  const summary = buildQuoteSummaryText(form, basket, ar);
  assert.ok(summary.includes(ar.hygiene.products[basket[0].id].name));
  assert.ok(summary.includes(ar.epi.products[basket[1].id].name));
  assert.ok(summary.includes('10 عبوات'));
  assert.ok(summary.includes('مقاس M & L'));
  assert.ok(!summary.includes('Stored French name'));
  assert.ok(summary.includes('\u2066+212600000000\u2069'));
  assert.equal(JSON.stringify(basket), before);
});

test('WhatsApp and email preserve Unicode, line breaks and special characters in both languages', () => {
  for (const dictionary of [ar, fr]) {
    const expected = buildQuoteSummaryText(form, basket, dictionary);
    const whatsapp = new URL(buildWhatsAppQuoteUrl(form, basket, dictionary));
    assert.equal(whatsapp.hostname, 'wa.me');
    assert.equal(whatsapp.pathname, '/212668057197');
    assert.equal(whatsapp.searchParams.get('text'), expected);
    const email = new URL(buildMailtoQuoteUrl(form, basket, dictionary));
    assert.equal(email.searchParams.get('body'), expected);
    assert.ok(email.searchParams.get('subject')?.startsWith(dictionary.quoteLinks.emailSubjectPrefix));
    assert.ok(expected.includes('Société & Fils'));
  }
});

test('Arabic plural forms handle empty, singular, dual, few, many and hundreds', () => {
  assert.equal(formatCatalogueCount(0, 'ar', 'epi', '', '').textPart, 'لا توجد منتجات معروضة');
  assert.equal(formatCatalogueCount(2, 'ar', 'hygiene', '', '').numberPart, '');
  assert.match(formatCatalogueCount(2, 'ar', 'epi', '', '').textPart, /منتجان/);
  const label = (count: number) => formatBasketCountLabel(count, 'ar', ar.basketDrawer.emptyCount, ar.basketDrawer.singularCount, ar.basketDrawer.pluralCount);
  assert.equal(label(2), 'منتجان محددان');
  assert.equal(label(3), '3 منتجات محددة');
  assert.equal(label(11), '11 منتجاً محدداً');
  assert.equal(label(100), '100 منتج محدد');
  assert.match(formatBasketTriggerAria(0, 'ar', '', ''), /فارغة/);
  assert.equal(formatBasketCountLabel(2, 'fr', 'vide', '1 produit', '{count} produits'), '2 produits');
});

test('Catalogue search tolerates accents, Arabic diacritics, hamza and elongation', () => {
  assert.equal(normalizeSearchText('DÉSINFECTANT'), normalizeSearchText('desinfectant'));
  assert.equal(normalizeSearchText('أَقْنِعَة'), normalizeSearchText('اقنعه'));
  assert.equal(normalizeSearchText('قــفازات'), normalizeSearchText('قفازات'));
});
