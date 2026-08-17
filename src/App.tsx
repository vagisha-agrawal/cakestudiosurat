/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HowToOrder from './pages/HowToOrder';
import HappyCustomers from './pages/HappyCustomers';
import OurCakes from './pages/OurCakes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-brand-cream text-brand-brown">
        <Navbar />
        <main className="flex-grow flex flex-col relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/customers" element={<HappyCustomers />} />
            <Route path="/cakes" element={<OurCakes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

