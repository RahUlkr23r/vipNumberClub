import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { 
  MessageCircle, 
  Phone, 
  Home, 
  Search, 
  Sparkles, 
  Heart, 
  ShoppingCart, 
  ShieldCheck, 
  X 
} from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { cart, favorites, setIsCartOpen, setIsWishlistOpen, setIsLuckyCalcModalOpen } = useApp();
  const location = useLocation();

  const [currentTickerNumber, setCurrentTickerNumber] = useState(SITE_INFO.soldOutTickerNumbers[0]);
  const [showTicker, setShowTicker] = useState(true);

  // Cycle sold-out ticker every 8 seconds
  useEffect(() => {
    const list = SITE_INFO.soldOutTickerNumbers;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % list.length;
      setCurrentTickerNumber(list[idx]);
      setShowTicker(true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Sold-Out Ticker (Bottom-Left) */}
      {showTicker && (
        <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-dark-card/95 border border-dark-border shadow-2xl backdrop-blur-md animate-fade-in max-w-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div className="text-xs">
            <span className="font-mono font-bold text-white tracking-wider">
              {currentTickerNumber}
            </span>{' '}
            <span className="text-white/60">has sold out</span>
          </div>
          <button
            onClick={() => setShowTicker(false)}
            className="p-1 rounded-md text-white/40 hover:text-white"
            aria-label="Dismiss sold out alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons (Bottom-Right, above mobile bar) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
        {/* Call button */}
        <a
          href={`tel:${SITE_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-dark-card border border-gold/40 text-gold flex items-center justify-center shadow-lg hover:scale-110 hover:border-gold transition-all"
          title="Call Ranvijay (24*7)"
          aria-label="Call support"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp quick button */}
        <a
          href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I would like to inquire about VIP numbers.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 transition-all group relative"
          title="Chat with Ranvijay on WhatsApp"
          aria-label="WhatsApp support"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute right-14 bg-dark-card border border-dark-border text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl font-medium">
            Chat on WhatsApp (24*7)
          </span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Navigation Bar (below 768px) */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 bg-dark-pure/95 border-t border-dark-border backdrop-blur-lg z-40 py-2 px-3">
        <div className="grid grid-cols-5 items-center text-center">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
              location.pathname === '/' ? 'text-gold' : 'text-white/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            to="/search-results"
            className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
              location.pathname === '/search-results' ? 'text-gold' : 'text-white/60'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </Link>

          <button
            onClick={() => setIsLuckyCalcModalOpen(true)}
            className="flex flex-col items-center gap-1 text-[10px] font-medium text-white/60 hover:text-gold transition-colors"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Lucky</span>
          </button>

          <button
            onClick={() => setIsWishlistOpen(true)}
            className="flex flex-col items-center gap-1 text-[10px] font-medium text-white/60 hover:text-white transition-colors relative"
          >
            <Heart className="w-4 h-4" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 right-3 w-4 h-4 bg-gold text-dark-pure font-bold text-[9px] rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
            <span>Saved</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center gap-1 text-[10px] font-medium text-white/60 hover:text-white transition-colors relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 right-3 w-4 h-4 bg-red-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <span>Cart</span>
          </button>
        </div>
      </nav>
    </>
  );
};
