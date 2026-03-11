/**
 * PANS Victoria - Parent Advocacy & Navigation Service
 * Redesigned website with improved UI/UX
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  MapPin, 
  Scale, 
  BookOpen, 
  Users, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  Heart,
  FileText,
  Gavel,
  Info,
  CheckCircle2,
  Send,
  Loader2,
  Bot,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

// Types
type Section = 'home' | 'about' | 'who-we-support' | 'support' | 'how-it-works' | 'guide' | 'resources' | 'supporting-pans' | 'contact';

// Images from design guidelines
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1742210167640-35d0ada27189?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxjYWxtJTIwbmF0dXJlJTIwcGF0aHdheSUyMHBlYWNlZnVsJTIwZm9yZXN0JTIwc3VubGlnaHR8ZW58MHx8fHwxNzczMjEyNjg3fDA&ixlib=rb-4.1.0&q=85",
  about: "https://images.unsplash.com/photo-1709127347876-114b147e270c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxzdXBwb3J0aXZlJTIwcGFyZW50JTIwY2hpbGQlMjBhZHZvY2FjeSUyMGNvbXBhc3Npb25hdGUlMjB0aGVyYXB5JTIwbGlzdGVuaW5nJTIwc2Vzc2lvbiUyMGZhbWlseSUyMGd1aWRhbmNlfGVufDB8fHx8MTc3MzIxMjY4MXww&ixlib=rb-4.1.0&q=85",
  support: "https://images.unsplash.com/photo-1701055448945-fb948dd48ef1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxzdXBwb3J0aXZlJTIwcGFyZW50JTIwY2hpbGQlMjBhZHZvY2FjeSUyMGNvbXBhc3Npb25hdGUlMjB0aGVyYXB5JTIwbGlzdGVuaW5nJTIwc2Vzc2lvbiUyMGZhbWlseSUyMGd1aWRhbmNlfGVufDB8fHx8MTc3MzIxMjY4MXww&ixlib=rb-4.1.0&q=85",
  therapy: "https://images.unsplash.com/photo-1758273240373-370993d0275d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxzdXBwb3J0aXZlJTIwcGFyZW50JTIwY2hpbGQlMjBhZHZvY2FjeSUyMGNvbXBhc3Npb25hdGUlMjB0aGVyYXB5JTIwbGlzdGVuaW5nJTIwc2Vzc2lvbiUyMGZhbWlseSUyMGd1aWRhbmNlfGVufDB8fHx8MTc3MzIxMjY4MXww&ixlib=rb-4.1.0&q=85",
};

// Scroll to section helper
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

// --- Navbar Component ---
const Navbar = ({ activeSection }: { activeSection: Section }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'who-we-support', label: 'Who We Support' },
    { id: 'support', label: 'Services' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'guide', label: 'First 48 Hours' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button 
          data-testid="logo-btn"
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          <div className="w-11 h-11 bg-brand-primary rounded-full flex items-center justify-center text-white font-heading text-xl font-bold shadow-lg">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold leading-none text-brand-primary">PANS Victoria</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">Parent Advocacy & Navigation</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-200 hover:text-brand-primary cursor-pointer relative py-2 ${
                activeSection === item.id 
                  ? 'text-brand-primary' 
                  : 'text-text-secondary'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                />
              )}
            </button>
          ))}
          <button 
            data-testid="nav-cta-btn"
            onClick={() => handleNavClick('contact')}
            className="btn-primary text-sm py-3 px-6"
          >
            Get Support
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-text-secondary cursor-pointer p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-purple-100 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium py-2 ${
                  activeSection === item.id ? 'text-brand-primary' : 'text-text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              data-testid="mobile-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="btn-primary mt-4"
            >
              Get Support
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section id="home" data-testid="hero-section" className="pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-8">
          <MapPin size={14} strokeWidth={1.5} /> Supporting Regional Victoria
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 text-text-primary">
          Parent Advocacy & Navigation Service
          <span className="text-brand-primary"> Victoria</span>
        </h1>
        <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
          PANS supports parents navigating the child protection system. We provide guidance, preparation, and navigation support so you can understand the process and advocate for yourself and your family.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            data-testid="hero-cta-btn"
            onClick={() => scrollToSection('contact')}
            className="btn-primary flex items-center gap-2"
          >
            Contact PANS for Support <ChevronRight size={18} strokeWidth={1.5} />
          </button>
          <button 
            data-testid="hero-secondary-btn"
            onClick={() => scrollToSection('guide')}
            className="btn-secondary"
          >
            First 48 Hours Guide
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative">
          {/* Decorative blob */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-accent/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-brand-primary/20 rounded-full blur-3xl" />
          
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={IMAGES.hero}
              alt="Peaceful pathway through nature - representing the journey of navigation and support" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
          </div>
        </div>

        {/* Floating card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl max-w-[260px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
              <Heart size={18} strokeWidth={1.5} />
            </div>
            <span className="font-heading font-bold text-sm">Lived Experience</span>
          </div>
          <p className="text-xs text-text-muted font-serif italic leading-relaxed">
            "Created by a parent who has personally navigated the system."
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Start Here CTA ---
const StartHere = () => (
  <section data-testid="start-here-section" className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/10 border border-brand-primary/20 rounded-[2.5rem] p-10 md:p-14"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-brand-primary">
          Start Here if You Need Help
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8 text-lg">
          If you are currently involved with Child Protection or preparing for court, PANS may be able to provide guidance and navigation support. Contact us to discuss your circumstances.
        </p>
        <button 
          data-testid="start-here-cta"
          onClick={() => scrollToSection('contact')}
          className="btn-primary"
        >
          Contact PANS Today
        </button>
      </div>
    </motion.div>
  </section>
);

// --- Why Parents Contact PANS ---
const WhyParentsContact = () => (
  <section data-testid="why-pans-section" className="section-padding bg-white rounded-[3rem]">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-heading font-bold mb-6"
      >
        Why Parents Contact PANS
      </motion.h2>
      <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full" />
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {[
        {
          title: "Lived Experience",
          desc: "PANS was created by a parent who has personally navigated the child protection system and understands the challenges families face.",
          icon: <Heart strokeWidth={1.5} />
        },
        {
          title: "Justice System Knowledge",
          desc: "The founder is studying criminology and criminal justice with a focus on justice systems and the experiences of families.",
          icon: <Scale strokeWidth={1.5} />
        },
        {
          title: "Child Safety Commitment",
          desc: "PANS operates with a valid Working With Children Check and aims to support families respectfully and responsibly.",
          icon: <Shield strokeWidth={1.5} />
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="card flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
            {item.icon}
          </div>
          <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-2xl font-serif italic text-text-secondary leading-relaxed">
        "Navigating the child protection system can feel overwhelming. PANS aims to help parents understand what is happening, stay organised, and approach the process with greater confidence."
      </p>
      <p className="mt-6 text-brand-primary font-heading font-semibold">— You are not alone.</p>
    </motion.div>
  </section>
);

// --- About Section ---
const AboutSection = () => (
  <section id="about" data-testid="about-section" className="section-padding">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-accent/20 rounded-full blur-2xl" />
          <img 
            src={IMAGES.about}
            alt="Supportive family moment" 
            className="relative rounded-3xl shadow-xl w-full object-cover max-h-[500px]"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 order-1 lg:order-2"
      >
        <h2 className="text-4xl font-heading font-bold text-brand-primary">Why PANS Exists</h2>
        <p className="text-text-secondary leading-relaxed">
          Many parents involved with Child Protection report feeling overwhelmed by the complexity of the system. Legal processes can be complex, and for some families, especially those living in regional Victoria, access to advocacy and support services can be limited.
        </p>
        <p className="text-text-secondary leading-relaxed">
          PANS was created after the founder experienced the child protection system firsthand and recognised the lack of clear guidance available to parents. Through this experience, it became clear that parents often need practical guidance to help them understand the system, prepare for meetings and court, and stay organised throughout their case.
        </p>
        <div className="pt-4">
          <div className="bg-brand-secondary p-6 rounded-2xl border border-purple-100">
            <h4 className="font-heading font-bold text-text-primary mb-2">About the Founder</h4>
            <p className="text-sm text-brand-primary font-medium uppercase tracking-wider mb-3">
              Criminology & Criminal Justice Student | WWCC Holder
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Alongside lived experience, the founder is studying criminology and criminal justice with a focus on justice systems and the experiences of families involved in child protection matters.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Testimonials ---
const Testimonials = () => {
  const testimonials = [
    { quote: "PANS helped me organize my thoughts and paperwork when I felt completely lost. Having someone who understood the system made all the difference.", author: "Sarah", location: "Regional Victoria" },
    { quote: "The support person assistance during my case plan meeting was invaluable. I felt heard and supported for the first time in months.", author: "Michael", location: "Melbourne" },
    { quote: "Navigating the Children's Court was terrifying until I had PANS by my side. They helped me prepare and stay focused on what mattered most.", author: "Emma", location: "Gippsland" },
    { quote: "I didn't know where to turn after the first 48 hours. PANS gave me a clear list of what to do and helped me find the right legal help.", author: "David", location: "Bendigo" },
    { quote: "Having someone who has been through it themselves meant I didn't have to explain the pain. They just knew.", author: "Lisa", location: "Ballarat" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section data-testid="testimonials-section" className="section-padding bg-gradient-to-br from-brand-primary/5 to-brand-accent/10 rounded-[3rem]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold mb-12 text-brand-primary">Parent Testimonials</h2>
        <div className="relative h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="text-2xl font-serif italic text-text-secondary mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-brand-primary">{testimonials[currentIndex].author}</span>
                <span className="text-sm text-text-muted uppercase tracking-widest">{testimonials[currentIndex].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              data-testid={`testimonial-dot-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Who We Support ---
const WhoWeSupport = () => (
  <section id="who-we-support" data-testid="who-we-support-section" className="section-padding">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-heading font-bold mb-6"
      >
        Who PANS Supports
      </motion.h2>
      <p className="text-lg text-text-secondary">
        PANS Victoria is dedicated to helping parents who feel overwhelmed by the complexity of the child protection system.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Child Protection Involvement", desc: "Parents currently involved with Child Protection services." },
        { title: "Children's Court Prep", desc: "Parents preparing for upcoming Children's Court hearings." },
        { title: "Self-Represented Parents", desc: "Parents representing themselves or struggling to access legal help." },
        { title: "Overwhelmed Families", desc: "Parents who feel lost or overwhelmed by the system's requirements." },
        { title: "Regional Families", desc: "Families in regional Victoria with limited access to support services." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="card"
        >
          <h3 className="font-heading text-xl font-bold mb-3 text-brand-primary">{item.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Support Services ---
const SupportServices = () => (
  <section id="support" data-testid="support-section" className="section-padding bg-white rounded-[3rem]">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-heading font-bold mb-6"
      >
        What Support PANS Provides
      </motion.h2>
      <p className="text-lg text-text-secondary">
        Practical guidance and navigation support across key areas of the child protection process.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        { title: "Case Navigation", icon: <MapPin strokeWidth={1.5} />, desc: "Helping parents understand how the child protection system works and what steps are happening in their case." },
        { title: "Court Preparation", icon: <Gavel strokeWidth={1.5} />, desc: "Helping parents organise timelines, documents, and key points when preparing for Children's Court hearings." },
        { title: "Meeting Preparation", icon: <Users strokeWidth={1.5} />, desc: "Helping parents prepare for meetings with Child Protection so they can ask questions and understand outcomes." },
        { title: "Service Navigation", icon: <Shield strokeWidth={1.5} />, desc: "Assisting parents with staying organised and understanding expectations for required services." },
        { title: "Contact Preparation", icon: <Heart strokeWidth={1.5} />, desc: "Helping parents understand supervised contact visits and how to prepare for meaningful visits." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="card hover:shadow-lg"
        >
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
            {item.icon}
          </div>
          <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
          <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Regional Support Banner */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-primary text-white p-10 md:p-14 rounded-[2.5rem] shadow-xl"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-heading font-bold mb-6">Support for Regional Families</h3>
          <p className="mb-6 opacity-90 leading-relaxed">
            PANS focuses on helping families in regional Victoria where services can be limited. Support is available through:
          </p>
          <ul className="space-y-3">
            {['Phone conversations', 'Online meetings', 'In-person support where possible'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h4 className="font-heading font-bold mb-4 flex items-center gap-2">
            <Info size={18} strokeWidth={1.5} /> Important Notice
          </h4>
          <p className="text-sm opacity-90 leading-relaxed">
            PANS provides guidance and navigation support only. The service does not provide legal advice or legal representation. We encourage parents to seek legal advice where possible.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

// --- How It Works ---
const HowItWorks = () => (
  <section id="how-it-works" data-testid="how-it-works-section" className="section-padding">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-heading font-bold mb-6"
      >
        How PANS Works
      </motion.h2>
      <p className="text-lg text-text-secondary">
        Our process is designed to be straightforward and supportive, helping you regain control and stay organised.
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20 -translate-x-1/2" />
      
      <div className="space-y-12">
        {[
          { step: "1", title: "Contact PANS", desc: "Parent reaches out to PANS for support.", icon: <MessageCircle strokeWidth={1.5} /> },
          { step: "2", title: "Initial Conversation", desc: "We discuss your situation to understand the context and needs.", icon: <Users strokeWidth={1.5} /> },
          { step: "3", title: "Case Mapping", desc: "Organising key events, documents, and timelines.", icon: <FileText strokeWidth={1.5} /> },
          { step: "4", title: "Preparation", desc: "Getting ready for meetings, services, or court hearings.", icon: <BookOpen strokeWidth={1.5} /> },
          { step: "5", title: "Ongoing Support", desc: "Continuous guidance as your case progresses.", icon: <MapPin strokeWidth={1.5} /> }
        ].map((item, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`card ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
              >
                <span className="text-sm font-bold text-brand-primary uppercase tracking-widest block mb-2">Step {item.step}</span>
                <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </motion.div>
            </div>
            <div className="relative z-10 w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
              {item.icon}
            </div>
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- First 48 Hours Guide ---
const First48Hours = () => (
  <section id="guide" data-testid="guide-section" className="section-padding">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card bg-brand-dark text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8">
          <Clock size={14} strokeWidth={1.5} /> Critical Support
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
          First 48 Hours After Removal
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
          The early stages of Child Protection involvement are often the most stressful. This guide helps you understand what to expect immediately after removal.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Immediate Actions", desc: "Stay calm, listen, and take notes of everything said. Ask for names and contact details of all workers." },
            { title: "Gather Information", desc: "Request copies of any orders or documents. You have a right to know the basis of involvement." },
            { title: "Organise Documents", desc: "Keep all paperwork in one place. Start a timeline of events and conversations." },
            { title: "First Court Hearing", desc: "Understand that a court hearing will happen quickly. Seek legal advice immediately." },
            { title: "Prepare for Meetings", desc: "Identify key questions you need answered and identify your support network." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <h4 className="font-heading font-bold text-brand-accent mb-2">{item.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

// --- Resources ---
const Resources = () => (
  <section id="resources" data-testid="resources-section" className="section-padding bg-white rounded-[3rem]">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-heading font-bold mb-6"
      >
        Resources for Parents
      </motion.h2>
      <p className="text-lg text-text-secondary">
        Helpful information and links to support your navigation of the child protection process.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Victoria Legal Aid", desc: "Free legal information, advice and representation.", icon: <Scale strokeWidth={1.5} />, link: "https://www.legalaid.vic.gov.au" },
        { title: "Children's Court of Victoria", desc: "Information about court procedures and what to expect.", icon: <Gavel strokeWidth={1.5} />, link: "https://www.childrenscourt.vic.gov.au" },
        { title: "DFFH - Child Protection", desc: "Official information about the child protection system.", icon: <BookOpen strokeWidth={1.5} />, link: "https://services.dffh.vic.gov.au/child-protection" },
        { title: "Parentline", desc: "Counselling and support for parents - Call 13 22 89", icon: <Phone strokeWidth={1.5} />, link: "tel:132289" }
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target={item.link.startsWith('http') ? '_blank' : undefined}
          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          data-testid={`resource-link-${i}`}
          className="card flex gap-6 items-start group cursor-pointer"
        >
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
            {item.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
            <p className="text-text-secondary text-sm mb-3">{item.desc}</p>
            <span className="text-brand-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              View Resource <ExternalLink size={14} strokeWidth={1.5} />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

// --- Supporting PANS ---
const SupportingPANS = () => (
  <section id="supporting-pans" data-testid="supporting-pans-section" className="section-padding">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-bold mb-8 text-brand-primary">Supporting PANS</h2>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            Parent Advocacy & Navigation Service Victoria (PANS) is currently being developed as an independent community support initiative focused on helping parents navigate the child protection system.
          </p>
          <p>
            At this stage, PANS operates without formal funding and support is being provided on a voluntary basis while the service grows.
          </p>
          <p>
            As the organisation develops, funding and community support may assist with expanding resources, providing guides for parents, and improving access to support for families navigating the system, particularly in regional Victoria.
          </p>
        </div>
      </motion.div>
      
      <div className="grid gap-5">
        {[
          { title: "Community Support", desc: "Positive feedback and sharing the service with parents who may benefit helps raise awareness.", icon: <Users strokeWidth={1.5} /> },
          { title: "Future Donations", desc: "As the service develops, opportunities to support PANS through donations may become available.", icon: <Heart strokeWidth={1.5} /> },
          { title: "Partnerships", desc: "PANS is open to connecting with organisations who share the goal of improving access to support.", icon: <Shield strokeWidth={1.5} /> },
          { title: "Transparency", desc: "PANS aims to operate transparently and responsibly as it develops.", icon: <Info strokeWidth={1.5} /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card flex gap-4 items-start"
          >
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading font-bold text-text-primary mb-1">{item.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact Form ---
const ContactSection = () => {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      setIsSubmitted(true);
      setFormData({ first_name: '', last_name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="section-padding bg-white rounded-[3rem]">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold mb-8">Contact PANS</h2>
          <p className="text-lg text-text-secondary mb-12 leading-relaxed">
            If you are navigating the child protection system and need guidance or navigation support, we are here to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-text-primary">Support Delivery</h4>
                <p className="text-text-secondary text-sm">Phone, online meetings, or in-person where possible.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-text-primary">Email Us</h4>
                <a href="mailto:support@pansvictoria.org.au" className="text-brand-primary hover:underline">
                  support@pansvictoria.org.au
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-text-primary">Response Time</h4>
                <p className="text-text-secondary text-sm">We aim to respond within 24-48 hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-secondary p-10 rounded-[2.5rem] shadow-xl border border-purple-100 relative overflow-hidden"
        >
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-brand-primary flex flex-col items-center justify-center text-white p-8 text-center z-10 rounded-[2.5rem]"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Message Sent</h3>
                <p className="text-white/80">
                  Thank you for reaching out. We will get back to you within 24-48 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-brand-primary mb-2 block">First Name</label>
                <input 
                  data-testid="contact-first-name"
                  required 
                  type="text" 
                  value={formData.first_name}
                  onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                  className="input-field" 
                  placeholder="Jane" 
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-primary mb-2 block">Last Name</label>
                <input 
                  data-testid="contact-last-name"
                  required 
                  type="text" 
                  value={formData.last_name}
                  onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                  className="input-field" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-brand-primary mb-2 block">Email Address</label>
              <input 
                data-testid="contact-email"
                required 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="input-field" 
                placeholder="jane@example.com" 
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-brand-primary mb-2 block">Message</label>
              <textarea 
                data-testid="contact-message"
                required 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="input-field resize-none" 
                placeholder="Tell us a bit about your situation..." 
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button 
              data-testid="contact-submit-btn"
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer data-testid="footer" className="bg-brand-secondary border-t border-purple-100 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white font-heading text-2xl font-bold shadow-lg">
          P
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-primary">PANS Victoria</h3>
        <p className="text-text-secondary">Supporting parents navigating the child protection system</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 text-text-muted text-sm mb-12">
        <a href="mailto:support@pansvictoria.org.au" className="flex items-center gap-2 justify-center hover:text-brand-primary transition-colors">
          <Mail size={16} strokeWidth={1.5} /> support@pansvictoria.org.au
        </a>
        <span className="flex items-center gap-2 justify-center">
          <MapPin size={16} strokeWidth={1.5} /> Victoria, Australia
        </span>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white/50 rounded-2xl border border-purple-100">
        <h4 className="font-heading font-bold text-text-primary mb-2">Important Notice</h4>
        <p className="text-text-muted text-xs leading-relaxed">
          PANS provides guidance and navigation support only and does not provide legal advice or legal representation.
        </p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-purple-100 text-center text-text-muted text-xs">
      <p>&copy; 2026 Parent Advocacy and Navigation Service Victoria. All rights reserved.</p>
    </div>
  </footer>
);

// --- Chat Assistant ---
type Message = { id: string; role: 'user' | 'model'; text: string };

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hello. I am the PANS Navigation Assistant. I can help answer general questions about the child protection system in Victoria. How can I support you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        session_id: sessionId,
        message: userMessage.text,
        history: messages.slice(1) // Exclude initial greeting
      });

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.data.response
      };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'I apologize, but I am currently unavailable. Please contact PANS directly via the contact form.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            data-testid="chat-window"
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-purple-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">PANS Assistant</h3>
                  <p className="text-xs text-white/80">General guidance & support</p>
                </div>
              </div>
              <button 
                data-testid="chat-close-btn"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-secondary/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-sm' 
                      : 'bg-white border border-purple-100 text-text-primary rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-purple-100 text-text-muted p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-xs">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-purple-100">
              <div className="flex items-center gap-2">
                <input
                  data-testid="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-brand-secondary border-2 border-transparent focus:bg-white focus:border-brand-primary rounded-full px-4 py-3 text-sm transition-all outline-none"
                  disabled={isLoading}
                />
                <button
                  data-testid="chat-send-btn"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-11 h-11 bg-brand-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary/90 transition-colors"
                >
                  <Send size={16} strokeWidth={1.5} className="ml-0.5" />
                </button>
              </div>
              <p className="text-[10px] text-text-muted text-center mt-2">
                AI assistant. Does not provide legal advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        data-testid="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-brand-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform ${!isOpen ? 'pulse-ring' : ''}`}
      >
        {isOpen ? <X size={24} strokeWidth={1.5} /> : <MessageCircle size={24} strokeWidth={1.5} />}
      </button>
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['home', 'about', 'who-we-support', 'support', 'how-it-works', 'guide', 'resources', 'supporting-pans', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main className="overflow-hidden">
        <Hero />
        <StartHere />
        <WhyParentsContact />
        <AboutSection />
        <Testimonials />
        <WhoWeSupport />
        <SupportServices />
        <HowItWorks />
        <First48Hours />
        <Resources />
        <SupportingPANS />
        <ContactSection />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}
