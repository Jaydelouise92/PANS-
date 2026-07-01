import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/ChatWidget';
import BackgroundMusic from './components/BackgroundMusic';

const Home = lazy(() => import('./pages/Home'));
const StartHere = lazy(() => import('./pages/StartHere'));
const About = lazy(() => import('./pages/About'));
const WhoWeSupport = lazy(() => import('./pages/WhoWeSupport'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const FirstFortyEightHours = lazy(() => import('./pages/FirstFortyEightHours'));
const Resources = lazy(() => import('./pages/Resources'));
const ParentRights = lazy(() => import('./pages/ParentRights'));
const SystemExplained = lazy(() => import('./pages/SystemExplained'));
const ChildrensCourt = lazy(() => import('./pages/ChildrensCourt'));
const MentalHealth = lazy(() => import('./pages/MentalHealth'));
const Founder = lazy(() => import('./pages/Founder'));
const Funding = lazy(() => import('./pages/Funding'));
const Contact = lazy(() => import('./pages/Contact'));
const AdvocacySupport = lazy(() => import('./pages/AdvocacySupport'));
const SupportPANS = lazy(() => import('./pages/SupportPANS'));
const SupervisedContact = lazy(() => import('./pages/SupervisedContact'));
const SelfRepresented = lazy(() => import('./pages/SelfRepresented'));
const EmotionalImpact = lazy(() => import('./pages/EmotionalImpact'));
const MeetingPreparationGuide = lazy(() => import('./pages/guides/MeetingPreparationGuide'));
const CourtTermsGuide = lazy(() => import('./pages/guides/CourtTermsGuide'));
const OrganiseDocumentsGuide = lazy(() => import('./pages/guides/OrganiseDocumentsGuide'));
const Video = lazy(() => import('./pages/Video'));
const CPProcessFromFirstContact = lazy(() => import('./pages/articles/CPProcessFromFirstContact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const ParentFeedback = lazy(() => import('./pages/ParentFeedback'));
const Copyright = lazy(() => import('./pages/Copyright'));
const DisabilityRights = lazy(() => import('./pages/DisabilityRights'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
import CookieBanner from './components/CookieBanner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[400px]">
      <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-brand-primary text-white px-4 py-2 rounded-lg shadow-lg font-bold transition-all"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
        <Suspense fallback={<LoadingFallback />}>
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
            <Route path="/supervised-contact" element={<SupervisedContact />} />
            <Route path="/self-represented" element={<SelfRepresented />} />
            <Route path="/emotional-impact" element={<EmotionalImpact />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/advocacy-support" element={<AdvocacySupport />} />
            <Route path="/support-pans" element={<SupportPANS />} />
            <Route path="/guides/meeting-preparation" element={<MeetingPreparationGuide />} />
            <Route path="/guides/court-terms" element={<CourtTermsGuide />} />
            <Route path="/guides/organise-documents" element={<OrganiseDocumentsGuide />} />
            <Route path="/articles/child-protection-process-victoria" element={<CPProcessFromFirstContact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/parent-feedback" element={<ParentFeedback />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/disability-rights" element={<DisabilityRights />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/video" element={<Video />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
      <BackgroundMusic />
      <CookieBanner />
    </div>
  );
}

function VideoRoute() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Video />
    </div>
  );
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/video" element={<VideoRoute />} />
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
