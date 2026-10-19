import React, { useState } from 'react';
import { TopHeader } from '../components/TopHeader';
import { useApp } from '../context/AppContext';
import { VIP_NUMBERS } from '../data/numbers';
import { VipNumber } from '../types';

interface PreBookNumber extends VipNumber {
  deliveryDate: string;
}

export const PreBookingPage: React.FC = () => {
  const { addToCart, toggleFavorite, isFavorite, openBookingModal } = useApp();

  // Create pre-booking specific VIP numbers with dates
  const preBookNumbers: PreBookNumber[] = [
    {
      ...VIP_NUMBERS[0],
      id: 'pre-1',
      number: '8055880553',
      displayNumber: '8055 8 8055 3',
      originalPrice: '₹45,625',
      price: '₹36,500',
      priceNumeric: 36500,
      sum: 47,
      total: 2,
      endingDigits: '0553',
      deliveryDate: '19-05-2026'
    },
    {
      ...VIP_NUMBERS[1],
      id: 'pre-2',
      number: '9090906780',
      displayNumber: '90 90 90 67 80',
      originalPrice: '₹85,000',
      price: '₹68,000',
      priceNumeric: 68000,
      sum: 54,
      total: 9,
      endingDigits: '6780',
      deliveryDate: '25-06-2026'
    },
    {
      ...VIP_NUMBERS[2],
      id: 'pre-3',
      number: '9888888801',
      displayNumber: '98888 88801',
      originalPrice: '₹2,50,000',
      price: '₹1,95,000',
      priceNumeric: 195000,
      sum: 75,
      total: 3,
      endingDigits: '8801',
      deliveryDate: '12-07-2026'
    },
    {
      ...VIP_NUMBERS[3],
      id: 'pre-4',
      number: '7000000007',
      displayNumber: '700 000 0007',
      originalPrice: '₹7,50,000',
      price: '₹5,90,000',
      priceNumeric: 590000,
      sum: 14,
      total: 5,
      endingDigits: '0007',
      deliveryDate: '01-08-2026'
    },
    {
      ...VIP_NUMBERS[4],
      id: 'pre-5',
      number: '9111191111',
      displayNumber: '91111 91111',
      originalPrice: '₹4,00,000',
      price: '₹3,20,000',
      priceNumeric: 320000,
      sum: 32,
      total: 5,
      endingDigits: '1111',
      deliveryDate: '15-08-2026'
    },
    {
      ...VIP_NUMBERS[5],
      id: 'pre-6',
      number: '9999000099',
      displayNumber: '9999 0000 99',
      originalPrice: '₹3,40,000',
      price: '₹2,75,000',
      priceNumeric: 275000,
      sum: 45,
      total: 9,
      endingDigits: '0099',
      deliveryDate: '30-08-2026'
    }
  ];

  const [activePreBookNum, setActivePreBookNum] = useState<PreBookNumber | null>(null);

  const handleOpenPreBookModal = (num: PreBookNumber) => {
    setActivePreBookNum(num);
  };

  const handleProceedPreBook = () => {
    if (activePreBookNum) {
      addToCart(activePreBookNum);
      const numToBook = activePreBookNum;
      setActivePreBookNum(null);
      openBookingModal(numToBook);
    }
  };

  return (
    <div className="pre-booking-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Authentic Top Header */}
      <TopHeader title="VIP Number Pre-Booking Service" />

      {/* 2. Page Center Icon */}
      <section className="page-center-ic padding-70" style={{ paddingTop: '30px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="page-center-ic-in">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/pre-booking.svg"
              alt="Pre-Booking"
            />
          </div>
        </div>
      </section>

      {/* 3. Heading Bottom Banner */}
      <div className="heading-bot" style={{ marginBottom: '25px', textAlign: 'center' }}>
        <div className="container">
          <div
            className="heading-bot-p"
            style={{
              color: '#ECAE01',
              fontSize: '16px',
              fontWeight: 600,
              background: '#0F0F0F',
              display: 'inline-block',
              padding: '8px 24px',
              borderRadius: '30px',
              border: '1px solid #333'
            }}
          >
            Numbers on Advance Booking With Some Waiting Time
          </div>
        </div>
      </div>

      {/* 4. Pre-Booking Numbers Grid */}
      <section className="inner-number-box padding-70" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="innernumberBox">
            <div className="row g-4">
              {preBookNumbers.map((num) => {
                const favorited = isFavorite(num.id);
                return (
                  <div key={num.id} className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="number-sld-itm number-box number-box-new" style={{ margin: '0 auto', width: '100%' }}>
                      <div className="number-box-heading bill-board d-flex align-items-center justify-content-between p-2">
                        <div className="number-box-count count-timer d-flex align-items-center gap-1">
                          <div className="number-box-count-ic">
                            <img src="https://www.vipnumbersclub.com/assets/front/img/watch-ic.svg" alt="Clock" />
                          </div>
                          <div className="number-count">14h 22m</div> left
                        </div>

                        <div className="verify-number">
                          <img src="https://www.vipnumbersclub.com/assets/front/img/verify.svg" alt="Verified" />
                        </div>

                        <div
                          className={`fav-ic toggle-favorite cursor-pointer ${favorited ? 'active' : ''}`}
                          onClick={() => toggleFavorite(num.id)}
                        >
                          <img
                            src="https://www.vipnumbersclub.com/assets/front/img/heart-ic.svg"
                            alt="Favorite"
                            style={{
                              filter: favorited
                                ? 'invert(27%) sepia(91%) saturate(5482%) hue-rotate(346deg) brightness(97%) contrast(106%)'
                                : 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div className="number-sld-con p-2">
                        <div className="numberBox p-3">
                          <div className="numberBox-number text-white font-weight-bold">
                            {num.displayNumber}
                          </div>

                          <div className="numberBox-in d-flex justify-content-between align-items-center pt-2">
                            <div className="priceMeta d-flex align-items-center gap-2">
                              <div className="priceMeta-price">
                                <span className="price-discount text-muted text-decoration-line-through text-xs">
                                  {num.originalPrice}
                                </span>
                              </div>
                              <div className="priceMeta-price">
                                <span style={{ color: '#ECAE01', fontSize: '18px', fontWeight: 'bold' }}>
                                  {num.price}
                                </span>
                              </div>
                            </div>

                            <div className="numberBox-meta d-flex gap-2">
                              <div className="numberBox-meta-itm bg-dark px-2 py-1 rounded text-xs text-white">
                                Sum: {num.sum}
                              </div>
                              <div className="numberBox-meta-itm px-2 py-1 rounded text-xs font-bold" style={{ background: '#ECAE01', color: '#000' }}>
                                Total: {num.total}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="numberBox-bot d-flex justify-content-between align-items-center mt-3">
                          <div className="numberBox-btn d-flex gap-2 w-100 justify-content-between">
                            <div className="numberBox-btn-itm" style={{ flex: 1 }}>
                              <button
                                type="button"
                                className="btn btn_primary add-to-cart w-100 d-inline-flex align-items-center justify-content-center gap-1.5"
                                onClick={() => addToCart(num)}
                                style={{
                                  background: '#ECAE01',
                                  color: '#000',
                                  fontWeight: 700,
                                  fontSize: '12px',
                                  padding: '8px 12px',
                                  borderRadius: '6px',
                                  border: 'none'
                                }}
                              >
                                <img src="https://www.vipnumbersclub.com/assets/front/img/add-cart-ic.svg" alt="Add" style={{ width: '14px', height: '14px' }} />
                                <span>ADD TO CART</span>
                              </button>
                            </div>

                            <div className="numberBox-btn-itm" style={{ flex: 1 }}>
                              <button
                                type="button"
                                className="btn btn_border show-prebook-modal w-100 d-inline-flex align-items-center justify-content-center gap-1.5 flex-column"
                                onClick={() => handleOpenPreBookModal(num)}
                                style={{
                                  border: '1px solid #FFFFFF',
                                  color: '#fff',
                                  fontSize: '12px',
                                  padding: '5px 8px',
                                  borderRadius: '6px',
                                  background: 'transparent'
                                }}
                              >
                                <div className="d-flex align-items-center gap-1 font-weight-bold">
                                  <img src="https://www.vipnumbersclub.com/assets/front/img/book-ic.svg" alt="Book" style={{ width: '13px', height: '13px' }} />
                                  <span>BOOK NOW</span>
                                </div>
                                <div className="btn-date" style={{ fontSize: '10px', color: '#ECAE01' }}>
                                  {num.deliveryDate}
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authentic Pre-booking Modal (carprebookModal) */}
      {activePreBookNum && (
        <div
          className="modal fade show"
          id="carprebookModal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            padding: '15px'
          }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '460px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#0F0F0F',
                border: '1px solid #ECAE01',
                borderRadius: '24px',
                boxShadow: '0 0 35px rgba(236, 174, 1, 0.3)'
              }}
            >
              <div className="modal-body" style={{ position: 'relative', padding: '30px 24px' }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActivePreBookNum(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    cursor: 'pointer'
                  }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>

                <div className="modal-popup text-center">
                  <div className="modal_header">
                    <h4 style={{ color: '#ECAE01', fontSize: '22px', fontWeight: 800, letterSpacing: '1px' }}>
                      PLEASE NOTE
                    </h4>
                  </div>
                  <p style={{ color: '#ccc', fontSize: '13px', margin: '12px 0 16px', lineHeight: '1.5' }}>
                    This is a pre booking number, which means it has some waiting period.{' '}
                    <span className="color-para" style={{ color: '#ECAE01', fontWeight: 600 }}>
                      Delivery date is mentioned in the box
                    </span>
                  </p>
                  <div className="modal-ic mb-3">
                    <img
                      src="https://www.vipnumbersclub.com/assets/front/img/prebooking-icon.svg"
                      alt="Prebooking Icon"
                      style={{ width: '60px', height: '60px' }}
                    />
                  </div>
                  <div
                    className="prebooking-number numberBox-number modal-prebook-number mb-3 font-mono"
                    style={{ fontSize: '24px', fontWeight: 800, color: '#fff', letterSpacing: '2px' }}
                  >
                    {activePreBookNum.displayNumber}
                  </div>
                  <div
                    className="btn btn_primary prebooking-availablity mb-4"
                    style={{
                      background: 'rgba(236, 174, 1, 0.15)',
                      color: '#ECAE01',
                      border: '1px solid #ECAE01',
                      borderRadius: '30px',
                      padding: '8px 20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      fontWeight: 700
                    }}
                  >
                    <span>Delivery Date:</span>
                    <div className="btn-date modal-prebook-date" style={{ color: '#fff' }}>
                      {activePreBookNum.deliveryDate}
                    </div>
                  </div>
                  <div className="submit-wrp">
                    <button
                      type="button"
                      onClick={handleProceedPreBook}
                      className="btn btn_primary w-100 add-to-cart-from-modal"
                      style={{
                        background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                        color: '#000',
                        fontWeight: 800,
                        padding: '13px 20px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '14px',
                        textTransform: 'uppercase'
                      }}
                    >
                      Proceed to Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
