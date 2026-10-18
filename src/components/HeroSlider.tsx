import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { VIP_NUMBERS } from '../data/numbers';
import { useApp } from '../context/AppContext';
import { Search, Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSaleIndex, setActiveSaleIndex] = useState(0);
  const navigate = useNavigate();
  const { openBookingModal } = useApp();

  // Pick top super-sale numbers for the hero preview
  const superSaleNumbers = VIP_NUMBERS.filter(n => n.superSale).slice(0, 6);

  // Auto-cycle super-sale zone numbers
  useEffect(() => {
    if (superSaleNumbers.length === 0) return;
    const interval = setInterval(() => {
      setActiveSaleIndex(prev => (prev + 1) % superSaleNumbers.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [superSaleNumbers.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/search-results');
    }
  };

  const currentSaleNumber = superSaleNumbers[activeSaleIndex] || superSaleNumbers[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-dark-pure via-dark-surface/80 to-dark-pure border-b border-dark-border/40">
      {/* Background ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Value proposition, Search Bar */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Biggest VIP Number Provider • Est. 2009</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Buy <span className="text-gold">VIP & Fancy</span> Mobile Numbers Online in India
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Stand out from the crowd with exclusive, easy-to-remember, premium mobile numbers. Your identity deserves a touch of luxury with 100% guaranteed legal activation.
            </p>

            {/* Search Input Box */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0">
              <div className="relative flex items-center rounded-2xl bg-dark-card border border-dark-border hover:border-gold/50 focus-within:border-gold p-2 shadow-2xl transition-all">
                <Search className="w-5 h-5 text-gold ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search numbers, digits, e.g. 786, 0000, 9999..."
                  className="w-full bg-transparent px-3 py-2 text-white placeholder-white/40 focus:outline-none text-sm font-medium"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-dark-pure font-bold text-xs sm:text-sm tracking-wide shadow-gold-sm transition-all hover:scale-105 shrink-0"
                >
                  Search Now
                </button>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3 text-xs text-white/60">
                <span className="text-white/40">Trending:</span>
                {['0000', '786', 'Penta', 'Mirror', 'AB-AB'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => navigate(`/search-results?q=${encodeURIComponent(tag)}`)}
                    className="px-2.5 py-1 rounded-lg bg-dark-card border border-dark-border/60 hover:border-gold/40 hover:text-gold transition-colors text-white/70"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </form>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/75 border-t border-dark-border/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lowest Price Challenge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Jio • Airtel • Vi • BSNL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Super Sale Zone Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-gradient-to-b from-dark-card to-dark-surface border border-gold/30 p-6 shadow-2xl relative overflow-hidden group">
              {/* Gold Top Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Super Sale Zone
                  </h3>
                </div>
                <Link
                  to="/search-results?category=super-sale"
                  className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Cycling Featured Number Card */}
              {currentSaleNumber && (
                <div className="py-6 text-center space-y-4 animate-fade-in key={currentSaleNumber.id}">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-mono font-bold border border-gold/20">
                    Sum: {currentSaleNumber.sum} | Total: {currentSaleNumber.total}
                  </div>

                  {/* Big Number */}
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold tracking-widest text-white">
                    <span className="text-gold">{currentSaleNumber.displayNumber.slice(0, 3)}</span>
                    {currentSaleNumber.displayNumber.slice(3)}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-base text-white/40 line-through">
                      {currentSaleNumber.originalPrice}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-gold">
                      {currentSaleNumber.price}
                    </span>
                  </div>

                  <p className="text-xs text-white/50">
                    Instant delivery via official Unique Porting Code (UPC)
                  </p>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => openBookingModal(currentSaleNumber)}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-dark-pure font-bold text-xs uppercase tracking-wider shadow-gold-sm transition-all hover:scale-105 active:scale-95"
                    >
                      Book This Number
                    </button>
                    <Link
                      to={`/search-results?q=${encodeURIComponent(currentSaleNumber.number)}`}
                      className="py-3 px-4 rounded-xl bg-dark-surface hover:bg-dark-hover text-white font-medium text-xs border border-dark-border transition-colors flex items-center justify-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              )}

              {/* Indicator Dots */}
              <div className="flex justify-center gap-1.5 pt-2">
                {superSaleNumbers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSaleIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeSaleIndex ? 'w-6 bg-gold' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
