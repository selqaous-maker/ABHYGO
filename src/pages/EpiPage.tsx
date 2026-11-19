import React, { useMemo, useState } from 'react';
import { ArrowLeft, ClipboardList, Info, Search, Shield, X } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { BRAND_INFO, SUPPLY_DIVISIONS } from '../data/brand';
import {
  EPI_CATALOGUE_NOTICE,
  EPI_CATEGORIES,
  EPI_DEMO_PRODUCTS,
} from '../data/epiCatalogue';
import {
  EpiCategoryId,
  EpiProductItem,
  PageRoute,
  QuoteBasketItem,
  QuoteCategory,
} from '../types/site';
import { Button } from '../components/common/Button';
import { MediaFrame } from '../components/common/MediaFrame';
import { Reveal } from '../components/common/Reveal';
import { EpiProductCard } from '../components/catalogue/EpiProductCard';
import { EpiProductDetail } from '../components/catalogue/EpiProductDetail';
import { QuoteCallout } from '../components/layout/QuoteCallout';

interface EpiPageProps {
  routeNonce?: number;
  basketItems: QuoteBasketItem[];
  onAddToBasket: (item: QuoteBasketItem) => void;
  onOpenBasket: () => void;
  onNavigate: (
    route: PageRoute,
    quoteCategory?: QuoteCategory,
    quoteSubject?: string
  ) => void;
}

export const EpiPage: React.FC<EpiPageProps> = ({
  routeNonce = 0,
  basketItems,
  onAddToBasket,
  onOpenBasket,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EpiCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<EpiProductItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    setSelectedProduct(null);
  }, [routeNonce]);

  const scrollToCatalogue = () => {
    document
      .getElementById('catalogue-epi')
      ?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  const division = SUPPLY_DIVISIONS.epi;

  const basketIds = useMemo(
    () => new Set(basketItems.map((item) => item.id)),
    [basketItems]
  );

  const categoryLabelMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const cat of EPI_CATEGORIES) {
      map[cat.id] = cat.label;
    }
    return map;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: EPI_DEMO_PRODUCTS.length };
    for (const cat of EPI_CATEGORIES) {
      counts[cat.id] = 0;
    }
    for (const item of EPI_DEMO_PRODUCTS) {
      counts[item.categoryId] = (counts[item.categoryId] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return EPI_DEMO_PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const categoryName = (categoryLabelMap[item.categoryId] ?? '').toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        categoryName.includes(query) ||
        (item.reference && item.reference.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedCategory, categoryLabelMap]);

  const activeCategoryObj = useMemo(
    () => EPI_CATEGORIES.find((c) => c.id === selectedCategory) ?? null,
    [selectedCategory]
  );

  const toBasketItem = (product: EpiProductItem): QuoteBasketItem => ({
    id: product.id,
    name: product.name,
    categoryLabel: categoryLabelMap[product.categoryId] ?? 'EPI',
    division: 'epi',
    isDemo: product.isDemo,
    quantity: '',
    specifications: '',
  });

  const handleAddToBasket = (product: EpiProductItem) => {
    if (basketIds.has(product.id)) {
      onOpenBasket();
      return;
    }
    onAddToBasket(toBasketItem(product));
  };

  const handleSelectProduct = (product: EpiProductItem) => {
    setSelectedProduct(product);
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }
  };

  const handleRequestQuote = (product: EpiProductItem) => {
    if (!basketIds.has(product.id)) {
      onAddToBasket(toBasketItem(product));
    }
    onNavigate('contact', 'epi');
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div>
      {/* 1. Dark Navy Category Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#101D3B] via-[#101D3B] to-[#162C5B] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1"
        >
          <span className="w-2/3 bg-[#1765BD]" />
          <span className="w-1/6 bg-[#23B9ED]" />
          <span className="w-1/6 bg-[#70BF35]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => {
              if (selectedProduct) {
                setSelectedProduct(null);
              } else {
                onNavigate('accueil');
              }
            }}
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-slate-300 transition-colors hover:text-[#23B9ED] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23B9ED]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>
              {selectedProduct ? 'Retour au catalogue EPI' : "Retour à l'accueil"}
            </span>
          </button>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5">
                <Shield className="h-4 w-4 text-[#70BF35]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-[0.08em] text-[#70BF35]">
                  ÉQUIPEMENTS DE PROTECTION INDIVIDUELLE · B2B
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] text-balance">
                {selectedProduct ? selectedProduct.name : division.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {selectedProduct
                  ? `Fiche de démonstration · ${
                      categoryLabelMap[selectedProduct.categoryId] ?? 'EPI'
                    }`
                  : "Découvrez la structure provisoire de notre catalogue EPI. Ajoutez les équipements souhaités à votre demande de devis pour recevoir références et tarifs."}
              </p>

              {!selectedProduct && (
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button
                    variant="light"
                    size="md"
                    onClick={() => onNavigate('contact', 'epi')}
                  >
                    {BRAND_INFO.primaryCta}
                  </Button>
                  <button
                    type="button"
                    onClick={scrollToCatalogue}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-white/10 motion-reduce:hover:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                  >
                    Parcourir les catégories EPI
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0B152C] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]">
                <MediaFrame
                  src={division.imageSrc}
                  alt={division.imageAlt}
                  aspectClassName="aspect-[4/3]"
                  className="border-0 rounded-none"
                  fallbackLabel={division.title}
                  priority
                />
              </div>
            </div>
          </div>

          {!selectedProduct && (
            <div className="mt-10 flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-4 sm:p-5">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-[#23B9ED]"
                aria-hidden="true"
              />
              <div className="text-sm leading-relaxed text-slate-200">
                <span className="font-semibold text-white">
                  {EPI_CATALOGUE_NOTICE.eyebrow} :{' '}
                </span>
                <span>{EPI_CATALOGUE_NOTICE.text}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Product Detail View OR Bright Clean Catalogue Grid */}
      {selectedProduct ? (
        <EpiProductDetail
          product={selectedProduct}
          categoryLabel={categoryLabelMap[selectedProduct.categoryId] ?? 'EPI'}
          isInBasket={basketIds.has(selectedProduct.id)}
          onAddToBasket={handleAddToBasket}
          onBack={() => setSelectedProduct(null)}
          onRequestQuote={handleRequestQuote}
        />
      ) : (
        <section id="catalogue-epi" aria-labelledby="catalogue-epi-heading" className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="catalogue-epi-heading" className="mb-6 text-xl font-semibold tracking-tight text-[#101D3B] sm:text-2xl">
              Catalogue provisoire des équipements EPI
            </h2>
            {/* Search Bar, Result Count & Basket Trigger */}
            <div className="flex flex-col gap-4 border-b border-[#101D3B]/10 pb-6 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-md">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un équipement EPI ou une catégorie..."
                  aria-label="Rechercher dans le catalogue EPI"
                  className="min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-[#F5F8FC]/60 pl-10 pr-10 text-sm text-[#101D3B] placeholder:text-slate-400 transition-colors focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Effacer la recherche"
                    className="absolute right-2.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 hover:bg-slate-200/70 hover:text-[#101D3B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-slate-600 tabular-nums">
                  <span className="font-semibold text-[#101D3B]">
                    {filteredProducts.length}
                  </span>{' '}
                  {filteredProducts.length > 1
                    ? 'équipements de démonstration affichés'
                    : 'équipement de démonstration affiché'}
                </p>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onOpenBasket}
                  className="tabular-nums"
                >
                  <ClipboardList className="h-4 w-4 text-[#1765BD]" aria-hidden="true" />
                  <span>Ma demande ({basketItems.length})</span>
                </Button>
              </div>
            </div>

            {/* Category Filters (horizontal scroll on mobile, wrap on tablet/desktop) */}
            <div className="mt-6">
              <div
                role="group"
                aria-label="Filtrer les EPI par catégorie provisoire"
                className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  aria-pressed={selectedCategory === 'all'}
                  className={`inline-flex min-h-11 sm:min-h-10 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                    selectedCategory === 'all'
                      ? 'border-[#101D3B] bg-[#101D3B] text-white'
                      : 'border-[#101D3B]/15 bg-[#F5F8FC] text-[#101D3B] hover:border-[#1765BD]/50 hover:bg-white'
                  }`}
                >
                  <span>Toutes les catégories</span>
                  <span
                    className={`font-[family-name:var(--font-mono)] text-xs tabular-nums ${
                      selectedCategory === 'all' ? 'text-[#23B9ED]' : 'text-slate-500'
                    }`}
                  >
                    {categoryCounts.all}
                  </span>
                </button>

                {EPI_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      aria-pressed={isActive}
                      className={`inline-flex min-h-11 sm:min-h-10 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                        isActive
                          ? 'border-[#1765BD] bg-[#1765BD] text-white'
                          : 'border-[#101D3B]/15 bg-[#F5F8FC] text-[#101D3B] hover:border-[#1765BD]/50 hover:bg-white'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span
                        className={`font-[family-name:var(--font-mono)] text-xs tabular-nums ${
                          isActive ? 'text-white/85' : 'text-slate-500'
                        }`}
                      >
                        {categoryCounts[category.id] ?? 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {activeCategoryObj && (
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-medium text-[#101D3B]">
                    {activeCategoryObj.label} :{' '}
                  </span>
                  {activeCategoryObj.description}
                </p>
              )}
            </div>

            {/* Product Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {filteredProducts.map((product, idx) => (
                  <Reveal key={product.id} delay={(idx % 3) * 0.04} yOffset={10} className="flex">
                    <div className="flex w-full">
                      <EpiProductCard
                        product={product}
                        categoryLabel={categoryLabelMap[product.categoryId] ?? 'EPI'}
                        isInBasket={basketIds.has(product.id)}
                        onAddToBasket={handleAddToBasket}
                        onSelectProduct={handleSelectProduct}
                        onRequestQuote={handleRequestQuote}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC] px-6 py-12 text-center">
                <p className="text-base font-semibold text-[#101D3B]">
                  Aucun équipement de démonstration ne correspond à votre recherche
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Modifiez votre recherche ou réinitialisez les filtres pour afficher toutes les
                  catégories provisoires d&apos;EPI.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="secondary" size="md" onClick={resetFilters}>
                    Réinitialiser les filtres
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onNavigate('contact', 'epi')}
                  >
                    {BRAND_INFO.primaryCta}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <QuoteCallout defaultCategory="epi" onNavigate={onNavigate} />
    </div>
  );
};
