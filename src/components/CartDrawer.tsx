import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { Trash2, ShoppingCart, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }}
    >
      {/* Click outside backdrop */}
      <div
        style={{ position: 'absolute', inset: 0 }}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          background: '#090808',
          borderLeft: '1px solid #404040',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.8)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid #222'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingCart style={{ width: '20px', height: '20px', color: '#ECAE01' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
              Your Number Cart
            </h3>
            <span
              style={{
                background: 'rgba(236, 174, 1, 0.15)',
                color: '#ECAE01',
                borderRadius: '50px',
                padding: '2px 10px',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid rgba(236, 174, 1, 0.3)'
              }}
            >
              {cart.length}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Close cart"
          >
            <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" style={{ width: '16px', height: '16px' }} />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', textAlign: 'center', gap: '15px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
              <ShoppingCart style={{ width: '32px', height: '32px' }} />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Your cart is empty</h4>
              <p style={{ color: '#777', fontSize: '13px', maxWidth: '280px', margin: '0 auto' }}>
                Explore our catalog of exclusive VIP mobile numbers and add your favorite numbers.
              </p>
            </div>
            <Link
              to="/search-results"
              onClick={() => setIsCartOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '80px',
                background: '#ECAE01',
                color: '#000',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
                marginTop: '10px'
              }}
            >
              <span>Browse Numbers</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cart.map(item => (
              <div
                key={item.number.id}
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: '#111',
                  border: '1px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '17px', fontWeight: 800, color: '#fff' }}>
                    {item.number.displayNumber}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                    <span style={{ color: '#ECAE01', fontWeight: 800 }}>{item.number.price}</span>
                    <span style={{ color: '#666', textDecoration: 'line-through', fontSize: '12px' }}>{item.number.originalPrice}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#888' }}>
                    <span style={{ textTransform: 'uppercase', fontWeight: 600 }}>{item.simType}</span>
                    <span>•</span>
                    <span style={{ textTransform: 'uppercase', fontWeight: 600 }}>{item.network}</span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.number.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '8px'
                  }}
                  title="Remove from cart"
                >
                  <Trash2 style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer with Total and WhatsApp Checkout */}
        {cart.length > 0 && (
          <div style={{ padding: '20px', borderTop: '1px solid #222', background: '#090808', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#888' }}>
                <span>Total Items:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{cart.length} Numbers</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Estimated Total:</span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#ECAE01' }}>{formatCurrency(totalAmount)}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <ShieldCheck style={{ width: '14px', height: '14px', color: '#10b981' }} />
                <span>100% Money-back guarantee until activation</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={handleWhatsAppCheckout}
                style={{
                  width: '100%',
                  background: '#25D366',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle style={{ width: '20px', height: '20px', fill: '#fff' }} />
                <span>Order All via WhatsApp</span>
              </button>

              <button
                onClick={clearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  fontSize: '12px',
                  cursor: 'pointer',
                  padding: '6px'
                }}
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
