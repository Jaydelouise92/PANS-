import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const groups = [
  { title: 'Parents with active Child Protection involvement', desc: 'Parents navigating active investigations, safety plans, or ongoing case management with DFFH Child Protection.' },
  { title: 'Parents preparing for Children\'s Court', desc: 'Parents who have a court date and need help understanding what to expect and how to prepare.' },
  { title: 'Self-represented parents', desc: 'Parents who do not yet have a lawyer and need clear guidance on process and procedure while they seek legal help.' },
  { title: 'Parents in regional and rural Victoria', desc: 'Families who face additional barriers such as limited local services, travel distances, and fewer support options.' },
  { title: 'Culturally diverse families', desc: 'Parents from diverse backgrounds who may face language barriers or cultural misunderstandings within the system.' },
  { title: 'Parents of children with disability', desc: 'Parents who require additional support to ensure their needs are understood and met throughout the process.' },
  { title: 'Parents seeking to appeal a decision', desc: 'Parents who want to appeal a court order or case plan decision and need guidance on next steps.' },
  { title: 'Family members supporting a parent', desc: 'Grandparents, siblings, or other family members supporting someone going through the system.' },
];

export default function WhoWeSupport() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Who We Support</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">PANS is here for parents navigating difficult systems</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS supports parents and families in Victoria who are involved with Child Protection or the Children's Court. Every situation is different — PANS meets you where you are.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Who can reach out to PANS?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-brand-secondary border border-purple-100 p-6 rounded-2xl"
              >
                <CheckCircle2 size={18} className="text-brand-primary mb-3" />
                <h3 className="font-bold text-stone-800 mb-2">{g.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-purple-100 p-8 shadow-sm">
            <h3 className="text-xl font-serif text-stone-900 mb-6 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={20} /> What PANS Can Help With</h3>
            <ul className="space-y-3">
              {[
                'Understanding how Child Protection processes work',
                'Knowing your rights at each stage of the process',
                'Preparing for meetings with Child Protection workers',
                'Understanding court orders and what they mean',
                'Preparing questions for court hearings',
                'Staying organised with documents and timelines',
                'Finding other services such as legal aid and family support',
                'Emotional navigation support — someone to talk things through with',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-red-100 p-8 shadow-sm">
            <h3 className="text-xl font-serif text-stone-900 mb-6 flex items-center gap-2"><XCircle className="text-red-400" size={20} /> What PANS Cannot Do</h3>
            <ul className="space-y-3">
              {[
                'Provide legal advice or legal representation',
                'Attend court hearings on your behalf',
                'Make decisions about your case',
                'Contact Child Protection on your behalf',
                'Provide emergency support or crisis intervention',
                'Guarantee any outcome in your case',
                'Replace the role of a solicitor or barrister',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                  <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-xs text-amber-800">For legal representation, contact Victoria Legal Aid on <strong>1300 792 387</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Common challenges parents face</h2>
          <p className="text-stone-500 mb-12">You are not alone in finding this system difficult to navigate.</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              'Not understanding the legal jargon in letters and orders',
              'Feeling unheard or dismissed in meetings with workers',
              'Not knowing what Child Protection expects from you',
              'Being unsure of your rights to see your children',
              'Difficulty organising paperwork and keeping track of timelines',
              'Feeling emotionally overwhelmed and unable to think clearly',
              'Living in a regional area with few local services',
              'Not being able to afford a private lawyer',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-secondary p-4 rounded-xl border border-purple-100">
                <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                <p className="text-stone-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/start-here" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Find support for your situation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
