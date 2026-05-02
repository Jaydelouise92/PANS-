import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen, Scale, Shield, Clock, Heart, Users, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Card = ({ icon, title, desc, link, linkLabel }: { icon: React.ReactNode; title: string; desc: string; link: string; linkLabel?: string }) => (
  <Link to={link} className="group bg-white p-6 rounded-2xl border border-purple-100 hover:shadow-lg hover:border-brand-primary/30 transition-all flex flex-col gap-4">
    <div className="w-11 h-11 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-stone-800 mb-1">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <span className="text-brand-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
      {linkLabel || 'Read more'} <ArrowRight size={14} />
    </span>
  </Link>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F2F0F7] via-white to-[#EDE9F8]">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Shield size={13} /> Victoria, Australia
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-stone-900 mb-6">
                Helping parents understand Child Protection and Children's Court processes.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-stone-600 leading-relaxed mb-10">
                Clear information, practical resources, and support for parents facing Child Protection involvement in Victoria. You are not alone, and this does not have to be as confusing as it feels right now.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/start-here" className="bg-brand-primary text-white px-7 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
                  Start Here <ChevronRight size={18} />
                </Link>
                <Link to="/resources" className="bg-white border-2 border-brand-primary text-brand-primary px-7 py-4 rounded-full font-bold hover:bg-brand-secondary transition-all flex items-center justify-center gap-2">
                  View Resources <BookOpen size={18} />
                </Link>
                <Link to="/first-48-hours" className="bg-white border border-stone-200 text-stone-700 px-7 py-4 rounded-full font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                  <Clock size={18} /> First 48 Hours
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=800"
                alt="Parent and child walking a path together"
                className="w-full rounded-[2.5rem] shadow-2xl object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-lg">
                <p className="text-sm text-stone-700 font-medium italic">
                  "You don't have to understand everything at once. Start with one step."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reassurance Strip */}
      <section className="bg-brand-primary text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-serif leading-relaxed">
            Child Protection involvement is one of the most stressful things a parent can face. PANS exists to help you understand what is happening, what your rights are, and what steps to take — one at a time.
          </p>
        </div>
      </section>

      {/* What is PANS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">What is PANS?</span>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Plain-language support when you need it most</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  PANS (Parent Advocacy and Navigation Support) is an independent information and support service for parents in Victoria who are involved with Child Protection (DFFH) or the Children's Court.
                </p>
                <p>
                  We do not provide legal advice. We help you understand the system, know your rights, and feel less alone in a process that can feel overwhelming.
                </p>
                <p>
                  PANS was created from lived experience — by a parent who has been through this system and knows how difficult it is to navigate without clear guidance.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/about" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  About PANS <ArrowRight size={16} />
                </Link>
                <Link to="/founder" className="text-stone-500 font-medium flex items-center gap-2 hover:gap-3 transition-all hover:text-brand-primary">
                  Meet the Founder <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BookOpen size={20} />, label: 'Plain language guides' },
                { icon: <Scale size={20} />, label: 'Know your rights' },
                { icon: <Users size={20} />, label: 'Meeting preparation' },
                { icon: <Shield size={20} />, label: 'Independent & safe' },
                { icon: <Heart size={20} />, label: 'Non-judgmental support' },
                { icon: <Clock size={20} />, label: 'Step-by-step clarity' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-brand-secondary p-5 rounded-2xl border border-purple-100 flex flex-col gap-3"
                >
                  <div className="text-brand-primary">{item.icon}</div>
                  <span className="text-sm font-semibold text-stone-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Why This Exists</span>
          <h2 className="text-4xl font-serif text-stone-900 mb-6">Because the system is hard to navigate alone</h2>
          <p className="text-stone-600 leading-relaxed max-w-3xl mx-auto">
            Many parents who find themselves involved with Child Protection feel completely overwhelmed. The language is complex, the timelines are tight, and support is often hard to access — especially in regional Victoria.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              stat: '179,000+',
              label: 'children in contact with child protection each year in Australia',
              color: 'bg-purple-50 border-purple-200',
            },
            {
              stat: '1 in 31',
              label: 'children in Australia are involved with child protection annually',
              color: 'bg-lilac-50 border-purple-100',
            },
            {
              stat: '10×',
              label: 'higher rate of involvement for Aboriginal and Torres Strait Islander children',
              color: 'bg-purple-50 border-purple-200',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${item.color} border p-8 rounded-2xl text-center`}
            >
              <div className="text-4xl font-serif font-bold text-brand-primary mb-3">{item.stat}</div>
              <p className="text-stone-600 text-sm leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-stone-500 text-sm">Behind every number is a family. PANS exists to support parents through this.</p>
      </section>

      {/* Quick Access Resource Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Quick Access</span>
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Find what you need</h2>
            <p className="text-stone-500">Start with the area that matters most to you right now.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={<Clock size={20} />} title="First 48 Hours Guide" desc="What to do immediately after Child Protection becomes involved. Step-by-step, calm, and practical." link="/first-48-hours" linkLabel="Read the guide" />
            <Card icon={<Scale size={20} />} title="Your Rights as a Parent" desc="Understanding what you are entitled to throughout the Child Protection process." link="/parent-rights" linkLabel="Know your rights" />
            <Card icon={<BookOpen size={20} />} title="The System Explained" desc="A plain-language breakdown of how Child Protection and the Children's Court works in Victoria." link="/system-explained" linkLabel="Understand the system" />
            <Card icon={<Shield size={20} />} title="Children's Court Guide" desc="What to expect at court, how hearings work, and how to prepare yourself." link="/childrens-court" linkLabel="Court guide" />
            <Card icon={<Heart size={20} />} title="Mental Health Support" desc="Looking after yourself through this process. Resources and services that can help." link="/mental-health" linkLabel="Get support" />
            <Card icon={<Users size={20} />} title="Who PANS Supports" desc="Whether you're at the investigation stage, in court, or seeking reunification — PANS can help." link="/who-we-support" linkLabel="See if PANS can help" />
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">How It Works</span>
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Simple steps to get support</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Start Here', desc: 'Tell us where you are in the process.' },
              { step: '2', title: 'Read the Guides', desc: 'Access plain-language information for your situation.' },
              { step: '3', title: 'Get Prepared', desc: 'Use our tools to prepare for meetings and court.' },
              { step: '4', title: 'Reach Out', desc: 'Contact PANS if you need personal navigation support.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-brand-primary font-bold flex items-center gap-2 justify-center hover:gap-3 transition-all">
              Learn more about how PANS works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto flex gap-4 items-start">
          <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-900 mb-1">PANS is not a law firm and does not provide legal advice</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              PANS provides general information and navigation support only. Nothing on this website should be taken as legal advice. For legal representation, contact Victoria Legal Aid on <strong>1300 792 387</strong> or your nearest community legal centre.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
