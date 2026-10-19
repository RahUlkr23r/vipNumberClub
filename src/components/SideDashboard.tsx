import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';

export const SideDashboard: React.FC = () => {
  const {
    isSideDashboardOpen,
    setIsSideDashboardOpen,
    cart
  } = useApp();

  const location = useLocation();

  // Lock body scroll and handle Escape key when drawer is open
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

  const closeDrawer = () => {
    setIsSideDashboardOpen(false);
  };

  const menuItems = [
    {
      title: 'Super High Discounted Deals',
      path: '/super-high-discounted-sales',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/super-high.svg',
      isIconEff: true,
      badge: 'HOT 🔥'
    },
    {
      title: 'My Account',
      path: '/login',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic1.svg',
      isIconEff: false
    },
    {
      title: 'Reseller Panel',
      path: '/reseller-panel',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/reseller.svg',
      isIconEff: true,
      badge: 'B2B'
    },
    {
      title: 'Clientele',
      path: '/clientele',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic2.svg',
      isIconEff: false
    },
    {
      title: 'Pre Booking',
      path: '/pre-booking',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic3.svg',
      isIconEff: false,
      badge: 'VVIP'
    },
    {
      title: 'High Discount - Advance Booking Lot',
      path: '/high-discount-pre-booking-lot',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/high-discount.svg',
      isIconEff: true,
      badge: 'SPECIAL'
    },
    {
      title: 'Home Delivery',
      path: '/home-delivery',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic4.svg',
      isIconEff: false,
      badge: 'COD'
    },
    {
      title: 'Press News Articles',
      path: '/press-news-article',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic5.svg',
      isIconEff: false
    },
    {
      title: 'Process',
      path: '/process',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic6.svg',
      isIconEff: false
    },
    {
      title: 'Social Media',
      path: '/social-media',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic7.svg',
      isIconEff: false
    },
    {
      title: 'VIP NOTE GIFT SET',
      path: '/search-results?category=family-pack',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic7.svg',
      isIconEff: false,
      badge: 'PACK'
    },
    {
      title: 'Services',
      path: '/services',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic8.svg',
      isIconEff: false
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic9.svg',
      isIconEff: false
    },
    {
      title: 'About Us',
      path: '/about-us',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic10.svg',
      isIconEff: false
    },
    {
      title: 'Refund Policy',
      path: '/page/refund-policy',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic11.svg',
      isIconEff: false
    },
    {
      title: 'Genral Doubts',
      path: '/general-doubts',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/m_ic12.svg',
      isIconEff: false,
      badge: '33 FAQs'
    },
    {
      title: 'Cart Items',
      path: '/cart',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/cart-search-ic.svg',
      isIconEff: false,
      countBadge: cart.length
    }
  ];

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        onClick={closeDrawer}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 2998,
          opacity: isSideDashboardOpen ? 1 : 0,
          pointerEvents: isSideDashboardOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-in-out'
        }}
        aria-hidden="true"
      />

      {/* 2. Side Drawer (Matching original .mobile-menu & .menu-inner classes) */}
      <aside
        className={`mobile-menu ${isSideDashboardOpen ? 'active-menu' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: isSideDashboardOpen ? '0' : '-100%',
          width: '100%',
          maxWidth: '480px',
          backgroundColor: '#000000',
          borderRight: '1px solid rgba(236, 174, 1, 0.25)',
          boxShadow: isSideDashboardOpen ? '15px 0 50px rgba(0, 0, 0, 0.95), 0 0 30px rgba(236, 174, 1, 0.15)' : 'none',
          zIndex: 2999,
          height: '100vh',
          overflowY: 'auto',
          transition: 'left 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column'
        }}
        role="dialog"
        aria-modal="true"
        aria-label="VIP Numbers Club Side Navigation"
      >
        <div className="menu-inner" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          {/* Header of Drawer */}
          <div className="menu-header">
            <div className="login-btn-wrap">
              <div className="user-ic">
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/avatar.svg"
                  alt="User Icon"
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              </div>
              <Link
                to="/login"
                onClick={closeDrawer}
                className="btn btn_primary text-decoration-none"
              >
                Login Account{' '}
                <span className="arrow-ic">
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg"
                    alt="arrow icon"
                  />
                </span>
              </Link>
            </div>

            <div className="close-wrap">
              <button
                type="button"
                onClick={closeDrawer}
                className="close-btn cursor-pointer"
                aria-label="Close menu"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/close.svg"
                  alt="Close Icon"
                  style={{ width: '18px', height: '18px' }}
                />
              </button>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="menu-list" style={{ flex: 1, padding: '10px 0' }}>
            <ul>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path || (item.path.includes('?') && location.pathname + location.search === item.path);
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={closeDrawer}
                      className="text-decoration-none"
                      style={{
                        backgroundColor: isActive ? 'rgba(236, 174, 1, 0.08)' : 'transparent',
                        borderRadius: '8px',
                        padding: '12px 10px',
                        transition: 'background 0.2s ease, transform 0.15s ease'
                      }}
                    >
                      <span className={`m-icon ${item.isIconEff ? 'icon-eff' : ''}`}>
                        <img
                          src={item.icon}
                          alt=""
                          style={{
                            width: '20px',
                            height: '20px',
                            objectFit: 'contain'
                          }}
                        />
                      </span>

                      <span
                        style={{
                          flex: 1,
                          color: isActive ? '#ECAE01' : '#FFFFFF',
                          fontSize: '15px',
                          fontWeight: isActive ? 700 : 500
                        }}
                      >
                        {item.title}
                      </span>

                      {item.badge && (
                        <span
                          style={{
                            background: item.badge.includes('HOT')
                              ? '#EF4444'
                              : 'rgba(236, 174, 1, 0.15)',
                            color: item.badge.includes('HOT') ? '#FFFFFF' : '#ECAE01',
                            fontSize: '10px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {item.badge}
                        </span>
                      )}

                      {typeof item.countBadge === 'number' && (
                        <span
                          style={{
                            background: '#ECAE01',
                            color: '#000000',
                            fontSize: '11px',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: '12px'
                          }}
                        >
                          {item.countBadge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Drawer Footer with Official WhatsApp Concierge Support */}
          <div className="menu-footer" style={{ padding: '20px 24px', flexDirection: 'column', gap: '12px' }}>
            <a
              href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I am browsing VIP Numbers Club and would like personalized assistance selecting a VIP number.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn_primary w-100 text-decoration-none"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              <img
                src="https://www.vipnumbersclub.com/assets/front/img/contact-whatsapp-ic.svg"
                alt="WhatsApp"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Chat With Ranvijay</span>
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#777777',
                paddingTop: '6px'
              }}
            >
              <span>GSTIN: <strong style={{ color: '#AAAAAA' }}>{SITE_INFO.gstNumber}</strong></span>
              <span>Jaipur HQ Verified</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
