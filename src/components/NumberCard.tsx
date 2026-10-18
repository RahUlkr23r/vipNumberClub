import React, { useState, useEffect } from 'react';
import { VipNumber } from '../types';
import { useApp } from '../context/AppContext';

interface NumberCardProps {
  number: VipNumber;
}

export const NumberCard: React.FC<NumberCardProps> = ({ number }) => {
  const { addToCart, toggleFavorite, isFavorite, openBookingModal } = useApp();
  const favorited = isFavorite(number.id);

  const [timeLeft, setTimeLeft] = useState('14h 22m');

  useEffect(() => {
    const seed = parseInt(number.id.replace(/\D/g, ''), 10) || 12;
    const hours = (seed % 18) + 4;
    const minutes = (seed * 7) % 60;
    setTimeLeft(`${hours}h ${minutes}m`);
  }, [number.id]);

  return (
    <div className="number-sld-itm number-box" style={{ margin: '0 auto', width: '100%' }}>
      {/* Top Countdown & Heart */}
      <div className="number-box-heading d-flex align-items-center justify-content-between p-2">
        <div className="number-box-count count-timer d-flex align-items-center gap-1">
          <div className="number-box-count-ic">
            <img src="https://www.vipnumbersclub.com/assets/front/img/watch-ic.svg" alt="Clock" />
          </div>
          <div className="number-count">{timeLeft}</div> left
        </div>

        <div
          className={`fav-ic toggle-favorite cursor-pointer ${favorited ? 'active' : ''}`}
          onClick={() => toggleFavorite(number.id)}
          title={favorited ? 'Remove from favorites' : 'Add to favorites'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://www.vipnumbersclub.com/assets/front/img/heart-ic.svg"
            alt="Favorite"
            style={{
              filter: favorited
                ? 'invert(27%) sepia(91%) saturate(5482%) hue-rotate(346deg) brightness(97%) contrast(106%)'
                : 'none',
              transform: favorited ? 'scale(1.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          />
        </div>
      </div>

      {/* Main Number Content */}
      <div className="number-sld-con p-2">
        <div className="numberBox p-3">
          {/* Big Number */}
          <div className="numberBox-number text-white font-weight-bold">
            {number.highlightPrefix ? (
              <>
                <span style={{ color: '#ECAE01', fontWeight: 800 }}>{number.highlightPrefix}</span>
                {number.displayNumber.slice(number.highlightPrefix.length)}
              </>
            ) : (
              number.displayNumber
            )}
          </div>

          {/* Pricing and Numerology Meta */}
          <div className="numberBox-in d-flex justify-content-between align-items-center pt-2">
            <div className="priceMeta d-flex align-items-center gap-2">
              <div className="priceMeta-price">
                <span className="price-discount text-muted text-decoration-line-through text-xs">
                  {number.originalPrice}
                </span>
              </div>
              <div className="priceMeta-price">
                <span style={{ color: '#ECAE01', fontSize: '18px', fontWeight: 'bold' }}>
                  {number.price}
                </span>
              </div>
            </div>

            <div className="numberBox-meta d-flex gap-2">
              <div className="numberBox-meta-itm bg-dark px-2 py-1 rounded text-xs text-white">
                Sum: {number.sum}
              </div>
              <div className="numberBox-meta-itm px-2 py-1 rounded text-xs font-bold" style={{ background: '#ECAE01', color: '#000' }}>
                Total: {number.total}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: 4 vanity digits + Add to Cart & Book Now */}
        <div className="numberBox-bot d-flex justify-content-between align-items-center mt-3">
          <div className="numberBox-4 text-start">
            <div className="numberBox-4-cnt font-mono text-white font-weight-bold" style={{ fontSize: '14px' }}>
              {number.endingDigits}
            </div>
            <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>VIPNumbersClub.com</p>
          </div>

          <div className="numberBox-btn d-flex gap-2">
            <div className="numberBox-btn-itm">
              <button
                type="button"
                className="btn btn_primary add-to-cart d-inline-flex align-items-center gap-1.5"
                onClick={() => addToCart(number)}
                style={{
                  background: '#ECAE01',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '12px',
                  padding: '7px 12px',
                  borderRadius: '6px',
                  border: '1px solid #ECAE01'
                }}
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/add-cart-ic.svg" alt="Add" style={{ width: '14px', height: '14px' }} />
                <span>ADD to CArt</span>
              </button>
            </div>

            <div className="numberBox-btn-itm">
              <button
                type="button"
                className="btn btn_border d-inline-flex align-items-center gap-1.5"
                onClick={() => openBookingModal(number)}
                style={{
                  border: '1px solid #FFFFFF',
                  color: '#fff',
                  fontSize: '12px',
                  padding: '7px 12px',
                  borderRadius: '6px',
                  background: 'transparent'
                }}
              >
                <img src="https://www.vipnumbersclub.com/assets/front/img/book-ic.svg" alt="Book" style={{ width: '14px', height: '14px' }} />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
