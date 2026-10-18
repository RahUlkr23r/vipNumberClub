import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, ArrowRight, Calendar, Star } from 'lucide-react';

export const LuckyNumberModal: React.FC = () => {
  const { isLuckyCalcModalOpen, setIsLuckyCalcModalOpen } = useApp();
  const navigate = useNavigate();

  const [day, setDay] = useState('15');
  const [month, setMonth] = useState('8');
  const [year, setYear] = useState('1995');
  const [calculatedTotal, setCalculatedTotal] = useState<number | null>(null);

  if (!isLuckyCalcModalOpen) return null;

  const calculateNumerology = () => {
    const d = parseInt(day, 10) || 1;
    const m = parseInt(month, 10) || 1;
    const y = parseInt(year, 10) || 2000;

    // Reduce single number
    const reduceNum = (num: number): number => {
      let sum = num;
      while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      }
      return sum || 1;
    };

    // Calculate Life Path: sum of all digits
    const digitsStr = `${d}${m}${y}`;
    const initialSum = digitsStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const destinyNumber = reduceNum(initialSum);
    setCalculatedTotal(destinyNumber);
  };

  const getPlanetName = (num: number) => {
    switch (num) {
      case 1: return { ruler: 'Sun (Surya)', trait: 'Leadership, Authority & Power' };
      case 2: return { ruler: 'Moon (Chandra)', trait: 'Harmony, Intuition & Diplomacy' };
      case 3: return { ruler: 'Jupiter (Brihaspati)', trait: 'Wisdom, Expansion & Good Fortune' };
      case 4: return { ruler: 'Rahu', trait: 'Strategic Brilliance & Bold Innovation' };
      case 5: return { ruler: 'Mercury (Budh)', trait: 'Business Acumen, Communication & Speed' };
      case 6: return { ruler: 'Venus (Shukra)', trait: 'Luxury, Wealth, Magnetism & Glamour' };
      case 7: return { ruler: 'Ketu', trait: 'Deep Wisdom, Research & Intuitive Instinct' };
      case 8: return { ruler: 'Saturn (Shani)', trait: 'Massive Success, Perseverance & Karma' };
      case 9: return { ruler: 'Mars (Mangal)', trait: 'Courage, Energy, High Ambition & Drive' };
      default: return { ruler: 'Universal Force', trait: 'Auspicious Fortune' };
    }
  };

  const handleBrowseMatching = () => {
    if (calculatedTotal) {
      setIsLuckyCalcModalOpen(false);
      navigate(`/search-results?total=${calculatedTotal}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-dark-card border border-gold/40 p-6 sm:p-8 shadow-2xl text-center space-y-6 animate-slide-up">
        <button
          onClick={() => setIsLuckyCalcModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-gold/15 text-gold border border-gold/30 mx-auto flex items-center justify-center shadow-gold-sm">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <span className="text-xs uppercase font-bold text-gold tracking-widest">
            Auspicious Numerology Engine
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Know My Lucky Number
          </h3>
          <p className="text-xs text-white/60">
            Enter your Date of Birth to discover your destiny root sum and reveal mobile numbers aligned with your celestial vibration.
          </p>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="space-y-1 text-left">
            <label className="text-[11px] font-semibold text-white/60">Day</label>
            <input
              type="number"
              min="1"
              max="31"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          <div className="space-y-1 text-left">
            <label className="text-[11px] font-semibold text-white/60">Month</label>
            <input
              type="number"
              min="1"
              max="12"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          <div className="space-y-1 text-left">
            <label className="text-[11px] font-semibold text-white/60">Year</label>
            <input
              type="number"
              min="1940"
              max="2030"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={calculateNumerology}
          className="w-full py-3 px-4 rounded-xl bg-gold hover:bg-gold-light text-dark-pure font-bold text-xs uppercase tracking-wider shadow-gold-sm transition-all"
        >
          Calculate Lucky Number
        </button>

        {/* Result Showcase */}
        {calculatedTotal !== null && (
          <div className="p-4 rounded-2xl bg-dark-surface border border-gold/40 text-center space-y-3 animate-fade-in">
            <div className="text-xs text-white/60">Your Destiny Root Total is:</div>
            <div className="text-5xl font-mono font-extrabold text-gold tracking-tight">
              {calculatedTotal}
            </div>

            <div className="space-y-1 border-t border-dark-border pt-2 text-xs">
              <div className="text-white font-semibold flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>Ruling Force: {getPlanetName(calculatedTotal).ruler}</span>
              </div>
              <div className="text-white/60">
                Key Vibration: {getPlanetName(calculatedTotal).trait}
              </div>
            </div>

            <button
              onClick={handleBrowseMatching}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-xs shadow-gold-sm transition-transform hover:scale-105"
            >
              <span>Browse All Numbers Matching Total {calculatedTotal}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
