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
import { motion, useReducedMotion } from 'motion/react';
import {
  B2B_PILLARS,
  BRAND_INFO,
  HERO_MEDIA,
  SUPPLY_DIVISIONS,
} from '../data/brand';
import { PageRoute, QuoteCategory } from '../types/site';
import { Button } from '../components/common/Button';
import { MediaFrame } from '../components/common/MediaFrame';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';
import { QuoteCallout } from '../components/layout/QuoteCallout';

interface HomePageProps {
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

const TRUST_MESSAGES = [
  {
    icon: Building2,
    title: 'Approvisionnement B2B dédié',
    detail: 'Entreprises, ateliers & collectivités',
  },
  {
    icon: Layers,
    title: 'Double expertise Hygiène & EPI',
    detail: 'Fournitures professionnelles ciblées',
  },
  {
    icon: MapPin,
    title: 'Présence locale à Belfaa, Maroc',
    detail: 'Proximité et suivi commercial direct',
  },
  {
    icon: FileText,
    title: 'Chiffrage personnalisé sur devis',
    detail: 'Adapté à vos volumes et besoins',
  },
] as const;

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToCategories = () => {
    const el = document.getElementById('poles-activite');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const cardMetadata = {
    hygiene: {
      title: "Produits d'hygiène",
      kicker: 'Pôle 01 · Entretien & Hygiène professionnelle',
      icon: Sparkles,
      ctaLabel: 'Voir les produits d’hygiène',
    },
    epi: {
      title: 'Équipements de Protection Individuelle',
      kicker: 'Pôle 02 · Sécurité & Protection au travail',
      icon: Shield,
      ctaLabel: 'Voir les EPI',
    },
  } as const;

  return (
    <div>
      {/* 1. Premium Full-Width Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F8FC] via-white to-[#EDF4FC] py-12 sm:py-16 lg:py-24">
        {/* Subtle restrained architectural backdrop accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#23B9ED]/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#23B9ED]/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#70BF35]/[0.05] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Eyebrow, Headline, Copy, CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeCurve }}
              className="flex flex-col justify-center lg:col-span-6"
            >
              {/* Small green eyebrow label (WCAG AA contrast #3D7514 on #F5F8FC) */}
              <div className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className="h-0.5 w-6 bg-[#70BF35]" />
                <span className="text-xs font-semibold tracking-[0.08em] text-[#3D7514] sm:text-[13px]">
                  HYGIÈNE PROFESSIONNELLE &amp; PROTECTION
                </span>
              </div>

              <h1 className="mt-5 text-[clamp(2rem,4.1vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#101D3B] text-balance">
                Des solutions d&apos;hygiène et de protection pour les professionnels
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Basée à Belfaa, Maroc, ABHYGO fournit aux entreprises et structures
                professionnelles des produits d&apos;hygiène, consommables et Équipements de
                Protection Individuelle (EPI) sélectionnés pour les environnements exigeants.
              </p>

              {/* Quiet tagline line */}
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#101D3B]">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#3D7514]"
                  aria-hidden="true"
                />
                <span>{BRAND_INFO.tagline}</span>
              </p>

              {/* Two Premium CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToCategories}
                  className="shadow-[0_10px_24px_-10px_rgba(23,101,189,0.55)] hover:shadow-[0_14px_28px_-10px_rgba(16,29,59,0.45)]"
                >
                  <span>{BRAND_INFO.secondaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onNavigate('contact', 'les-deux')}
                >
                  <span>{BRAND_INFO.primaryCta}</span>
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Art-Directed Multi-Layer Studio Composition */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.06, ease: easeCurve }}
              className="relative sm:py-5 lg:col-span-6 lg:py-6"
            >
              <div className="relative mx-auto max-w-2xl lg:max-w-none">
                {/* Architectural offset depth frame */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 top-4 left-4 rounded-2xl border border-[#1765BD]/20 bg-gradient-to-br from-[#1765BD]/[0.06] to-[#70BF35]/[0.06] sm:-bottom-4 sm:-right-4"
                />

                {/* Primary Studio Photo: Hygiene products, consumables & PPE */}
                <div className="relative overflow-hidden rounded-2xl border border-[#101D3B]/10 bg-white shadow-[0_24px_60px_-24px_rgba(16,29,59,0.28)]">
                  <MediaFrame
                    src={HERO_MEDIA.src}
                    alt={HERO_MEDIA.alt}
                    aspectClassName="aspect-[16/11] sm:aspect-[16/10]"
                    className="border-0 rounded-none"
                    fallbackLabel="ABHYGO · Hygiène & EPI"
                    priority
                  />
                  {/* Subtle edge depth gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101D3B]/35 via-[#101D3B]/10 to-transparent"
                  />
                  {/* Subtle blue/green architectural accent rule along bottom */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 flex h-1"
                  >
                    <span className="w-2/3 bg-[#1765BD]" />
                    <span className="w-1/6 bg-[#23B9ED]" />
                    <span className="w-1/6 bg-[#70BF35]" />
                  </div>
                </div>

                {/* Layered Secondary Composition Insets (Clean Studio Details) */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:block">
                  <div className="overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_14px_32px_-12px_rgba(16,29,59,0.3)] ring-1 ring-[#101D3B]/10 sm:absolute sm:-bottom-5 sm:left-5 sm:w-44 md:w-48">
                    <MediaFrame
                      src={SUPPLY_DIVISIONS.hygiene.imageSrc}
                      alt={SUPPLY_DIVISIONS.hygiene.imageAlt}
                      aspectClassName="aspect-[4/3]"
                      className="border-0 rounded-none"
                      fallbackLabel="Hygiène"
                      priority
                    />
                  </div>

                  <div className="overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_14px_32px_-12px_rgba(16,29,59,0.3)] ring-1 ring-[#101D3B]/10 sm:absolute sm:-top-5 sm:right-5 sm:w-40 md:w-44">
                    <MediaFrame
                      src={SUPPLY_DIVISIONS.epi.imageSrc}
                      alt={SUPPLY_DIVISIONS.epi.imageAlt}
                      aspectClassName="aspect-[4/3]"
                      className="border-0 rounded-none"
                      fallbackLabel="EPI"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Trust-Oriented Message Bar */}
      <section
        aria-label="Engagements ABHYGO"
        className="border-y border-[#101D3B]/15 bg-[#101D3B] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {TRUST_MESSAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={idx * 0.04}
                  yOffset={8}
                  className="flex items-start gap-3.5 py-5 sm:px-4 lg:px-6 first:lg:pl-0 last:lg:pr-0"
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
              kicker="Nos gammes principales"
              title="Deux pôles complémentaires pour vos besoins professionnels"
              description="Découvrez nos domaines de fourniture dédiés à l'hygiène des environnements de travail et à la protection individuelle des équipes."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {([SUPPLY_DIVISIONS.hygiene, SUPPLY_DIVISIONS.epi] as const).map(
              (division, idx) => {
                const meta = cardMetadata[division.id];
                const Icon = meta.icon;
                const quoteTarget: QuoteCategory =
                  division.id === 'hygiene' ? 'hygiene' : 'epi';

                return (
                  <Reveal key={division.id} delay={idx * 0.06} className="flex">
                    <article className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#101D3B]/10 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:shadow-[0_20px_48px_-24px_rgba(16,29,59,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      {/* Large Visual Header */}
                      <button
                        type="button"
                        onClick={() => onNavigate(division.route)}
                        className="relative block w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1765BD]"
                        aria-label={`Découvrir ${meta.title}`}
                      >
                        <MediaFrame
                          src={division.imageSrc}
                          alt={division.imageAlt}
                          aspectClassName="aspect-[16/10]"
                          className="border-0 rounded-none"
                          imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          fallbackLabel={meta.title}
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101D3B]/65 via-[#101D3B]/15 to-transparent"
                        />
                        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.04em] text-white/95">
                            <Icon
                              className={`h-4 w-4 ${
                                division.id === 'hygiene'
                                  ? 'text-[#23B9ED]'
                                  : 'text-[#70BF35]'
                              }`}
                              aria-hidden="true"
                            />
                            <span>{meta.kicker}</span>
                          </span>
                        </div>
                      </button>

                      {/* Card Body */}
                      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-[#101D3B] sm:text-[1.625rem]">
                            {meta.title}
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {division.description}
                          </p>

                          <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-[#101D3B]/10 pt-5 sm:grid-cols-2 sm:gap-x-6">
                            {division.domains.map((dom) => (
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
                            <span>{meta.ctaLabel}</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="md"
                            className="w-full sm:w-auto"
                            onClick={() => onNavigate('contact', quoteTarget)}
                          >
                            {BRAND_INFO.primaryCta}
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
              kicker="Approche professionnelle"
              title="Un approvisionnement lisible, réactif et dédié aux entreprises"
              description="Une organisation pensée pour simplifier vos demandes de devis et structurer vos achats en hygiène et EPI."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {B2B_PILLARS.map((pillar, idx) => (
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
