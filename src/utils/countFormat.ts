import { Language } from '../i18n/types';

export function formatCatalogueCount(
  count: number,
  language: Language,
  _kind: 'hygiene' | 'epi',
  frSingular: string,
  frPlural: string
): { numberPart: string; textPart: string } {
  if (language !== 'ar') {
    return {
      numberPart: String(count),
      textPart: count > 1 ? frPlural : frSingular,
    };
  }

  {
    if (count === 0) {
      return { numberPart: '', textPart: 'لا توجد منتجات معروضة' };
    }
    if (count === 1) {
      return { numberPart: '', textPart: 'منتج تعريفي واحد معروض' };
    }
    if (count === 2) {
      return { numberPart: '', textPart: 'منتجان تعريفيان معروضان' };
    }
    const pluralForm = new Intl.PluralRules('ar').select(count);
    if (pluralForm === 'few') {
      return { numberPart: String(count), textPart: 'منتجات تعريفية معروضة' };
    }
    return { numberPart: String(count), textPart: pluralForm === 'many' ? 'منتجاً تعريفياً معروضاً' : 'منتج تعريفي معروض' };
  }
}

export function formatBasketCountLabel(
  count: number,
  language: Language,
  emptyCount: string,
  singularCount: string,
  pluralCount: string
): string {
  if (count === 0) return emptyCount;

  if (language !== 'ar') {
    if (count === 1) return singularCount;
    return pluralCount.replace('{count}', String(count));
  }

  if (count === 1) return singularCount;
  if (count === 2) return 'منتجان محددان';
  const pluralForm = new Intl.PluralRules('ar').select(count);
  if (pluralForm === 'few') return `${count} منتجات محددة`;
  return `${count} ${pluralForm === 'many' ? 'منتجاً محدداً' : 'منتج محدد'}`;
}

export function formatBasketTriggerAria(
  count: number,
  language: Language,
  singularAria: string,
  pluralAria: string
): string {
  if (language !== 'ar') {
    const template = count > 1 ? pluralAria : singularAria;
    return template.replace('{count}', String(count));
  }

  if (count === 0) return 'فتح طلب عرض السعر (القائمة فارغة)';
  if (count === 1) return singularAria;
  if (count === 2) return 'فتح طلب عرض السعر (منتجان)';
  const pluralForm = new Intl.PluralRules('ar').select(count);
  if (pluralForm === 'few') return `فتح طلب عرض السعر (${count} منتجات)`;
  return `فتح طلب عرض السعر (${count} ${pluralForm === 'many' ? 'منتجاً' : 'منتج'})`;
}

export function formatFormErrorSummary(
  count: number,
  language: Language,
  oneError: string,
  manyPrefix: string,
  manySuffix: string
): string {
  if (count === 1) return oneError;

  if (language !== 'ar') {
    return `${manyPrefix} ${count} ${manySuffix}`;
  }

  if (count === 2) {
    return 'يرجى التحقق من الحقلين الإلزاميين المحددين أدناه.';
  }
  return `يرجى التحقق من الحقول الإلزامية المحددة أدناه (${count} حقول).`;
}
