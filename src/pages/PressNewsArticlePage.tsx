import React, { useState } from 'react';
import { TopHeader } from '../components/TopHeader';
import { ExternalLink, Newspaper, Award } from 'lucide-react';

interface ArticleItem {
  id: string;
  publication: string;
  logo: string;
  date: string;
  headline: string;
  snippet: string;
  linkText: string;
}

export const PressNewsArticlePage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      publication: 'Entrepreneurs Hunt',
      logo: 'https://www.vipnumbersclub.com/assets/front/img/airtel.png',
      date: 'May 2024',
      headline: 'VIP Numbers Club Revolutionizes India’s Digital Identity Market',
      snippet:
        'Jaipur-based VIP Numbers Club has emerged as the pioneer in transparent mobile number allocations, servicing more than 16,000 top executives and businesses with genuine compliant porting.',
      linkText: 'Read Full Coverage'
    },
    {
      id: 'art-2',
      publication: 'Economic Times Insights',
      logo: 'https://www.vipnumbersclub.com/uploads/settings/y2zi3NQjm8mZWAjmR2do.png',
      date: 'February 2024',
      headline: 'The Surge of Numerology-Aligned Vanity Numbers in India',
      snippet:
        'From high-net-worth individuals to scaling startups, having an auspicious and easy-to-remember contact number is becoming a serious branding decision. Ranvijay’s VIP Numbers Club leads the space.',
      linkText: 'Read Full Coverage'
    },
    {
      id: 'art-3',
      publication: 'Telecom Daily India',
      logo: 'https://www.vipnumbersclub.com/uploads/settings/wJciO4iUY8CAET5X5KL8.png',
      date: 'December 2023',
      headline: 'Cash on Delivery and 100% Refund: The Trust Model Behind VIP Numbers',
      snippet:
        'Operating nationwide across 18 major metro clusters with verified doorstep physical SIM handover, VIP Numbers Club eliminates grey market uncertainty for VIP telecom purchases.',
      linkText: 'Read Full Coverage'
    }
  ];

  return (
    <div className="press-news-article-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Authentic Top Header */}
      <TopHeader title="VIP Numbers Club Press & Media Coverage" />

      {/* 2. Sub Heading */}
      <div className="sub-heaind-sec" style={{ padding: '16px 0', background: '#080808', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container text-center">
          <div className="sub-heaind-sec-in" style={{ color: '#ECAE01', fontSize: '15px', fontWeight: 600 }}>
            Our Brand Featured in Various Publications
          </div>
        </div>
      </div>

      {/* 3. Center Page Icon */}
      <section className="page-center-ic padding-70" style={{ paddingTop: '35px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="page-center-ic-in">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/news-page-ic.svg"
              alt="News Icon"
            />
          </div>
        </div>
      </section>

      {/* 4. Publications Grid */}
      <section className="steps brand-page steps-before-step padding-70" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="steps-itms">
            <div className="row g-4 justify-content-center">
              {articles.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-12">
                  <div
                    className="steps-itm"
                    onClick={() => setSelectedArticle(item)}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      background: '#0F0F0F',
                      border: '1px solid #282828',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ECAE01';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#282828';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="steps-itm-con mb-3">
                      <div
                        className="steps-itm-img"
                        style={{
                          background: '#fff',
                          borderRadius: '12px',
                          padding: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '90px'
                        }}
                      >
                        <img
                          src={item.logo}
                          alt={item.publication}
                          style={{ maxHeight: '55px', maxWidth: '140px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>

                    <div className="step-footer text-center">
                      <p style={{ color: '#ECAE01', fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>
                        {item.publication}
                      </p>
                      <span style={{ color: '#777', fontSize: '12px', display: 'block', marginBottom: '12px' }}>
                        {item.date}
                      </span>
                      <p style={{ color: '#ccc', fontSize: '13px', lineHeight: '1.5', margin: '0 0 16px' }}>
                        "{item.headline}"
                      </p>
                      <span
                        className="d-inline-flex align-items-center gap-1"
                        style={{ color: '#ECAE01', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}
                      >
                        Read Article Summary <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Article Detail Modal */}
      {selectedArticle && (
        <div
          className="modal fade show"
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
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '520px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#0F0F0F',
                border: '1px solid #ECAE01',
                borderRadius: '24px',
                boxShadow: '0 0 40px rgba(236, 174, 1, 0.3)'
              }}
            >
              <div className="modal-body" style={{ position: 'relative', padding: '30px 24px' }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedArticle(null)}
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

                <div className="d-flex align-items-center gap-2 mb-2">
                  <span style={{ color: '#ECAE01', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedArticle.publication} • {selectedArticle.date}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, lineHeight: '1.4', marginBottom: '16px' }}>
                  {selectedArticle.headline}
                </h3>

                <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                  {selectedArticle.snippet}
                </p>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="btn btn_primary w-100"
                    style={{
                      background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                      color: '#000',
                      fontWeight: 700,
                      borderRadius: '50px',
                      padding: '12px 20px',
                      border: 'none'
                    }}
                  >
                    Close Coverage
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
