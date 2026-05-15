import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Shield,
  MessageSquare,
  Scale,
  FileText,
  Map,
  Users,
  Sparkles,
  Accessibility,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const services = [
  { icon: <BookOpen size={22} />, title: 'Understand Child Protection', desc: 'Plain-language guides to the DFFH process — from notification to reunification.', to: '/system-explained' },
  { icon: <Shield size={22} />, title: 'Know Your Rights', desc: 'What you can ask for, what you can refuse, and what Child Protection must tell you.', to: '/parent-rights' },
  { icon: <MessageSquare size={22} />, title: 'Prepare for Meetings', desc: 'Make sure your voice is heard at case planning meetings and conferences.', to: '/how-it-works' },
  { icon: <Scale size={22} />, title: "Children's Court Support", desc: 'Hearing types, common orders, and a step-by-step day-of-court guide.', to: '/childrens-court' },
  { icon: <FileText size={22} />, title: 'Appeals and Reviews', desc: 'Internal reviews, complaints and appeal pathways when you disagree with a decision.', to: '/resources' },
  { icon: <Map size={22} />, title: 'Regional and Rural Support', desc: 'The same plain-language guidance no matter where in Victoria you live.', to: '/start-here' },
  { icon: <Users size={22} />, title: 'Parent Self-Advocacy', desc: 'Practical tools to speak up for yourself and your family with confidence.', to: '/parent-rights' },
  { icon: <Sparkles size={22} />, title: 'Plain-Language Resources', desc: 'Printable guides, checklists and articles written for parents under stress.', to: '/resources' },
  { icon: <Accessibility size={22} />, title: 'Disability Rights & Reasonable Adjustments', desc: 'Help understanding the Charter and asking for the adjustments you need.', to: '/disability-rights' },
];

export default function Services() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-brand-soft to-brand-secondary py-20 px-6">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Services</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-5 leading-tight">How PANS Victoria helps parents</h1>
          <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Free, independent advocacy and information across every stage of the Child Protection journey in Victoria — including rural and regional communities.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={s.to}
                className="group block h-full bg-brand-secondary border border-purple-100 rounded-2xl p-6 hover:bg-white hover:border-brand-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                  {s.title}
                  <ArrowRight size={16} className="text-brand-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-primary to-[#5f4d8a] text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-serif mb-3">Not sure where to start?</h2>
          <p className="text-white/90 leading-relaxed mb-6 max-w-xl mx-auto">
            Tell us where you are in the process and we'll point you to the most relevant guides.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/start-here" className="bg-white text-brand-primary px-7 py-3.5 rounded-full font-bold hover:bg-brand-soft transition inline-flex items-center gap-2 shadow-lg">
              Start Here <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="border border-white/60 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition inline-flex items-center gap-2">
              Contact PANS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
