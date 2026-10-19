import React from 'react';
import { TopHeader } from '../components/TopHeader';

export const SocialMediaPage: React.FC = () => {
  const socialChannels = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vip.numbers.club?stkn=MWI2d2l3azl1eXphZw==',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/socialmedua-ic1.svg',
      handle: '@vip.numbers.club'
    },
    {
      name: 'Youtube',
      url: 'https://youtube.com/shorts/PT33n6uEMas?feature=shared',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/socialmedua-ic2.svg',
      handle: 'VIP Numbers Club Official'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/share/19SUhFDVsE/',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/socialmedua-ic3.svg',
      handle: 'VIP Numbers Club'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vip_number_club',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/socialmedua-ic4.svg',
      handle: '@vip_number_club'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vip-numbers-club-04397640a',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/LinkedIn.svg',
      handle: 'VIP Numbers Club India',
      invertIcon: true
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/9111117777',
      icon: 'https://www.vipnumbersclub.com/assets/front/img/whatsapp-ic.svg',
      handle: '+91 9111117777 (Ranvijay)'
    }
  ];

  return (
    <div className="social-media-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Authentic Top Header */}
      <TopHeader title="Follow VIP Numbers Club Online" />

      {/* 2. Page Center Icon */}
      <section className="page-center-ic padding-70" style={{ paddingTop: '35px', paddingBottom: '25px' }}>
        <div className="container">
          <div className="page-center-ic-in">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/social-media-page-ic.svg"
              alt="Social Media"
            />
          </div>
        </div>
      </section>

      {/* 3. Social Media Cards List */}
      <section className="socialmedia-sec padding-70" style={{ paddingTop: '10px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="socialmedia-sec-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="row g-4 justify-content-center">
              {socialChannels.map((item, idx) => (
                <div key={idx} className="col-lg-6 col-12">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialmedia-itm text-decoration-none"
                    style={{
                      background: '#0F0F0F',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      borderRadius: '16px',
                      border: '1px solid #282828',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ECAE01';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#282828';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      className="socialmedia-ic"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        style={{
                          width: '26px',
                          height: '26px',
                          filter: item.invertIcon ? 'brightness(0) invert(1)' : 'none'
                        }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        className="socialmedia-nm"
                        style={{
                          display: 'inline-block',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '15px',
                          marginBottom: '2px'
                        }}
                      >
                        {item.name}
                      </div>
                      <div style={{ color: '#888', fontSize: '12px' }}>
                        {item.handle}
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#ECAE01',
                        color: '#000',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '14px',
                        flexShrink: 0
                      }}
                    >
                      →
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
