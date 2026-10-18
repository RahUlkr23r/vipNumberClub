import React, { useState, useMemo } from 'react';
import { VIP_NUMBERS } from '../data/numbers';
import { NumberCard } from '../components/NumberCard';
import { useApp } from '../context/AppContext';
import { Sparkles, Search, RotateCcw, Calendar, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export const NumerologySearchPage: React.FC = () => {
  const { setIsLuckyCalcModalOpen } = useApp();

  const [startWith, setStartWith] = useState('');
  const [anyWhere, setAnyWhere] = useState('');
  const [endWith, setEndWith] = useState('');
  const [mustContain, setMustContain] = useState('');
  const [notContain, setNotContain] = useState('');
  const [targetSum, setTargetSum] = useState('');
  const [targetTotal, setTargetTotal] = useState('');

  // Reset form
  const handleReset = () => {
    setStartWith('');
    setAnyWhere('');
    setEndWith('');
    setMustContain('');
    setNotContain('');
    setTargetSum('');
    setTargetTotal('');
  };

  // Filter matching numbers
  const matchingNumbers = useMemo(() => {
    return VIP_NUMBERS.filter(item => {
      const num = item.number;

      // Start with
      if (startWith.trim() && !num.startsWith(startWith.trim())) return false;

      // End with
      if (endWith.trim() && !num.endsWith(endWith.trim())) return false;

      // Anywhere
      if (anyWhere.trim() && !num.includes(anyWhere.trim())) return false;

      // Must contain (comma separated list)
      if (mustContain.trim()) {
        const parts = mustContain.split(',').map(s => s.trim()).filter(Boolean);
        for (const p of parts) {
          if (!num.includes(p)) return false;
        }
      }

      // Not contain (comma separated list)
      if (notContain.trim()) {
        const parts = notContain.split(',').map(s => s.trim()).filter(Boolean);
        for (const p of parts) {
          if (num.includes(p)) return false;
        }
      }

      // Sum
      if (targetSum.trim()) {
        const sumVal = parseInt(targetSum.trim(), 10);
        if (!isNaN(sumVal) && item.sum !== sumVal) return false;
      }

      // Total root
      if (targetTotal.trim()) {
        const totVal = parseInt(targetTotal.trim(), 10);
        if (!isNaN(totVal) && item.total !== totVal) return false;
      }

      return true;
    });
  }, [startWith, anyWhere, endWith, mustContain, notContain, targetSum, targetTotal]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Auspicious Digits & Celestial Resonance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Numerology Number Search
        </h1>
        <p className="text-sm text-white/60">
          Search for numbers matching your unique life vibration, lucky sums, favorite digits, and specific exclusions.
        </p>

        {/* CTA to open Date of Birth calculator */}
        <div className="pt-2">
          <button
            onClick={() => setIsLuckyCalcModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Calculate My Lucky Number By Birthday</span>
          </button>
        </div>
      </div>

      {/* Numerology Search Form Card */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-8 shadow-2xl space-y-6">
        <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Search className="w-4 h-4 text-gold" />
          <span>Detailed Digit & Sum Criteria</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Start With */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Start With</label>
            <input
              type="text"
              value={startWith}
              onChange={(e) => setStartWith(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 911 or 777"
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          {/* Any Where */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Contains Anywhere</label>
            <input
              type="text"
              value={anyWhere}
              onChange={(e) => setAnyWhere(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 786 or 8055"
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          {/* End With */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">End With</label>
            <input
              type="text"
              value={endWith}
              onChange={(e) => setEndWith(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 0000 or 9999"
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          {/* Must Contain */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Must Contain Digits (comma separated)</label>
            <input
              type="text"
              value={mustContain}
              onChange={(e) => setMustContain(e.target.value)}
              placeholder="e.g. 11, 69, 7"
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          {/* Not Contain */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Exclude Digits (comma separated)</label>
            <input
              type="text"
              value={notContain}
              onChange={(e) => setNotContain(e.target.value)}
              placeholder="e.g. 4, 8"
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
            />
          </div>

          {/* Sum & Total in one column */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/70">Compound Sum</label>
              <input
                type="number"
                value={targetSum}
                onChange={(e) => setTargetSum(e.target.value)}
                placeholder="e.g. 48"
                className="w-full bg-dark-surface border border-dark-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/70">Root Total (1-9)</label>
              <input
                type="number"
                min="1"
                max="9"
                value={targetTotal}
                onChange={(e) => setTargetTotal(e.target.value)}
                placeholder="e.g. 1"
                className="w-full bg-dark-surface border border-dark-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold font-mono"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-dark-border">
          <span className="text-xs text-white/50">
            {matchingNumbers.length} matching numbers found
          </span>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white/70 hover:text-white bg-dark-surface border border-dark-border hover:border-gold/40 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Criteria</span>
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Matching Numerology Numbers ({matchingNumbers.length})
          </h2>
        </div>

        {matchingNumbers.length === 0 ? (
          <div className="rounded-3xl bg-dark-card border border-dark-border p-12 text-center space-y-4 max-w-md mx-auto">
            <Sparkles className="w-10 h-10 text-gold mx-auto" />
            <h3 className="text-base font-bold text-white">No Numbers Match Exact Criteria</h3>
            <p className="text-xs text-white/60">
              Try broadening your search or resetting the excluded digits filter to discover more numbers.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-gold text-dark-pure font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingNumbers.map(number => (
              <NumberCard key={number.id} number={number} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
