import React from 'react';
import { useApp } from '../context/AppContext';
import { VIP_NUMBERS } from '../data/numbers';
import { Heart, ShoppingCart, Zap, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistDrawer: React.FC = () => {
  const { favorites, isWishlistOpen, setIsWishlistOpen, toggleFavorite, addToCart, openBookingModal } = useApp();

  if (!isWishlistOpen) return null;

  const favoriteNumbers = VIP_NUMBERS.filter(num => favorites.includes(num.id));

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
      <div
        style={{ position: 'absolute', inset: 0 }}
        onClick={() => setIsWishlistOpen(false)}
      />

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
            <Heart style={{ width: '20px', height: '20px', color: '#ff4444', fill: '#ff4444' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
              Your Wishlist
            </h3>
            <span
              style={{
                background: 'rgba(255, 68, 68, 0.15)',
                color: '#ff4444',
                borderRadius: '50px',
                padding: '2px 10px',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid rgba(255, 68, 68, 0.3)'
              }}
            >
              {favorites.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Close wishlist"
          >
            <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" style={{ width: '16px', height: '16px' }} />
          </button>
        </div>

        {/* Content */}
        {favoriteNumbers.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', textAlign: 'center', gap: '15px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
              <Heart style={{ width: '32px', height: '32px' }} />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>No favorites saved yet</h4>
              <p style={{ color: '#777', fontSize: '13px', maxWidth: '280px', margin: '0 auto' }}>
                Click the heart icon on any VIP number card to save it here for easy comparison.
              </p>
            </div>
            <Link
              to="/search-results"
              onClick={() => setIsWishlistOpen(false)}
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
              <span>Explore Numbers</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {favoriteNumbers.map(number => (
              <div
                key={number.id}
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: '#111',
                  border: '1px solid #333',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: '17px', fontWeight: 800, color: '#fff' }}>
                      {number.displayNumber}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <span style={{ color: '#ECAE01', fontWeight: 800, fontSize: '14px' }}>{number.price}</span>
                      <span style={{ color: '#666', textDecoration: 'line-through', fontSize: '12px' }}>{number.originalPrice}</span>
                      <span style={{ fontSize: '11px', color: '#888', background: '#1a1a1a', padding: '2px 6px', borderRadius: '4px' }}>
                        Sum: {number.sum} | Tot: {number.total}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(number.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#666',
                      padding: '4px'
                    }}
                    title="Remove from favorites"
                  >
                    <Trash2 style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '10px', borderTop: '1px solid #222' }}>
                  <button
                    onClick={() => {
                      addToCart(number);
                      setIsWishlistOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      borderRadius: '8px',
                      background: '#1a1a1a',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: '1px solid #333',
                      cursor: 'pointer'
                    }}
                  >
                    <ShoppingCart style={{ width: '14px', height: '14px', color: '#ECAE01' }} />
                    <span>Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      openBookingModal(number);
                      setIsWishlistOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      borderRadius: '8px',
                      background: '#ECAE01',
                      color: '#000',
                      fontSize: '12px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <Zap style={{ width: '14px', height: '14px', fill: '#000' }} />
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
