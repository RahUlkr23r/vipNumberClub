import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';

export const FloatingActions: React.FC = () => {
  const { cart, setIsCartOpen, setIsWishlistOpen, setIsLowestPriceModalOpen } = useApp();

  const [currentSoldIndex, setCurrentSoldIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSoldIndex(prev => (prev + 1) % SITE_INFO.soldOutTickerNumbers.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const soldNumber = SITE_INFO.soldOutTickerNumbers[currentSoldIndex];

  return (
    <>
      {/* 1. FIXED FLOATING CONTACTS ON RIGHT (WhatsApp & Support with swing animation) */}
      <div className="contcat-fixed">
        <div className="contcat-fixed-itm">
          <a
            href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I would like to chat about VIP numbers.')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
          >
            <img src="https://www.vipnumbersclub.com/assets/front/img/whatsapp-ic.svg" alt="WhatsApp" />
          </a>
        </div>

        <div className="contcat-fixed-itm">
          <Link to="/contact-us" title="Contact Support">
            <img src="https://www.vipnumbersclub.com/assets/front/img/support-ic.svg" alt="Support" />
          </Link>
        </div>
      </div>

      {/* 2. SOLD OUT TICKER POPUP */}
      <div className="sold-out-btn d-flex align-items-center" id="soldOut">
        <div className="sold-out-bg position-relative">
          <img src="https://www.vipnumbersclub.com/assets/front/img/sold-bg.svg" alt="Sold out badge" />
        </div>
        <div className="sold-out-con">
          <div className="sold-out-number font-mono">{soldNumber}</div>
          <p className="mb-0">has sold out</p>
        </div>
      </div>

      {/* 3. ORIGINAL FLOATING BOTTOM MENU BAR (.menu-bar) */}
      <section className="menu-bar">
        <div className="container">
          <div className="menubar-in">
            <div className="menu-itms d-flex justify-content-around align-items-center">
              {/* Click */}
              <div className="menu-itm text-center">
                <button
                  type="button"
                  onClick={() => setIsLowestPriceModalOpen(true)}
                  className="bg-transparent border-0 text-white text-decoration-none p-0 d-flex flex-column align-items-center"
                >
                  <div className="menu-itm-ic mb-1">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic1.svg" alt="Click" />
                  </div>
                  <span className="text-uppercase text-xs" style={{ fontSize: '11px', color: '#fff' }}>Click</span>
                </button>
              </div>

              {/* Cart */}
              <div className="menu-itm text-center">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="bg-transparent border-0 text-white text-decoration-none p-0 d-flex flex-column align-items-center position-relative"
                >
                  <div className="menu-itm-ic mb-1 position-relative">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic2.svg" alt="Cart" />
                    <span className="cart-count">{cart.length}</span>
                  </div>
                  <span className="text-uppercase text-xs" style={{ fontSize: '11px', color: '#fff' }}>CART</span>
                </button>
              </div>

              {/* Numerology */}
              <div className="menu-itm text-center">
                <Link
                  to="/numerology-search"
                  className="text-white text-decoration-none d-flex flex-column align-items-center"
                >
                  <div className="menu-itm-ic mb-1">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic3.svg" alt="Numerology" />
                  </div>
                  <span className="text-uppercase text-xs" style={{ fontSize: '11px', color: '#fff' }}>numerology</span>
                </Link>
              </div>

              {/* Favourite */}
              <div className="menu-itm text-center">
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(true)}
                  className="bg-transparent border-0 text-white text-decoration-none p-0 d-flex flex-column align-items-center"
                >
                  <div className="menu-itm-ic mb-1">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic4.svg" alt="Favourite" />
                  </div>
                  <span className="text-uppercase text-xs" style={{ fontSize: '11px', color: '#fff' }}>favourite</span>
                </button>
              </div>

              {/* Process */}
              <div className="menu-itm text-center">
                <Link
                  to="/process"
                  className="text-white text-decoration-none d-flex flex-column align-items-center"
                >
                  <div className="menu-itm-ic mb-1">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/menu-ic5.svg" alt="Process" />
                  </div>
                  <span className="text-uppercase text-xs" style={{ fontSize: '11px', color: '#fff' }}>Process</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
