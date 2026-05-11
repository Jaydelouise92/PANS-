import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Scale, Shield, Info, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">About PANS</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Why PANS Exists</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS was created because navigating Child Protection and the Children's Court without clear guidance is one of the hardest things a parent can face.
          </p>
        </div>
      </section>

      {/* Story + value cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">An independent service, built from lived experience</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                PANS — Parent Advocacy, Navigation &amp; Support — is an independent information and navigation support service for parents in Victoria involved with the Department of Families, Fairness and Housing (DFFH) or the Children's Court of Victoria.
              </p>
              <p>
                It was created by a parent who has personally been through this system and knows how overwhelming, confusing and isolating it can feel. The goal is simple: help parents understand what is happening, know their rights, and feel less alone.
              </p>
            </div>

            <div className="mt-8 bg-brand-primary text-white p-6 rounded-2xl">
              <p className="font-serif text-base italic leading-relaxed">
                "PANS aims to help parents understand what is happening, stay organised, and approach the process with greater confidence."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Heart size={20} />, title: 'Lived Experience', desc: 'Created by a parent who has navigated the system firsthand.' },
              { icon: <Scale size={20} />, title: 'Informed by Study', desc: 'The founder is studying criminology and criminal justice with a focus on families in child protection.' },
              { icon: <Shield size={20} />, title: 'Child Safety First', desc: 'PANS holds a valid Working With Children Check.' },
              { icon: <Info size={20} />, title: 'Not Legal Advice', desc: 'PANS provides information and navigation support only — always seek legal advice from Victoria Legal Aid where possible.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-brand-secondary p-5 rounded-2xl border border-purple-100"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shrink-0 shadow-sm">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1 text-sm">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality + Role */}
      <section className="py-16 px-6 bg-brand-secondary border-y border-purple-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-purple-100">
            <h3 className="font-bold text-brand-primary mb-3 flex items-center gap-2"><Shield size={18} /> Confidentiality</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Everything shared with PANS is treated with respect and confidentiality, unless there is a legal obligation to disclose (for example, if a child is at risk of harm).</p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-purple-100">
            <h3 className="font-bold text-brand-primary mb-3 flex items-center gap-2"><Info size={18} /> Role of PANS</h3>
            <p className="text-stone-600 text-sm leading-relaxed">PANS provides general information and navigation support. We do not provide legal advice, attend court hearings, or represent parents legally. We always encourage parents to seek legal representation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h3 className="text-xl font-serif text-stone-900 mb-1">Ready to get started?</h3>
            <p className="text-stone-500 text-sm">Find the information most relevant to your situation.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/start-here" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors flex items-center gap-2">
              Start Here <ArrowRight size={16} />
            </Link>
            <Link to="/founder" className="bg-brand-secondary border border-purple-200 text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
