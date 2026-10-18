import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, favorites, setIsCartOpen, setIsWishlistOpen, setIsLowestPriceModalOpen, setIsLuckyCalcModalOpen } = useApp();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Browse Numbers', path: '/search-results' },
    { label: 'Numerology Search', path: '/numerology-search' },
    { label: 'Activation Process', path: '/process' },
    { label: 'Prepaid / Postpaid', path: '/prepaid-postpaid' },
    { label: 'Home Delivery', path: '/home-delivery' },
    { label: 'Clientele', path: '/clientele' },
    { label: 'About Us', path: '/about-us' },
    { label: 'FAQ', path: '/general-doubts' },
    { label: 'Contact', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-dark-pure/90 backdrop-blur-md border-b border-dark-border/60 transition-all duration-200">
      {/* Top Value Proposition Bar */}
      <div className="bg-gradient-to-r from-dark-surface via-dark-card to-dark-surface border-b border-dark-border/40 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => setIsLowestPriceModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-medium whitespace-nowrap transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Lowest Price Challenge</span>
              <span className="hidden sm:inline text-white/50">• We beat any price</span>
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link
              to="/home-delivery"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white whitespace-nowrap transition-colors"
            >
              <Truck className="w-3.5 h-3.5 text-gold" />
              <span>Doorstep Delivery (COD Available)</span>
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100% Money-Back Guarantee Until Activation</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0 text-white/80">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 hover:text-gold transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>24/7 Helpline: {SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={SITE_INFO.assets.logo}
              alt={SITE_INFO.name}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold transition-colors leading-tight">
                VIP Numbers <span className="text-gold">club</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/60 tracking-wider uppercase font-medium">
                {SITE_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navLinks.slice(0, 7).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-all duration-150 ${
                  isActive(link.path)
                    ? 'text-gold bg-gold/10 font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <Link
              to="/search-results"
              className="p-2 sm:p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-dark-border transition-all"
              title="Search VIP Numbers"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gold" />
            </Link>

            {/* Lucky Numerology Calculator */}
            <button
              onClick={() => setIsLuckyCalcModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-dark-card hover:bg-dark-elevated text-gold border border-gold/30 hover:border-gold transition-all shadow-sm"
              title="Find your numerology lucky number"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lucky Calc</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-dark-border transition-all"
              title="View Favorites"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-dark-pure font-bold text-xs rounded-full flex items-center justify-center animate-fade-in shadow-gold-sm">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-dark-border transition-all"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white font-bold text-xs rounded-full flex items-center justify-center animate-fade-in">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action Button */}
            <a
              href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello VIP Numbers Club, I want to inquire about VIP numbers.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs tracking-wide shadow-lg shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 border border-dark-border transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[113px] bottom-0 bg-dark-pure/95 backdrop-blur-xl border-t border-dark-border z-50 overflow-y-auto animate-fadeIn">
          <div className="p-6 space-y-6 max-w-md mx-auto">
            {/* Quick Action Pills inside mobile drawer */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setIsLuckyCalcModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/20 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lucky Calc</span>
              </button>
              <button
                onClick={() => {
                  setIsLowestPriceModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-card border border-dark-border text-white text-sm font-medium hover:bg-dark-hover transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Price Match</span>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base transition-colors ${
                    isActive(link.path)
                      ? 'bg-gold/15 text-gold font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </Link>
              ))}
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-base"
              >
                <span>Services</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
              </Link>
              <Link
                to="/refund-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-base"
              >
                <span>Refund Policy</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
              </Link>
            </nav>

            {/* Contact Card in mobile menu */}
            <div className="p-4 rounded-2xl bg-dark-card border border-dark-border space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/60">Executive Contact</div>
                  <div className="text-sm font-bold text-white">{SITE_INFO.leadContact} — {SITE_INFO.phone}</div>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I would like to consult on VIP Numbers.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (24*7)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
