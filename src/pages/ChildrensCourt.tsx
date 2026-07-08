import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Gavel, AlertTriangle, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

const hearingTypes = [
  { title: 'First Mention', desc: 'The first court date after an application is filed. Usually brief. The magistrate confirms the parties and sets the next hearing date. You should have legal representation by this point.' },
  { title: 'Contested Hearing', desc: 'A hearing where the evidence is tested. Both sides present their case. Witnesses may be called. You will need a lawyer for a contested hearing.' },
  { title: 'Directions Hearing', desc: 'A procedural hearing where the court manages the progress of the case — setting timelines, ordering reports, or deciding what evidence is needed.' },
  { title: 'Mention', desc: 'A brief court event to update the magistrate on the progress of the case or to make simple procedural orders.' },
  { title: 'Conciliation Conference', desc: 'A meeting facilitated by a registrar where parties try to reach agreement on the orders to be made, without going to a full hearing.' },
  { title: 'Final Hearing', desc: 'The full hearing where the magistrate makes a final decision. All evidence is presented. This is the most formal and significant hearing in the process.' },
];

const orders = [
  { title: 'Undertaking', colour: 'bg-green-50 border-green-200 text-green-800', desc: 'A promise by parents to do certain things. Not a court order, but an agreement recorded by the court. The least formal outcome.' },
  { title: 'Supervision Order (SO)', colour: 'bg-blue-50 border-blue-200 text-blue-800', desc: 'Child remains at home but Child Protection supervises the family and may require engagement with services. Usually 12 months.' },
  { title: 'Family Preservation Order (FPO)', colour: 'bg-indigo-50 border-indigo-200 text-indigo-800', desc: 'Child remains at home. The family receives support services and Child Protection has a role in monitoring. Up to 2 years.' },
  { title: 'Interim Accommodation Order (IAO)', colour: 'bg-amber-50 border-amber-200 text-amber-800', desc: 'Short-term order removing the child from home while the court case continues. Can be contested at the next hearing.' },
  { title: 'Care by Secretary Order', colour: 'bg-orange-50 border-orange-200 text-orange-800', desc: 'Long-term order giving Child Protection responsibility for the child\'s care. Usually up to age 17. Contact with parents may still occur.' },
  { title: 'Long Term Care Order', colour: 'bg-red-50 border-red-200 text-red-800', desc: 'Places the child in the long-term care of a specific person, such as a grandparent. Child Protection has less ongoing involvement.' },
];

export default function ChildrensCourt() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Understanding Children's Court</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">What to Expect at Children's Court</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Going to court is stressful, but understanding how it works can help you feel more prepared. This guide explains the process in plain language.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800"><strong>You should have a lawyer at court.</strong> Contact <a href="tel:1300792387" className="font-bold hover:underline">Victoria Legal Aid on 1300 792 387</a> as early as possible. If your first court date is coming up, call them immediately — even on the day.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Before You Go to Court</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Contact a lawyer as soon as possible — do not wait until the day',
              'Read all documents you have received carefully',
              'Bring all your paperwork, letters, and orders to court',
              'Arrive early — courts run on strict time schedules',
              'Dress neatly and respectfully — first impressions matter',
              'Bring a trusted support person if allowed',
              'Write down any questions you have for your lawyer',
              'Stay calm and let your lawyer do the talking in court',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-brand-secondary p-4 rounded-xl border border-purple-100">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">{tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-serif text-stone-900 mb-8">Types of Court Hearings</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {hearingTypes.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-brand-secondary border border-purple-100 p-6 rounded-2xl">
                <Gavel size={18} className="text-brand-primary mb-3" />
                <h3 className="font-bold text-stone-800 mb-2">{h.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Types of Orders the Court Can Make</h2>
          <p className="text-stone-500 mb-10">The magistrate can make different types of orders depending on the circumstances. Here is what each one means.</p>
          <div className="space-y-4">
            {orders.map((order, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className={`border-2 ${order.colour} p-5 rounded-2xl flex gap-4 items-start`}>
                <div className="shrink-0 mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-current mt-1.5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{order.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{order.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">What happens on the day</h2>
          <div className="space-y-5">
            {[
              { time: 'On arrival', desc: 'Check in at the registry. Tell them you are there for your hearing. Ask where to wait and when to expect to be called.' },
              { time: 'Before the hearing', desc: 'Meet with your lawyer if possible. Go over your case and any questions you have. Your lawyer will explain what to expect.' },
              { time: 'In the courtroom', desc: 'When your case is called, you will be directed into the courtroom. Stand when the magistrate enters. Speak clearly and directly when asked.' },
              { time: 'After the hearing', desc: 'Ask your lawyer to explain what was decided, what the next steps are, and what you need to do before the next hearing date.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-28 shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">{step.time}</span>
                </div>
                <div className="bg-brand-secondary border border-purple-100 p-4 rounded-xl flex-1">
                  <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Get support from PANS <ArrowRight size={16} />
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
