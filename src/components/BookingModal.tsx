import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { MessageCircle, PhoneCall, ShieldCheck, CheckCircle2, Truck, FileText } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { bookingTargetNumber, closeBookingModal, showToast } = useApp();

  const [simType, setSimType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [network, setNetwork] = useState<'jio' | 'airtel' | 'vi' | 'bsnl' | 'any'>('any');
  const [deliveryType, setDeliveryType] = useState<'online_upc' | 'home_delivery'>('online_upc');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!bookingTargetNumber) return null;

  const handleWhatsAppBooking = () => {
    const text = `*VIP NUMBER BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━
• *Number:* ${bookingTargetNumber.displayNumber}
• *Price:* ${bookingTargetNumber.price} (MRP: ${bookingTargetNumber.originalPrice})
• *ID:* ${bookingTargetNumber.id}
• *Sim Type:* ${simType.toUpperCase()}
• *Preferred Network:* ${network.toUpperCase()}
• *Fulfillment:* ${deliveryType === 'online_upc' ? 'Instant Online UPC Code' : 'Doorstep COD Delivery'}
${name ? `• *Customer Name:* ${name}` : ''}
${phone ? `• *Contact Phone:* ${phone}` : ''}
${city ? `• *City:* ${city}` : ''}
━━━━━━━━━━━━━━━━━━
Hello Ranvijay, I would like to book this VIP number immediately. Please confirm availability and next steps.`;

    const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('Connecting with Ranvijay on WhatsApp...', 'success');
    closeBookingModal();
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.trim().length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Callback request registered! Ranvijay will call you shortly.', 'success');
    setTimeout(() => {
      setIsSubmitted(false);
      closeBookingModal();
    }, 2500);
  };

  return (
    <div
      className="modal fade show"
      tabIndex={-1}
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
          maxWidth: '540px',
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
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          <div className="modal-body" style={{ padding: '30px 25px', position: 'relative' }}>
            {/* Original Close button */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeBookingModal}
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 1
              }}
            >
              <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
            </button>

            {isSubmitted ? (
              <div style={{ padding: '40px 10px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <CheckCircle2 style={{ width: '36px', height: '36px' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
                  Booking Request Received
                </h3>
                <p style={{ color: '#aaa', fontSize: '14px', maxWidth: '320px', margin: '0 auto' }}>
                  Our executive Ranvijay has received your interest for <strong style={{ color: '#ECAE01' }}>{bookingTargetNumber.displayNumber}</strong>. We will call you within 15 minutes.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Target Number Display */}
                <div style={{ textAlign: 'center', borderBottom: '1px solid #222', paddingBottom: '18px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#ECAE01', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Direct Booking & Instant Activation
                  </span>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '1px', marginTop: '6px' }}>
                    {bookingTargetNumber.displayNumber}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '4px' }}>
                    <span style={{ color: '#666', textDecoration: 'line-through', fontSize: '14px' }}>
                      {bookingTargetNumber.originalPrice}
                    </span>
                    <span style={{ color: '#ECAE01', fontSize: '24px', fontWeight: 800 }}>
                      {bookingTargetNumber.price}
                    </span>
                  </div>
                </div>

                {/* Connection Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                    1. Select Connection Type
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setSimType('prepaid')}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 600,
                        border: simType === 'prepaid' ? '1px solid #ECAE01' : '1px solid #333',
                        background: simType === 'prepaid' ? 'rgba(236, 174, 1, 0.15)' : '#000',
                        color: simType === 'prepaid' ? '#ECAE01' : '#aaa',
                        cursor: 'pointer'
                      }}
                    >
                      Prepaid SIM
                    </button>
                    <button
                      type="button"
                      onClick={() => setSimType('postpaid')}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 600,
                        border: simType === 'postpaid' ? '1px solid #ECAE01' : '1px solid #333',
                        background: simType === 'postpaid' ? 'rgba(236, 174, 1, 0.15)' : '#000',
                        color: simType === 'postpaid' ? '#ECAE01' : '#aaa',
                        cursor: 'pointer'
                      }}
                    >
                      Postpaid SIM
                    </button>
                  </div>
                </div>

                {/* Telecom Network */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                    2. Preferred Telecom Network
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                    {(['jio', 'airtel', 'vi', 'bsnl', 'any'] as const).map(net => (
                      <button
                        key={net}
                        type="button"
                        onClick={() => setNetwork(net)}
                        style={{
                          padding: '8px 4px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          border: network === net ? '1px solid #ECAE01' : '1px solid #333',
                          background: network === net ? 'rgba(236, 174, 1, 0.15)' : '#000',
                          color: network === net ? '#ECAE01' : '#aaa',
                          cursor: 'pointer'
                        }}
                      >
                        {net}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activation / Delivery */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                    3. Activation & Fulfillment
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('online_upc')}
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        textAlign: 'left',
                        border: deliveryType === 'online_upc' ? '1px solid #ECAE01' : '1px solid #333',
                        background: deliveryType === 'online_upc' ? 'rgba(236, 174, 1, 0.12)' : '#000',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}
                    >
                      <FileText style={{ width: '18px', height: '18px', color: '#ECAE01', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>Instant Online UPC</div>
                        <div style={{ color: '#777', fontSize: '11px' }}>Fastest MNP code via SMS</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryType('home_delivery')}
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        textAlign: 'left',
                        border: deliveryType === 'home_delivery' ? '1px solid #ECAE01' : '1px solid #333',
                        background: deliveryType === 'home_delivery' ? 'rgba(236, 174, 1, 0.12)' : '#000',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}
                    >
                      <Truck style={{ width: '18px', height: '18px', color: '#ECAE01', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>Doorstep Delivery</div>
                        <div style={{ color: '#777', fontSize: '11px' }}>COD with KYC verification</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Input Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Your Name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#000',
                      border: '1px solid #333',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Your Mobile Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#000',
                      border: '1px solid #333',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '5px' }}>
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    style={{
                      width: '100%',
                      background: '#25D366',
                      color: '#fff',
                      fontWeight: 700,
                      padding: '14px',
                      borderRadius: '12px',
                      border: 'none',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                    }}
                  >
                    <MessageCircle style={{ width: '20px', height: '20px', fill: '#fff' }} />
                    <span>Book Instantly on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCallbackSubmit}
                    style={{
                      width: '100%',
                      background: '#111',
                      color: '#ccc',
                      fontWeight: 600,
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid #333',
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <PhoneCall style={{ width: '14px', height: '14px', color: '#ECAE01' }} />
                    <span>Request 15-Minute Callback from Ranvijay</span>
                  </button>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', borderTop: '1px solid #1a1a1a', paddingTop: '12px', color: '#666', fontSize: '11px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck style={{ width: '14px', height: '14px', color: '#ECAE01' }} /> 100% Legal MNP Transfer
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 style={{ width: '14px', height: '14px', color: '#10b981' }} /> Full Money-Back Guarantee
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
