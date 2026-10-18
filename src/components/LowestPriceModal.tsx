import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { X, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

export const LowestPriceModal: React.FC = () => {
  const { isLowestPriceModalOpen, setIsLowestPriceModalOpen } = useApp();

  if (!isLowestPriceModalOpen) return null;

  const handleClaim = () => {
    const text = `*LOWEST PRICE CHALLENGE CLAIM*
━━━━━━━━━━━━━━━━━━
Hello Ranvijay, I saw a VIP number listed elsewhere and I would like VIP Numbers Club to beat that price as per your Lowest Price Challenge guarantee.`;
    window.open(`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
    setIsLowestPriceModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-dark-card border border-gold/40 p-6 sm:p-8 shadow-2xl text-center space-y-6 animate-slide-up">
        <button
          onClick={() => setIsLowestPriceModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-gold/15 text-gold border border-gold/30 mx-auto flex items-center justify-center shadow-gold-sm">
          <ShieldCheck className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-gold tracking-widest">
            VIP Numbers Club Promise
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Lowest Price Challenge
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            If you see any VIP or fancy mobile number on any platform across India, we will provide you that number at a lower price than them. Guaranteed.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-dark-surface border border-dark-border text-left space-y-2 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Guaranteed lowest price vs any verified competitor</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% money-back guarantee until activation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Official legal MNP Unique Porting Code (UPC)</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleClaim}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-dark-pure font-bold text-sm tracking-wide shadow-gold-sm transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-dark-pure" />
            <span>Claim Lower Price on WhatsApp</span>
          </button>
          <button
            onClick={() => setIsLowestPriceModalOpen(false)}
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
