import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Trash2, ShieldCheck, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, openBookingModal } = useApp();
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.number.priceNumeric, 0);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      openBookingModal(cart[0].number);
    }
  };

  const hindiVideos = [
    {
      title: 'How to Buy VIP Number Online (Hindi)',
      thumbnail: 'https://www.vipnumbersclub.com/assets/front/img/add-img1.png',
      src: 'https://www.vipnumbersclub.com/uploads/banners/cCqP3NUJ8L9shS0SU9w3.mp4'
    },
    {
      title: 'UPC Code & MNP Porting Guide',
      thumbnail: 'https://www.vipnumbersclub.com/assets/front/img/add-img1.png',
      src: 'https://www.vipnumbersclub.com/uploads/banners/x9bG3M0ojaLADD0wcL2X.mp4'
    }
  ];

  const englishVideos = [
    {
      title: 'Complete VIP Number Activation Steps (English)',
      thumbnail: 'https://www.vipnumbersclub.com/assets/front/img/add-img1.png',
      src: 'https://www.vipnumbersclub.com/uploads/banners/VdMvR80q4R8mQYw5kC3M.mp4'
    },
    {
      title: 'Doorstep SIM Delivery and KYC Verification',
      thumbnail: 'https://www.vipnumbersclub.com/assets/front/img/add-img1.png',
      src: 'https://www.vipnumbersclub.com/uploads/banners/x9bG3M0ojaLADD0wcL2X.mp4'
    }
  ];

  return (
    <div className="cart-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Header with Left-aligned Cart Icon */}
      <header className="top-header">
        <div className="container">
          <div className="top-header-in top-heade-left d-flex align-items-center gap-3">
            <div className="top-header-icon" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://www.vipnumbersclub.com/assets/front/img/cart-page-ic.svg"
                alt="Cart Icon"
                style={{ width: '24px', height: '24px' }}
              />
            </div>
            <div className="top-header-con">
              <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 700, margin: 0 }}>
                Cart Detail
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Login Callout Banner */}
      <section className="cart-info padding-70" style={{ paddingTop: '30px', paddingBottom: '20px' }}>
        <div className="container">
          <div
            className="box-sec p-4 text-center"
            style={{
              background: '#0F0F0F',
              border: '1px solid #333',
              borderRadius: '16px',
              maxWidth: '700px',
              margin: '0 auto',
              color: '#ccc',
              fontSize: '14px'
            }}
          >
            Please{' '}
            <Link
              to="/login"
              className="color-orange"
              style={{ color: '#ECAE01', fontWeight: 700, textDecoration: 'underline' }}
            >
              Login
            </Link>{' '}
            to complete your profile for checkout.
          </div>
        </div>
      </section>

      {/* 3. Cart Items Section */}
      <section className="cart-list padding-70" style={{ paddingTop: '10px', paddingBottom: '50px' }}>
        <div className="container">
          <div className="cart-list-in" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>
              Cart Items ({cart.length})
            </h3>

            {cart.length === 0 ? (
              <div
                className="text-center p-5"
                style={{
                  background: '#0F0F0F',
                  border: '1px solid #282828',
                  borderRadius: '20px',
                  padding: '60px 20px'
                }}
              >
                <div style={{ color: '#666', marginBottom: '16px' }}>
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/cart-search-ic.svg"
                    alt="Empty Cart"
                    style={{ width: '50px', height: '50px', opacity: 0.5, filter: 'grayscale(1)' }}
                  />
                </div>
                <p style={{ color: '#aaa', fontSize: '16px', marginBottom: '24px' }}>
                  Your cart is empty.
                </p>
                <div className="submit-wrp">
                  <Link
                    to="/search-results"
                    className="btn btn_primary text-decoration-none"
                    style={{
                      background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                      color: '#000',
                      fontWeight: 700,
                      padding: '12px 32px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {cart.map((item) => (
                  <div
                    key={item.number.id}
                    className="cart-item-card p-4"
                    style={{
                      background: '#0F0F0F',
                      border: '1px solid #282828',
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '16px'
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '240px' }}>
                      <div
                        className="font-mono text-white font-weight-bold"
                        style={{ fontSize: '22px', letterSpacing: '1px', marginBottom: '4px' }}
                      >
                        {item.number.displayNumber}
                      </div>

                      <div className="d-flex align-items-center gap-3 pt-1">
                        <span style={{ color: '#777', textDecoration: 'line-through', fontSize: '13px' }}>
                          {item.number.originalPrice}
                        </span>
                        <span style={{ color: '#ECAE01', fontSize: '18px', fontWeight: 800 }}>
                          {item.number.price}
                        </span>
                        <span
                          style={{
                            background: '#1A1A1A',
                            color: '#ccc',
                            fontSize: '11px',
                            padding: '2px 8px',
                            borderRadius: '10px'
                          }}
                        >
                          Sum: {item.number.sum} • Total: {item.number.total}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.number.id)}
                        className="btn border-0 bg-transparent p-2 cursor-pointer"
                        title="Remove Number"
                        style={{ color: '#EF4444' }}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Pricing Summary */}
                <div
                  className="cart-summary p-4 mt-3"
                  style={{
                    background: '#0B0B0B',
                    border: '1px solid #ECAE01',
                    borderRadius: '18px'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span style={{ color: '#aaa', fontSize: '14px' }}>Subtotal ({cart.length} items)</span>
                    <span style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>
                      ₹{calculateTotal().toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span style={{ color: '#10B981', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={16} /> Free Online UPC Delivery
                    </span>
                    <span style={{ color: '#10B981', fontSize: '13px', fontWeight: 700 }}>₹0</span>
                  </div>

                  <div className="d-flex gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="btn btn_primary flex-1"
                      style={{
                        background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                        color: '#000',
                        fontWeight: 800,
                        padding: '14px 28px',
                        borderRadius: '50px',
                        fontSize: '15px',
                        border: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Proceed to Checkout (₹{calculateTotal().toLocaleString('en-IN')})
                    </button>

                    <Link
                      to="/search-results"
                      className="btn btn_border"
                      style={{
                        border: '1px solid #444',
                        color: '#fff',
                        padding: '14px 24px',
                        borderRadius: '50px',
                        fontSize: '13px',
                        textDecoration: 'none'
                      }}
                    >
                      Add More Numbers
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Educational Video Guides Section */}
      <section className="cart-video pb-5" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="cart-video-in" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h3 className="text-center" style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '30px' }}>
              Videos for easy understanding
            </h3>

            <div className="row g-4">
              {/* Hindi Column */}
              <div className="col-md-6 col-12">
                <div
                  className="black-box p-3"
                  style={{ background: '#0F0F0F', border: '1px solid #282828', borderRadius: '18px' }}
                >
                  <div className="black-box-header mb-3">
                    <h4 style={{ color: '#ECAE01', fontSize: '16px', fontWeight: 700, margin: 0 }}>
                      Hindi Videos
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    {hindiVideos.map((vid, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveVideoModal(vid.src)}
                        className="video-item position-relative cursor-pointer overflow-hidden"
                        style={{
                          borderRadius: '12px',
                          border: '1px solid #333',
                          background: '#000',
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#ECAE01',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: '#000'
                          }}
                        >
                          <Play size={18} fill="#000" />
                        </div>
                        <div>
                          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{vid.title}</div>
                          <div style={{ color: '#888', fontSize: '11px' }}>Click to watch video tutorial</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* English Column */}
              <div className="col-md-6 col-12">
                <div
                  className="black-box p-3"
                  style={{ background: '#0F0F0F', border: '1px solid #282828', borderRadius: '18px' }}
                >
                  <div className="black-box-header mb-3">
                    <h4 style={{ color: '#ECAE01', fontSize: '16px', fontWeight: 700, margin: 0 }}>
                      English Videos
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    {englishVideos.map((vid, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveVideoModal(vid.src)}
                        className="video-item position-relative cursor-pointer overflow-hidden"
                        style={{
                          borderRadius: '12px',
                          border: '1px solid #333',
                          background: '#000',
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#ECAE01',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: '#000'
                          }}
                        >
                          <Play size={18} fill="#000" />
                        </div>
                        <div>
                          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{vid.title}</div>
                          <div style={{ color: '#888', fontSize: '11px' }}>Click to watch video tutorial</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div
          className="modal fade show"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            padding: '15px'
          }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '640px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#0F0F0F',
                border: '1px solid #ECAE01',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              <div className="modal-body p-0 position-relative">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveVideoModal(null)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.7)',
                    borderRadius: '50%',
                    padding: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>
                <video controls autoPlay playsInline style={{ width: '100%', maxHeight: '420px', display: 'block' }}>
                  <source src={activeVideoModal} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
