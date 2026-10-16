import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const faqs: { q: string; a: string; link?: { to: string; label: string } }[] = [
  {
    q: 'What does PANS Victoria do?',
    a: "PANS Victoria is a free, independent advocacy and navigation service for parents involved with Child Protection (DFFH) or the Children's Court of Victoria. We help you understand the process, know your rights, prepare for meetings and court, explore appeals and reviews, and work out your next step in plain language.",
    link: { to: '/about', label: 'About PANS Victoria' },
  },
  {
    q: 'Is the service free?',
    a: 'Yes. Every guide and every page on this site is free to use. PANS Victoria is parent-led and unfunded, and we will never ask you for payment to access information or support.',
    link: { to: '/funding', label: 'How PANS is funded' },
  },
  {
    q: "Can you help with Children's Court?",
    a: "Yes. We can help you understand hearing types, common court orders (such as Interim Accommodation Orders, Family Reunification Orders and Care by Secretary Orders), what to expect on the day, and how to prepare. PANS does not provide legal representation. For that, please contact Victoria Legal Aid on 1300 792 387.",
    link: { to: '/childrens-court', label: "Children's Court guide" },
  },
  {
    q: 'Can you help with appeals and reviews?',
    a: 'Yes. PANS Victoria can help you understand the internal review and appeal pathways available, including who to write to, what to include, and where to get free legal advice.',
    link: { to: '/resources', label: 'See appeals and review resources' },
  },
  {
    q: 'Do you support regional Victoria?',
    a: 'Absolutely. PANS Victoria was built with rural and regional parents in mind, where face-to-face support is harder to access. Every guide is online and printable, and we focus on the questions parents in regional and rural communities tell us they need answered.',
    link: { to: '/contact', label: 'Contact PANS' },
  },
  {
    q: 'Are you independent from Child Protection and DFFH?',
    a: 'Yes. PANS Victoria is fully independent. We are not government-funded, not run by DFFH, and have no formal connection to Child Protection. We are a parent-led service that exists to support parents.',
    link: { to: '/about', label: 'About PANS' },
  },
  {
    q: 'What if I have a disability and need support to participate?',
    a: 'Parents and carers with disabilities have specific rights under the Charter of Rights for Parents and Carers with Disabilities Involved with Child Protection. These include the right to reasonable adjustments, accessible information and a support person at meetings and court. PANS Victoria can help you understand these rights and ask for what you need.',
    link: { to: '/disability-rights', label: 'Learn about Disability Rights' },
  },
  {
    q: 'Is PANS Victoria a law firm?',
    a: 'No. PANS provides general information and navigation support only. We are not lawyers and we do not give legal advice. For legal advice, contact Victoria Legal Aid on 1300 792 387.',
    link: { to: '/about', label: 'About PANS Victoria' },
  },
];

export default function FAQ() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-brand-soft to-brand-secondary py-20 px-6">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary bg-white border border-purple-100 rounded-full px-3 py-1 mb-5 shadow-sm">
            <HelpCircle size={14} aria-hidden="true" /> Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-5 leading-tight">Common questions from parents</h1>
          <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Short answers to the questions parents ask most. Each one links to a fuller guide.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-brand-secondary border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <summary className="cursor-pointer font-semibold text-stone-900 flex items-center justify-between gap-3 list-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:outline-none focus-visible:ring-offset-2 rounded-lg">
                <span>{f.q}</span>
                <ArrowRight size={16} className="text-brand-primary shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="mt-3 pt-3 border-t border-purple-100">
                <p className="text-stone-700 leading-relaxed mb-3">{f.a}</p>
                {f.link && (
                  <Link to={f.link.to} className="text-brand-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    {f.link.label} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-primary to-[#5f4d8a] text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-serif mb-3">Still have questions?</h2>
          <p className="text-white/90 leading-relaxed mb-6 max-w-xl mx-auto">Get free, independent support to better understand your options and advocate for your family.</p>
          <Link to="/contact" className="bg-white text-brand-primary px-7 py-3.5 rounded-full font-bold hover:bg-brand-soft transition inline-flex items-center gap-2 shadow-lg">
            Contact PANS Victoria <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
