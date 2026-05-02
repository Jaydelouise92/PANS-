import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Users, FileText, BookOpen, MapPin, ArrowRight } from 'lucide-react';

const steps = [
  { step: '01', icon: <MessageCircle size={24} />, title: 'You reach out to PANS', desc: 'Contact PANS by email or through the contact form. You do not need to explain everything at once — just reach out when you are ready.', colour: 'bg-purple-100 text-purple-700' },
  { step: '02', icon: <Users size={24} />, title: 'Initial conversation', desc: 'We have a conversation about where you are in the process, what you are finding difficult, and what kind of support would be most useful.', colour: 'bg-indigo-100 text-indigo-700' },
  { step: '03', icon: <FileText size={24} />, title: 'Case mapping', desc: 'Together we organise the key events, documents, dates, and people involved in your case. This helps you see the full picture clearly.', colour: 'bg-violet-100 text-violet-700' },
  { step: '04', icon: <BookOpen size={24} />, title: 'Preparation support', desc: 'We help you prepare for upcoming meetings, services, or court hearings. This might include preparing questions, understanding what to expect, and organising your documentation.', colour: 'bg-purple-100 text-purple-700' },
  { step: '05', icon: <MapPin size={24} />, title: 'Ongoing navigation support', desc: 'PANS can continue to provide support as your case progresses. You can reach out whenever you have questions or need to prepare for the next stage.', colour: 'bg-indigo-100 text-indigo-700' },
];

export default function HowItWorks() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Simple, supportive, step by step</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS is designed to be straightforward and low-pressure. You do not need to have everything figured out before reaching out.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.colour}`}>
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-12 bg-purple-200 mt-3" />}
                </div>
                <div className="bg-white border border-purple-100 rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/60 mb-1 block">Step {step.step}</span>
                  <h3 className="text-xl font-serif text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">What support looks like in practice</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Phone conversations', desc: 'Talk through your situation, ask questions, and get guidance on what steps to take next.' },
              { title: 'Online meetings', desc: 'Video calls where we can work through documents, preparation, or your questions together.' },
              { title: 'In-person support', desc: 'Where possible, PANS can provide in-person support in Victoria, particularly for parents in regional areas.' },
              { title: 'Written guidance', desc: 'We can help you understand letters, orders, and documents in plain language.' },
              { title: 'Meeting preparation', desc: 'Prepare questions, understand your rights, and know what to expect before important meetings.' },
              { title: 'Resource referrals', desc: 'PANS can help connect you with other services, including legal aid, counselling, and community support.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                <h3 className="font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Ready to take the first step?</h2>
          <p className="text-stone-500 mb-8">It can feel hard to reach out. You do not have to have the right words — just start the conversation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Contact PANS <ArrowRight size={16} />
            </Link>
            <Link to="/start-here" className="bg-brand-secondary border border-purple-200 text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors">
              Not sure where to start?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
