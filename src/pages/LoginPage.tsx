import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();

  const [mode, setMode] = useState<'password' | 'otp' | 'register'>('password');
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'password') {
      if (!loginInput.trim() || !password.trim()) {
        showToast('Please enter both mobile/email and password.', 'error');
        return;
      }
      showToast(`Welcome back! Successfully logged in as ${loginInput}`, 'success');
      setTimeout(() => navigate('/'), 1200);
    } else if (mode === 'otp') {
      if (!otpSent) {
        if (!loginInput.trim()) {
          showToast('Please enter your mobile number to receive OTP.', 'error');
          return;
        }
        setOtpSent(true);
        showToast(`6-Digit OTP sent to ${loginInput}`, 'success');
      } else {
        if (!otp.trim()) {
          showToast('Please enter the OTP received.', 'error');
          return;
        }
        showToast('OTP verified successfully! Welcome to VIP Numbers Club.', 'success');
        setTimeout(() => navigate('/'), 1200);
      }
    } else if (mode === 'register') {
      if (!fullName.trim() || !loginInput.trim() || !password.trim()) {
        showToast('Please fill in all registration fields.', 'error');
        return;
      }
      showToast(`Account created successfully! Welcome, ${fullName}.`, 'success');
      setTimeout(() => navigate('/'), 1200);
    }
  };

  return (
    <div className="login-page" style={{ minHeight: '80vh', backgroundColor: '#000' }}>
      {/* 1. Original Header */}
      <section className="header-sec" style={{ borderBottom: '1px solid #1c1c1c', padding: '16px 0' }}>
        <div className="container">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <div className="header-l">
              <div className="header-login d-flex align-items-center gap-3">
                <span className="login-ic" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/login-ic.svg"
                    alt="Login"
                    style={{ width: '22px', height: '22px' }}
                  />
                </span>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '20px', fontWeight: 700 }}>
                  {mode === 'register' ? 'Create VIP Account' : mode === 'otp' ? 'Login with OTP' : 'Login Account'}
                </h4>
              </div>
            </div>

            <div className="close_wrap">
              <Link to="/" className="close" style={{ opacity: 1, textDecoration: 'none' }}>
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/close.svg"
                  alt="Close"
                  style={{ width: '18px', height: '18px' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Login Form Wrapper */}
      <section className="login-wrap padding-70" style={{ paddingTop: '50px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="login-form-inner" style={{ maxWidth: '480px', margin: '0 auto', background: '#0F0F0F', border: '1px solid #282828', borderRadius: '20px', padding: '35px 30px' }}>
            <form onSubmit={handleSubmit}>
              {mode === 'register' && (
                <div className="form-group mb-3">
                  <label htmlFor="fullName" style={{ color: '#aaa', fontSize: '13px', marginBottom: '6px', display: 'block' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '12px 14px' }}
                    required
                  />
                </div>
              )}

              <div className="form-group mb-3">
                <label htmlFor="login" style={{ color: '#aaa', fontSize: '13px', marginBottom: '6px', display: 'block' }}>
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  name="login"
                  className="form-control"
                  id="login"
                  placeholder="Enter email or mobile number"
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                  style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '12px 14px' }}
                  required
                  autoFocus
                />
              </div>

              {mode === 'password' && (
                <div className="form-group mb-3">
                  <label htmlFor="password" style={{ color: '#aaa', fontSize: '13px', marginBottom: '6px', display: 'block' }}>
                    Password
                  </label>
                  <div className="Password-s position-relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '12px 42px 12px 14px' }}
                      required
                    />
                    <div
                      className="show-pw position-absolute"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#ECAE01' }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>
                </div>
              )}

              {mode === 'otp' && otpSent && (
                <div className="form-group mb-3">
                  <label htmlFor="otp" style={{ color: '#aaa', fontSize: '13px', marginBottom: '6px', display: 'block' }}>
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    className="form-control"
                    id="otp"
                    placeholder="Enter 6-digit OTP (e.g. 123456)"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{ background: '#000', border: '1px solid #ECAE01', color: '#fff', borderRadius: '10px', padding: '12px 14px', letterSpacing: '4px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
                    required
                  />
                  <div className="mt-2 text-end">
                    <button
                      type="button"
                      onClick={() => showToast('Resent new 6-digit OTP to your mobile!', 'success')}
                      className="btn btn-link text-decoration-none p-0"
                      style={{ color: '#ECAE01', fontSize: '12px' }}
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>
              )}

              {mode === 'password' && (
                <div className="forgot-pw mb-4 text-end">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('otp');
                      showToast('Switched to OTP verification mode for quick login without password.', 'info');
                    }}
                    className="btn btn-link text-decoration-none p-0"
                    style={{ color: '#ECAE01', fontSize: '12px' }}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <div className="submit-wrp mb-3">
                <button
                  type="submit"
                  className="btn btn_primary w-100"
                  style={{
                    background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                    color: '#000',
                    fontWeight: 700,
                    padding: '13px 20px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '15px'
                  }}
                >
                  {mode === 'password'
                    ? 'Submit'
                    : mode === 'otp' && !otpSent
                    ? 'Request OTP'
                    : mode === 'otp' && otpSent
                    ? 'Verify OTP & Enter'
                    : 'Register Account'}
                </button>
              </div>

              {mode === 'password' && (
                <div className="login-with-otp mb-3">
                  <button
                    type="button"
                    onClick={() => setMode('otp')}
                    className="btn btn_border w-100"
                    style={{
                      border: '1px solid #444',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      background: 'transparent'
                    }}
                  >
                    Login With OTP
                  </button>
                </div>
              )}

              {mode === 'otp' && (
                <div className="login-with-otp mb-3">
                  <button
                    type="button"
                    onClick={() => setMode('password')}
                    className="btn btn_border w-100"
                    style={{
                      border: '1px solid #444',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      background: 'transparent'
                    }}
                  >
                    Login With Password
                  </button>
                </div>
              )}

              <div className="dont-account text-center mb-4" style={{ fontSize: '13px', color: '#888' }}>
                {mode === 'register' ? (
                  <p className="m-0">
                    Already have an account?{' '}
                    <span>
                      <button
                        type="button"
                        onClick={() => setMode('password')}
                        className="btn btn-link text-decoration-none p-0"
                        style={{ color: '#ECAE01', fontWeight: 600 }}
                      >
                        Login Here
                      </button>
                    </span>
                  </p>
                ) : (
                  <p className="m-0">
                    If you dont have an account?{' '}
                    <span>
                      <button
                        type="button"
                        onClick={() => setMode('register')}
                        className="btn btn-link text-decoration-none p-0"
                        style={{ color: '#ECAE01', fontWeight: 600 }}
                      >
                        Create Account
                      </button>
                    </span>
                  </p>
                )}
              </div>

              <div className="reseller-panel submit-wrp pt-3" style={{ borderTop: '1px solid #222' }}>
                <Link
                  to="/reseller-panel"
                  className="btn btn_primary w-100 text-decoration-none text-center"
                  style={{
                    background: '#1A1A1A',
                    color: '#ECAE01',
                    border: '1px solid #ECAE01',
                    padding: '12px 20px',
                    borderRadius: '50px',
                    fontWeight: 700,
                    display: 'block'
                  }}
                >
                  Reseller Panel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
