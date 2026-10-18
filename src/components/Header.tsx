import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, favorites, setIsCartOpen, setIsWishlistOpen, setIsLowestPriceModalOpen, setIsLuckyCalcModalOpen } = useApp();
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="header-l-menuic bg-transparent border-0 p-0 me-3 cursor-pointer"
                aria-label="Toggle menu"
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

        {/* 3. MOBILE MENU SLIDE-OUT DRAWER */}
        {isMobileMenuOpen && (
          <div className="mobile-menu d-block position-fixed top-0 start-0 w-100 h-100 bg-dark-pure" style={{ zIndex: 2000, overflowY: 'auto' }}>
            <div className="menu-inner p-4" style={{ maxWidth: '400px' }}>
              <div className="menu-header d-flex align-items-center justify-content-between pb-3 border-bottom border-secondary mb-4">
                <div className="login-btn-wrap d-flex align-items-center gap-2">
                  <div className="user-ic">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/avatar.svg" alt="User Icon" />
                  </div>
                  <a
                    href="https://wa.me/9111117777?text=Hello%20VIP%20Numbers%20Club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn_primary btn-sm d-inline-flex align-items-center gap-2"
                  >
                    <span>Login / Chat</span>
                    <span className="arrow-ic">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg" alt="arrow" />
                    </span>
                  </a>
                </div>

                <div className="close-wrap">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="close-btn border-0 bg-transparent p-1"
                    aria-label="Close menu"
                  >
                    <img src="https://www.vipnumbersclub.com/assets/front/img/close.svg" alt="Close" />
                  </button>
                </div>
              </div>

              <div className="menu-list">
                <ul className="list-unstyled space-y-2">
                  <li className="mb-2">
                    <Link
                      to="/search-results?category=super-sale-zone"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon icon-eff"><img src="https://www.vipnumbersclub.com/assets/front/img/super-high.svg" alt="" /></span>
                      <span>Super High Discounted Deals</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/contact-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic1.svg" alt="" /></span>
                      <span>My Account / Support</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon icon-eff"><img src="https://www.vipnumbersclub.com/assets/front/img/reseller.svg" alt="" /></span>
                      <span>Reseller Panel & Bulk</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/clientele"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic2.svg" alt="" /></span>
                      <span>Clientele</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/search-results"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic3.svg" alt="" /></span>
                      <span>Pre Booking</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/home-delivery"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic4.svg" alt="" /></span>
                      <span>Home Delivery (COD)</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/process"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic6.svg" alt="" /></span>
                      <span>Activation Process</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic8.svg" alt="" /></span>
                      <span>Services</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/contact-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic9.svg" alt="" /></span>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/about-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic10.svg" alt="" /></span>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/refund-policy"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic11.svg" alt="" /></span>
                      <span>Refund Policy</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/general-doubts"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="d-flex align-items-center gap-3 text-white text-decoration-none py-2"
                    >
                      <span className="m-icon"><img src="https://www.vipnumbersclub.com/assets/front/img/m_ic12.svg" alt="" /></span>
                      <span>General Doubts (FAQ)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
