import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Scale, Shield, Info, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">About PANS</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Why PANS Exists</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS was created because navigating Child Protection and the Children's Court without clear guidance is one of the hardest things a parent can face.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">An independent information service, built from lived experience</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                PANS — Parent Advocacy and Navigation Support — is an independent information and navigation support service for parents in Victoria who are involved with the Department of Families, Fairness and Housing (DFFH), also known as Child Protection, or the Children's Court of Victoria.
              </p>
              <p>
                PANS was created by a parent who has personally navigated this system and experienced firsthand how overwhelming, confusing, and isolating it can be. The lack of plain-language information and accessible support is a real barrier for many families.
              </p>
              <p>
                The goal is simple: help parents understand what is happening, know their rights, and feel less alone during one of the most difficult periods of their lives.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: <Heart size={20} />, title: 'Lived Experience', desc: 'Created by a parent who has navigated the system firsthand and understands the real challenges families face.' },
              { icon: <Scale size={20} />, title: 'Informed by Study', desc: 'The founder is studying criminology and criminal justice with a focus on the experiences of families involved in child protection.' },
              { icon: <Shield size={20} />, title: 'Child Safety First', desc: 'PANS holds a valid Working With Children Check and operates with the safety of children as a priority.' },
              { icon: <Info size={20} />, title: 'Not Legal Advice', desc: 'PANS provides information and navigation support only. We always encourage parents to seek legal representation where possible.' },
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

      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-8">Our Values</h2>
              <div className="space-y-6">
                {[
                  { title: 'Respect', desc: 'Every parent is treated with dignity and without judgment, regardless of their circumstances.' },
                  { title: 'Clarity', desc: 'Complex processes are broken down into plain language that is easy to understand.' },
                  { title: 'Practical Support', desc: 'We focus on actionable information that helps parents stay organised and prepared.' },
                  { title: 'Empowerment', desc: 'We want parents to feel confident understanding the system they are involved in.' },
                  { title: 'Honesty', desc: 'We are transparent about what PANS can and cannot do, and always refer parents to appropriate services.' },
                ].map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-stone-800 mb-1">{val.title}</h4>
                      <p className="text-stone-500 text-sm">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
                <h3 className="font-bold text-brand-primary mb-3 flex items-center gap-2"><Shield size={18} /> Confidentiality</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Everything shared with PANS is treated with respect and confidentiality, unless there is a legal obligation to disclose (for example, if a child is at risk of harm).</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
                <h3 className="font-bold text-brand-primary mb-3 flex items-center gap-2"><Info size={18} /> Role of PANS</h3>
                <p className="text-stone-600 text-sm leading-relaxed">PANS provides general information and navigation support. We do not provide legal advice, attend court hearings, or represent parents legally. We always encourage parents to seek legal representation.</p>
              </div>
              <blockquote className="bg-brand-primary text-white p-8 rounded-2xl">
                <p className="font-serif text-lg italic leading-relaxed">"Navigating child protection can feel overwhelming. PANS aims to help parents understand what is happening, stay organised, and approach the process with greater confidence."</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

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
