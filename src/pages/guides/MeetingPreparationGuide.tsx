import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ArrowLeft, Users, FileText, MessageCircle, Shield } from 'lucide-react';
import PrintButton from '../../components/PrintButton';
import LastUpdated from '../../components/LastUpdated';

const sections = [
  {
    icon: <FileText size={20} />,
    title: 'Before the meeting — what to do',
    colour: 'border-purple-200 bg-purple-50',
    steps: [
      { heading: 'Know the purpose of the meeting', detail: 'Ask Child Protection to confirm in writing what the meeting is about and who will be attending. You have the right to know this before you arrive.' },
      { heading: 'Write down your questions', detail: 'Prepare a list of questions you want to ask. It is easy to forget in the moment. Common questions: What are the concerns about my child? What do I need to do? What happens next?' },
      { heading: 'Bring a support person', detail: 'You are entitled to bring a support person — a trusted friend, family member, or advocate. Let Child Protection know in advance that you will be bringing someone.' },
      { heading: 'Bring a notebook', detail: 'Take notes during the meeting. This helps you remember what was said and agreed. It also signals that you are engaged and taking things seriously.' },
      { heading: 'Read any documents you have received', detail: 'Review any letters, case plans, or reports you have been sent. Note anything you do not understand so you can ask about it.' },
    ],
  },
  {
    icon: <MessageCircle size={20} />,
    title: 'During the meeting — what to know',
    colour: 'border-indigo-200 bg-indigo-50',
    steps: [
      { heading: 'You do not have to agree on the spot', detail: 'If you are asked to sign anything or agree to something, you are allowed to say: "I need time to consider this before I agree." Never sign something you do not understand.' },
      { heading: 'Ask for clarification', detail: 'If someone uses a term or phrase you do not understand, ask them to explain it in plain language. This is your right and your meeting too.' },
      { heading: 'Your interpreter is free', detail: 'If English is not your first language, a free accredited interpreter must be provided. Request this in advance and confirm it will be arranged before you attend.' },
      { heading: 'Take notes', detail: 'Write down what is discussed, what decisions are made, and what the next steps are. This protects you if there is ever a dispute about what was agreed.' },
      { heading: 'Stay calm — even when it is hard', detail: 'This is difficult. It is okay to ask for a short break if you need one. You are allowed to regulate yourself during the meeting.' },
    ],
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: 'After the meeting — follow up',
    colour: 'border-green-200 bg-green-50',
    steps: [
      { heading: 'Request a written summary', detail: 'Ask Child Protection to send you a written summary of what was discussed and any decisions or actions agreed upon. You are entitled to this.' },
      { heading: 'Review what you agreed to', detail: 'Go back over your notes and any documents you signed. Make sure you understand what you have committed to and the timeframes involved.' },
      { heading: 'Follow up on anything unresolved', detail: 'If there were questions you could not get answered, follow up in writing (email is ideal so there is a record). Keep copies of all correspondence.' },
      { heading: 'Reach out if you need support', detail: 'If the meeting was distressing or you are unsure what to do next, contact PANS. We can help you make sense of what happened and plan next steps.' },
    ],
  },
];

export default function MeetingPreparationGuide() {
  return (
    <div className="pt-16 print:pt-0">
      {/* Print header — only visible when printing */}
      <div className="hidden print:block mb-8 pb-6 border-b-2 border-stone-300">
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">PANS Victoria — Parent Advocacy & Navigation Support</p>
        <h1 className="text-3xl font-serif text-stone-900">Preparing for a Child Protection Meeting</h1>
        <p className="text-sm text-stone-500 mt-2">pansvictoria.org.au · For general information only, not legal advice · VLA: 1300 792 387</p>
      </div>

      {/* Screen header */}
      <section className="bg-brand-secondary py-16 px-6 print:hidden">
        <div className="max-w-4xl mx-auto">
          <Link to="/resources" className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold mb-6 hover:gap-3 transition-all no-print">
            <ArrowLeft size={14} /> Back to Resources
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Practical Guide</span>
              <h1 className="text-4xl font-serif text-stone-900 mb-3">Preparing for a Child Protection Meeting</h1>
              <LastUpdated date="May 2026" className="mb-4" />
              <p className="text-stone-600 leading-relaxed max-w-xl">
                Meetings with Child Protection workers can feel intimidating. This guide explains what to do before, during, and after — so you feel prepared, not caught off guard.
              </p>
            </div>
            <PrintButton className="shrink-0 mt-2" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white max-w-4xl mx-auto space-y-10">
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3 no-print">
          <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            This guide provides general information only. For specific legal advice about your situation, contact Victoria Legal Aid on <strong>1300 792 387</strong>.
          </p>
        </div>

        {/* Key reminder box */}
        <div className="bg-brand-secondary border-l-4 border-brand-primary rounded-r-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Shield size={16} className="text-brand-primary" />
            <h3 className="font-bold text-stone-800 text-sm">The most important thing to remember</h3>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            You are allowed to bring a support person to any meeting with Child Protection. You are allowed to ask questions. You are allowed to say you need more time before agreeing to anything. These are your rights.
          </p>
        </div>

        {/* Sections */}
        {sections.map((sec, i) => (
          <div key={i} className={`border-2 ${sec.colour} rounded-2xl overflow-hidden`}>
            <div className="px-6 py-4 border-b border-current/20 flex items-center gap-3">
              <div className="text-stone-600">{sec.icon}</div>
              <h2 className="font-bold text-stone-800 text-lg">{sec.title}</h2>
            </div>
            <div className="p-6 space-y-5">
              {sec.steps.map((step, j) => (
                <div key={j} className="flex gap-3">
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-brand-primary/30 flex items-center justify-center text-xs font-bold text-brand-primary shrink-0 mt-0.5">{j + 1}</div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1 text-sm">{step.heading}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick checklist */}
        <div className="bg-white border-2 border-brand-primary/20 rounded-2xl p-6">
          <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-primary" /> Meeting day checklist</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              'Photo ID',
              'Notebook and pen',
              'List of questions',
              'Support person confirmed',
              'Interpreter confirmed (if needed)',
              'Copies of relevant documents',
              'Contact details for PANS or VLA',
              'A glass of water for the room',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-stone-700">
                <div className="w-4 h-4 border-2 border-brand-primary/40 rounded shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="no-print bg-brand-secondary rounded-2xl p-6 text-center">
          <h3 className="font-bold text-stone-800 mb-2">Need more help preparing?</h3>
          <p className="text-stone-500 text-sm mb-4">PANS can help you prepare questions, understand what to expect, and talk through your situation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-primary/90 transition-colors">
              Contact PANS
            </Link>
            <Link to="/parent-rights" className="border border-brand-primary text-brand-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-secondary transition-colors">
              Know your rights
            </Link>
          </div>
        </div>

        {/* Print footer */}
        <div className="hidden print:block mt-8 pt-6 border-t border-stone-300 text-xs text-stone-400">
          <p>PANS Victoria · General information only, not legal advice · Victoria Legal Aid: 1300 792 387 · Lifeline: 13 11 14</p>
          <p className="mt-1">Last updated: May 2026 · © {new Date().getFullYear()} PANS – Parent Advocacy and Navigation Support</p>
        </div>
      </section>
    </div>
  );
}
