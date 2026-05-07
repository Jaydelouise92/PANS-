import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Clock, Scale, Gavel, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

const stages = [
  {
    id: 'investigation',
    icon: <MapPin size={22} />,
    title: 'Child Protection has just become involved',
    desc: 'A report has been made, workers have visited, or you have received a letter or phone call.',
    links: [
      { label: 'First 48 Hours Guide', path: '/first-48-hours' },
      { label: 'Your Rights as a Parent', path: '/parent-rights' },
      { label: 'The System Explained', path: '/system-explained' },
    ],
  },
  {
    id: 'case-plan',
    icon: <Scale size={22} />,
    title: 'I am on a case plan or safety plan',
    desc: 'You are working with Child Protection, attending services, or have signed (or been asked to sign) an agreement.',
    links: [
      { label: 'Your Rights as a Parent', path: '/parent-rights' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Contact PANS for Support', path: '/contact' },
    ],
  },
  {
    id: 'court',
    icon: <Gavel size={22} />,
    title: "I have a court date or Children's Court order",
    desc: 'You have been to court or are about to go. You may have an Interim Accommodation Order or Family Preservation Order.',
    links: [
      { label: "Children's Court Guide", path: '/childrens-court' },
      { label: 'Your Rights as a Parent', path: '/parent-rights' },
      { label: 'Contact PANS for Support', path: '/contact' },
    ],
  },
  {
    id: 'reunification',
    icon: <HeartHandshake size={22} />,
    title: 'My child is in care and I want them home',
    desc: 'Your child is currently in out-of-home care and you are working towards reunification.',
    links: [
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Mental Health Support', path: '/mental-health' },
      { label: 'Contact PANS for Support', path: '/contact' },
    ],
  },
  {
    id: 'just-looking',
    icon: <Clock size={22} />,
    title: 'I just want to understand how the system works',
    desc: 'You want to be informed before anything happens, or you are supporting someone who is going through this.',
    links: [
      { label: 'The System Explained', path: '/system-explained' },
      { label: "Children's Court Guide", path: '/childrens-court' },
      { label: 'Resources', path: '/resources' },
    ],
  },
];

export default function StartHere() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedStage = stages.find((s) => s.id === selected);

  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Start Here</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Where are you right now?</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            You do not need to read everything at once. Choose what best describes your situation and we will point you to the most relevant information.
          </p>
        </div>
      </section>

      <div className="w-full overflow-hidden max-h-64">
        <img src="/safe-home.png" alt="A warm safe home" className="w-full object-cover object-center" />
      </div>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {stages.map((stage) => (
              <motion.button
                key={stage.id}
                onClick={() => setSelected(selected === stage.id ? null : stage.id)}
                whileHover={{ scale: 1.01 }}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${selected === stage.id ? 'border-brand-primary bg-brand-primary/5' : 'border-stone-200 bg-white hover:border-brand-primary/40'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${selected === stage.id ? 'bg-brand-primary text-white' : 'bg-brand-secondary text-brand-primary'}`}>
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-1 text-left">{stage.title}</h3>
                    <p className="text-stone-500 text-sm text-left">{stage.desc}</p>
                  </div>
                  <ChevronRight size={20} className={`text-stone-400 shrink-0 mt-0.5 transition-transform ${selected === stage.id ? 'rotate-90 text-brand-primary' : ''}`} />
                </div>
              </motion.button>
            ))}
          </div>

          {selectedStage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-brand-secondary border border-purple-200 rounded-2xl p-8"
            >
              <h3 className="font-bold text-brand-primary mb-2">Recommended for you</h3>
              <p className="text-stone-600 text-sm mb-6">Based on your situation, here are the most helpful places to start:</p>
              <div className="space-y-3">
                {selectedStage.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between bg-white p-4 rounded-xl border border-purple-100 hover:border-brand-primary hover:shadow-sm transition-all group"
                  >
                    <span className="font-medium text-stone-700 group-hover:text-brand-primary">{link.label}</span>
                    <ArrowRight size={16} className="text-stone-400 group-hover:text-brand-primary" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">Need personal support?</h3>
            <p className="text-amber-800 text-sm mb-4">
              If you would like to speak with someone at PANS directly about your situation, you can reach out via the contact page. PANS provides general navigation support — not legal advice.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary/90 transition-colors">
              Contact PANS <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
