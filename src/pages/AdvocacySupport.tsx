import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MessageCircle, FileText, Users, Scale, BookOpen, Compass,
  CheckCircle2, ArrowRight, MapPin, Clock, Shield, Heart
} from 'lucide-react';

const services = [
  {
    icon: <Compass size={26} />,
    title: 'System Navigation',
    desc: 'Helping you understand what stage of the process you are at, what comes next, and what is expected of you.',
    detail: [
      'Explain each stage of Child Protection involvement in plain language',
      'Help you understand what DFFH workers are doing and why',
      'Map out your case timeline so nothing catches you off guard',
      'Clarify what is happening and what comes next',
    ],
  },
  {
    icon: <FileText size={26} />,
    title: 'Document Support',
    desc: 'Making sense of letters, orders, case plans, and court documents so you know exactly what they mean.',
    detail: [
      'Translate legal language into plain English',
      'Explain what court orders require you to do',
      'Help you understand case plans and safety plans',
      'Organise and keep track of your documents',
    ],
  },
  {
    icon: <Users size={26} />,
    title: 'Meeting Preparation',
    desc: 'Helping you prepare for meetings with Child Protection workers, service providers, and court appearances.',
    detail: [
      'Prepare questions to ask at your next meeting',
      'Understand what the meeting is about before you attend',
      'Know your rights during any meeting',
      'Debrief after meetings to make sense of what happened',
    ],
  },
  {
    icon: <Scale size={26} />,
    title: 'Rights Advocacy',
    desc: 'Making sure you understand your rights at every stage — and what to do if you feel they have not been respected.',
    detail: [
      'Explain your legal rights as a parent',
      'Help you understand when and how to make a complaint',
      'Support you to request information about your case',
      'Help you understand appeal or review options',
    ],
  },
  {
    icon: <BookOpen size={26} />,
    title: 'Information & Education',
    desc: 'Providing clear, accurate information about how the system works — at whatever pace is right for you.',
    detail: [
      'Plain-language guides on every stage of the process',
      'Glossaries of key terms and what they mean',
      'Explanations of different types of court orders',
      'FAQs based on real questions from parents',
    ],
  },
  {
    icon: <Heart size={26} />,
    title: 'Emotional Navigation',
    desc: 'A calm, non-judgmental space to talk through what you are experiencing and what support is available.',
    detail: [
      'A space to be heard without judgment',
      'Help identifying support services for your wellbeing',
      'Guidance on managing stress during the process',
      'Referrals to counselling and crisis support services',
    ],
  },
];

export default function AdvocacySupport() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-secondary py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Advocacy & Support</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">What PANS Actually Does</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS provides practical, plain-language support to parents navigating the Child Protection system in Victoria. Here is exactly what that looks like.
          </p>
        </div>
      </section>

      {/* What PANS is NOT */}
      <section className="py-10 px-6 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-secondary rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-stone-800">PANS is</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'An independent information and navigation service',
                  'A support service created from lived experience',
                  'A resource for parents who feel lost or overwhelmed',
                  'A bridge between you and the right services',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-stone-600 text-sm">
                    <CheckCircle2 size={14} className="text-brand-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-stone-400 rounded-xl flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-stone-800">PANS is not</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'A law firm or legal representative',
                  'A government service or Child Protection agency',
                  'An emergency or crisis intervention service',
                  'A replacement for professional legal advice',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-stone-500 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Types of Support</span>
            <h2 className="text-3xl font-serif text-stone-900">Six areas where PANS can help</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-brand-secondary border border-purple-100 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-13 h-13 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm w-12 h-12">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.detail.map((d, di) => (
                      <li key={di} className="flex gap-2 text-stone-600 text-xs">
                        <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How support is accessed */}
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">How you can access support</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Support is provided in whichever format works best for your situation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <MessageCircle size={22} />, label: 'Phone', desc: 'Talk through your situation and get guidance' },
              { icon: <FileText size={22} />, label: 'Email', desc: 'Send questions or documents for review' },
              { icon: <Users size={22} />, label: 'Video call', desc: 'Work through complex issues together online' },
              { icon: <MapPin size={22} />, label: 'In person', desc: 'Available in parts of Victoria where possible' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-purple-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary mx-auto mb-3">{item.icon}</div>
                <h4 className="font-bold text-stone-800 mb-1">{item.label}</h4>
                <p className="text-stone-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important limits + CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-10 flex gap-4">
            <Shield size={22} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">An important note</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                PANS support is limited by time and personal capacity — this is an independent, unfunded service. Response times may vary. PANS always refers parents to appropriate professional services when the need is beyond what we can provide. For legal advice, contact Victoria Legal Aid on <strong>1300 792 387</strong>.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif text-stone-900 mb-4">Ready to get support?</h3>
            <p className="text-stone-500 mb-8">You do not need to have everything figured out. Just reach out when you are ready.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
                Contact PANS <ArrowRight size={16} />
              </Link>
              <Link to="/start-here" className="bg-brand-secondary border border-purple-200 text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors">
                Not sure where to start?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
