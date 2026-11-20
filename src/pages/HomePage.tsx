import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Layers,
  MapPin,
  Shield,
  Sparkles,
} from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useLanguage } from '../context/LanguageContext';
import { HERO_MEDIA, SUPPLY_DIVISIONS } from '../data/brand';
import { PageRoute, QuoteCategory } from '../types/site';
import { Button } from '../components/common/Button';
import { MediaFrame } from '../components/common/MediaFrame';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';
import { QuoteCallout } from '../components/layout/QuoteCallout';

interface HomePageProps {
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

const TRUST_ICONS = [Building2, Layers, MapPin, FileText] as const;

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [heroImageError, setHeroImageError] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const scrollToCategories = () => {
    const el = document.getElementById('poles-activite');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const fullTitle = t.home.hero.title;
  const accentPhrase = t.home.hero.titleAccent;
  const hasTrailingAccent =
    accentPhrase.length > 0 && fullTitle.endsWith(accentPhrase);
  const titlePrefix = hasTrailingAccent
    ? fullTitle.slice(0, fullTitle.length - accentPhrase.length)
    : fullTitle;

  return (
    <div>
      {/* 1. Full-Width Cinematic Dark Navy Hero Section */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-gradient-to-br from-[#071226] via-[#0D2147] to-[#133875] py-14 sm:min-h-[560px] sm:py-20 lg:min-h-[620px] lg:py-24">
        {/* Full-bleed Industrial Hygiene & PPE Background Photo */}
        {!heroImageError && (
          <img
            src={HERO_MEDIA.src}
            srcSet={HERO_MEDIA.srcSet}
            sizes="100vw"
            alt={t.home.hero.imageAlt}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            onError={() => setHeroImageError(true)}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-[70%_center] opacity-85 sm:object-[64%_center] lg:object-[60%_center] rtl:object-[30%_center] rtl:sm:object-[36%_center] rtl:lg:object-[40%_center]"
          />
        )}

        {/* Measured Navy & Royal Blue Contrast Scrims (LTR + RTL safe, >= AA contrast) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#081630]/72 sm:bg-[#081630]/62 lg:bg-[#081630]/35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071226]/95 via-[#0B1E44]/85 to-[#123774]/35 rtl:bg-gradient-to-l"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071226]/80 via-transparent to-[#071226]/30"
        />

        {/* Subtle Architectural Blue & Green Atmospheric Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 start-1/4 h-80 w-80 rounded-full bg-[#23B9ED]/[0.14] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 end-1/4 h-72 w-72 rounded-full bg-[#70BF35]/[0.08] blur-3xl"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeCurve }}
            className="max-w-2xl"
          >
            {/* Eyebrow with ABHYGO green highlight line */}
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-7 shrink-0 bg-[#7ED340]" />
              <span className="text-xs font-semibold tracking-[0.09em] text-[#D8E7FA] sm:text-[13px]">
                {t.home.hero.eyebrow}
              </span>
            </div>

            {/* Dominant Display Headline with ABHYGO green accent */}
            <h1 className="mt-5 text-[clamp(2rem,4.3vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance rtl:text-[clamp(1.85rem,3.8vw,3.25rem)] rtl:leading-[1.28]">
              {titlePrefix}
              {hasTrailingAccent && (
                <span className="text-[#7ED340]">{accentPhrase}</span>
              )}
            </h1>

            {/* Supporting Factual B2B Positioning */}
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-[#D8E5F7] sm:text-[17px]">
              {t.home.hero.subtitle}
            </p>

            {/* Quiet Verified Tagline */}
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/95">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-[#7ED340]"
                aria-hidden="true"
              />
              <span>{t.brand.tagline}</span>
            </p>

            {/* Primary & Secondary Action Hierarchy */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                variant="accent"
                size="lg"
                onClick={scrollToCategories}
                className="w-full sm:w-auto"
              >
                <span>{t.brand.secondaryCta}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Button>

              <Button
                variant="outlineLight"
                size="lg"
                onClick={() => onNavigate('contact', 'les-deux')}
                className="w-full sm:w-auto"
              >
                <span>{t.brand.primaryCta}</span>
              </Button>
            </div>
          </m.div>
        </div>
      </section>

      {/* 2. Horizontal Trust-Oriented Message Bar */}
      <section
        aria-label={t.home.trustBarAria}
        className="border-t border-white/12 border-b border-[#101D3B]/15 bg-[#101D3B] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {t.home.trustMessages.map((item, idx) => {
              const Icon = TRUST_ICONS[idx] ?? Building2;
              return (
                <Reveal
                  key={item.title}
                  delay={idx * 0.04}
                  yOffset={8}
                  className="flex items-start gap-3.5 py-5 sm:px-4 lg:px-6 first:lg:ps-0 last:lg:pe-0"
                >
                  <Icon
                    className={`mt-0.5 h-5 w-5 shrink-0 ${
                      idx % 2 === 0 ? 'text-[#23B9ED]' : 'text-[#70BF35]'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Two Large Visual Category Cards */}
      <section
        id="poles-activite"
        className="border-b border-[#101D3B]/10 bg-[#F5F8FC] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker={t.home.divisionsSection.kicker}
              title={t.home.divisionsSection.title}
              description={t.home.divisionsSection.description}
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {([SUPPLY_DIVISIONS.hygiene, SUPPLY_DIVISIONS.epi] as const).map(
              (division, idx) => {
                const localizedDiv = t.home.divisionCards[division.id];
                const Icon = division.id === 'hygiene' ? Sparkles : Shield;
                const quoteTarget: QuoteCategory =
                  division.id === 'hygiene' ? 'hygiene' : 'epi';

                return (
                  <Reveal key={division.id} delay={idx * 0.06} className="flex">
                    <article className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#101D3B]/10 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:shadow-[0_20px_48px_-24px_rgba(16,29,59,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      {/* Large Visual Header */}
                      <button
                        type="button"
                        onClick={() => onNavigate(division.route)}
                        className="relative block w-full overflow-hidden text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1765BD]"
                        aria-label={localizedDiv.discoverAria}
                      >
                        <MediaFrame
                          src={division.imageSrc}
                          alt={localizedDiv.imageAlt}
                          aspectClassName="aspect-[16/10]"
                          className="border-0 rounded-none"
                          imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          fallbackLabel={localizedDiv.title}
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101D3B]/65 via-[#101D3B]/15 to-transparent"
                        />
                        <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-white">
                          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.04em] text-white/95">
                            <Icon
                              className={`h-4 w-4 ${
                                division.id === 'hygiene'
                                  ? 'text-[#23B9ED]'
                                  : 'text-[#70BF35]'
                              }`}
                              aria-hidden="true"
                            />
                            <span>{localizedDiv.kicker}</span>
                          </span>
                        </div>
                      </button>

                      {/* Card Body */}
                      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-[#101D3B] sm:text-[1.625rem]">
                            {localizedDiv.title}
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {localizedDiv.description}
                          </p>

                          <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-[#101D3B]/10 pt-5 sm:grid-cols-2 sm:gap-x-6">
                            {localizedDiv.domains.map((dom) => (
                              <li
                                key={dom.index}
                                className="flex items-baseline gap-2.5 text-sm text-[#101D3B]"
                              >
                                <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#1765BD] tabular-nums">
                                  {dom.index}
                                </span>
                                <span>{dom.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 border-t border-[#101D3B]/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
                          <Button
                            variant="primary"
                            size="md"
                            className="w-full sm:w-auto"
                            onClick={() => onNavigate(division.route)}
                          >
                            <span>{localizedDiv.ctaLabel}</span>
                            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="md"
                            className="w-full sm:w-auto"
                            onClick={() => onNavigate('contact', quoteTarget)}
                          >
                            {t.brand.primaryCta}
                          </Button>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* 4. Structured B2B Approach */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker={t.home.pillarsSection.kicker}
              title={t.home.pillarsSection.title}
              description={t.home.pillarsSection.description}
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.pillars.map((pillar, idx) => (
              <Reveal key={pillar.index} delay={idx * 0.05} className="flex">
                <div className="flex-1 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-6 transition-[transform,border-color,background-color] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/30 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#1765BD] tabular-nums">
                    {pillar.index}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[#101D3B]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Conversion Callout */}
      <QuoteCallout onNavigate={onNavigate} />
    </div>
  );
};
 
