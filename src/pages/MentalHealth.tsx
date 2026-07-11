import React from 'react';
import { Heart, Phone, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const crisisLines = [
  { name: 'Emergency Services', number: '000', desc: 'Call immediately if you or someone else is in immediate danger.', colour: 'bg-red-600', urgent: true },
  { name: 'Lifeline', number: '13 11 14', desc: '24/7 crisis support and suicide prevention. Available any time, day or night.', colour: 'bg-red-500', urgent: true },
  { name: 'Beyond Blue', number: '1300 22 4636', desc: 'Support for anxiety and depression. Available 24/7.', colour: 'bg-brand-primary' },
  { name: 'Parentline Victoria', number: '13 22 89', desc: 'Support for parents and carers. Monday–Friday.', colour: 'bg-indigo-600' },
  { name: 'MensLine Australia', number: '1300 78 99 78', desc: 'Telephone and online support for men with relationship and mental health concerns.', colour: 'bg-blue-600' },
  { name: 'Family Relationship Advice Line', number: '1800 050 321', desc: 'Family relationship advice and support.', colour: 'bg-violet-600' },
];

export default function MentalHealth() {
  return (
    <div className="pt-16">
      <section className="relative bg-brand-secondary py-20 px-6 overflow-hidden">
        <img src="/mental-health-hands.png" alt="" aria-hidden className="absolute right-0 bottom-0 h-full max-w-sm object-contain opacity-30 pointer-events-none select-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Mental Health Support</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Looking After Yourself Through This</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Child Protection involvement is one of the most stressful experiences a parent can face. Your mental health matters — and looking after yourself is part of looking after your children.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-red-50 border-b border-red-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800"><strong>In crisis right now?</strong> Call <strong>Lifeline on <a href="tel:131114" className="hover:underline">13 11 14</a></strong> (24/7) or <strong><a href="tel:000" className="hover:underline">000</a></strong> if you are in immediate danger. You do not have to face this alone.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Crisis & Support Lines</h2>
          <p className="text-stone-500 mb-8">Free services available to anyone in Victoria who needs support.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {crisisLines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className={`bg-white border-2 ${line.urgent ? 'border-red-200' : 'border-purple-100'} p-5 rounded-2xl flex gap-4 items-start`}>
                <div className={`w-10 h-10 ${line.colour} rounded-xl flex items-center justify-center shrink-0`}>
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-0.5">{line.name}</h3>
                  <a href={`tel:${line.number.replace(/\s+/g, '')}`} className="text-2xl font-bold text-brand-primary mb-1 hover:underline block w-fit">
                    {line.number}
                  </a>
                  <p className="text-stone-500 text-xs">{line.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Understanding the Stress You're Feeling</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>Child Protection involvement triggers a stress response that can feel overwhelming and all-consuming. Many parents describe feelings of shock, fear, anger, shame, helplessness, and grief — often all at once.</p>
              <p>These feelings are a completely normal response to an extremely stressful situation. They do not make you a bad parent — they make you a human being under enormous pressure.</p>
              <p>Recognising these feelings and giving yourself permission to seek support is one of the most important things you can do — for yourself and for your children.</p>
            </div>
            <div className="mt-8 space-y-3">
              <h3 className="font-bold text-stone-800">Common signs of stress to watch for:</h3>
              {['Difficulty sleeping or sleeping too much', 'Trouble concentrating or thinking clearly', 'Feeling numb, angry, or tearful without warning', 'Withdrawing from people who care about you', 'Physical symptoms like headaches or stomach pain', 'Difficulty eating or overeating'].map((sign, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                  <p className="text-stone-600 text-sm">{sign}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Practical Self-Care Strategies</h2>
            <div className="space-y-4">
              {[
                { title: 'Take things one day at a time', desc: 'You do not have to have everything figured out right now. Focus on what needs to happen today.' },
                { title: 'Stay connected to support people', desc: 'Tell trusted family or friends what is happening. Isolation makes things harder.' },
                { title: 'Keep a routine', desc: 'Maintaining basic routines — meals, sleep, exercise — helps regulate your stress response.' },
                { title: 'Write things down', desc: 'Journalling can help process your feelings and keep track of events and conversations.' },
                { title: 'Limit information overload', desc: 'It is easy to research obsessively. Set boundaries around when and how much you read about your situation.' },
                { title: 'Seek professional support', desc: 'A counsellor or psychologist can help you manage stress and develop coping strategies.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-purple-100 flex gap-3">
                  <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">Online & Community Services</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { name: 'Beyond Blue', url: 'https://www.beyondblue.org.au/', desc: 'Resources for anxiety and depression, including guides for parents under stress.' },
              { name: 'Head to Health', url: 'https://www.headtohealth.gov.au/', desc: 'Find mental health services and resources near you across Australia.' },
              { name: 'PANDA', url: 'https://www.panda.org.au/', desc: 'Perinatal Anxiety & Depression Australia — support for parents of young children.' },
              { name: 'Open Arms', url: 'https://www.openarms.gov.au/', desc: 'Mental health and wellbeing support for parents involved in high-stress situations.' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="group bg-brand-secondary p-5 rounded-2xl border border-purple-100 hover:border-brand-primary transition-all">
                <h3 className="font-bold text-stone-800 mb-1 group-hover:text-brand-primary transition-colors text-sm">{s.name}</h3>
                <p className="text-stone-500 text-xs">{s.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-stone-500 mb-6 text-sm">PANS also provides a safe space to talk through what you are experiencing. We are not a counselling service, but we understand this process and can listen without judgment.</p>
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Reach out to PANS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
