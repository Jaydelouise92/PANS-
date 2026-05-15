import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Accessibility,
  CheckCircle2,
  ArrowRight,
  Heart,
  Users,
  FileText,
  Shield,
  MessageSquare,
  Scale,
  AlertCircle,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const rights = [
  { icon: <Users size={20} />, title: 'Participate, be heard, and be included', desc: 'Take part in decisions about your child and have your views genuinely considered.' },
  { icon: <Heart size={20} />, title: 'Be treated with dignity and respect', desc: 'Workers must communicate with you in a way that is respectful and non-judgmental.' },
  { icon: <FileText size={20} />, title: 'Receive information in accessible formats', desc: 'Plain language, larger print, audio, Easy Read or interpreter support — whatever you need to understand what is happening.' },
  { icon: <MessageSquare size={20} />, title: 'Have a support person at meetings and court', desc: 'You can bring a trusted person — family member, friend, advocate or worker — to any meeting or hearing.' },
  { icon: <Accessibility size={20} />, title: 'Request reasonable adjustments', desc: 'Ask for changes that help you participate fairly: shorter meetings, breaks, written summaries, quiet spaces, and more time to respond.' },
  { icon: <Shield size={20} />, title: 'Receive honest and transparent communication', desc: 'Workers should be clear about what is happening, what you are being asked to do, and why.' },
  { icon: <Scale size={20} />, title: 'Be treated fairly and without discrimination', desc: 'Disability must not be used as the reason a child is removed or kept from a parent.' },
  { icon: <AlertCircle size={20} />, title: 'Make complaints without fear of reprisal', desc: 'Raise concerns, ask for a review or make a formal complaint without worrying it will be held against you.' },
];

export default function DisabilityRights() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-brand-secondary py-20 px-6">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary bg-white border border-purple-100 rounded-full px-3 py-1 mb-5 shadow-sm">
            <Accessibility size={14} aria-hidden="true" /> Disability Rights
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-5 leading-tight">
            Rights of Parents and Carers with Disabilities
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            PANS Victoria recognises the <strong>Charter of Rights for Parents and Carers with Disabilities Involved with Child Protection</strong> in Victoria — and helps parents put those rights into practice.
          </p>
        </motion.div>
      </section>

      {/* Rights cards */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-3">Your rights at a glance</h2>
            <p className="text-stone-600 leading-relaxed">
              Parents and carers with disabilities have the right to:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {rights.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-brand-secondary border border-purple-100 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-brand-primary flex items-center justify-center shrink-0 border border-purple-100 shadow-sm">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1.5 flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-primary mt-1 shrink-0" aria-hidden="true" />
                    {r.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How PANS helps */}
      <section className="px-6 py-20 bg-brand-secondary border-y border-purple-100">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-5">How PANS Victoria can help</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            PANS Victoria can help you understand these rights, ask for the
            adjustments you need, prepare for meetings and court, and advocate
            for fair treatment at every step.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left mt-8">
            {[
              { title: 'Understand your rights', desc: 'Plain-language explanations of the Charter and what each right means in practice.' },
              { title: 'Ask for adjustments', desc: 'Help drafting requests for shorter meetings, written summaries, support people and accessible formats.' },
              { title: 'Advocate for fair treatment', desc: 'Support to raise concerns, request reviews or make formal complaints.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-purple-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-stone-900 mb-1.5">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-primary to-[#5f4d8a] text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-serif mb-3">Need help requesting adjustments?</h2>
          <p className="text-white/90 leading-relaxed mb-6 max-w-xl mx-auto">
            Get free, independent support to advocate for the adjustments you need from Child Protection or the Children's Court.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-primary px-7 py-3.5 rounded-full font-bold hover:bg-brand-soft transition inline-flex items-center gap-2 shadow-lg"
          >
            Contact PANS Victoria <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
