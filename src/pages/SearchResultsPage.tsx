import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VIP_NUMBERS, POPULAR_CATEGORIES } from '../data/numbers';
import { NumberCard } from '../components/NumberCard';

type SortOption = 'relevance' | 'price_low_to_high' | 'price_high_to_low';
type FilterTab = 'startwith' | 'sortbyprice' | 'numerology';
type VIPNumber = (typeof VIP_NUMBERS)[number];

const SORT_LABELS: Record<SortOption, string> = {
  relevance: 'Relevance',
  price_low_to_high: 'Price: Low → High',
  price_high_to_low: 'Price: High → Low',
};

const PREFIXES = [6, 7, 8, 9];
const TOTALS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* =========================================
   Category matching (module scope)
   ========================================= */
const normalizeCategoryText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const STOP_WORDS = new Set([
  'and', 'the', 'with', 'for', 'of', 'to', 'in', 'on', 'max', 'maximum',
  'special', 'series', 'numbers', 'number', 'ending', 'zone', 'from', 'all',
  'high', 'end', 'super', 'premium', 'search', 'by', 'best', 'most', 'lucky',
  'featured', 'click', 'roots', 'root', 'total', 'zeros', 'zero', 'last',
]);

const CUSTOM_MATCHERS: Record<string, (n: VIPNumber) => boolean> = {
  'super-sale-zone': (n) => n.superSale === true,
  'budget-friendly': (n) => n.priceNumeric <= 10000,
  'budget-friendly-numbers': (n) => n.priceNumeric <= 10000,
  'vvip-high-end': (n) => n.priceNumeric >= 50000,
  'vvip-high-end-numbers': (n) => n.priceNumeric >= 50000,
  'most-clicked-numbers': (n) => Boolean(n.trending || n.featured),
  '0-lovers-maximum-zeros': (n) =>
    n.tags.some((t) => /zero lovers/i.test(t)) || /000/.test(n.number),
  'ab-ab-ab-ending-special': (n) =>
    n.tags.some((t) => /abab/i.test(t)) || /abab/i.test(n.category),
  'super-helpline-series-6': (n) =>
    n.number.startsWith('939000') ||
    n.number.includes('0002') ||
    n.number.includes('0004') ||
    /helpline/i.test(n.category) ||
    n.tags.some((t) => /helpline/i.test(t)),
  '786-numbers': (n) => n.number.includes('786') || /786/i.test(n.category),
  'tetra-numbers': (n) =>
    /tetra/i.test(n.category) ||
    n.tags.some((t) => /tetra/i.test(t)) ||
    /([0-9])\1{3}/.test(n.number),
  'mirror-numbers': (n) =>
    /mirror/i.test(n.category) || n.tags.some((t) => /mirror/i.test(t)),
  'penta-numbers': (n) =>
    /penta/i.test(n.category) ||
    n.tags.some((t) => /penta/i.test(t)) ||
    /([0-9])\1{4}/.test(n.number),
  'lucky-numbers-root-sum-1': (n) => n.total === 1,
  'family-pack': () => true,
  'family-corporate-pack': () => true,
  'special-penta-last': (n) =>
    /penta/i.test(n.category) || /penta/i.test(n.tags.join(' ')),
};

const matchesCategory = (number: VIPNumber, category: string): boolean => {
  const normalized = normalizeCategoryText(category);
  if (!normalized || normalized === 'all') return true;

  const custom = CUSTOM_MATCHERS[normalized];
  if (custom) return custom(number);

  const terms = normalized
    .split(' ')
    .map((t) => (t === '0' ? 'zero' : t))
    .filter((t) => t && !STOP_WORDS.has(t));

  if (terms.length === 0) return true;

  const haystacks = [number.category, ...number.tags].map(normalizeCategoryText);
  return haystacks.some((value) =>
    terms.some((term) => value.includes(term) || term.includes(value)),
  );
};

/* =========================================
   Component
   ========================================= */
export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ---------- Filter state ---------- */
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') ?? '');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [selectedPrefixes, setSelectedPrefixes] = useState<number[]>(() => {
    const s = searchParams.get('start_with');
    return s ? s.split(',').map(Number).filter((n) => !Number.isNaN(n)) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') ?? 'all',
  );
  const [selectedTotal, setSelectedTotal] = useState<number | null>(() => {
    const t = searchParams.get('total');
    if (!t) return null;
    const v = parseInt(t, 10);
    return Number.isNaN(v) ? null : v;
  });
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.get('sort') as SortOption) || 'relevance',
  );

  /* ---------- UI state ---------- */
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>('startwith');
  const modalRef = useRef<HTMLDivElement>(null);

  /* ---------- Debounce search (300ms) ---------- */
  useEffect(() => {
    const id = setTimeout(() => setDebouncedTerm(searchTerm), 300);
    return () => clearTimeout(id);
  }, [searchTerm]);

  /* ---------- URL sync (keeps shareable filters) ---------- */
  useEffect(() => {
    const next = new URLSearchParams();
    if (debouncedTerm.trim()) next.set('q', debouncedTerm.trim());
    if (selectedCategory !== 'all') next.set('category', selectedCategory);
    if (selectedPrefixes.length) next.set('start_with', selectedPrefixes.join(','));
    if (selectedTotal !== null) next.set('total', String(selectedTotal));
    if (sortBy !== 'relevance') next.set('sort', sortBy);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTerm, selectedCategory, selectedPrefixes, selectedTotal, sortBy]);

  /* ---------- ESC + focus trap for modal ---------- */
  useEffect(() => {
    if (!isFilterOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFilterOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isFilterOpen]);

  /* ---------- Handlers ---------- */
  const togglePrefix = useCallback((p: number) => {
    setSelectedPrefixes((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  }, []);

  const handleReset = useCallback(() => {
    setSearchTerm('');
    setDebouncedTerm('');
    setSelectedPrefixes([]);
    setSelectedCategory('all');
    setSelectedTotal(null);
    setSortBy('relevance');
    setSearchParams({}, { replace: true });
    setIsFilterOpen(false);
  }, [setSearchParams]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedPrefixes.length +
    (selectedTotal !== null ? 1 : 0) +
    (sortBy !== 'relevance' ? 1 : 0);

  /* ---------- Filtered list ---------- */
  const filteredNumbers = useMemo(() => {
    let result = [...VIP_NUMBERS];

    if (debouncedTerm.trim()) {
      const clean = debouncedTerm.trim().replace(/\D/g, '');
      const raw = debouncedTerm.trim().toLowerCase();
      result = result.filter((n) => {
        if (clean && n.number.includes(clean)) return true;
        if (n.category.toLowerCase().includes(raw)) return true;
        if (n.tags.some((t) => t.toLowerCase().includes(raw))) return true;
        return false;
      });
    }

    if (selectedPrefixes.length) {
      result = result.filter((n) =>
        selectedPrefixes.includes(parseInt(n.number.charAt(0), 10)),
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((n) => matchesCategory(n, selectedCategory));
    }

    const minB = parseInt(searchParams.get('min_budget') ?? '', 10);
    const maxB = parseInt(searchParams.get('max_budget') ?? '', 10);
    if (!Number.isNaN(minB)) result = result.filter((n) => n.priceNumeric >= minB);
    if (!Number.isNaN(maxB)) result = result.filter((n) => n.priceNumeric <= maxB);

    if (selectedTotal !== null) {
      result = result.filter((n) => n.total === selectedTotal);
    }

    if (sortBy === 'price_low_to_high') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price_high_to_low') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [debouncedTerm, selectedPrefixes, selectedCategory, selectedTotal, sortBy, searchParams]);

  /* ---------- Render ---------- */
  return (
    <div className="search-results-page min-h-screen bg-[#050505]">
      {/* ===== 1. SEARCH BAR + FILTER TRIGGER ===== */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search number sequence (e.g. 786, 000, 8055)…"
              className="srp-search-input pr-12"
              aria-label="Search VIP numbers"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-[#aaa] hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            <button type="button" onClick={handleReset} className="srp-btn-ghost">
              Reset
            </button>

            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="srp-btn-primary"
              aria-haspopup="dialog"
              aria-expanded={isFilterOpen}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M3 6h18M7 12h10M10 18h4" />
              </svg>
              Filter
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-black text-[#ECAE01] text-[11px] font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ===== 2. CATEGORY PILLS ===== */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <div
            className="flex gap-2 overflow-x-auto srp-scroll-x pb-1"
            role="tablist"
            aria-label="Popular categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`srp-pill ${
                selectedCategory === 'all' ? 'srp-pill--active' : 'srp-pill--idle'
              }`}
            >
              All Numbers <span className="opacity-70 text-[11px]">({VIP_NUMBERS.length})</span>
            </button>
            {POPULAR_CATEGORIES.slice(1).map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`srp-pill ${
                  selectedCategory === cat.id ? 'srp-pill--active' : 'srp-pill--idle'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. RESULTS GRID ===== */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-[#888]">
              Showing{' '}
              <strong className="text-[#ECAE01]">{filteredNumbers.length}</strong>{' '}
              VIP Mobile Number{filteredNumbers.length !== 1 ? 's' : ''}
            </p>
            <p className="text-xs text-[#666] hidden sm:block">
              Sorted by <span className="text-white">{SORT_LABELS[sortBy]}</span>
            </p>
          </div>

          {filteredNumbers.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECAE01]/10 flex items-center justify-center text-[#ECAE01]">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Numbers Found</h3>
              <p className="text-sm text-[#888] mb-6">
                Try adjusting your search sequence or resetting your filters.
              </p>
              <button type="button" onClick={handleReset} className="srp-btn-primary">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredNumbers.map((number) => (
                <NumberCard key={number.id} number={number} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== 4. FILTER MODAL ===== */}
      {isFilterOpen && (
        <div
          className="srp-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFilterOpen(false);
          }}
          role="presentation"
        >
          <div
            ref={modalRef}
            className="srp-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-modal-title"
          >
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-[#222] shrink-0">
              <h2 id="filter-modal-title" className="text-white text-xl font-bold">
                Filter
              </h2>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filter"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#aaa] hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </header>

            {/* Tabs */}
            <div className="flex gap-1 px-6 pt-4 border-b border-[#222] shrink-0">
              {(
                [
                  ['startwith', 'Start With'],
                  ['sortbyprice', 'Sort By Price'],
                  ['numerology', 'Numerology'],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === key}
                  onClick={() => setActiveTab(key)}
                  className={`srp-tab ${
                    activeTab === key ? 'srp-tab--active' : 'srp-tab--idle'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {activeTab === 'startwith' && (
                <div>
                  <p className="text-[13px] text-[#888] mb-4">
                    Filter by starting digit:
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {PREFIXES.map((p) => {
                      const isSel = selectedPrefixes.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePrefix(p)}
                          aria-pressed={isSel}
                          className={`srp-chunk-btn ${
                            isSel ? 'srp-chunk-btn--active' : 'srp-chunk-btn--idle'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'sortbyprice' && (
                <div className="flex flex-col gap-3">
                  {(
                    Object.entries(SORT_LABELS) as [SortOption, string][]
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSortBy(key)}
                      aria-pressed={sortBy === key}
                      className={`text-left px-5 py-3 rounded-xl text-sm font-semibold border transition-colors ${
                        sortBy === key
                          ? 'bg-[#ECAE01]/15 text-[#ECAE01] border-[#ECAE01]'
                          : 'bg-[#111] text-[#ccc] border-[#333] hover:border-[#ECAE01]/60'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'numerology' && (
                <div>
                  <p className="text-[13px] text-[#888] mb-4">
                    Select destiny root total (1 – 9):
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    {TOTALS.map((t) => {
                      const isSel = selectedTotal === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTotal(isSel ? null : t)}
                          aria-pressed={isSel}
                          className={`srp-chunk-btn ${
                            isSel ? 'srp-chunk-btn--active' : 'srp-chunk-btn--idle'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <footer className="flex items-center justify-between px-6 py-4 border-t border-[#222] bg-[#060606] shrink-0">
              <button
                type="button"
                onClick={handleReset}
                className="text-[13px] text-[#888] hover:text-white transition-colors"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="srp-btn-primary"
              >
                Apply Filters
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};