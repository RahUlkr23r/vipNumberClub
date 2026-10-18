import React, { useState, useEffect } from 'react';
import { VipNumber } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, Clock, ShoppingCart, Check, Zap, Sparkles } from 'lucide-react';

interface NumberCardProps {
  number: VipNumber;
}

export const NumberCard: React.FC<NumberCardProps> = ({ number }) => {
  const { addToCart, toggleFavorite, isFavorite, openBookingModal } = useApp();
  const favorited = isFavorite(number.id);

  // Calculate dynamic countdown timer
  const [timeLeft, setTimeLeft] = useState('14h 22m');

  useEffect(() => {
    // Generate pseudo countdown based on number ID
    const seed = parseInt(number.id.replace(/\D/g, ''), 10) || 12;
    const hours = (seed % 18) + 4;
    const minutes = (seed * 7) % 60;
    setTimeLeft(`${hours}h ${minutes}m`);
  }, [number.id]);

  return (
    <div className="group relative rounded-2xl bg-dark-card border border-dark-border/80 hover:border-gold/50 transition-all duration-300 p-5 shadow-dark-card hover:shadow-gold-sm flex flex-col justify-between overflow-hidden">
      {/* Subtle background glow effect on hover */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header: Countdown & Wishlist */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-dark-border/50 text-xs">
          <div className="inline-flex items-center gap-1.5 text-white/70 bg-dark-surface/80 px-2.5 py-1 rounded-full border border-dark-border/40">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="font-mono text-[11px] font-medium">{timeLeft} left</span>
          </div>

          <div className="flex items-center gap-1.5">
            {number.superSale && (
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                Super Sale
              </span>
            )}
            <button
              onClick={() => toggleFavorite(number.id)}
              className={`p-1.5 rounded-full border transition-all ${
                favorited
                  ? 'bg-red-500/10 border-red-500/30 text-red-500'
                  : 'bg-dark-surface border-dark-border/60 text-white/50 hover:text-white hover:border-white/30'
              }`}
              title={favorited ? 'Remove from favorites' : 'Save to favorites'}
              aria-label="Toggle favorite"
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Center: Large Number Display */}
        <div className="py-5 text-center">
          <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-light transition-colors select-all">
            {number.highlightPrefix ? (
              <>
                <span className="text-gold font-extrabold">{number.highlightPrefix}</span>
                {number.displayNumber.slice(number.highlightPrefix.length)}
              </>
            ) : (
              number.displayNumber
            )}
          </div>

          {/* Pricing Info */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="text-sm text-white/40 line-through font-medium">
              {number.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-gold tracking-tight">
              {number.price}
            </span>
          </div>

          {/* Numerology Badges (Sum & Total) */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs">
            <span className="bg-dark-surface px-2.5 py-1 rounded-md text-white/70 border border-dark-border/50">
              Sum: <strong className="text-white">{number.sum}</strong>
            </span>
            <span className="bg-gold/10 px-2.5 py-1 rounded-md text-gold border border-gold/20 font-medium">
              Total: <strong>{number.total}</strong>
            </span>
            <span className="bg-dark-surface px-2.5 py-1 rounded-md text-white/70 border border-dark-border/50">
              Ends: <strong className="text-white font-mono">{number.endingDigits}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: Domain tag & Action Buttons */}
      <div className="pt-3 border-t border-dark-border/50 space-y-3">
        <div className="flex items-center justify-between text-[11px] text-white/40">
          <span className="truncate max-w-[150px] font-medium text-white/60">{number.category}</span>
          <span className="font-mono text-gold/60">VIPNumbersClub.com</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => addToCart(number)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-dark-surface hover:bg-dark-elevated text-white text-xs font-semibold border border-dark-border hover:border-gold/40 transition-all duration-150 active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-gold" />
            <span>Add to Cart</span>
          </button>

          <button
            onClick={() => openBookingModal(number)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-dark-pure text-xs font-bold shadow-gold-sm transition-all duration-150 active:scale-95 hover:brightness-105"
          >
            <Zap className="w-3.5 h-3.5 fill-dark-pure" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
