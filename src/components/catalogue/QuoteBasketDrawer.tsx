import React, { useEffect } from 'react';
import { ArrowRight, ClipboardList, Trash2, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { QuoteBasketItem } from '../../types/site';
import { Button } from '../common/Button';

interface QuoteBasketDrawerProps {
  isOpen: boolean;
  items: QuoteBasketItem[];
  onClose: () => void;
  onOpen: () => void;
  onUpdateItem: (
    id: string,
    updates: Partial<Pick<QuoteBasketItem, 'quantity' | 'specifications'>>
  ) => void;
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
  onProceedToQuote: () => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const QuoteBasketDrawer: React.FC<QuoteBasketDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onOpen,
  onUpdateItem,
  onRemoveItem,
  onClearBasket,
  onProceedToQuote,
}) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Compact Floating Basket Trigger (visible when items > 0 and drawer is closed) */}
      <AnimatePresence>
        {items.length > 0 && !isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.18, ease: EASE_CURVE }}
            className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6"
          >
            <button
              type="button"
              onClick={onOpen}
              aria-label={`Ouvrir ma demande de devis (${items.length} article${
                items.length > 1 ? 's' : ''
              })`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#101D3B] px-3.5 py-2.5 text-sm font-medium text-white shadow-[0_14px_32px_-8px_rgba(16,29,59,0.5)] ring-1 ring-white/15 transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-[#1765BD] motion-reduce:hover:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED] sm:gap-2.5 sm:px-4"
            >
              <ClipboardList className="h-4 w-4 text-[#23B9ED]" aria-hidden="true" />
              <span className="whitespace-nowrap">Ma demande</span>
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-[#70BF35] px-1.5 font-[family-name:var(--font-mono)] text-xs font-semibold text-[#101D3B] tabular-nums">
                {items.length}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-over Quotation Basket Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-basket-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={onClose}
              aria-hidden="true"
              className="fixed inset-0 bg-[#101D3B]/45 backdrop-blur-[1px]"
            />

            {/* Panel */}
            <motion.div
              initial={shouldReduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.24, ease: EASE_CURVE }}
              className="relative z-10 flex h-full w-full max-w-lg flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#101D3B]/10 px-5 py-4 sm:px-6">
                <div>
                  <h2
                    id="quote-basket-title"
                    className="text-lg font-semibold text-[#101D3B]"
                  >
                    Ma demande de devis
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500 tabular-nums">
                    {items.length === 0
                      ? 'Aucun article sélectionné'
                      : `${items.length} ${
                          items.length > 1
                            ? 'articles sélectionnés'
                            : 'article sélectionné'
                        }`}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer le panier de devis"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#101D3B]/15 text-[#101D3B] transition-colors hover:bg-[#F5F8FC] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
                {items.length === 0 ? (
                  <div className="rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC] p-6 text-center">
                    <ClipboardList
                      className="mx-auto h-8 w-8 text-[#1765BD]"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm font-semibold text-[#101D3B]">
                      Votre demande de devis est vide
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      Parcourez les rubriques Produits d&apos;hygiène ou EPI pour ajouter des
                      articles, ou rédigez directement votre demande via le formulaire.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium text-[#1765BD]">
                              {item.categoryLabel}
                              {item.isDemo ? ' · Démonstration' : ''}
                            </p>
                            <h3 className="mt-1 text-sm font-semibold text-[#101D3B]">
                              {item.name}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            aria-label={`Retirer ${item.name}`}
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white hover:text-red-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor={`basket-qty-${item.id}`}
                              className="block text-xs font-medium text-slate-700"
                            >
                              Quantité (optionnel)
                            </label>
                            <input
                              id={`basket-qty-${item.id}`}
                              type="text"
                              value={item.quantity}
                              onChange={(e) =>
                                onUpdateItem(item.id, { quantity: e.target.value })
                              }
                              placeholder="Ex. 10 cartons, 25 unités"
                              className="mt-1 block min-h-10 w-full rounded-lg border border-[#101D3B]/15 bg-white px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor={`basket-spec-${item.id}`}
                              className="block text-xs font-medium text-slate-700"
                            >
                              Précisions (optionnel)
                            </label>
                            <input
                              id={`basket-spec-${item.id}`}
                              type="text"
                              value={item.specifications}
                              onChange={(e) =>
                                onUpdateItem(item.id, {
                                  specifications: e.target.value,
                                })
                              }
                              placeholder="Ex. Taille L, bidon 5L..."
                              className="mt-1 block min-h-10 w-full rounded-lg border border-[#101D3B]/15 bg-white px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t border-[#101D3B]/10 bg-white px-5 py-4 sm:px-6">
                {items.length > 0 && (
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Devis B2B sans paiement en ligne
                    </span>
                    <button
                      type="button"
                      onClick={onClearBasket}
                      className="rounded-sm font-medium text-slate-600 hover:text-red-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      Vider la sélection
                    </button>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={onProceedToQuote}
                >
                  <span>
                    {items.length > 0
                      ? 'Finaliser ma demande de devis'
                      : 'Accéder au formulaire de devis'}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
