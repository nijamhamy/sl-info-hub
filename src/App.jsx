import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';

import Home from './pages/Home';
import SLNews from './pages/SLNews';
import SLRadio from './pages/SLRadio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from "./components/Footer";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import WebViewer from "./pages/WebViewer";
import CookieBanner from "./components/CookieBanner";

import { HelmetProvider } from "react-helmet-async";   // ⭐ NEW

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <HelmetProvider>       {/* ⭐ WRAP EVERYTHING HERE */}

      <Navbar />

      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sl-news" element={<SLNews />} />
          <Route path="/sl-radio" element={<SLRadio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webview/:url" element={<WebViewer />} />
        </Routes>
      )}

      {/* ⭐ AdSense Cookie Banner */}
      <CookieBanner />

      <Footer />

    </HelmetProvider>
  );
}

export default AppContent;
