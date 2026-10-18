import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import {
  Search,
  ShoppingCart,
  Heart,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Building,
  Award,
  BadgePercent
} from 'lucide-react';

export const SideDashboard: React.FC = () => {
  const {
    isSideDashboardOpen,
    setIsSideDashboardOpen,
    cart,
    favorites,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsLowestPriceModalOpen,
    setIsLuckyCalcModalOpen
  } = useApp();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll and handle Escape key when open
  useEffect(() => {
    if (isSideDashboardOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsSideDashboardOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isSideDashboardOpen, setIsSideDashboardOpen]);

  // Handle in-dashboard quick number search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSideDashboardOpen(false);
      navigate(`/search-results?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const closeAndNavigate = (path: string) => {
    setIsSideDashboardOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        onClick={() => setIsSideDashboardOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          zIndex: 2998,
          opacity: isSideDashboardOpen ? 1 : 0,
          pointerEvents: isSideDashboardOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-in-out'
        }}
        aria-hidden="true"
      />

      {/* 2. Side Dashboard Drawer */}
      <aside
        className="side-dashboard-drawer"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#090808',
          borderRight: '1px solid rgba(236, 174, 1, 0.25)',
          boxShadow: '15px 0 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(236, 174, 1, 0.1)',
          zIndex: 2999,
          transform: isSideDashboardOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        role="dialog"
        aria-modal="true"
        aria-label="VIP Numbers Club Side Dashboard"
      >
        {/* TOP VIP HEADER */}
        <div
          className="side-dashboard-header"
          style={{
            padding: '20px 24px',
            backgroundColor: '#0F0F0F',
            borderBottom: '1px solid #222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px',
            flexShrink: 0
          }}
        >
          {/* User profile & VIP status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                position: 'relative',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#1A1A1A',
                border: '2px solid #ECAE01',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(236, 174, 1, 0.3)',
                flexShrink: 0
              }}
            >
              <img
                src="https://www.vipnumbersclub.com/assets/front/img/avatar.svg"
                alt="VIP User"
                style={{ width: '28px', height: '28px' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#10B981',
                  borderRadius: '50%',
                  border: '2px solid #0F0F0F'
                }}
                title="Online Concierge Active"
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>
                  VIP Numbers Club
                </span>
                <CheckCircle2 style={{ width: '15px', height: '15px', color: '#ECAE01' }} />
              </div>
              <div style={{ color: '#10B981', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                24*7 Day & Night Support
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsSideDashboardOpen(false)}
            aria-label="Close dashboard"
            style={{
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ECAE01';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/close.svg"
              alt="Close"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
        </div>

        {/* SCROLLABLE DASHBOARD BODY */}
        <div
          className="side-dashboard-scroll"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 24px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#404040 #0F0F0F'
          }}
        >
          {/* Quick Search Box */}
          <form onSubmit={handleSearchSubmit} style={{ marginBottom: '20px' }}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: '#121212',
                border: '1px solid #333',
                borderRadius: '30px',
                padding: '4px 6px 4px 16px',
                transition: 'border-color 0.2s',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              <Search style={{ width: '16px', height: '16px', color: '#ECAE01', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search VIP numbers (e.g. 786, 0000)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '13px',
                  padding: '8px 10px'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                  border: 'none',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  textTransform: 'uppercase'
                }}
              >
                Go
              </button>
            </div>
          </form>

          {/* QUICK DASHBOARD METRIC TILES */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginBottom: '24px'
            }}
          >
            {/* Cart Tile */}
            <button
              type="button"
              onClick={() => {
                setIsSideDashboardOpen(false);
                setIsCartOpen(true);
              }}
              style={{
                background: 'linear-gradient(145deg, #141312 0%, #0F0F0F 100%)',
                border: '1px solid #2B2824',
                borderRadius: '14px',
                padding: '14px 12px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ECAE01')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2B2824')}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(236, 174, 1, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ECAE01',
                  position: 'relative'
                }}
              >
                <ShoppingCart style={{ width: '18px', height: '18px' }} />
                {cart.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      background: '#ECAE01',
                      color: '#000',
                      fontSize: '10px',
                      fontWeight: 800,
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </div>
              <div>
                <div style={{ color: '#aaa', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  My Cart
                </div>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                  {cart.length} {cart.length === 1 ? 'Number' : 'Numbers'}
                </div>
              </div>
            </button>

            {/* Wishlist Tile */}
            <button
              type="button"
              onClick={() => {
                setIsSideDashboardOpen(false);
                setIsWishlistOpen(true);
              }}
              style={{
                background: 'linear-gradient(145deg, #141312 0%, #0F0F0F 100%)',
                border: '1px solid #2B2824',
                borderRadius: '14px',
                padding: '14px 12px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ECAE01')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2B2824')}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  position: 'relative'
                }}
              >
                <Heart style={{ width: '18px', height: '18px' }} />
                {favorites.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      background: '#EF4444',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 800,
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {favorites.length}
                  </span>
                )}
              </div>
              <div>
                <div style={{ color: '#aaa', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Saved
                </div>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                  {favorites.length} {favorites.length === 1 ? 'Favorite' : 'Favorites'}
                </div>
              </div>
            </button>

            {/* Lucky Number Tile */}
            <button
              type="button"
              onClick={() => {
                setIsSideDashboardOpen(false);
                setIsLuckyCalcModalOpen(true);
              }}
              style={{
                background: 'linear-gradient(145deg, #141312 0%, #0F0F0F 100%)',
                border: '1px solid #2B2824',
                borderRadius: '14px',
                padding: '14px 12px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ECAE01')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2B2824')}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(236, 174, 1, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ECAE01'
                }}
              >
                <Sparkles style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <div style={{ color: '#aaa', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Auspicious
                </div>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                  Lucky Calc ✨
                </div>
              </div>
            </button>

            {/* Best Price Challenge Tile */}
            <button
              type="button"
              onClick={() => {
                setIsSideDashboardOpen(false);
                setIsLowestPriceModalOpen(true);
              }}
              style={{
                background: 'linear-gradient(145deg, #141312 0%, #0F0F0F 100%)',
                border: '1px solid #2B2824',
                borderRadius: '14px',
                padding: '14px 12px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ECAE01')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2B2824')}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981'
                }}
              >
                <BadgePercent style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <div style={{ color: '#aaa', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Guarantee
                </div>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                  Lowest Price
                </div>
              </div>
            </button>
          </div>

          {/* SECTION 1: EXCLUSIVE DEALS & NUMBER LOTS */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#ECAE01',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Featured Collections</span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(236,174,1,0.2)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Super High Discounted Deals */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/search-results?category=super-sale-zone')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon icon-eff" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/super-high.svg" alt="" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Super High Discounted Deals</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Instant savings on luxury numbers</div>
                  </div>
                </div>
                <span
                  style={{
                    background: '#EF4444',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '10px',
                    textTransform: 'uppercase'
                  }}
                >
                  HOT 🔥
                </span>
              </button>

              {/* High Discount - Advance Booking Lot */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/search-results?category=budget-friendly')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon icon-eff" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/high-discount.svg" alt="" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Advance Booking Lot</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>High discount bulk booking</div>
                  </div>
                </div>
                <span
                  style={{
                    background: 'rgba(236,174,1,0.2)',
                    color: '#ECAE01',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}
                >
                  SPECIAL
                </span>
              </button>

              {/* Pre Booking */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/search-results?category=vvip-high-end')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic3.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Pre Booking (VVIP High End)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Exclusive 88888, 99999 series</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* VIP Note Gift Set */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/search-results?category=family-corporate-pack')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic7.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>VIP Note Gift Set & Family Packs</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Packs of 2 to 9 matching numbers</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>
            </div>
          </div>

          {/* SECTION 2: SERVICES & CUSTOMER TOOLS */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#ECAE01',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Services & Operations</span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(236,174,1,0.2)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Reseller Panel */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/services')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon icon-eff" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/reseller.svg" alt="" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Reseller Panel & Bulk Orders</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Wholesale pricing for distributors</div>
                  </div>
                </div>
                <span
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10B981',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}
                >
                  B2B
                </span>
              </button>

              {/* Home Delivery */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/home-delivery')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic4.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Home Delivery (Cash on Delivery)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Available in 18 Indian cities</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* Activation & MNP Process */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/process')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic6.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Activation Process (Video Guides)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Hindi & English step-by-step videos</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* Clientele */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/clientele')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic2.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Corporate & Celebrity Clientele</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Flipkart, Quess Corp & elite buyers</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* Prepaid / Postpaid Info */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/prepaid-postpaid')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic3.svg" alt="" style={{ width: '18px', height: '18px' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Prepaid vs Postpaid Guide</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Network porting and billing answers</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>
            </div>
          </div>

          {/* SECTION 3: TRUST, COMPLIANCE & LEGAL */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#ECAE01',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Trust & Company</span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(236,174,1,0.2)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* General Doubts FAQ */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/general-doubts')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic12.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>General Doubts (33 Real FAQs)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Complete buyer question directory</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* 100% Refund Policy */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/refund-policy')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic11.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>100% Refund Guarantee Policy</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Full refund before UPC generation</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* About Us */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/about-us')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic10.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>About Us (16-Year Legacy)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Jaipur HQ & 70-expert institution</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => closeAndNavigate('/contact-us')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#151515')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="m-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/m_ic9.svg" alt="" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Contact Ranvijay (Helpline)</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>+91 9111117777 • 24*7 Day & Night</div>
                  </div>
                </div>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#666' }} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM VIP CONCIERGE CALLOUT & CREDENTIALS */}
        <div
          className="side-dashboard-footer"
          style={{
            padding: '18px 24px',
            backgroundColor: '#0F0F0F',
            borderTop: '1px solid #222',
            flexShrink: 0
          }}
        >
          {/* Direct WhatsApp Concierge CTA */}
          <a
            href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I am browsing VIP Numbers Club and would like personalized assistance selecting a number.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
              color: '#000',
              fontWeight: 800,
              fontSize: '13px',
              padding: '12px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(236, 174, 1, 0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/contact-whatsapp-ic.svg"
              alt="WhatsApp"
              style={{ width: '20px', height: '20px' }}
            />
            <span>Chat With Ranvijay</span>
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg"
              alt="Arrow"
              style={{ width: '14px', height: '14px' }}
            />
          </a>

          {/* Official Verification Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '14px',
              fontSize: '11px',
              color: '#777'
            }}
          >
            <span>GSTIN: <strong style={{ color: '#aaa' }}>{SITE_INFO.gstNumber}</strong></span>
            <span>Jaipur HQ Verified</span>
          </div>
        </div>
      </aside>
    </>
  );
};
