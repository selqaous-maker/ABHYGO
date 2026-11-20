import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../src/App';
import { LanguageProvider } from '../src/context/LanguageContext';
import { AR_TRANSLATIONS } from '../src/i18n/ar';
import { FR_TRANSLATIONS } from '../src/i18n/fr';

test('All five pages render their localized headings and navigation in French and Arabic', () => {
  const previousWindow = globalThis.window;
  try {
    for (const language of ['fr', 'ar'] as const) {
      const t = language === 'ar' ? AR_TRANSLATIONS : FR_TRANSLATIONS;
      for (const [hash, heading] of [
        ['#accueil', t.home.hero.title],
        ['#produits-hygiene', t.hygiene.hero.title],
        ['#epi', t.epi.hero.title],
        ['#a-propos', t.about.hero.title],
        ['#contact', t.contact.hero.title],
      ]) {
        globalThis.window = {
          location: {search: `?lang=${language}`, hash, pathname: '/'},
          sessionStorage: {getItem: () => null},
          addEventListener: () => {},
          removeEventListener: () => {},
        } as unknown as Window & typeof globalThis;
        const markup = renderToStaticMarkup(React.createElement(LanguageProvider, null, React.createElement(App)));
        const escapedHeading = renderToStaticMarkup(React.createElement('span', null, heading)).slice(6, -7);
        const actualHeading = markup.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
        assert.equal(actualHeading, escapedHeading, `${language} ${hash}`);
        assert.ok(markup.includes(t.brand.nav.contact), `${language} navigation`);
        if (hash === '#contact') assert.ok(markup.includes(t.contact.form.submitButton));
      }
    }
  } finally {
    if (previousWindow === undefined) delete (globalThis as {window?: unknown}).window;
    else globalThis.window = previousWindow;
  }
});
