import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SideDashboard } from './components/SideDashboard';
import { LowestPriceModal } from './components/LowestPriceModal';
import { LuckyNumberModal } from './components/LuckyNumberModal';
import { BookingModal } from './components/BookingModal';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { NumerologySearchPage } from './pages/NumerologySearchPage';
import { SuperHighDiscountedSalesPage } from './pages/SuperHighDiscountedSalesPage';
import { LoginPage } from './pages/LoginPage';
import { ResellerPanelPage } from './pages/ResellerPanelPage';
import { ClientelePage } from './pages/ClientelePage';
import { PreBookingPage } from './pages/PreBookingPage';
import { HighDiscountPreBookingLotPage } from './pages/HighDiscountPreBookingLotPage';
import { HomeDeliveryPage } from './pages/HomeDeliveryPage';
import { PressNewsArticlePage } from './pages/PressNewsArticlePage';
import { ProcessPage } from './pages/ProcessPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { GeneralDoubtsPage } from './pages/GeneralDoubtsPage';
import { CartPage } from './pages/CartPage';
import { PrepaidPostpaidPage } from './pages/PrepaidPostpaidPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-dark-pure text-white selection:bg-gold selection:text-black">
          {/* Global Header */}
          <Header />

          {/* Main App Content */}
          <main className="flex-1">
            <Routes>
              {/* Home & Search */}
              <Route path="/" element={<HomePage />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
              <Route path="/search-front" element={<SearchResultsPage />} />
              <Route path="/numerology-search" element={<NumerologySearchPage />} />

              {/* Side Drawer Pages (17 Original Elements) */}
              <Route path="/super-high-discounted-sales" element={<SuperHighDiscountedSalesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login-otp" element={<LoginPage />} />
              <Route path="/register" element={<LoginPage />} />
              <Route path="/forgot-password" element={<LoginPage />} />
              <Route path="/reseller-panel" element={<ResellerPanelPage />} />
              <Route path="/clientele" element={<ClientelePage />} />
              <Route path="/pre-booking" element={<PreBookingPage />} />
              <Route path="/high-discount-pre-booking-lot" element={<HighDiscountPreBookingLotPage />} />
              <Route path="/home-delivery" element={<HomeDeliveryPage />} />
              <Route path="/press-news-article" element={<PressNewsArticlePage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/social-media" element={<SocialMediaPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/page/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/general-doubts" element={<GeneralDoubtsPage />} />
              <Route path="/cart" element={<CartPage />} />

              {/* Additional Guides */}
              <Route path="/prepaid-postpaid" element={<PrepaidPostpaidPage />} />

              {/* Fallback to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Modals & Drawers */}
          <SideDashboard />
          <CartDrawer />
          <WishlistDrawer />
          <LowestPriceModal />
          <LuckyNumberModal />
          <BookingModal />
          <ToastContainer />

          {/* Floating Actions (WhatsApp & Live ticker) */}
          <FloatingActions />

          {/* Global Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
