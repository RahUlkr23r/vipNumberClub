import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

/* =========================================
   Constants
   ========================================= */

const CDN = 'https://www.vipnumbersclub.com';
const IMG = (path: string) => `${CDN}/assets/front/img/${path}`;
const UPLOAD = (path: string) => `${CDN}/uploads/settings/${path}`;

/* =========================================
   Toast (inline, replaces alert())
   ========================================= */

function useToast(duration = 2200) {
  const [message, setMessage] = useState<string | null>(null);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    const id = setTimeout(() => setMessage(null), duration);
    return () => clearTimeout(id);
  }, [duration]);

  useEffect(() => {
    if (!message) return;
    const id = setTimeout(() => setMessage(null), duration);
    return () => clearTimeout(id);
  }, [message, duration]);

  return { message, show };
}

const Toast = ({ message }: { message: string | null }) => {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-24 left-1/2 -translate-x-1/2 z-[2000] px-5 py-3 rounded-full bg-[#ECAE01] text-black text-sm font-bold shadow-2xl animate-[fadeSlideIn_0.3s_ease-out]"
    >
      ✓ {message}
    </div>
  );
};

/* =========================================
   Top bar items (data)
   ========================================= */

type VipcatItem = {
  id: string;
  icon: string;
  label: string;
  highlight: string;
  to?: string;
  onClick?: 'lowest' | 'share';
};

const vipcatItems: VipcatItem[] = [
  { id: 'lowest',   icon: 'head-top-ic1.svg', label: 'Lowest Price', highlight: 'Challenge',      onClick: 'lowest' },
  { id: 'delivery', icon: 'head-top-ic2.svg', label: 'Home',         highlight: 'Delivery',       to: '/home-delivery' },
  { id: 'prepost',  icon: 'head-top-ic3.svg', label: 'Pre/Post',     highlight: 'Info',           to: '/prepaid-postpaid' },
  { id: 'process',  icon: 'head-top-ic4.svg', label: 'Activation',   highlight: 'Process',        to: '/process' },
  { id: 'share',    icon: 'head-top-ic5.svg', label: 'Share',        highlight: 'Website Link',   onClick: 'share' },
  { id: 'home',     icon: 'head-top-ic6.svg', label: 'Add to',       highlight: 'Home Screen',    to: '/search-results' },
  { id: 'all',      icon: 'head-top-ic7.svg', label: 'All',          highlight: 'Categories',     to: '/search-results' },
];

/* =========================================
   Header action buttons (data)
   ========================================= */

type HeaderAction = {
  id: string;
  icon: string;
  title: string;
  to?: string;
  onClick?: 'lowest' | 'wishlist' | 'cart';
  badge?: number;
  hideOnTablet?: boolean;
};

/* =========================================
   Component
   ========================================= */

export const Header: React.FC = () => {
  const {
    cart,
    favorites,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsLowestPriceModalOpen,
    setIsSideDashboardOpen,
  } = useApp();

  const location = useLocation();
  const { message, show } = useToast();

  /* ---- Handle share ---- */
  const handleShare = useCallback(async () => {
    const url = window.location.origin;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'VIP Numbers Club', url });
        show('Link shared!');
      } else {
        await navigator.clipboard.writeText(url);
        show('Link copied to clipboard');
      }
    } catch {
      show('Could not share link');
    }
  }, [show]);

  /* ---- Handler map for clicks ---- */
  const handleClick = (action?: 'lowest' | 'wishlist' | 'cart' | 'share') => {
    switch (action) {
      case 'lowest':  setIsLowestPriceModalOpen(true); break;
      case 'wishlist': setIsWishlistOpen(true); break;
      case 'cart':    setIsCartOpen(true); break;
      case 'share':   handleShare(); break;
    }
  };

  /* ---- Build header actions from state ---- */
  const headerActions: HeaderAction[] = [
    { id: 'lowest',   icon: 'menu-click-ic.svg',    title: 'Lowest Price',      onClick: 'lowest',   hideOnTablet: true },
    { id: 'numerology', icon: 'menu-astrology-ic.svg', title: 'Numerology Search', to: '/numerology-search', hideOnTablet: true },
    { id: 'wishlist', icon: 'menu-fav-ic.svg',      title: 'Favorites',         onClick: 'wishlist', badge: favorites.length, hideOnTablet: true },
    { id: 'process',  icon: 'menu-video-ic.svg',    title: 'Activation Process', to: '/process',      hideOnTablet: true },
    { id: 'search',   icon: 'menu-search-ic.svg',   title: 'Search Numbers',    to: '/search-results' },
    { id: 'cart',     icon: 'cart-search-ic.svg',   title: 'Cart',              onClick: 'cart',     badge: cart.length },
    { id: 'profile',  icon: 'profile-search-ic.svg', title: 'Profile & Support', to: '/contact-us' },
  ];

  return (
    <>
      {/* ========== 1. TOP VIPCAT BAR ========== */}
      <section className="vipcat">
        <div className="container">
          <div className="vipcat-in">
            {vipcatItems.map((item) => {
              const inner = (
                <>
                  <div className="vipcat-itm-ic">
                    <img src={IMG(item.icon)} alt="" aria-hidden="true" loading="lazy" />
                  </div>
                  <div className="vipcat-itm-nm">
                    {item.label} <span>{item.highlight}</span>
                  </div>
                </>
              );

              if (item.to) {
                return (
                  <div key={item.id} className="item">
                    <Link to={item.to} className="vipcat-itm">
                      {inner}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={item.id} className="item">
                  <button
                    type="button"
                    onClick={() =>
                      item.onClick === 'share'
                        ? handleShare()
                        : setIsLowestPriceModalOpen(true)
                    }
                    className="vipcat-itm border-0 bg-transparent text-white"
                    aria-label={`${item.label} ${item.highlight}`}
                  >
                    {inner}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 2. MAIN HEADER ========== */}
      <section className="header-sec sticky-top" style={{ zIndex: 1020 }}>
        <div className="container">
          <div className="header-sec-in d-flex align-items-center justify-content-between gap-3">
            {/* Left: Hamburger + Brand */}
            <div className="header-l d-flex align-items-center">
              <button
                type="button"
                onClick={() => setIsSideDashboardOpen(true)}
                className="header-l-menuic bg-transparent border-0 p-0 me-3 cursor-pointer"
                aria-label="Open navigation menu"
                title="Menu"
              >
                <img src={IMG('menu-ic.svg')} alt="" aria-hidden="true" />
              </button>

              <Link
                to="/"
                className="header-l-logo d-flex align-items-center text-decoration-none"
                aria-label="VIP Numbers Club — Home"
              >
                <img
                  src={UPLOAD('Ic5BHdi9XfWg71O19MdZ.png')}
                  alt="VIP Numbers Club"
                  className="brand-logo-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="brand-info ms-2 d-none d-sm-block">
                  <span className="brand-name">VIP Numbers club</span>
                  <span className="brand-tagline">India&apos;s Biggest VIP Number Provider</span>
                </div>
              </Link>
            </div>

            {/* Right: Quick actions */}
            <div className="header-r d-flex align-items-center gap-2 sm:gap-3">
              {headerActions.map((action) => {
                const content = (
                  <>
                    <img
                      src={IMG(action.icon)}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                    {action.badge !== undefined && action.badge > 0 && (
                      <span
                        className="cart-count"
                        aria-label={`${action.badge} items`}
                      >
                        {action.badge > 99 ? '99+' : action.badge}
                      </span>
                    )}
                  </>
                );

                const baseClass = [
                  'header-r-itm text-decoration-none position-relative',
                  action.hideOnTablet ? 'menu-hide-itm' : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                const isActive = action.to && location.pathname === action.to;

                if (action.to) {
                  return (
                    <Link
                      key={action.id}
                      to={action.to}
                      className={`${baseClass} ${isActive ? 'is-active' : ''}`}
                      title={action.title}
                      aria-label={action.title}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => handleClick(action.onClick)}
                    className={`${baseClass} border-0 bg-transparent p-0`}
                    title={action.title}
                    aria-label={action.title}
                  >
                    {content}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. TOAST ========== */}
      <Toast message={message} />
    </>
  );
};