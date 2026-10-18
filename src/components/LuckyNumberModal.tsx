import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const LuckyNumberModal: React.FC = () => {
  const { isLuckyCalcModalOpen, setIsLuckyCalcModalOpen } = useApp();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'date' | 'calculator'>('date');
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);

  // Custom DOB calculation states
  const [day, setDay] = useState('15');
  const [month, setMonth] = useState('8');
  const [year, setYear] = useState('1995');
  const [calculatedTotal, setCalculatedTotal] = useState<number | null>(null);

  if (!isLuckyCalcModalOpen) return null;

  const dateOptions = [
    { value: 1, label: '1st / 10th / 19th / 28th' },
    { value: 2, label: '2nd / 11th / 20th / 29th' },
    { value: 3, label: '3rd / 12th / 21st / 30th' },
    { value: 4, label: '4th / 13th / 22nd / 31st' },
    { value: 5, label: '5th / 14th / 23rd' },
    { value: 6, label: '6th / 15th / 24th' },
    { value: 7, label: '7th / 16th / 25th' },
    { value: 8, label: '8th / 17th / 26th' },
    { value: 9, label: '9th / 18th / 27th' },
  ];

  const handleSelectDate = (val: number) => {
    setSelectedRadio(val);
    setIsLuckyCalcModalOpen(false);
    navigate(`/search-results?total=${val}`);
  };

  const calculateNumerology = () => {
    const d = parseInt(day, 10) || 1;
    const m = parseInt(month, 10) || 1;
    const y = parseInt(year, 10) || 2000;

    const reduceNum = (num: number): number => {
      let sum = num;
      while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      }
      return sum || 1;
    };

    const digitsStr = `${d}${m}${y}`;
    const initialSum = digitsStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const destinyNumber = reduceNum(initialSum);
    setCalculatedTotal(destinyNumber);
  };

  const handleBrowseMatching = () => {
    if (calculatedTotal) {
      setIsLuckyCalcModalOpen(false);
      navigate(`/search-results?total=${calculatedTotal}`);
    }
  };

  return (
    <div
      className="modal fade show bottpm-seat"
      id="seatModal"
      tabIndex={-1}
      aria-labelledby="seatModalLabel"
      aria-modal="true"
      role="dialog"
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
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          maxWidth: '520px',
          width: '100%',
          margin: 'auto'
        }}
      >
        <div
          className="modal-content"
          style={{
            background: '#090808',
            border: '1px solid #ECAE01',
            borderRadius: '20px',
            boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.28)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="modal-body" style={{ padding: '25px 20px', position: 'relative' }}>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setIsLuckyCalcModalOpen(false)}
              style={{
                position: 'absolute',
                right: '18px',
                top: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 1
              }}
            >
              <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
            </button>

            {/* Modal Heading & Tab Switcher */}
            <div className="modal-popup modal-selectradio">
              <div className="modal_header1" style={{ textAlign: 'center', marginTop: '10px' }}>
                <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: 600, margin: 0 }}>
                  BIRTHDAY - <span style={{ color: '#ECAE01' }}>DATE</span>
                </h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('date')}
                    style={{
                      background: activeTab === 'date' ? '#ECAE01' : 'transparent',
                      color: activeTab === 'date' ? '#000' : '#fff',
                      border: '1px solid #ECAE01',
                      borderRadius: '20px',
                      padding: '4px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Quick Date Range
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('calculator')}
                    style={{
                      background: activeTab === 'calculator' ? '#ECAE01' : 'transparent',
                      color: activeTab === 'calculator' ? '#000' : '#fff',
                      border: '1px solid #ECAE01',
                      borderRadius: '20px',
                      padding: '4px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Full DOB Calculator
                  </button>
                </div>
              </div>

              {activeTab === 'date' ? (
                <div
                  className="modal-selectradio-itms modal-categories-itms"
                  style={{
                    padding: '20px 10px 10px',
                    maxHeight: '60vh',
                    overflowY: 'auto'
                  }}
                >
                  {dateOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className="form-check"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSelectDate(opt.value)}
                    >
                      <input
                        className="form-check-input lucky-radio"
                        type="radio"
                        name="lucky_date"
                        value={opt.value}
                        id={`radioDefault${opt.value}`}
                        checked={selectedRadio === opt.value}
                        onChange={() => handleSelectDate(opt.value)}
                        style={{ cursor: 'pointer' }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`radioDefault${opt.value}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '25px 15px 10px', textAlign: 'center' }}>
                  <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '18px' }}>
                    Enter your complete Date of Birth to calculate your celestial destiny number:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#fff', fontSize: '11px', marginBottom: '4px' }}>DAY</label>
                      <input
                        type="number"
                        min="1"
                        max="31"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#000',
                          border: '1px solid #404040',
                          borderRadius: '10px',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '8px',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#fff', fontSize: '11px', marginBottom: '4px' }}>MONTH</label>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#000',
                          border: '1px solid #404040',
                          borderRadius: '10px',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '8px',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#fff', fontSize: '11px', marginBottom: '4px' }}>YEAR</label>
                      <input
                        type="number"
                        min="1940"
                        max="2030"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#000',
                          border: '1px solid #404040',
                          borderRadius: '10px',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '8px',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={calculateNumerology}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                      color: '#000',
                      fontWeight: 700,
                      padding: '12px',
                      borderRadius: '80px',
                      border: 'none',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      cursor: 'pointer'
                    }}
                  >
                    Calculate Destiny Number
                  </button>

                  {calculatedTotal !== null && (
                    <div style={{ marginTop: '20px', padding: '15px', background: '#000', border: '1px solid #ECAE01', borderRadius: '15px' }}>
                      <div style={{ color: '#aaa', fontSize: '12px' }}>Your Lucky Destiny Number is:</div>
                      <div style={{ color: '#ECAE01', fontSize: '42px', fontWeight: 800, margin: '6px 0' }}>{calculatedTotal}</div>
                      <button
                        type="button"
                        onClick={handleBrowseMatching}
                        style={{
                          background: '#ECAE01',
                          color: '#000',
                          fontWeight: 700,
                          padding: '10px 20px',
                          borderRadius: '30px',
                          border: 'none',
                          fontSize: '13px',
                          cursor: 'pointer',
                          marginTop: '8px'
                        }}
                      >
                        Browse Numbers with Total {calculatedTotal} →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
