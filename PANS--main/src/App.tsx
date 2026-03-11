/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  CheckCircle2
} from 'lucide-react';

import { generateHeroImage } from './services/imageService';
import ChatAssistant from './components/ChatAssistant';

// --- Types ---
type Section = 'home' | 'about' | 'who-we-support' | 'support' | 'how-it-works' | 'guide' | 'resources' | 'supporting-pans' | 'contact';

// --- Components ---

const Navbar = ({ activeSection }: { activeSection: Section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About PANS' },
    { id: 'who-we-support', label: 'Who We Support' },
    { id: 'support', label: 'Support Services' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'guide', label: 'First 48 Hours' },
    { id: 'resources', label: 'Resources' },
    { id: 'supporting-pans', label: 'Supporting PANS' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-secondary/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none text-brand-primary">PANS Victoria</span>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">Parent Advocacy & Navigation</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary cursor-pointer ${
                activeSection === item.id ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-stone-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-600 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden absolute top-20 left-0 right-0 bg-brand-secondary border-b border-stone-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium ${
                  activeSection === item.id ? 'text-brand-primary' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ heroImage }: { heroImage: string | null }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          <MapPin size={14} /> Supporting Regional Victoria
        </div>
        <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] mb-6 text-stone-900">
          Parent Advocacy & Navigation Service Victoria (PANS)
        </h1>
        <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
          PANS supports parents navigating the child protection system, particularly those who are self-represented or struggling to access legal help. The service provides guidance, preparation, and navigation support so parents can better understand the process and advocate for themselves.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-brand-primary text-white px-8 py-4 rounded-full font-medium hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20 cursor-pointer"
          >
            Contact PANS for support <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
          <img 
            src={heroImage || "https://picsum.photos/seed/lavender-support/800/1000"} 
            alt="Supportive environment" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[240px] -rotate-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
              <Heart size={16} />
            </div>
            <span className="font-bold text-sm">Lived Experience</span>
          </div>
          <p className="text-xs text-stone-500 italic">
            "Created by a parent who has personally navigated the system."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "PANS helped me organize my thoughts and paperwork when I felt completely lost. Having someone who understood the system from the inside made all the difference.",
      author: "Sarah",
      location: "Regional Victoria"
    },
    {
      quote: "The support person assistance during my case plan meeting was invaluable. I felt heard and supported for the first time in months.",
      author: "Michael",
      location: "Melbourne"
    },
    {
      quote: "Navigating the Children's Court was terrifying until I had PANS by my side. They helped me prepare and stay focused on what mattered most: my children.",
      author: "Emma",
      location: "Gippsland"
    },
    {
      quote: "I didn't know where to turn after the first 48 hours. PANS gave me a clear list of what to do and helped me find the right legal help quickly.",
      author: "David",
      location: "Bendigo"
    },
    {
      quote: "Having someone who has been through it themselves meant I didn't have to explain the pain. They just knew, and they helped me stay strong for my kids.",
      author: "Lisa",
      location: "Ballarat"
    },
    {
      quote: "The case mapping we did together changed everything. I finally understood what Child Protection wanted from me and how to show I was meeting their goals.",
      author: "James",
      location: "Geelong"
    },
    {
      quote: "PANS attended my meeting as a support person. Their presence helped me stay calm and ensure all my questions were actually answered.",
      author: "Chloe",
      location: "Shepparton"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-brand-primary/5 rounded-[3rem] border border-brand-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12 text-brand-primary">Parent Testimonials</h2>
        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="text-2xl font-serif italic text-stone-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-bold text-brand-primary">{testimonials[currentIndex].author}</span>
                <span className="text-sm text-stone-500 uppercase tracking-widest">{testimonials[currentIndex].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === i ? 'w-8 bg-brand-primary' : 'bg-brand-primary/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StartHere = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 max-w-7xl mx-auto mb-20">
      <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-[2.5rem] p-8 md:p-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif mb-4 text-brand-primary">Start Here if You Need Help</h2>
          <p className="text-stone-700 leading-relaxed mb-8">
            If you are currently involved with Child Protection or preparing for court, PANS may be able to provide guidance and navigation support. If you would like assistance understanding your situation or preparing for meetings or court, you can contact PANS to discuss your circumstances.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
          >
            Contact PANS
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyParentsContactPANS = () => (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-serif mb-6">Why Parents Contact PANS</h2>
        <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Lived Experience",
            desc: "PANS was created by a parent who has personally navigated the child protection system and understands the challenges families face.",
            icon: <Heart className="text-brand-primary" />
          },
          {
            title: "Justice System Knowledge",
            desc: "The founder is studying criminology and criminal justice with a focus on justice systems and the experiences of families involved in child protection matters.",
            icon: <Scale className="text-brand-primary" />
          },
          {
            title: "Child Safety Commitment",
            desc: "PANS operates with a valid Working With Children Check and aims to support families respectfully and responsibly.",
            icon: <Shield className="text-brand-primary" />
          }
        ].map((item, i) => (
          <div key={i} className="bg-brand-secondary p-8 rounded-3xl border border-stone-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-serif text-xl mb-4">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl font-serif italic text-stone-700 leading-relaxed">
          "Navigating the child protection system can feel overwhelming. PANS aims to help parents understand what is happening, stay organised, and approach the process with greater confidence."
        </p>
        <p className="mt-4 text-brand-primary font-medium">— You are not alone and someone understands.</p>
      </div>
    </div>
  </section>
);

const AboutPANS = () => (
  <div id="about" className="space-y-24 pb-20">
    <section className="section-padding bg-white rounded-[3rem] shadow-sm">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif mb-6 text-brand-primary">Why PANS Exists</h2>
        <div className="w-20 h-1 bg-brand-primary mx-auto mb-8"></div>
        <p className="text-stone-600 leading-relaxed mb-8">
          Many parents involved with Child Protection report feeling overwhelmed by the complexity of the system. Legal processes can be complex, and for some families, especially those living in regional Victoria, access to advocacy and support services can be limited.
        </p>
        <p className="text-stone-600 leading-relaxed">
          PANS aims to bridge this gap by helping parents understand and navigate the system respectfully and responsibly.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://picsum.photos/seed/compassion-support-family/800/1200" 
            alt="Compassionate support and guidance for families" 
            className="rounded-3xl shadow-xl w-full object-cover max-h-[600px]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif text-brand-primary">About the Founder</h2>
            <p className="font-bold text-stone-800">Founder, Parent Advocacy & Navigation Service Victoria (PANS)</p>
            <p className="text-sm text-brand-primary font-medium uppercase tracking-wider">Criminology and Criminal Justice Student | Working With Children Check Holder</p>
          </div>
          
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              PANS was created after the founder experienced the child protection system firsthand and recognised the lack of clear guidance and navigation support available to parents. Many families are expected to quickly understand complex processes, legal expectations, and service requirements while dealing with significant stress and uncertainty.
            </p>
            <p>
              Through this experience, it became clear that parents often need practical guidance to help them understand the system, prepare for meetings and court, and stay organised throughout their case.
            </p>
            <p>
              Alongside lived experience, the founder is studying criminology and criminal justice with a focus on justice systems and the experiences of families involved in child protection matters. PANS was created to provide respectful guidance and navigation support for parents, particularly those who are self-represented or living in regional Victoria where access to advocacy services can be limited.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <Testimonials />
  </div>
);

const ValuesAndPolicies = () => (
  <section className="section-padding bg-brand-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif mb-12 text-brand-primary">PANS Values</h2>
          <div className="space-y-8">
            {[
              { title: "Respect", desc: "PANS aims to support parents respectfully and without judgement." },
              { title: "Clarity", desc: "The goal is to help parents understand complex systems and processes." },
              { title: "Practical Support", desc: "PANS focuses on practical guidance that helps parents stay organised and prepared." },
              { title: "Empowerment", desc: "Parents should feel confident understanding and navigating the system they are involved in." }
            ].map((value, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">{value.title}</h4>
                  <p className="text-stone-600 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif mb-4 text-brand-primary flex items-center gap-2">
              <Shield size={20} /> Confidentiality
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              PANS respects the privacy of parents seeking support. Information shared with PANS is treated respectfully and confidentially unless there are legal obligations requiring disclosure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif mb-4 text-brand-primary flex items-center gap-2">
              <Info size={20} /> Role of PANS
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              PANS provides guidance and navigation support to help parents understand the child protection process. The service does not replace legal representation and parents are encouraged to seek legal advice where available.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif mb-4 text-brand-primary flex items-center gap-2">
              <Clock size={20} /> Support Availability
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Parents can contact PANS by email or message to request support. Response times may vary depending on availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoWeSupport = () => (
  <div id="who-we-support" className="section-padding bg-brand-secondary">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-serif mb-6">Who PANS Supports</h2>
      <p className="text-lg text-stone-600">
        PANS Victoria is dedicated to helping parents who feel overwhelmed by the complexity of the child protection system.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Child Protection Involvement", desc: "Parents currently involved with Child Protection services." },
        { title: "Children’s Court Prep", desc: "Parents preparing for upcoming Children’s Court hearings." },
        { title: "Self-Represented Parents", desc: "Parents representing themselves or struggling to access legal help." },
        { title: "Overwhelmed Families", desc: "Parents who feel lost or overwhelmed by the system's requirements." },
        { title: "Regional Families", desc: "Families in regional Victoria with limited access to support services." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm"
        >
          <h3 className="font-serif text-xl mb-3 text-brand-primary">{item.title}</h3>
          <p className="text-stone-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SupportContent = () => (
  <div id="support" className="section-padding space-y-20">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-5xl font-serif mb-6">What Support PANS Provides</h2>
      <p className="text-lg text-stone-600">
        We provide practical guidance and navigation support across several key areas of the child protection process.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Case Navigation",
          icon: <MapPin className="text-brand-primary" />,
          desc: "Helping parents understand how the child protection system works and what steps are happening in their case."
        },
        {
          title: "Court Preparation",
          icon: <Gavel className="text-brand-primary" />,
          desc: "Helping parents organise timelines, documents, and key points when preparing for Children’s Court hearings."
        },
        {
          title: "Meeting Preparation",
          icon: <Users className="text-brand-primary" />,
          desc: "Helping parents prepare for meetings with Child Protection so they can ask questions, take notes, and understand outcomes."
        },
        {
          title: "Service Navigation",
          icon: <Shield className="text-brand-primary" />,
          desc: "Assisting parents with staying organised and understanding expectations for required services like drug testing or counselling."
        },
        {
          title: "Contact Preparation",
          icon: <Heart className="text-brand-primary" />,
          desc: "Helping parents understand supervised contact visits and how to prepare for meaningful visits with their children."
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
            {item.icon}
          </div>
          <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
          <p className="text-stone-600 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="bg-brand-primary text-white p-12 rounded-[3rem] shadow-xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-serif mb-6">Support for Regional Families</h3>
          <p className="mb-6 opacity-90">
            PANS focuses on helping families in regional Victoria where services can be limited. Support is available through:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" /> Phone conversations</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" /> Online meetings</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" /> In-person support where possible</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Info size={18} /> Important Notice
          </h4>
          <p className="text-sm opacity-90 leading-relaxed">
            PANS provides guidance and navigation support only. The service does not provide legal advice or legal representation. We encourage parents to seek legal advice where possible.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorksContent = () => (
  <div id="how-it-works" className="section-padding bg-white">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-5xl font-serif mb-6">How PANS Works</h2>
      <p className="text-lg text-stone-600">
        Our process is designed to be straightforward and supportive, helping you regain control and stay organised.
      </p>
    </div>

    <div className="relative max-w-5xl mx-auto">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" />
      <div className="space-y-16">
        {[
          { step: "Step 1", title: "Contact PANS", desc: "Parent reaches out to PANS for support.", icon: <MessageCircle /> },
          { step: "Step 2", title: "Initial Conversation", desc: "We discuss your situation to understand the context and needs.", icon: <Users /> },
          { step: "Step 3", title: "Case Mapping", desc: "Organising key events, documents, and timelines.", icon: <FileText /> },
          { step: "Step 4", title: "Preparation", desc: "Getting ready for meetings, services, or court hearings.", icon: <BookOpen /> },
          { step: "Step 5", title: "Ongoing Support", desc: "Continuous guidance as your case progresses.", icon: <MapPin /> }
        ].map((item, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`bg-brand-secondary p-8 rounded-3xl border border-stone-100 ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
              >
                <span className="text-sm font-bold text-brand-primary uppercase tracking-widest block mb-2">{item.step}</span>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-stone-600">{item.desc}</p>
              </motion.div>
            </div>
            <div className="relative z-10 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg">
              {item.icon}
            </div>
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GuideContent = () => (
  <div id="guide" className="section-padding">
    <div className="bg-[#2D2438] text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8">
          <Clock size={14} /> Critical Support
        </div>
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
          First 48 Hours After Removal
        </h2>
        <p className="text-xl text-stone-300 mb-12 max-w-2xl leading-relaxed">
          The early stages of Child Protection involvement are often the most stressful. This guide helps you understand what to expect immediately after removal.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Immediate Actions", desc: "Stay calm, listen, and take notes of everything said. Ask for names and contact details of all workers." },
            { title: "Gather Information", desc: "Request copies of any orders or documents. You have a right to know the basis of involvement." },
            { title: "Organise Documents", desc: "Keep all paperwork in one place. Start a timeline of events and conversations." },
            { title: "First Court Hearing", desc: "Understand that a court hearing will happen quickly. Seek legal advice immediately." },
            { title: "Prepare for Meetings", desc: "Identify key questions you need answered and identify your support network." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-accent mb-2">{item.title}</h4>
              <p className="text-sm text-stone-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ResourcesContent = () => (
  <div id="resources" className="section-padding bg-brand-secondary">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-serif mb-6">Resources for Parents</h2>
      <p className="text-lg text-stone-600">
        Helpful information and links to support your navigation of the child protection process.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Process Guides", desc: "Detailed information about child protection processes in Victoria.", icon: <BookOpen /> },
        { title: "Legal Services", desc: "Links to Victoria Legal Aid and community legal centres.", icon: <Scale /> },
        { title: "Court Procedures", desc: "Information about what to expect at the Children's Court.", icon: <Gavel /> },
        { title: "Support Organisations", desc: "A list of other organisations that can provide specialized help.", icon: <Heart /> }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 flex gap-6 items-start">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
            {item.icon}
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm mb-4">{item.desc}</p>
            <button className="text-brand-primary font-bold text-sm hover:underline">View Resource →</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SupportingPANS = () => (
  <section id="supporting-pans" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-8 text-brand-primary">Supporting PANS</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed">
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
        </div>
        
        <div className="grid gap-6">
          {[
            {
              title: "Community Support",
              desc: "Positive feedback and sharing the service with parents who may benefit helps raise awareness and reach families who may need guidance.",
              icon: <Users className="text-brand-primary" />
            },
            {
              title: "Future Donations",
              desc: "As the service develops, opportunities to support PANS through donations or partnerships may become available.",
              icon: <Heart className="text-brand-primary" />
            },
            {
              title: "Partnerships",
              desc: "PANS is open to connecting with organisations and professionals who share the goal of improving access to support for parents navigating complex systems.",
              icon: <Shield className="text-brand-primary" />
            },
            {
              title: "Transparency",
              desc: "PANS aims to operate transparently and responsibly as it develops. Any future funding or donations will be used to support the development of resources and services for parents.",
              icon: <Info className="text-brand-primary" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-brand-secondary p-6 rounded-2xl border border-stone-100 flex gap-4 items-start">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-stone-800 mb-1">{item.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="contact" className="section-padding bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-5xl font-serif mb-8">Contact PANS</h2>
          <p className="text-lg text-stone-600 mb-12 leading-relaxed">
            If you are navigating the child protection system and need guidance or navigation support, we are here to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Support Delivery</h4>
                <p className="text-stone-600 text-sm">Support is provided via phone, online meetings, or in-person where possible.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Email Us</h4>
                <p className="text-stone-600">support@pansvictoria.org.au</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Response Time</h4>
                <p className="text-stone-600 text-sm">We aim to respond to all enquiries within 24-48 hours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-secondary p-10 rounded-[3rem] shadow-xl border border-stone-100 relative overflow-hidden">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-brand-primary flex flex-col items-center justify-center text-white p-8 text-center z-10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Message Sent</h3>
                <p className="text-white/80">
                  Thank you for reaching out. We have received your message and will get back to you within 24-48 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">First Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Last Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="jane@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Message</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Tell us a bit about your situation..." />
            </div>
            <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#F2F0F7] border-t border-stone-200 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold">
          P
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-primary">Parent Advocacy & Navigation Service Victoria (PANS)</h3>
        <p className="text-stone-600">Supporting parents navigating the child protection system</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 text-stone-500 text-sm mb-12">
        <span className="flex items-center gap-2 justify-center"><MessageCircle size={16} /> support@pansvictoria.org.au</span>
        <span className="flex items-center gap-2 justify-center"><MapPin size={16} /> Victoria, Australia</span>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white/50 rounded-2xl border border-stone-200">
        <h4 className="font-bold text-stone-800 mb-2">Important Notice</h4>
        <p className="text-stone-500 text-xs leading-relaxed">
          PANS provides guidance and navigation support only and does not provide legal advice or legal representation.
        </p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-stone-200 text-center text-stone-400 text-xs">
      <p>© 2026 Parent Advocacy and Navigation Service Victoria. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    // const fetchHeroImage = async () => {
    //   try {
    //     const img = await generateHeroImage();
    //     setHeroImage(img);
    //   } catch (error) {
    //     // Fallback to a static image if API fails (e.g., rate limit)
    //     setHeroImage("https://picsum.photos/seed/supportive-hands/1920/1080?blur=2");
    //   }
    // };
    // fetchHeroImage();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['home', 'about', 'who-we-support', 'support', 'how-it-works', 'guide', 'resources', 'supporting-pans', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

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
    <div className="min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar activeSection={activeSection} />
      
      <main className="overflow-hidden">
        <Hero heroImage={heroImage} />
        <StartHere />
        <WhyParentsContactPANS />
        <AboutPANS />
        <WhoWeSupport />
        <ValuesAndPolicies />
        <SupportContent />
        <HowItWorksContent />
        <GuideContent />
        <ResourcesContent />
        <SupportingPANS />
        <ContactContent />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}
