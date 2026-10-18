import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { Link } from 'react-router-dom';

export const GeneralDoubtsPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  const toggleAccordion = (id: number) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="general-doubts-page">
      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/general-doubts.svg" alt="General Doubts" />
          </div>
        </div>
      </section>

      {/* Original FAQ Section with search bar */}
      <section className="faq-s padding-70">
        <div className="container">
          <div className="faq-s-in">
            {/* Quick search input */}
            <div style={{ maxWidth: '500px', margin: '0 auto 40px auto' }}>
              <input
                type="text"
                placeholder="Search questions (e.g. MNP, legal, payment, SIM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: '#000',
                  border: '1px solid #ECAE01',
                  borderRadius: '30px',
                  padding: '12px 24px',
                  color: '#fff',
                  fontSize: '14px',
                  boxShadow: '0px 0px 20px rgba(236,174,1,0.2)'
                }}
              />
            </div>

            <div className="accordion" id="accordionExample">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div className="accordion-item" key={faq.id}>
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={isOpen}
                        style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                      >
                        <div className="faq-ic" style={{ flexShrink: 0 }}>
                          <img src="https://www.vipnumbersclub.com/assets/front/img/faq-sec-img.svg" alt="FAQ" />
                        </div>
                        <span style={{ color: isOpen ? '#ECAE01' : '#fff', fontWeight: 600 }}>
                          {faq.question}
                        </span>
                      </button>
                    </h4>
                    {isOpen && (
                      <div className="accordion-collapse collapse show">
                        <div className="accordion-body" style={{ color: '#aaa', padding: '20px 25px', lineHeight: '1.7', fontSize: '15px' }}>
                          <p>{faq.answer}</p>
                          <p style={{ marginTop: '10px', color: '#ECAE01', fontWeight: 600, fontSize: '13px' }}>
                            VIP NUMBERS CLUB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <Link
                to="/search-results"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '14px 35px',
                  borderRadius: '80px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.4)'
                }}
              >
                Browse All VIP Numbers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
