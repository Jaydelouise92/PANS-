import React from 'react';
import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/ChatWidget';

import Home from './pages/Home';
import StartHere from './pages/StartHere';
import About from './pages/About';
import WhoWeSupport from './pages/WhoWeSupport';
import HowItWorks from './pages/HowItWorks';
import FirstFortyEightHours from './pages/FirstFortyEightHours';
import Resources from './pages/Resources';
import ParentRights from './pages/ParentRights';
import SystemExplained from './pages/SystemExplained';
import ChildrensCourt from './pages/ChildrensCourt';
import MentalHealth from './pages/MentalHealth';
import Founder from './pages/Founder';
import Funding from './pages/Funding';
import Contact from './pages/Contact';
import AdvocacySupport from './pages/AdvocacySupport';
import SupportPANS from './pages/SupportPANS';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-support" element={<WhoWeSupport />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/first-48-hours" element={<FirstFortyEightHours />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/parent-rights" element={<ParentRights />} />
          <Route path="/system-explained" element={<SystemExplained />} />
          <Route path="/childrens-court" element={<ChildrensCourt />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advocacy-support" element={<AdvocacySupport />} />
          <Route path="/support-pans" element={<SupportPANS />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
