import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';

export const LowestPriceModal: React.FC = () => {
  const { isLowestPriceModalOpen, setIsLowestPriceModalOpen } = useApp();

  if (!isLowestPriceModalOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      id="lowestPriceModal"
      tabIndex={-1}
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 2100 }}
      onClick={() => setIsLowestPriceModalOpen(false)}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content" style={{ background: '#090808', border: '1px solid #404040', borderRadius: '20px' }}>
          <div className="modal-body p-4 position-relative">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 border-0 bg-transparent"
              onClick={() => setIsLowestPriceModalOpen(false)}
              aria-label="Close"
            >
              <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
            </button>

            <div className="modal-popup text-center pt-2">
              <div className="modal_header mb-3">
                <h4 style={{ color: '#ECAE01', fontWeight: 'bold' }}>Lowest Price Challange</h4>
              </div>

              <p className="text-white text-sm mb-4" style={{ lineHeight: '1.6' }}>
                If you see any number on any platform we will provide you at lower price then them.
              </p>

              <div className="modal-ic my-4">
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/head-top-ic1.svg"
                  alt="Lowest Price"
                  style={{ width: '80px', height: '80px', margin: '0 auto' }}
                />
              </div>

              <div
                className="guaranteed-s font-weight-bold text-uppercase py-2 px-4 rounded-pill d-inline-block mb-3"
                style={{ background: '#ECAE01', color: '#000', fontWeight: 'bold', letterSpacing: '1px' }}
              >
                Guarnteed
              </div>

              <div className="guaranteed-para text-muted text-xs">
                Guaranteed lowest price across all verified telecom vendors in India.
              </div>

              <div className="mt-4">
                <a
                  href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I saw a VIP number listed elsewhere and I want VIP Numbers Club to beat that price.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn_primary py-2 px-4 rounded-pill"
                  style={{ background: '#ECAE01', color: '#000', fontWeight: 'bold', fontSize: '13px' }}
                >
                  Claim on WhatsApp (24*7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
