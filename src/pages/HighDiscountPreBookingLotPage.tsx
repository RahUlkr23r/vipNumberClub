import React, { useState, useMemo } from 'react';
import { TopHeader } from '../components/TopHeader';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';
import { VipNumber } from '../types';

export const HighDiscountPreBookingLotPage: React.FC = () => {
  const [filterSort, setFilterSort] = useState<'all' | 'low_high' | 'high_low'>('all');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState<number | null>(null);

  // Curated 90-day waiting high-discount lot numbers
  const lotNumbers: VipNumber[] = useMemo(() => {
    const base = [
      {
        ...VIP_NUMBERS[0],
        id: 'lot-1',
        number: '7777899990',
        displayNumber: '77778 99990',
        originalPrice: '₹4,05,000',
        price: '₹2,45,000',
        priceNumeric: 245000,
        sum: 68,
        total: 5,
        endingDigits: '9990'
      },
      {
        ...VIP_NUMBERS[1],
        id: 'lot-2',
        number: '8888122221',
        displayNumber: '88881 22221',
        originalPrice: '₹3,20,000',
        price: '₹1,85,000',
        priceNumeric: 185000,
        sum: 36,
        total: 9,
        endingDigits: '2221'
      },
      {
        ...VIP_NUMBERS[2],
        id: 'lot-3',
        number: '9999344443',
        displayNumber: '99993 44443',
        originalPrice: '₹5,50,000',
        price: '₹3,20,000',
        priceNumeric: 320000,
        sum: 53,
        total: 8,
        endingDigits: '4443'
      },
      {
        ...VIP_NUMBERS[3],
        id: 'lot-4',
        number: '9000090000',
        displayNumber: '90000 90000',
        originalPrice: '₹8,90,000',
        price: '₹5,50,000',
        priceNumeric: 550000,
        sum: 18,
        total: 9,
        endingDigits: '0000'
      },
      {
        ...VIP_NUMBERS[4],
        id: 'lot-5',
        number: '9777797777',
        displayNumber: '97777 97777',
        originalPrice: '₹6,40,000',
        price: '₹3,90,000',
        priceNumeric: 390000,
        sum: 74,
        total: 2,
        endingDigits: '7777'
      },
      {
        ...VIP_NUMBERS[5],
        id: 'lot-6',
        number: '8111181111',
        displayNumber: '81111 81111',
        originalPrice: '₹4,75,000',
        price: '₹2,80,000',
        priceNumeric: 280000,
        sum: 26,
        total: 8,
        endingDigits: '1111'
      }
    ];

    let result = [...base];
    if (selectedDigit !== null) {
      result = result.filter((n) => n.number.includes(selectedDigit.toString()));
    }
    if (filterSort === 'low_high') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (filterSort === 'high_low') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }
    return result;
  }, [filterSort, selectedDigit]);

  return (
    <div className="high-discount-pre-booking-lot-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Authentic Top Header with Home Icon */}
      <TopHeader showHome={true} />

      {/* 2. Page Heading Banner Image */}
      <div className="page-heading padding-70" style={{ paddingTop: '30px', paddingBottom: '15px' }}>
        <div className="container">
          <div className="page-heading page-heading-bg text-center">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/advance-booking-lot.svg"
              alt="Advance Booking Lot"
              style={{ maxWidth: '420px', width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* 3. Advance Booking Notice & Filter Bar */}
      <div className="advance-booking-s pt-3" style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div
            className="advance-booking-s-in text-center mb-3"
            style={{
              background: '#0B0B0B',
              border: '1px solid #ECAE01',
              borderRadius: '16px',
              padding: '14px 20px',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            <p style={{ color: '#ECAE01', fontSize: '14px', fontWeight: 600, margin: 0 }}>
              These numbers are Available at high discount but has 90 days waiting time discounted deals
            </p>
          </div>

          <div className="filter-btn-sec d-flex justify-content-center mt-3">
            <button
              type="button"
              className="familyPack-top-meta-itm d-flex align-items-center gap-2 cursor-pointer"
              onClick={() => setIsFilterModalOpen(true)}
              style={{
                background: '#0F0F0F',
                border: '1px solid #444',
                color: '#fff',
                padding: '8px 22px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <span>Filter Numbers</span>
              <img
                src="https://www.vipnumbersclub.com/assets/front/img/filter-icon.svg"
                alt="Filter"
                style={{ width: '16px', height: '16px' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Number Grid */}
      <section className="inner-number-box padding-70" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="innernumberBox">
            <div className="row g-4">
              {lotNumbers.map((num) => (
                <div key={num.id} className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <NumberCard number={num} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Filter Modal */}
      {isFilterModalOpen && (
        <div
          className="modal fade show"
          id="filtermodal"
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
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '420px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#0F0F0F',
                border: '1px solid #ECAE01',
                borderRadius: '20px',
                boxShadow: '0 0 35px rgba(236, 174, 1, 0.3)'
              }}
            >
              <div className="modal-body" style={{ position: 'relative', padding: '25px 20px' }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsFilterModalOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    cursor: 'pointer'
                  }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>

                <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, textAlign: 'center', marginBottom: '20px' }}>
                  Filter Lot Numbers
                </h4>

                {/* Price sorting */}
                <div className="mb-4">
                  <label style={{ color: '#ECAE01', fontSize: '13px', fontWeight: 700, marginBottom: '8px', display: 'block' }}>
                    Sort by Price
                  </label>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn w-50"
                      onClick={() => setFilterSort('low_high')}
                      style={{
                        background: filterSort === 'low_high' ? '#ECAE01' : '#1A1A1A',
                        color: filterSort === 'low_high' ? '#000' : '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        borderRadius: '20px'
                      }}
                    >
                      Low to High
                    </button>
                    <button
                      type="button"
                      className="btn w-50"
                      onClick={() => setFilterSort('high_low')}
                      style={{
                        background: filterSort === 'high_low' ? '#ECAE01' : '#1A1A1A',
                        color: filterSort === 'high_low' ? '#000' : '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        borderRadius: '20px'
                      }}
                    >
                      High to Low
                    </button>
                  </div>
                </div>

                {/* Must contain digit */}
                <div className="mb-4">
                  <label style={{ color: '#ECAE01', fontSize: '13px', fontWeight: 700, marginBottom: '8px', display: 'block' }}>
                    Contains Favorite Digit
                  </label>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                      <button
                        key={digit}
                        type="button"
                        onClick={() => setSelectedDigit(selectedDigit === digit ? null : digit)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: selectedDigit === digit ? '#ECAE01' : '#1A1A1A',
                          color: selectedDigit === digit ? '#000' : '#fff',
                          border: '1px solid #333',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {digit}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFilterModalOpen(false)}
                    className="btn btn_primary w-100"
                    style={{
                      background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                      color: '#000',
                      fontWeight: 700,
                      borderRadius: '30px',
                      padding: '10px 20px',
                      border: 'none'
                    }}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
