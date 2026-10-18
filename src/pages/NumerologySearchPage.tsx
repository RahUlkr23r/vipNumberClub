import React, { useState, useMemo } from 'react';
import { VIP_NUMBERS } from '../data/numbers';
import { NumberCard } from '../components/NumberCard';
import { useApp } from '../context/AppContext';

export const NumerologySearchPage: React.FC = () => {
  const { setIsLuckyCalcModalOpen } = useApp();

  const [startWith, setStartWith] = useState('');
  const [anyWhere, setAnyWhere] = useState('');
  const [endWith, setEndWith] = useState('');
  const [mustContain, setMustContain] = useState('');
  const [notContain, setNotContain] = useState('');
  const [total, setTotal] = useState('');
  const [sum, setSum] = useState('');

  const matchingNumbers = useMemo(() => {
    return VIP_NUMBERS.filter(item => {
      const num = item.number;

      if (startWith.trim() && !num.startsWith(startWith.trim())) return false;
      if (endWith.trim() && !num.endsWith(endWith.trim())) return false;
      if (anyWhere.trim() && !num.includes(anyWhere.trim())) return false;

      if (mustContain.trim()) {
        const parts = mustContain.split(',').map(s => s.trim()).filter(Boolean);
        for (const p of parts) {
          if (!num.includes(p)) return false;
        }
      }

      if (notContain.trim()) {
        const parts = notContain.split(',').map(s => s.trim()).filter(Boolean);
        for (const p of parts) {
          if (num.includes(p)) return false;
        }
      }

      if (total.trim()) {
        const tVal = parseInt(total.trim(), 10);
        if (!isNaN(tVal) && item.total !== tVal) return false;
      }

      if (sum.trim()) {
        const sVal = parseInt(sum.trim(), 10);
        if (!isNaN(sVal) && item.sum !== sVal) return false;
      }

      return true;
    });
  }, [startWith, anyWhere, endWith, mustContain, notContain, total, sum]);

  return (
    <div className="numerology-page">
      {/* 1. ORIGINAL NUMEROLOGY HERO BANNER WITH BABA GRAPHIC */}
      <section className="numerology-search">
        <div className="container">
          <div className="numerology-search-in">
            <h4>Numerology Number is Important because...</h4>
            <p>Every number is believed to possess either positive or negative energy, depending on one's date of birth.</p>
            <p>The appropriate number is thought to align with your destiny, thereby assisting in both career and personal development. This alignment can lead to increased clarity and the ability to navigate challenges with grace and positive strength.</p>
            <div className="numerology-search-btn">
              <a href="#numerology-search-form" className="btn btn-numerology">
                Numerology Search <img src="https://www.vipnumbersclub.com/assets/front/img/right-arrow-search.svg" alt="arrow" />
              </a>
            </div>

            <div className="numerology-search-baba">
              <div className="rotate-img">
                <img src="https://www.vipnumbersclub.com/assets/front/img/numerology-circle.png" alt="Numerology Circle" />
              </div>
              <img className="numerology-search-baba-img" src="https://www.vipnumbersclub.com/assets/front/img/baba.png" alt="Numerology Astrologer" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUMEROLOGY SEARCH CRITERIA FORM */}
      <section className="numerology-search-form padding-50" id="numerology-search-form">
        <div className="container">
          <div className="numerology-search-form-in">
            <h2>Numerology Search</h2>
            <form
              className="numerology-search-form-itms"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label>Start With</label>
                    <input
                      type="text"
                      className="form-control number-only"
                      placeholder="Eg. 915"
                      maxLength={10}
                      value={startWith}
                      onChange={(e) => setStartWith(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label>Any Where</label>
                    <input
                      type="text"
                      className="form-control number-only"
                      placeholder="Eg. 1117"
                      maxLength={10}
                      value={anyWhere}
                      onChange={(e) => setAnyWhere(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label>End With</label>
                    <input
                      type="text"
                      className="form-control number-only"
                      placeholder="Eg. 555"
                      maxLength={10}
                      value={endWith}
                      onChange={(e) => setEndWith(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label>Must Contain</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. 11,69,3"
                      maxLength={20}
                      value={mustContain}
                      onChange={(e) => setMustContain(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label>Not Contain</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. 5,71"
                      maxLength={500}
                      value={notContain}
                      onChange={(e) => setNotContain(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label>TOTAL</label>
                    <input
                      type="text"
                      className="form-control number-comma"
                      placeholder="Eg. 41, 42"
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label>SUM</label>
                    <input
                      type="text"
                      className="form-control number-comma"
                      placeholder="Eg. 5, 6"
                      value={sum}
                      onChange={(e) => setSum(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn_primary btn-search-number"
                      onClick={() => {
                        const target = document.getElementById('results-section');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Search Number <img src="https://www.vipnumbersclub.com/assets/front/img/search-number.svg" alt="Search" />
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Know My Lucky Number dropdown trigger */}
            <div className="delivery-sec-in mt-3 text-center">
              <button
                type="button"
                className="select-sec"
                onClick={() => setIsLuckyCalcModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Know My Lucky Number</span>
                <img src="https://www.vipnumbersclub.com/assets/front/img/down-select.svg" alt="Select" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATCHING NUMEROLOGY RESULTS GRID */}
      <section className="inner-number-box padding-70 pt-0" id="results-section">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="text-white fw-bold mb-0" style={{ fontSize: '22px' }}>
              Matching Auspicious Numbers ({matchingNumbers.length})
            </h3>
            {(startWith || anyWhere || endWith || mustContain || notContain || total || sum) && (
              <button
                type="button"
                onClick={() => {
                  setStartWith('');
                  setAnyWhere('');
                  setEndWith('');
                  setMustContain('');
                  setNotContain('');
                  setTotal('');
                  setSum('');
                }}
                className="btn btn-sm btn-outline-secondary text-white"
                style={{ borderRadius: '20px' }}
              >
                Reset Criteria
              </button>
            )}
          </div>

          <div className="innernumberBox">
            <div className="row g-4">
              {matchingNumbers.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <h4 className="text-white">No Numbers Found Matching Your Auspicious Vibration</h4>
                  <p className="text-muted">Try broadening your search criteria or resetting specific exclusions.</p>
                </div>
              ) : (
                matchingNumbers.map(number => (
                  <div key={number.id} className="col-xl-4 col-lg-6 col-md-6">
                    <NumberCard number={number} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
