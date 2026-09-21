import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import RFQDrawer from './components/RFQDrawer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import CoreValuesPage from './pages/CoreValuesPage';
import ClientsPage from './pages/ClientsPage';
import GalleryPage from './pages/GalleryPage';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const handleOpenRFQ = (productContext = null) => {
    setRfqModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-silver font-sans text-brand-dark selection:bg-brand-blue selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenRFQ={() => handleOpenRFQ()} />

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/solutions" element={<Services onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/projects" element={<Projects onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/core-values" element={<CoreValuesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/industries" element={<Industries onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenRFQ={handleOpenRFQ} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenRFQ={() => handleOpenRFQ()} />

        {/* Global Floating RFQ Dock */}
        <RFQDrawer onOpenRFQ={() => handleOpenRFQ()} />

        {/* Request for Quote Modal Popup */}
        <RFQModal
          isOpen={rfqModalOpen}
          onClose={() => setRfqModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
