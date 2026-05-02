import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

const rights = [
  {
    heading: 'During an Investigation',
    items: [
      { title: 'Right to know why Child Protection is involved', desc: 'You have the right to be told why a report was made and why workers are involved with your family.' },
      { title: 'Right to be heard', desc: 'You have the right to share your perspective and have it considered by Child Protection workers.' },
      { title: 'Right to have a support person', desc: 'You can have a support person present during interviews and meetings with Child Protection.' },
      { title: 'Right to access an interpreter', desc: 'If English is not your first language, you have the right to a free interpreter during meetings.' },
      { title: 'Right to ask questions', desc: 'You can ask Child Protection workers to explain anything you do not understand. You do not have to agree to anything on the spot.' },
      { title: 'Right to read documents', desc: 'You have the right to see the documents that relate to your case, including any court applications.' },
    ],
  },
  {
    heading: 'During Case Management',
    items: [
      { title: 'Right to participate in your case plan', desc: 'You have the right to be involved in developing the case plan and to understand what is expected of you.' },
      { title: 'Right to review and appeal decisions', desc: 'You can seek a review of decisions made by Child Protection, including through the Children\'s Court.' },
      { title: 'Right to legal representation', desc: 'You have the right to a lawyer. If you cannot afford one, you may be eligible for Victoria Legal Aid.' },
      { title: 'Right to maintain contact with your child', desc: 'If your child is in care, you generally have the right to contact unless a court order restricts this.' },
      { title: 'Right to cultural considerations', desc: 'Child Protection must consider the cultural, religious, and linguistic background of your family.' },
    ],
  },
  {
    heading: 'At Children\'s Court',
    items: [
      { title: 'Right to be present at hearings', desc: 'You have the right to attend court hearings about your children unless the court orders otherwise.' },
      { title: 'Right to be represented by a lawyer', desc: 'You can have a lawyer speak on your behalf at court. Contact Victoria Legal Aid as soon as possible.' },
      { title: 'Right to see the evidence', desc: 'You are entitled to see the documents and evidence that the other parties are relying on.' },
      { title: 'Right to speak to the magistrate', desc: 'In some circumstances, you may be able to address the court directly or through your lawyer.' },
      { title: 'Right to appeal', desc: 'If you disagree with a court order, you may have the right to appeal. Get legal advice immediately about timeframes.' },
    ],
  },
];

export default function ParentRights() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Parent Rights Guide</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Your Rights as a Parent</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Knowing your rights is one of the most important things you can do when Child Protection becomes involved. This guide explains your rights in plain language.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800"><strong>This is general information only.</strong> Rights can vary depending on your specific situation and orders in place. For advice about your individual circumstances, contact Victoria Legal Aid on <strong>1300 792 387</strong>.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {rights.map((section, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.1 }}
            >
              <h2 className="text-2xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                <Scale size={22} className="text-brand-primary" /> {section.heading}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item, ii) => (
                  <div key={ii} className="bg-brand-secondary p-5 rounded-2xl border border-purple-100 flex gap-4">
                    <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1 text-sm">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-stone-900 mb-6">Key things to remember</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'You do not have to answer questions without a lawyer present.',
              'You can ask for time to consider any document before signing.',
              'You can have a support person at meetings — a family member, friend, or advocate.',
              'Child Protection workers must treat you with respect and dignity.',
              'You can make a complaint if you feel your rights are not being respected.',
              'Getting legal advice as early as possible is strongly recommended.',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-purple-100">
                <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                <p className="text-stone-600 text-sm">{tip}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-primary text-white p-8 rounded-2xl">
            <h3 className="font-serif text-xl mb-3">Need help understanding your rights in your situation?</h3>
            <p className="text-white/80 text-sm mb-6">PANS can help you understand how your rights apply to your specific case, prepare questions for meetings, and point you to the right legal services.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-white text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors inline-flex items-center gap-2 text-sm">
                Contact PANS <ArrowRight size={14} />
              </Link>
              <a href="https://www.legalaid.vic.gov.au/" target="_blank" rel="noopener noreferrer" className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors text-sm">
                Victoria Legal Aid
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
