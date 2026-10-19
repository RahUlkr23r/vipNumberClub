import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/TopHeader';

export const HomeDeliveryPage: React.FC = () => {
  const navigate = useNavigate();
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Jaipur');
  const [agreed, setAgreed] = useState(true);

  const cities = [
    'Navi Mumbai', 'Pune', 'Delhi', 'Noida', 'Greater Noida', 'Gurugram',
    'Ghaziabad', 'Sonipat', 'Panipat', 'Rohtak', 'Jaipur', 'Rewari - Haryana',
    'Chitradurga - Karnataka', 'Bhiwadi - Haryana', 'Palwal - Haryana', 'Meerut',
    'Jhajjar - Haryana', 'Hapur - UP'
  ];

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    setIsCityModalOpen(false);
  };

  const handleContinue = () => {
    navigate('/search-results');
  };

  return (
    <div className="home-delivery-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* Authentic Top Header */}
      <TopHeader />

      {/* Original Center Icon & Headings */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-heading mb-3">
            <h2>Cash on Delivery</h2>
          </div>
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/delivery-page-ic.svg" alt="Cash on Delivery" />
          </div>
          <div className="page-subheading mt-5">
            <p>is available only in the following <span>cities</span></p>
          </div>
        </div>
      </section>

      {/* Select City Button */}
      <section className="delivery-sec padding-70" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="delivery-sec-in">
            <button
              type="button"
              className="select-sec"
              onClick={() => setIsCityModalOpen(true)}
              style={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <span>{selectedCity ? selectedCity : 'Select Your City'}</span>
              <img src="https://www.vipnumbersclub.com/assets/front/img/down-select.svg" alt="Select" />
            </button>
          </div>
        </div>
      </section>

      {/* Delivery Box Terms */}
      <section className="delivery-box">
        <div className="container">
          <div className="delivery-box-in">
            <div className="delivery-box-itm">
              <span>₹500 - ₹1000</span> extra & advance charges for home delivery option
            </div>
            <div className="delivery-box-itm">
              Remaining number + <span>recharge amount</span> to be collected at the time of delivery
            </div>
            <div className="delivery-box-itm">
              Activation Period will be<br /> <span>5 working days</span>
            </div>
            <div className="delivery-box-itm delivery-box-check">
              <div className="form-check no-text">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckIndeterminate"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
              </div>
            </div>
          </div>

          <div className="submit-wrp mt-5 text-center">
            <button
              type="button"
              className="btn btn_primary"
              onClick={handleContinue}
              style={{ minWidth: '220px' }}
            >
              Continue
            </button>
          </div>
        </div>
      </section>

      {/* Original City Selection Modal */}
      {isCityModalOpen && (
        <div
          className="modal fade show bottpm-seat"
          id="seatModal"
          tabIndex={-1}
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
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#090808',
                border: '1px solid #ECAE01',
                borderRadius: '20px',
                boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.28)'
              }}
            >
              <div className="modal-body" style={{ position: 'relative', padding: '25px 20px' }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsCityModalOpen(false)}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: 1
                  }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>
                <div className="modal-popup modal-selectradio">
                  <div className="modal_header1" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>
                      Select Your <span style={{ color: '#ECAE01' }}>City</span>
                    </h4>
                  </div>
                  <div
                    className="modal-selectradio-itms modal-categories-itms"
                    style={{
                      maxHeight: '60vh',
                      overflowY: 'auto',
                      padding: '20px 10px 10px'
                    }}
                  >
                    {cities.map((city, idx) => (
                      <div
                        key={idx}
                        className="form-check"
                        onClick={() => handleSelectCity(city)}
                        style={{ cursor: 'pointer' }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioCity"
                          id={`radioCity${idx}`}
                          checked={selectedCity === city}
                          onChange={() => handleSelectCity(city)}
                        />
                        <label className="form-check-label" htmlFor={`radioCity${idx}`}>
                          {city}
                        </label>
                      </div>
                    ))}
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
