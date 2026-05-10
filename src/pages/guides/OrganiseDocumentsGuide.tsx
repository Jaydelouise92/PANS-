import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ArrowLeft, FolderOpen, FileText, Shield, Lock, Archive } from 'lucide-react';
import PrintButton from '../../components/PrintButton';
import LastUpdated from '../../components/LastUpdated';

const categories = [
  {
    icon: <FileText size={18} />,
    label: 'From Child Protection (DFFH)',
    colour: 'bg-red-50 border-red-200',
    items: [
      'Any letter you receive from Child Protection',
      'Initial notification letters',
      'Case plan documents and any updates',
      'Safety plan documents',
      'Reports written about your family',
      'Any court applications made by DFFH',
      'Correspondence from your Child Protection worker',
    ],
  },
  {
    icon: <Archive size={18} />,
    label: 'Court Documents',
    colour: 'bg-violet-50 border-violet-200',
    items: [
      'Protection applications',
      'Court orders (keep every version)',
      'Hearing notices',
      'Affidavits (yours and others)',
      'Subpoenas or any legal notices',
      'Notes from court appearances',
    ],
  },
  {
    icon: <Shield size={18} />,
    label: 'Your Evidence & Support',
    colour: 'bg-green-50 border-green-200',
    items: [
      'Letters of support from services you are engaging',
      'Proof of attendance at programs or appointments',
      'Letters from your doctor, counsellor, or support services',
      'Records showing you are engaging with required services',
      'Any communication from your lawyer',
      'Receipts or certificates from completed programs',
    ],
  },
  {
    icon: <Lock size={18} />,
    label: 'Personal & Identification',
    colour: 'bg-blue-50 border-blue-200',
    items: [
      'Birth certificates (yours and your children\'s)',
      'Centrelink or welfare correspondence',
      'Medical records relevant to the case',
      'School records or reports (if relevant)',
      'Your own correspondence to Child Protection',
      'Emails or messages relevant to your case',
    ],
  },
];

export default function OrganiseDocumentsGuide() {
  return (
    <div className="pt-16 print:pt-0">
      {/* Print header */}
      <div className="hidden print:block mb-8 pb-6 border-b-2 border-stone-300">
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">PANS Victoria — Parent Advocacy, Navigation & Support</p>
        <h1 className="text-3xl font-serif text-stone-900">Organising Your Documents</h1>
        <p className="text-sm text-stone-500 mt-2">pansvictoria.org.au · For general information only, not legal advice · VLA: 1300 792 387</p>
      </div>

      {/* Screen header */}
      <section className="bg-brand-secondary py-16 px-6 print:hidden">
        <div className="max-w-4xl mx-auto">
          <Link to="/resources" className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Resources
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Practical Guide</span>
              <h1 className="text-4xl font-serif text-stone-900 mb-3">Organising Your Documents</h1>
              <LastUpdated date="May 2026" className="mb-4" />
              <p className="text-stone-600 leading-relaxed max-w-xl">
                Keeping your documents organised can make a real difference in how prepared you feel. This guide tells you what to keep, how to organise it, and why it matters.
              </p>
            </div>
            <PrintButton className="shrink-0 mt-2" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white max-w-4xl mx-auto space-y-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3 no-print">
          <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            This guide is general information. If you have questions about specific documents in your case, speak to a lawyer. Victoria Legal Aid: <strong>1300 792 387</strong>.
          </p>
        </div>

        {/* Why it matters */}
        <div className="bg-brand-secondary border-l-4 border-brand-primary rounded-r-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <FolderOpen size={16} className="text-brand-primary" />
            <h3 className="font-bold text-stone-800">Why document organisation matters</h3>
          </div>
          <div className="space-y-2 text-stone-700 text-sm leading-relaxed">
            <p>Child protection cases involve a lot of paperwork — and things can move quickly. Being organised means you:</p>
            <ul className="space-y-1.5 mt-2">
              {[
                'Can find important information quickly when you need it',
                'Have a record of what has been said and agreed',
                'Can show your lawyer everything relevant to your case',
                'Are less likely to miss deadlines or court dates',
                'Feel more in control during a stressful process',
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 size={14} className="text-brand-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What to keep */}
        <div>
          <h2 className="text-2xl font-serif text-stone-900 mb-6">What to keep — by category</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <div key={i} className={`border-2 ${cat.colour} rounded-2xl overflow-hidden`}>
                <div className="px-5 py-3.5 border-b border-current/20 flex items-center gap-2">
                  <div className="text-stone-600">{cat.icon}</div>
                  <h3 className="font-bold text-stone-800 text-sm">{cat.label}</h3>
                </div>
                <ul className="p-5 space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-stone-600 text-sm">
                      <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to organise */}
        <div>
          <h2 className="text-2xl font-serif text-stone-900 mb-6">How to organise your documents</h2>
          <div className="space-y-5">
            {[
              {
                step: '1',
                title: 'Use a physical folder or binder',
                detail: 'Even if you keep digital copies, a physical folder is useful. Label sections clearly (e.g. "Court Documents", "Case Plans", "My Evidence"). Keep it somewhere secure that only you can access.',
              },
              {
                step: '2',
                title: 'Keep digital copies in a secure location',
                detail: 'Photograph or scan every important document and store it in a secure cloud folder (Google Drive, Dropbox, or your email drafts). This protects you if physical documents are lost or damaged.',
              },
              {
                step: '3',
                title: 'Date everything',
                detail: 'Note the date you received each document. If documents arrive undated, write the received date on them yourself. Timelines matter in court proceedings.',
              },
              {
                step: '4',
                title: 'Never destroy documents',
                detail: 'Even documents that seem unimportant may become relevant. Keep everything relating to your case — letters, emails, text messages, and photos — even if you are unsure whether they are relevant.',
              },
              {
                step: '5',
                title: 'Keep a communication log',
                detail: 'Maintain a simple written record of every phone call, meeting, or contact you have with Child Protection workers. Note the date, time, who you spoke to, and what was discussed.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-brand-secondary rounded-2xl p-5 border border-purple-100">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{item.step}</div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">{item.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="no-print bg-brand-secondary rounded-2xl p-6 text-center">
          <h3 className="font-bold text-stone-800 mb-2">Need help making sense of your documents?</h3>
          <p className="text-stone-500 text-sm mb-4">PANS can help you understand letters and orders, or talk through what documents you may need.</p>
          <Link to="/contact" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-brand-primary/90 transition-colors inline-block">
            Contact PANS
          </Link>
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
