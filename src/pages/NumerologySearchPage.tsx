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
    <div className="main-content py-4">
      {/* 1. ORIGINAL NUMEROLOGY SEARCH FORM SECTION */}
      <section className="numerology-search-form padding-50 py-5" id="numerology-search">
        <div className="container">
          <div
            className="numerology-search-form-in p-4 p-md-5 rounded-4"
            style={{ background: '#090808', border: '1px solid #404040', borderRadius: '20px' }}
          >
            <h2 className="text-white fw-bold mb-4" style={{ fontSize: '28px' }}>
              Numerology Search
            </h2>

            <form
              className="numerology-search-form-itms"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row g-3">
                <div className="col-md-4 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">Start With</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 915"
                      value={startWith}
                      onChange={(e) => setStartWith(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">Any Where</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 1117"
                      value={anyWhere}
                      onChange={(e) => setAnyWhere(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">End With</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 555"
                      value={endWith}
                      onChange={(e) => setEndWith(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">Must Contain</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 11,69,3"
                      value={mustContain}
                      onChange={(e) => setMustContain(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">Not Contain</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 5,71"
                      value={notContain}
                      onChange={(e) => setNotContain(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">TOTAL</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 41, 42"
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group text-start">
                    <label className="text-white text-xs mb-1 d-block font-weight-bold">SUM</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                      placeholder="Eg. 5, 6"
                      value={sum}
                      onChange={(e) => setSum(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12 mt-4 text-start">
                  <button
                    type="submit"
                    className="btn btn_primary btn-search-number d-inline-flex align-items-center gap-2"
                    style={{
                      background: '#ECAE01',
                      color: '#000',
                      fontWeight: 'bold',
                      padding: '12px 30px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '15px'
                    }}
                  >
                    <span>Search Number</span>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/search-number.svg" alt="Search icon" />
                  </button>
                </div>
              </div>
            </form>

            {/* Original "Know My Lucky Number" Link */}
            <div className="delivery-sec-in mt-4 pt-3 border-top border-secondary">
              <button
                type="button"
                onClick={() => setIsLuckyCalcModalOpen(true)}
                className="select-sec text-white border-0 bg-transparent text-decoration-none d-inline-flex align-items-center gap-2 font-weight-bold"
                style={{ color: '#ECAE01' }}
              >
                <span style={{ color: '#ECAE01', fontSize: '15px' }}>Know My Lucky Number</span>
                <img src="https://www.vipnumbersclub.com/assets/front/img/down-select.svg" alt="Select" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MATCHING RESULTS LIST */}
      <section className="py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-white font-weight-bold" style={{ fontSize: '20px' }}>
              Matching Numbers ({matchingNumbers.length})
            </h3>
          </div>

          <div className="innernumberBox">
            <div className="row g-4">
              {matchingNumbers.map(num => (
                <div key={num.id} className="col-xl-4 col-lg-6 col-md-6">
                  <NumberCard number={num} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
