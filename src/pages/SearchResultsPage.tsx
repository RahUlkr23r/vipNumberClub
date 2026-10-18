import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VIP_NUMBERS, POPULAR_CATEGORIES } from '../data/numbers';
import { NumberCard } from '../components/NumberCard';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  Sparkles, 
  Check, 
  ChevronDown 
} from 'lucide-react';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // State from URL query or defaults
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedPrefixes, setSelectedPrefixes] = useState<number[]>(() => {
    const start = searchParams.get('start_with');
    return start ? start.split(',').map(Number) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [selectedTotal, setSelectedTotal] = useState<number | null>(() => {
    const tot = searchParams.get('total');
    return tot ? parseInt(tot, 10) : null;
  });
  const [sortBy, setSortBy] = useState<'relevance' | 'price_low_to_high' | 'price_high_to_low'>(
    (searchParams.get('sort') as any) || 'relevance'
  );
  const [budgetMax, setBudgetMax] = useState<number | null>(() => {
    const max = searchParams.get('budgetMax');
    return max ? parseInt(max, 10) : null;
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state if URL searchParams change
  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setSearchTerm(q);
    const cat = searchParams.get('category');
    if (cat !== null) setSelectedCategory(cat);
    const tot = searchParams.get('total');
    if (tot !== null) setSelectedTotal(parseInt(tot, 10));
  }, [searchParams]);

  // Handle prefix toggle
  const togglePrefix = (p: number) => {
    setSelectedPrefixes(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedPrefixes([]);
    setSelectedCategory('all');
    setSelectedTotal(null);
    setSortBy('relevance');
    setBudgetMax(null);
    setSearchParams({});
  };

  // Filter and sort numbers
  const filteredNumbers = useMemo(() => {
    let result = [...VIP_NUMBERS];

    // Text search (matches number string or clean digits)
    if (searchTerm.trim()) {
      const cleanQuery = searchTerm.trim().replace(/\D/g, '');
      const rawQuery = searchTerm.trim().toLowerCase();

      result = result.filter(n => {
        if (cleanQuery && n.number.includes(cleanQuery)) return true;
        if (n.category.toLowerCase().includes(rawQuery)) return true;
        if (n.tags.some(t => t.toLowerCase().includes(rawQuery))) return true;
        if (n.endingDigits.includes(cleanQuery)) return true;
        return false;
      });
    }

    // Prefix filtering (6, 7, 8, 9)
    if (selectedPrefixes.length > 0) {
      result = result.filter(n => {
        const firstDigit = parseInt(n.number.charAt(0), 10);
        return selectedPrefixes.includes(firstDigit);
      });
    }

    // Category filtering
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'super-sale') {
        result = result.filter(n => n.superSale);
      } else if (selectedCategory === 'vvip-high-end') {
        result = result.filter(n => n.priceNumeric >= 100000);
      } else if (selectedCategory === 'mirror-numbers') {
        result = result.filter(n => n.tags.includes('Mirror Series'));
      } else if (selectedCategory === '786-numbers') {
        result = result.filter(n => n.tags.includes('786 Auspicious'));
      } else if (selectedCategory === 'tetra-numbers') {
        result = result.filter(n => n.tags.includes('Tetra Numbers'));
      } else if (selectedCategory === 'penta-numbers') {
        result = result.filter(n => n.tags.includes('Penta Numbers'));
      } else if (selectedCategory === 'zero-lovers') {
        result = result.filter(n => n.tags.includes('Zero Lovers'));
      } else if (selectedCategory === 'abab-pattern') {
        result = result.filter(n => n.tags.includes('ABAB Pattern'));
      } else if (selectedCategory === 'budget-friendly') {
        result = result.filter(n => n.priceNumeric <= 10000);
      } else if (selectedCategory === 'lucky-sum-1') {
        result = result.filter(n => n.total === 1);
      }
    }

    // Numerology Total root sum (1-9)
    if (selectedTotal !== null) {
      result = result.filter(n => n.total === selectedTotal);
    }

    // Budget max
    if (budgetMax !== null) {
      result = result.filter(n => n.priceNumeric <= budgetMax);
    }

    // Sorting
    if (sortBy === 'price_low_to_high') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price_high_to_low') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [searchTerm, selectedPrefixes, selectedCategory, selectedTotal, budgetMax, sortBy]);

  const activeFilterCount = (searchTerm ? 1 : 0) +
    selectedPrefixes.length +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedTotal !== null ? 1 : 0) +
    (budgetMax !== null ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title & Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-dark-border">
        <div>
          <span className="text-xs font-bold text-gold uppercase tracking-wider">
            Verified Number Directory
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            VIP & Fancy Mobile Numbers
          </h1>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Browse {filteredNumbers.length} available numbers with 100% money-back guarantee and official MNP activation.
          </p>
        </div>

        {/* Search input inside header */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search digits (e.g. 786, 0000)..."
            className="w-full bg-dark-card border border-dark-border rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Filter Toolbar */}
      <div className="rounded-2xl bg-dark-card border border-dark-border p-4 sm:p-5 space-y-4">
        {/* Top Controls: Prefixes, Sort, Mobile Filter Trigger */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Starting Digit (Prefix) Buttons: 6, 7, 8, 9 */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white/60 mr-1">Starts With:</span>
            {[6, 7, 8, 9].map(prefix => (
              <button
                key={prefix}
                onClick={() => togglePrefix(prefix)}
                className={`w-8 h-8 rounded-xl font-mono text-xs font-bold transition-all border ${
                  selectedPrefixes.includes(prefix)
                    ? 'bg-gold border-gold text-dark-pure shadow-gold-sm'
                    : 'bg-dark-surface border-dark-border text-white/70 hover:text-white hover:border-gold/40'
                }`}
              >
                {prefix}
              </button>
            ))}
          </div>

          {/* Sort & Action controls */}
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-dark-surface border border-dark-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold font-medium"
              >
                <option value="relevance">Featured & Trending</option>
                <option value="price_low_to_high">Price: Low to High</option>
                <option value="price_high_to_low">Price: High to Low</option>
              </select>
            </div>

            {/* Reset button */}
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-white/60 hover:text-white bg-dark-surface border border-dark-border hover:border-red-500/40 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Carousel/Scroll */}
        <div className="space-y-1.5 pt-2 border-t border-dark-border/60">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {POPULAR_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-gold/15 border-gold text-gold font-bold'
                    : 'bg-dark-surface border-dark-border/60 text-white/70 hover:text-white hover:bg-dark-hover'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Numerology Root Sum & Budget Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-dark-border/60 text-xs">
          {/* Numerology Total (1-9) */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/60 mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Root Total:</span>
            </span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => setSelectedTotal(selectedTotal === num ? null : num)}
                className={`w-7 h-7 rounded-lg font-mono font-bold transition-all border text-[11px] ${
                  selectedTotal === num
                    ? 'bg-gold border-gold text-dark-pure'
                    : 'bg-dark-surface border-dark-border text-white/60 hover:text-white'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Budget Range shortcuts */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/60 mr-1">Budget:</span>
            {[
              { label: 'All', val: null },
              { label: '< ₹10k', val: 10000 },
              { label: '< ₹50k', val: 50000 },
              { label: '< ₹1L', val: 100000 }
            ].map(b => (
              <button
                key={b.label}
                onClick={() => setBudgetMax(budgetMax === b.val ? null : b.val)}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors ${
                  budgetMax === b.val
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold'
                    : 'bg-dark-surface border-dark-border text-white/60 hover:text-white'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Numbers Grid */}
      {filteredNumbers.length === 0 ? (
        <div className="rounded-3xl bg-dark-card border border-dark-border p-12 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-gold mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No Matching Numbers Found</h3>
            <p className="text-xs text-white/60">
              We couldn't find any numbers matching your active filters. Try adjusting your search query, or let our team source your custom number.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={resetFilters}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold text-dark-pure font-bold text-xs tracking-wide shadow-gold-sm"
            >
              Reset All Filters
            </button>
            <a
              href="https://wa.me/9111117777?text=Hello%20Ranvijay,%20I%20am%20looking%20for%20a%20specific%20number."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white font-medium text-xs hover:bg-dark-hover"
            >
              Request Custom Number
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      )}
    </div>
  );
};
