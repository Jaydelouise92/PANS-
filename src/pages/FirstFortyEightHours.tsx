import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, AlertTriangle, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const actions = [
  {
    time: 'Immediately',
    colour: 'bg-red-50 border-red-200',
    badge: 'bg-red-500',
    items: [
      { title: 'Stay calm', desc: 'This is easier said than done, but try to breathe and listen carefully to what the worker is saying.' },
      { title: 'Ask for names and contact details', desc: 'Write down the full name, title, and phone number of every worker you speak with.' },
      { title: 'Ask why they are there', desc: 'You have the right to know why Child Protection is involved. Ask them to explain clearly.' },
      { title: 'Take notes', desc: 'Write down everything that is said during any visit or phone call. Date and time your notes.' },
      { title: 'Do not sign anything yet', desc: 'If you are asked to sign documents, ask for time to read and understand them first. You can ask for a copy to review.' },
    ],
  },
  {
    time: 'Within 24 hours',
    colour: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-500',
    items: [
      { title: 'Contact Victoria Legal Aid', desc: 'Call 1300 792 387. Legal Aid can provide free advice and may be able to assign a lawyer to your case.' },
      { title: 'Gather important documents', desc: 'Collect any letters, orders, or documents you have received. Keep them in one place.' },
      { title: 'Start a timeline', desc: 'Write down what happened and when — dates, names, conversations. This will be important later.' },
      { title: 'Tell someone you trust', desc: 'Let a trusted family member or friend know what is happening. You will need support.' },
      { title: 'Reach out to a support service', desc: 'Contact a family support service or PANS for guidance on next steps.' },
    ],
  },
  {
    time: 'Within 48 hours',
    colour: 'bg-green-50 border-green-200',
    badge: 'bg-green-500',
    items: [
      { title: 'Understand the next steps', desc: 'Ask Child Protection what will happen next and what they expect from you. Get this in writing if possible.' },
      { title: 'Ask about your child\'s placement', desc: 'If your child has been removed, ask where they are, when you can see them, and what contact arrangements exist.' },
      { title: 'Prepare for the first meeting or court date', desc: 'A court hearing often happens within days of removal. Begin preparing with legal support immediately.' },
      { title: 'Seek emotional support', desc: 'This is an incredibly stressful time. Reach out to a counsellor, family member, or support service for your own wellbeing.' },
      { title: 'Stay organised', desc: 'Keep all paperwork together, continue your notes, and follow up on any commitments that were made.' },
    ],
  },
];

export default function FirstFortyEightHours() {
  return (
    <div className="pt-16">
      <section className="bg-[#2D2438] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Clock size={13} /> Critical Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">First 48 Hours After Child Protection Becomes Involved</h1>
          <p className="text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            The first 48 hours are often the most overwhelming. This guide tells you what to do, step by step, in plain language.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800"><strong>Important:</strong> This guide provides general information only. It is not legal advice. If your child has been removed or you have a court date, contact Victoria Legal Aid immediately on <strong>1300 792 387</strong>.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {actions.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${section.badge}`} />
                  <h2 className="text-2xl font-serif text-stone-900">{section.time}</h2>
                </div>
                <div className={`border rounded-2xl overflow-hidden ${section.colour}`}>
                  {section.items.map((item, ii) => (
                    <div key={ii} className={`p-5 flex gap-4 ${ii < section.items.length - 1 ? 'border-b border-current/10' : ''}`}>
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-stone-800 mb-1">{item.title}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8 text-center">Key contacts to have ready</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Victoria Legal Aid', number: '1300 792 387', desc: 'Free legal advice and potential representation for parents in child protection matters.' },
              { name: 'Lifeline (crisis support)', number: '13 11 14', desc: '24/7 crisis support if you are feeling overwhelmed, distressed, or unable to cope.' },
              { name: 'Child Protection (DFFH)', number: '13 12 78', desc: 'The department responsible for your case. Ask for your allocated worker\'s direct contact.' },
              { name: 'Family Relationship Advice Line', number: '1800 050 321', desc: 'Information and advice about family relationship issues including separation and parenting.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                <h3 className="font-bold text-stone-800 mb-1 flex items-center gap-2"><Phone size={16} className="text-brand-primary" /> {c.name}</h3>
                <p className="text-2xl font-bold text-brand-primary mb-2">{c.number}</p>
                <p className="text-stone-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Need personalised guidance?</h3>
          <p className="text-stone-500 mb-8">PANS can help you understand what is happening and what to do next. Reach out whenever you are ready.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Contact PANS <ArrowRight size={16} />
            </Link>
            <Link to="/parent-rights" className="bg-brand-secondary border border-purple-200 text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors">
              Know Your Rights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
