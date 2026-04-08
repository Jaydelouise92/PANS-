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
  HandHeart,
  Sparkles,
  ArrowDown,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Filter,
  Share2,
  Camera,
  Video,
  Quote,
  Eye,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

import { generateHeroImage, generateFounderImage } from './services/imageService';
import ChatWidget from './components/ChatWidget';
import VoiceAssistant from './components/VoiceAssistant';

// --- Types ---
type Section = 'home' | 'lived-experience' | 'about' | 'who-we-support' | 'support' | 'mental-health' | 'how-it-works' | 'guide' | 'resources' | 'supporting-pans' | 'contact';

interface Story {
  id: string;
  title: string;
  author: string;
  content: string;
  stage: 'investigation' | 'court' | 'reunification' | 'ongoing';
  situation: 'regional' | 'disability' | 'cultural' | 'general';
  urgency: 'high' | 'medium' | 'low';
  date: string;
}

// --- Components ---

const Navbar = ({ activeSection }: { activeSection: Section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'lived-experience', label: 'Lived Experience' },
    { id: 'about', label: 'About PANS' },
    { id: 'who-we-support', label: 'Who We Support' },
    { id: 'support', label: 'Support Services' },
    { id: 'mental-health', label: 'Mental Health' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'guide', label: 'First 48 Hours' },
    { id: 'resources', label: 'Resources' },
    { id: 'supporting-pans', label: 'Supporting PANS' },
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
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg shadow-purple-200">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none text-brand-primary">PANS Victoria</span>
            <div className="flex flex-col mt-0.5">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold leading-none">Parent Advocacy & Navigation</span>
              <span className="text-[10px] lowercase tracking-widest text-purple-600 font-bold leading-none mt-0.5">service</span>
            </div>
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

  const scrollToLivedExperience = () => {
    const element = document.getElementById('lived-experience');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_1.png" 
          alt="PANS Heart" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/30">
            <Sparkles size={14} /> You are not alone in this
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 drop-shadow-2xl">
            Lived experience is more powerful than statistics.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            A space designed for focus and empathy, centering real stories from parents navigating the child protection system.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={scrollToLivedExperience}
              className="w-full md:w-auto bg-white text-brand-primary px-10 py-5 rounded-full font-bold hover:bg-stone-100 transition-all flex items-center justify-center gap-2 shadow-2xl"
            >
              Explore Stories <ChevronRight size={20} />
            </button>
            <button 
              onClick={scrollToContact}
              className="w-full md:w-auto bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Get Support <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to begin</span>
        <ArrowDown size={20} />
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

const LivedExperience = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'investigation' | 'court' | 'reunification'>('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    title: '',
    author: '',
    content: '',
    stage: 'investigation',
    situation: 'general',
    urgency: 'low'
  });

  const stories: Story[] = [
    {
      id: '1',
      title: "Finding my voice in the Children's Court",
      author: "Sarah M.",
      content: "When I first walked into the court, I felt like a number. But then I realized that my story, my words, were the only thing that could truly represent my children...",
      stage: 'court',
      situation: 'regional',
      urgency: 'medium',
      date: "March 2026"
    },
    {
      id: '2',
      title: "The first 48 hours: A survival guide",
      author: "James L.",
      content: "The knock on the door changed everything. I want to share what I wish I knew in those first few hours of panic and confusion...",
      stage: 'investigation',
      situation: 'general',
      urgency: 'high',
      date: "February 2026"
    },
    {
      id: '3',
      title: "Reunification: The long road home",
      author: "Elena R.",
      content: "It took 18 months, but every step was worth it. Here is how I stayed focused on the goal when the system felt like it was working against me...",
      stage: 'reunification',
      situation: 'cultural',
      urgency: 'low',
      date: "January 2026"
    }
  ];

  const filteredStories = activeFilter === 'all' ? stories : stories.filter(s => s.stage === activeFilter);

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Story submitted:", submissionData);
    setShowShareModal(false);
    setSubmissionData({
      title: '',
      author: '',
      content: '',
      stage: 'investigation',
      situation: 'general',
      urgency: 'low'
    });
    alert("Thank you for sharing your story. Our team will review it for moderation before it appears on the platform.");
  };

  return (
    <section id="lived-experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-serif mb-6 text-brand-primary">Lived Experience</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We built this space as the emotional core of the platform. Every design decision supports the idea that lived experience is more powerful than statistics.
            </p>
          </div>
          <button 
            onClick={() => setShowShareModal(true)}
            className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20"
          >
            <Share2 size={18} /> Share Your Story
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'all' ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            All Stories
          </button>
          <button 
            onClick={() => setActiveFilter('investigation')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'investigation' ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Investigation
          </button>
          <button 
            onClick={() => setActiveFilter('court')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'court' ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Court
          </button>
          <button 
            onClick={() => setActiveFilter('reunification')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'reunification' ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Reunification
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group cursor-pointer bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                  {story.stage}
                </span>
                {story.urgency === 'high' && (
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider">
                    Urgent
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                {story.title}
              </h3>
              
              <p className="text-stone-600 text-sm line-clamp-4 mb-8 leading-relaxed flex-grow">
                "{story.content}"
              </p>
              
              <div className="flex items-center justify-between text-stone-500 text-[10px] uppercase tracking-widest font-bold border-t border-stone-200 pt-6">
                <span className="flex items-center gap-2">
                  <Users size={14} className="text-brand-primary" /> {story.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-brand-primary" /> {story.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Share Story Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 w-full max-w-3xl shadow-2xl relative my-8"
            >
              <button 
                onClick={() => setShowShareModal(false)}
                className="absolute top-8 right-8 text-stone-400 hover:text-stone-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-4xl font-serif mb-6 text-brand-primary">Share Your Story</h3>
              <p className="text-stone-600 mb-8">
                This is about connection, not exposure. Your story will be treated with care and dignity.
              </p>
              
              <form className="space-y-6" onSubmit={handleStorySubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Story Title</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none" 
                      placeholder="Give your story a title"
                      value={submissionData.title}
                      onChange={(e) => setSubmissionData({...submissionData, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Author Name (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none" 
                      placeholder="e.g. Sarah M. or Anonymous"
                      value={submissionData.author}
                      onChange={(e) => setSubmissionData({...submissionData, author: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Stage of Journey</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none bg-white"
                      value={submissionData.stage}
                      onChange={(e) => setSubmissionData({...submissionData, stage: e.target.value as any})}
                    >
                      <option value="investigation">Investigation</option>
                      <option value="court">Court</option>
                      <option value="reunification">Reunification</option>
                      <option value="ongoing">Ongoing Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Type of Situation</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none bg-white"
                      value={submissionData.situation}
                      onChange={(e) => setSubmissionData({...submissionData, situation: e.target.value as any})}
                    >
                      <option value="general">General</option>
                      <option value="regional">Regional</option>
                      <option value="disability">Disability Support</option>
                      <option value="cultural">Culturally Diverse</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Urgency Level</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none bg-white"
                      value={submissionData.urgency}
                      onChange={(e) => setSubmissionData({...submissionData, urgency: e.target.value as any})}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High / Critical</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Your Story</label>
                  <textarea 
                    rows={6} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary outline-none" 
                    placeholder="In your own words..." 
                    value={submissionData.content}
                    onChange={(e) => setSubmissionData({...submissionData, content: e.target.value})}
                  />
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                  <h4 className="text-sm font-bold text-stone-800 mb-2 flex items-center gap-2">
                    <Shield size={16} className="text-brand-primary" /> Moderation & Privacy
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    By submitting your story, you agree to our moderation guidelines. All stories are reviewed to ensure the privacy and safety of all individuals involved, especially children. We may edit for clarity or to remove identifying details if necessary. Your story will not be published immediately.
                  </p>
                </div>

                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all shadow-xl">
                  Submit Story for Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SupportFeed = () => {
  const items = [
    {
      title: "Understanding the Process",
      desc: "A step-by-step guide to what happens when Child Protection becomes involved.",
      icon: <Info className="text-brand-primary" />,
      tag: "The Journey"
    },
    {
      title: "Preparing for Meetings",
      desc: "How to stay calm, take notes, and ensure your voice is heard in case plan meetings.",
      icon: <Users className="text-brand-primary" />,
      tag: "Advocacy"
    },
    {
      title: "Navigating Court",
      desc: "Practical tips for Children's Court hearings, from what to wear to how to speak.",
      icon: <Gavel className="text-brand-primary" />,
      tag: "Legal"
    },
    {
      title: "Managing Contact",
      desc: "Making the most of supervised visits and maintaining connections with your children.",
      icon: <Heart className="text-brand-primary" />,
      tag: "Connection"
    }
  ];

  return (
    <section className="section-padding bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-serif mb-6 text-brand-primary">Support & Guidance</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            A curated, evolving feed of support. Each section highlights a different part of the journey, designed to be easy to scan and move through.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2 block">{item.tag}</span>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              <button className="text-brand-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SystemReality = () => {
  const stats = [
    { label: "Children in contact with child protection each year", value: "179,000+" },
    { label: "Reports made to child protection authorities", value: "500,000+" },
    { label: "Children living in out-of-home care", value: "45,000+" },
    { label: "Children on care and protection orders", value: "60,000+" },
    { label: "Children involved in the system each year", value: "1 in 31" },
    { label: "Numbers have remained consistently high", value: "5+ years" },
    { label: "Rate for Aboriginal and Torres Strait Islander children", value: "10x higher" },
    { label: "Families continue entering the system every year", value: "Ongoing" }
  ];

  return (
    <section className="section-padding bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-serif mb-6">The Reality of Child Protection in Australia</h2>
          <p className="text-sm opacity-80 font-light uppercase tracking-widest">
            These numbers reflect how many families are navigating the system each year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all"
            >
              <div className="text-3xl md:text-4xl font-serif mb-3 font-bold">
                {stat.value}
              </div>
              <div className="text-xs opacity-70 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center border-t border-white/20 pt-12">
          <div className="text-lg opacity-90 leading-relaxed space-y-4">
            <p>Behind every number is a family.</p>
            <p>A parent trying to understand what is happening.</p>
            <p>A child living through decisions made within the system.</p>
            <p className="block mt-6 font-bold">PANS exists to support parents through this process, with clarity, guidance, and lived experience.</p>
          </div>
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

const AboutPANS = ({ founderImage }: { founderImage: string | null }) => (
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
            src="/input_file_0.png" 
            alt="Founder of PANS" 
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
        PANS Victoria is dedicated to helping parents who feel overwhelmed by the complexity of the child protection system. We support families from all walks of life, recognizing that every situation is unique.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {[
        { 
          title: "Child Protection Involvement", 
          desc: "Parents currently navigating active investigations, safety plans, or ongoing case management with Child Protection services." 
        },
        { 
          title: "Children’s Court Prep", 
          desc: "Parents preparing for upcoming Children’s Court hearings who need help organizing their documents and understanding the process." 
        },
        { 
          title: "Self-Represented Parents", 
          desc: "Parents who are representing themselves in court or are struggling to access timely legal aid and need procedural guidance." 
        },
        { 
          title: "Regional & Rural Families", 
          desc: "Families in regional Victoria who often face additional barriers such as limited local services and travel distances." 
        },
        { 
          title: "Culturally Diverse Families", 
          desc: "Parents from diverse backgrounds who may face language barriers or cultural misunderstandings within the system." 
        },
        { 
          title: "Parents with Disabilities", 
          desc: "Parents who require additional support to ensure their needs are met and their voices are heard during the process." 
        },
        { 
          title: "Parents Seeking Appeals", 
          desc: "Parents who wish to appeal a court decision and need help understanding the grounds for appeal and the necessary steps." 
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="font-serif text-xl mb-3 text-brand-primary">{item.title}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="max-w-5xl mx-auto mb-20">
      <img 
        src="/input_file_2.png" 
        alt="Advocacy Word Cloud" 
        className="w-full rounded-[3rem] shadow-lg border border-stone-100"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <HelpCircle className="text-brand-primary" /> Common Challenges
            </h3>
            <ul className="space-y-4">
              {[
                "Complex legal and child protection jargon that is hard to follow.",
                "Tight deadlines for court documents and service requirements.",
                "Feeling unheard or misunderstood in high-stakes meetings.",
                "Difficulty staying organized with large volumes of paperwork.",
                "Emotional exhaustion and stress impacting decision-making."
              ].map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-brand-primary" /> How PANS Helps
            </h3>
            <ul className="space-y-4">
              {[
                "Simplifying complex information into clear, actionable steps.",
                "Creating personalized case maps and organization systems.",
                "Preparing parents for meetings so they can speak confidently.",
                "Providing a supportive, non-judgmental space to discuss concerns.",
                "Tailoring navigation support to each family's unique circumstances."
              ].map((help, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  {help}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-stone-100 text-center">
          <p className="text-stone-500 italic text-sm">
            "PANS recognizes that every parent's journey is different. We don't provide one-size-fits-all advice; we provide navigation support tailored to your specific needs."
          </p>
        </div>
      </div>
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

const MentalHealthContent = () => (
  <div id="mental-health" className="section-padding bg-white">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-serif mb-6">Mental Health & Emergency Support</h2>
      <p className="text-lg text-stone-600">
        Navigating the child protection system can be overwhelming. Please reach out for support if you are in crisis or need someone to talk to.
      </p>
    </div>

    {/* Emergency Warnings Section */}
    <div className="max-w-5xl mx-auto mb-16 bg-red-50 p-8 rounded-3xl border border-red-200">
      <h3 className="text-2xl font-serif text-red-800 mb-6 flex items-center gap-3">
        <AlertTriangle className="text-red-600" /> Emergency Contacts
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-red-900">Emergency (Police, Ambulance, Fire)</h4>
          <p className="text-3xl font-bold text-red-600 my-2">000</p>
          <p className="text-sm text-red-800">Call immediately if you or someone else is in immediate danger.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-red-900">Lifeline (24/7 Crisis Support)</h4>
          <p className="text-3xl font-bold text-red-600 my-2">13 11 14</p>
          <p className="text-sm text-red-800">For anyone experiencing a personal crisis.</p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Recognising Stress", desc: "Understanding the signs of chronic stress and trauma related to system involvement." },
        { title: "Self-Care Strategies", desc: "Practical ways to manage stress and maintain your mental wellbeing." },
        { title: "Beyond Blue", desc: "Support for anxiety and depression. Call 1300 22 4636 or visit beyondblue.org.au", link: "https://www.beyondblue.org.au" },
        { title: "Parentline Victoria", desc: "Support for parents and carers. Call 13 22 89.", link: "https://services.dffh.vic.gov.au/parentline" }
      ].map((item, i) => (
        <div key={i} className="bg-brand-secondary p-8 rounded-3xl border border-stone-100">
          <h3 className="font-serif text-xl mb-3 text-brand-primary">{item.title}</h3>
          <p className="text-stone-600 text-sm mb-4">{item.desc}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold text-sm hover:underline">Visit Website →</a>
          )}
        </div>
      ))}
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
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" />
      <div className="space-y-16">
        {[
          { step: "Step 1", title: "Contact PANS", desc: "Parent reaches out to PANS for support.", icon: <MessageCircle /> },
          { step: "Step 2", title: "Initial Conversation", desc: "We discuss your situation to understand the context and needs.", icon: <Users /> },
          { step: "Step 3", title: "Case Mapping", desc: "Organising key events, documents, and timelines.", icon: <FileText /> },
          { step: "Step 4", title: "Preparation", desc: "Getting ready for meetings, services, or court hearings.", icon: <BookOpen /> },
          { step: "Step 5", title: "Ongoing Support", desc: "Continuous guidance as your case progresses.", icon: <MapPin /> }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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
            
            {/* Connector Icon between steps */}
            {i < 4 && (
              <div className="absolute left-1/2 top-[100%] h-16 w-12 -translate-x-1/2 flex items-center justify-center z-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-brand-primary/40 bg-white p-1 rounded-full"
                >
                  {i % 2 === 0 ? <HandHeart size={20} /> : <Sparkles size={20} />}
                </motion.div>
              </div>
            )}
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
        { title: "Process Guides", desc: "Detailed information about child protection processes in Victoria.", icon: <BookOpen />, link: "https://www.vic.gov.au/child-protection" },
        { title: "Legal Services", desc: "Links to Victoria Legal Aid and community legal centres.", icon: <Scale />, link: "https://www.legalaid.vic.gov.au/" },
        { title: "Court Procedures", desc: "Information about what to expect at the Children's Court.", icon: <Gavel />, link: "https://www.childrenscourt.vic.gov.au/" },
        { title: "Support Organisations", desc: "A list of other organisations that can provide specialized help.", icon: <Heart />, link: "https://www.vic.gov.au/support-services-for-families" }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 flex gap-6 items-start">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
            {item.icon}
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm mb-4">{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold text-sm hover:underline">View Resource →</a>
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
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', supportType: 'general', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          supportType: formData.supportType,
          message: formData.message
        })
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', supportType: 'general', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
                <h4 className="font-bold text-stone-800">Contact Details</h4>
                <p className="text-stone-500 text-sm italic">ourvoicemattersaus@gmail.com</p>
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

        <div className="bg-brand-secondary p-10 rounded-[3rem] shadow-xl border border-stone-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">First Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Jane" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Last Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Email Address</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="jane@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Type of Support Seeking</label>
              <select 
                required 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white"
                value={formData.supportType}
                onChange={(e) => setFormData({...formData, supportType: e.target.value})}
              >
                <option value="general">General Guidance & Navigation</option>
                <option value="court">Court Preparation</option>
                <option value="appeals">Appeals Support</option>
                <option value="meetings">Meeting Support</option>
                <option value="services">Service Navigation</option>
                <option value="mental-health">Mental Health Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Message</label>
              <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Tell us a bit about your situation..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Failed to send message. Please try again.</p>}
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
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-serif text-3xl font-bold shadow-xl shadow-purple-100">
          P
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-primary">Parent Advocacy & Navigation Service Victoria (PANS)</h3>
        <p className="text-stone-600">Supporting parents navigating the child protection system</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 text-stone-500 text-sm mb-12">
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
  const [founderImage, setFounderImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [hero, founder] = await Promise.all([generateHeroImage(), generateFounderImage()]);
        setHeroImage(hero);
        setFounderImage(founder);
      } catch (error) {
        console.error("Failed to generate images:", error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['home', 'lived-experience', 'about', 'who-we-support', 'support', 'mental-health', 'how-it-works', 'guide', 'resources', 'supporting-pans', 'contact'];
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
        <LivedExperience />
        <SupportFeed />
        <SystemReality />
        <WhyParentsContactPANS />
        <AboutPANS founderImage={founderImage} />
        <WhoWeSupport />
        <SupportContent />
        <MentalHealthContent />
        <HowItWorksContent />
        <GuideContent />
        <ResourcesContent />
        <SupportingPANS />
        <ValuesAndPolicies />
        <ContactContent />
      </main>

      <ChatWidget />
      <VoiceAssistant />
      <Footer />
    </div>
  );
}
