import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const {
    cart,
    favorites,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsLowestPriceModalOpen,
    setIsSideDashboardOpen
  } = useApp();
  const location = useLocation();

  return (
    <>
      {/* 1. TOP VIPCAT SECTION (Horizontal bar with icons) */}
      <section className="vipcat">
        <div className="container">
          <div className="vipcat-in">
            <div className="item">
              <button
                type="button"
                onClick={() => setIsLowestPriceModalOpen(true)}
                className="vipcat-itm border-0 bg-transparent text-white"
              >
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic1.svg" alt="Lowest Price" />
                </div>
                <div className="vipcat-itm-nm">Lowest Price <span>Challange</span></div>
              </button>
            </div>

            <div className="item">
              <Link to="/home-delivery" className="vipcat-itm">
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic2.svg" alt="Home Delivery" />
                </div>
                <div className="vipcat-itm-nm">Home <span>Delivery</span></div>
              </Link>
            </div>

            <div className="item">
              <Link to="/prepaid-postpaid" className="vipcat-itm">
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic3.svg" alt="Pre/Post" />
                </div>
                <div className="vipcat-itm-nm">PRE/POST <span>Info</span></div>
              </Link>
            </div>

            <div className="item">
              <Link to="/process" className="vipcat-itm">
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic4.svg" alt="Process" />
                </div>
                <div className="vipcat-itm-nm">Activation <span>Process</span></div>
              </Link>
            </div>

            <div className="item">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.origin);
                  alert('Website link copied to clipboard!');
                }}
                className="vipcat-itm border-0 bg-transparent text-white"
              >
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic5.svg" alt="Share" />
                </div>
                <div className="vipcat-itm-nm">Share <span>Website Link</span></div>
              </button>
            </div>

            <div className="item">
              <Link to="/search-results" className="vipcat-itm">
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic6.svg" alt="Add to Home" />
                </div>
                <div className="vipcat-itm-nm">Add to <span>Home Screen</span></div>
              </Link>
            </div>

            <div className="item">
              <Link to="/search-results" className="vipcat-itm">
                <div className="vipcat-itm-ic">
                  <img src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic7.svg" alt="All Categories" />
                </div>
                <div className="vipcat-itm-nm">All <span>Categories</span></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN HEADER SECTION (.header-sec) */}
      <section className="header-sec sticky-top" style={{ zIndex: 1020 }}>
        <div className="container">
          <div className="header-sec-in d-flex align-items-center justify-content-between">
            {/* Left: Hamburger & Brand Logo */}
            <div className="header-l d-flex align-items-center">
              <button
                type="button"
                onClick={() => setIsSideDashboardOpen(true)}
                className="header-l-menuic bg-transparent border-0 p-0 me-3 cursor-pointer"
                aria-label="Open VIP Side Dashboard"
                title="VIP Side Dashboard"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic.svg" alt="Menu" />
              </button>

              <Link to="/" className="header-l-logo d-flex align-items-center text-decoration-none">
                <img
                  src="https://www.vipnumbersclub.com/uploads/settings/Ic5BHdi9XfWg71O19MdZ.png"
                  alt="VIP Numbers club"
                  className="brand-logo-img"
                />
                <div className="brand-info ms-2">
                  <span className="brand-name">VIP Numbers club</span>
                  <span className="brand-tagline">India's Biggest VIP Number Provider</span>
                </div>
              </Link>
            </div>

            {/* Right: Quick action icons */}
            <div className="header-r d-flex align-items-center gap-3">
              {/* Click directory modal icon */}
              <button
                type="button"
                onClick={() => setIsLowestPriceModalOpen(true)}
                className="header-r-itm menu-hide-itm border-0 bg-transparent p-0"
                title="Lowest Price"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-click-ic.svg" alt="Click" />
              </button>

              {/* Numerology icon */}
              <Link
                to="/numerology-search"
                className="header-r-itm menu-hide-itm text-decoration-none"
                title="Numerology Search"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-astrology-ic.svg" alt="Numerology" />
              </Link>

              {/* Favorites icon */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="header-r-itm menu-hide-itm border-0 bg-transparent p-0 position-relative"
                title="Favorites"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-fav-ic.svg" alt="Favorites" />
                {favorites.length > 0 && (
                  <span className="cart-count">{favorites.length}</span>
                )}
              </button>

              {/* Video/Process icon */}
              <Link
                to="/process"
                className="header-r-itm menu-hide-itm text-decoration-none"
                title="Activation Process"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-video-ic.svg" alt="Process" />
              </Link>

              {/* Search icon */}
              <Link
                to="/search-results"
                className="header-r-itm text-decoration-none"
                title="Search Numbers"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/menu-search-ic.svg" alt="Search" />
              </Link>

              {/* Cart icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="header-r-itm border-0 bg-transparent p-0 position-relative"
                title="Cart"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/cart-search-ic.svg" alt="Cart" />
                <span className="cart-count">{cart.length}</span>
              </button>

              {/* Profile icon */}
              <Link
                to="/contact-us"
                className="header-r-itm text-decoration-none"
                title="Profile & Support"
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/profile-search-ic.svg" alt="Profile" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
