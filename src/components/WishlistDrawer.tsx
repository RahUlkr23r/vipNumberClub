import React from 'react';
import { useApp } from '../context/AppContext';
import { VIP_NUMBERS } from '../data/numbers';
import { X, Heart, ShoppingCart, Zap, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistDrawer: React.FC = () => {
  const { favorites, isWishlistOpen, setIsWishlistOpen, toggleFavorite, addToCart, openBookingModal } = useApp();

  if (!isWishlistOpen) return null;

  const favoriteNumbers = VIP_NUMBERS.filter(num => favorites.includes(num.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      <div className="relative w-full max-w-md bg-dark-card border-l border-dark-border h-full flex flex-col z-10 shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-dark-border">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="font-bold text-white text-base">Your Wishlist</h3>
            <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 text-xs font-semibold">
              {favorites.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {favoriteNumbers.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/30">
              <Heart className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-white">No favorites saved yet</h4>
              <p className="text-xs text-white/50 max-w-xs">
                Click the heart icon on any VIP number card to save it here for easy comparison.
              </p>
            </div>
            <Link
              to="/search-results"
              onClick={() => setIsWishlistOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-dark-pure font-bold text-xs tracking-wide shadow-gold-sm hover:bg-gold-light transition-all"
            >
              <span>Explore Numbers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {favoriteNumbers.map(number => (
              <div
                key={number.id}
                className="p-4 rounded-xl bg-dark-surface border border-dark-border/80 flex flex-col gap-3 group hover:border-gold/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-mono text-base font-bold text-white tracking-wider">
                      {number.displayNumber}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gold font-bold text-sm">{number.price}</span>
                      <span className="text-white/30 line-through text-xs">{number.originalPrice}</span>
                      <span className="text-[10px] text-white/50 bg-dark-card px-2 py-0.5 rounded">
                        Sum: {number.sum} | Tot: {number.total}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(number.id)}
                    className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-dark-border/40">
                  <button
                    onClick={() => {
                      addToCart(number);
                      setIsWishlistOpen(false);
                    }}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-dark-card hover:bg-dark-hover text-white text-xs font-semibold border border-dark-border"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 text-gold" />
                    <span>Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      openBookingModal(number);
                      setIsWishlistOpen(false);
                    }}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gold text-dark-pure text-xs font-bold shadow-gold-sm hover:bg-gold-light"
                  >
                    <Zap className="w-3.5 h-3.5 fill-dark-pure" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
