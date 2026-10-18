import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { X, Trash2, ShoppingCart, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, clearCart, showToast } = useApp();

  if (!isCartOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.number.priceNumeric, 0);

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsText = cart.map((item, index) => {
      return `${index + 1}. *${item.number.displayNumber}* — ${item.number.price} (${item.simType.toUpperCase()} / ${item.network.toUpperCase()})`;
    }).join('\n');

    const message = `*VIP NUMBERS CLUB — ORDER INQUIRY*
━━━━━━━━━━━━━━━━━━
${itemsText}
━━━━━━━━━━━━━━━━━━
• *Total Numbers:* ${cart.length}
• *Total Estimated Value:* ${formatCurrency(totalAmount)}
━━━━━━━━━━━━━━━━━━
Hello Ranvijay, I would like to book these numbers. Please confirm availability and guide me through the activation process.`;

    const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    showToast('Redirecting to WhatsApp for order confirmation...', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-dark-card border-l border-dark-border h-full flex flex-col z-10 shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-dark-border">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-white text-base">Your Number Cart</h3>
            <span className="px-2 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-semibold">
              {cart.length}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/30">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-white">Your cart is empty</h4>
              <p className="text-xs text-white/50 max-w-xs">
                Explore our catalog of exclusive VIP mobile numbers and add your favorite numbers.
              </p>
            </div>
            <Link
              to="/search-results"
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-dark-pure font-bold text-xs tracking-wide shadow-gold-sm hover:bg-gold-light transition-all"
            >
              <span>Browse Numbers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cart.map(item => (
              <div
                key={item.number.id}
                className="p-4 rounded-xl bg-dark-surface border border-dark-border/80 flex items-center justify-between gap-4 group hover:border-gold/30 transition-all"
              >
                <div className="space-y-1 min-w-0">
                  <div className="font-mono text-base font-bold text-white tracking-wider truncate">
                    {item.number.displayNumber}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gold font-bold">{item.number.price}</span>
                    <span className="text-white/30 line-through text-[11px]">{item.number.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/50">
                    <span className="uppercase font-semibold">{item.simType}</span>
                    <span>•</span>
                    <span className="uppercase font-semibold">{item.network}</span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.number.id)}
                  className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
                  title="Remove from cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer with Total and WhatsApp Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-dark-border bg-dark-surface/50 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-white/60">
                <span>Total Items:</span>
                <span className="font-medium text-white">{cart.length} Numbers</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-white">Estimated Total:</span>
                <span className="text-2xl font-extrabold text-gold">{formatCurrency(totalAmount)}</span>
              </div>
              <div className="text-[11px] text-white/40 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Money-back guarantee until activation</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order All via WhatsApp</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-white/40 hover:text-white py-1 transition-colors"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
