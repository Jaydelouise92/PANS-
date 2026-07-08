import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, AlertTriangle, ArrowRight } from 'lucide-react';

const faqs = [
  { q: 'What triggers a Child Protection report?', a: 'Anyone can make a report to Child Protection if they are concerned about the safety, health, or wellbeing of a child. Mandated reporters (such as teachers, doctors, and police) are legally required to report if they have a reasonable belief a child is at risk of harm.' },
  { q: 'What happens after a report is made?', a: 'Child Protection will assess the report and decide whether to investigate. If they decide to investigate, they will contact the family — this may be a home visit, phone call, or letter. Not all reports lead to ongoing involvement.' },
  { q: 'What is a safety plan?', a: 'A safety plan is an informal agreement between the family and Child Protection to manage identified risks. It is not a court order, but it is important to understand and follow it. You should ask for help understanding it before you agree to anything.' },
  { q: 'What is a case plan?', a: 'A case plan is a document that outlines what Child Protection expects the family to do to address the concerns raised. It includes goals, services, and timelines. You have a right to be involved in developing the case plan.' },
  { q: 'What does "substantiated" mean?', a: 'If Child Protection finds that a child has been harmed, or is at risk of harm, they may "substantiate" the report. This is a finding, not a criminal conviction. It means Child Protection will likely remain involved with the family.' },
  { q: 'What is the difference between Child Protection and the police?', a: 'Child Protection (DFFH) is a government department focused on the safety and wellbeing of children. Police investigate criminal offences. They are separate agencies but may work together in some situations.' },
];

const stages = [
  { num: '1', title: 'Report & Intake', desc: 'A report is received by Child Protection. They assess whether to investigate based on the information provided. Many reports do not lead to ongoing involvement.' },
  { num: '2', title: 'Investigation', desc: 'If a decision is made to investigate, workers will contact the family, gather information, and assess the safety and wellbeing of the child. This may include home visits, interviews, and contact with other services.' },
  { num: '3', title: 'Assessment', desc: 'Child Protection makes a decision about whether the child is at risk and what level of intervention is needed. They may substantiate the report, close the case, or move to ongoing intervention.' },
  { num: '4', title: 'Ongoing Intervention', desc: 'If ongoing involvement is needed, a case plan is developed. The family works with a case worker to address the identified concerns. Services may be put in place to support the family.' },
  { num: '5', title: 'Court Intervention', desc: 'If Child Protection believes a child needs to be protected through the court, they apply to the Children\'s Court. A magistrate will hear the case and make orders about the child\'s care.' },
  { num: '6', title: 'Out-of-Home Care', desc: 'If a child cannot safely remain at home, they may be placed in out-of-home care — with relatives, foster carers, or in residential care. The goal is always to support safe reunification where possible.' },
  { num: '7', title: 'Reunification or Permanency', desc: 'Where it is safe to do so, the goal is for children to return home. If reunification is not possible, Child Protection will work towards a permanent care arrangement for the child.' },
];

export default function SystemExplained() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">The System Explained</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">How Child Protection Works in Victoria</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A plain-language overview of the Child Protection system — from the first report through to court and beyond. No jargon.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">This is general information about how the system works. Every family's situation is different. For advice specific to your case, contact <a href="tel:1300792387" className="font-bold hover:underline">Victoria Legal Aid on 1300 792 387</a>.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">The Stages of Child Protection Involvement</h2>
          <p className="text-stone-500 mb-12">Not every family goes through every stage. This is an overview of how the system can progress.</p>
          <div className="space-y-6">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{stage.num}</div>
                <div className="bg-brand-secondary border border-purple-100 p-6 rounded-2xl flex-1">
                  <h3 className="font-bold text-stone-800 mb-2">{stage.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Key Terms Explained</h2>
          <p className="text-stone-500 mb-10">Child Protection and court processes use specific language. Here is what some common terms mean.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { term: 'DFFH', meaning: 'Department of Families, Fairness and Housing — the government department responsible for Child Protection in Victoria.' },
              { term: 'Substantiation', meaning: 'When Child Protection finds that a child has experienced harm, or is at risk of harm. This is not a criminal finding.' },
              { term: 'Safety Plan', meaning: 'An informal agreement between the family and Child Protection to manage identified risks to the child.' },
              { term: 'Case Plan', meaning: 'A formal document outlining goals and services that the family must engage with as part of Child Protection involvement.' },
              { term: 'Interim Accommodation Order (IAO)', meaning: 'A short-term court order allowing Child Protection to place a child in out-of-home care while court proceedings continue.' },
              { term: 'Family Preservation Order (FPO)', meaning: 'A court order that allows a child to remain at home while the family receives services and support.' },
              { term: 'Care by Secretary Order', meaning: 'A long-term court order giving Child Protection responsibility for a child\'s day-to-day care.' },
              { term: 'Mandated Reporter', meaning: 'A person required by law to report child abuse or neglect — includes teachers, nurses, doctors, and police.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-purple-100">
                <h3 className="font-bold text-brand-primary mb-1 text-sm">{item.term}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="border border-purple-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-secondary transition-colors"
                >
                  <span className="font-semibold text-stone-800 pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-brand-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-5 pb-5 bg-brand-secondary"
                  >
                    <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/childrens-court" className="text-brand-primary font-bold flex items-center gap-2 justify-center hover:gap-3 transition-all">
              Read the Children's Court Guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
