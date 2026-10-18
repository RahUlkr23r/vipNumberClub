import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VIP_NUMBERS } from '../data/numbers';

export const HeroSlider: React.FC = () => {
  const [activeSaleIndex, setActiveSaleIndex] = useState(0);
  const navigate = useNavigate();

  const superSaleNumbers = VIP_NUMBERS.filter(n => n.superSale).slice(0, 8);

  useEffect(() => {
    if (superSaleNumbers.length === 0) return;
    const interval = setInterval(() => {
      setActiveSaleIndex(prev => (prev + 1) % superSaleNumbers.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [superSaleNumbers.length]);

  const currentNumber = superSaleNumbers[activeSaleIndex] || superSaleNumbers[0];

  return (
    <section className="home-slider py-4">
      <div className="container">
        <div className="home-slider-in">
          <div className="row align-items-center">
            {/* Left Column: Heading, Subtitle, Search CTA */}
            <div className="col-lg-6">
              <div className="home-sld-itm text-start">
                <h1 className="text-white fw-bold" style={{ fontSize: '38px', lineHeight: '1.25' }}>
                  Buy VIP & Fancy Mobile Numbers Online in India
                </h1>
                <p className="text-muted mt-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Stand out from the crowd with exclusive, easy-to-remember, premium mobile numbers. Your identity deserves a touch of luxury.
                </p>
              </div>

              {/* Original Search Button */}
              <div className="search-btn mt-4">
                <Link
                  to="/search-results"
                  className="btn-search typeJsText text-decoration-none"
                  style={{
                    background: '#fff',
                    border: '2px solid #000',
                    padding: '8px 25px 8px 30px',
                    fontSize: '15px',
                    color: '#737373',
                    fontWeight: 600,
                    borderRadius: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.7)',
                    height: '58px',
                    width: '320px',
                    maxWidth: '100%'
                  }}
                >
                  <span>Search Your Number Here</span>
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/home-search-icon.svg"
                    alt="Search"
                    style={{ width: '22px', height: '22px' }}
                  />
                </Link>
              </div>
            </div>

            {/* Right Column: Original Phone Mockup & Super Sale Zone */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="mobile-slider position-relative text-center mx-auto" style={{ maxWidth: '360px' }}>
                {/* Phone mockup container */}
                <div className="mobile-slider-img">
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/home-mobile.svg"
                    alt="Super Sale Zone Phone Mockup"
                    className="img-fluid"
                  />
                </div>

                {/* Heading overlay */}
                <div className="mobile-slider-heading position-absolute w-100" style={{ top: '16%', left: '0' }}>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Super Sale Zone
                  </h4>
                </div>

                {/* Animated cycling number */}
                {currentNumber && (
                  <div
                    className="hero__title position-absolute w-100 px-4"
                    style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    <Link
                      to={`/search-results?q=${encodeURIComponent(currentNumber.number)}`}
                      className="text-decoration-none d-block"
                    >
                      <div
                        className="mobile-sld-itm-mobile font-mono text-white fw-bold mb-2"
                        style={{ fontSize: '26px', letterSpacing: '2px' }}
                      >
                        <span style={{ color: '#ECAE01', fontWeight: 800 }}>
                          {currentNumber.displayNumber.slice(0, 3)}
                        </span>
                        {currentNumber.displayNumber.slice(3)}
                      </div>

                      <div className="mobile-sld-itm-price d-flex align-items-center justify-content-center gap-3">
                        <div className="mobile-sld-itm-price">
                          <span className="price-discount text-muted text-decoration-line-through text-sm">
                            {currentNumber.originalPrice}
                          </span>
                        </div>
                        <div className="mobile-sld-itm-price">
                          <span style={{ color: '#ECAE01', fontSize: '22px', fontWeight: 'bold' }}>
                            {currentNumber.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* View All Button inside Mockup */}
                <div className="mobile-slider-viewall position-absolute w-100 text-center" style={{ bottom: '13%', left: '0' }}>
                  <Link
                    to="/search-results?category=super-sale-zone"
                    className="btn-viewall text-decoration-none"
                    style={{
                      background: '#ECAE01',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      padding: '7px 24px',
                      borderRadius: '25px',
                      textTransform: 'uppercase',
                      display: 'inline-block'
                    }}
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
