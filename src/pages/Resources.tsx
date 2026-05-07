import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Scale, BookOpen, Gavel, Heart, ExternalLink, ArrowRight, Users, FolderOpen, FileSearch } from 'lucide-react';
import LastUpdated from '../components/LastUpdated';

const guides = [
  {
    icon: <Clock size={28} />,
    title: 'First 48 Hours Guide',
    desc: 'What to do immediately when Child Protection becomes involved. Step-by-step, plain language, designed for when you are overwhelmed.',
    tags: ['Critical', 'Practical'],
    path: '/first-48-hours',
    colour: 'border-red-200 bg-red-50',
    iconBg: 'bg-red-100 text-red-600',
    printable: true,
  },
  {
    icon: <Scale size={28} />,
    title: 'Parent Rights Guide',
    desc: 'A clear summary of your legal rights as a parent during Child Protection investigations, case management, and court proceedings.',
    tags: ['Rights', 'Essential'],
    path: '/parent-rights',
    colour: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-brand-primary/10 text-brand-primary',
    printable: true,
  },
  {
    icon: <BookOpen size={28} />,
    title: 'The System Explained',
    desc: 'How Child Protection and the Children\'s Court work in Victoria, written in plain language without legal jargon.',
    tags: ['Information', 'Overview'],
    path: '/system-explained',
    colour: 'border-indigo-200 bg-indigo-50',
    iconBg: 'bg-indigo-100 text-indigo-600',
    printable: false,
  },
  {
    icon: <Gavel size={28} />,
    title: "Understanding Children's Court",
    desc: 'What happens at court, the types of orders that can be made, and how to prepare yourself for hearings.',
    tags: ['Court', 'Preparation'],
    path: '/childrens-court',
    colour: 'border-violet-200 bg-violet-50',
    iconBg: 'bg-violet-100 text-violet-600',
    printable: false,
  },
  {
    icon: <Heart size={28} />,
    title: 'Mental Health Support',
    desc: 'Looking after yourself through this process. Services, strategies, and crisis support for parents under stress.',
    tags: ['Wellbeing', 'Crisis Support'],
    path: '/mental-health',
    colour: 'border-rose-200 bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-600',
    printable: false,
  },
];

const downloadableGuides = [
  {
    icon: <Users size={24} />,
    title: 'Preparing for a Child Protection Meeting',
    desc: 'What to do before, during, and after any meeting with Child Protection. Includes a meeting day checklist.',
    tags: ['Meetings', 'Checklist'],
    path: '/guides/meeting-preparation',
    colour: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    icon: <FileSearch size={24} />,
    title: 'Understanding Court Terms',
    desc: 'A plain-language glossary of 30+ terms you may encounter in documents, applications, and court hearings. Searchable.',
    tags: ['Court', 'Reference'],
    path: '/guides/court-terms',
    colour: 'border-violet-200 bg-violet-50',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: <FolderOpen size={24} />,
    title: 'Organising Your Documents',
    desc: 'What to keep, how to organise it, and why it matters. Covers all four document categories with a full checklist.',
    tags: ['Documents', 'Practical'],
    path: '/guides/organise-documents',
    colour: 'border-green-200 bg-green-50',
    iconBg: 'bg-green-100 text-green-700',
  },
];

const externalLinks = [
  { name: 'Victoria Legal Aid', url: 'https://www.legalaid.vic.gov.au/', desc: 'Free legal information and representation for eligible families.' },
  { name: "Children's Court of Victoria", url: 'https://www.childrenscourt.vic.gov.au/', desc: 'Official information about the Children\'s Court, processes, and what to expect.' },
  { name: 'Child Protection (DFFH)', url: 'https://www.vic.gov.au/child-protection', desc: 'Information about Victoria\'s Child Protection system from the Department.' },
  { name: 'Victoria Legal Aid — Child Protection', url: 'https://www.legalaid.vic.gov.au/find-legal-answers/families-children-and-young-people/child-protection', desc: 'Specific legal information about child protection matters.' },
  { name: 'Lifeline Australia', url: 'https://www.lifeline.org.au/', desc: '24/7 crisis support and suicide prevention — call 13 11 14.' },
  { name: 'Beyond Blue', url: 'https://www.beyondblue.org.au/', desc: 'Mental health support for anxiety and depression — call 1300 22 4636.' },
  { name: 'Parentline Victoria', url: 'https://services.dffh.vic.gov.au/parentline', desc: 'Support for parents and carers — call 13 22 89.' },
  { name: 'Family Relationship Advice Line', url: 'https://www.familyrelationships.gov.au/', desc: 'Free advice about family relationship and separation issues — call 1800 050 321.' },
];

export default function Resources() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Resources</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Guides & Resources for Parents</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-4">
            Plain-language guides, practical tools, and links to services that can help you navigate Child Protection and the Children's Court in Victoria.
          </p>
          <LastUpdated date="May 2026" />
        </div>
      </section>

      {/* Main PANS guides */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-2">PANS Guides</h2>
          <p className="text-stone-500 mb-10 text-sm">Written in plain language for parents navigating the system. Guides marked "Print" can be saved as a PDF.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Link
                key={i}
                to={g.path}
                className={`group border-2 ${g.colour} p-6 rounded-2xl hover:shadow-lg transition-all flex flex-col gap-4`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${g.iconBg}`}>
                  {g.icon}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {g.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/60 px-2 py-0.5 rounded-full text-stone-600">{tag}</span>
                  ))}
                  {g.printable && (
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full">Print / PDF</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-800 text-lg mb-2 group-hover:text-brand-primary transition-colors">{g.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-brand-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable / printable guides */}
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-2">Practical Guides — Print or Save</h2>
              <p className="text-stone-500 text-sm">Step-by-step guides designed to be printed or saved as PDF. Use the print button on each guide.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {downloadableGuides.map((g, i) => (
              <Link
                key={i}
                to={g.path}
                className={`group border-2 ${g.colour} bg-white p-6 rounded-2xl hover:shadow-lg transition-all flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${g.iconBg}`}>
                  {g.icon}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {g.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-stone-100 px-2 py-0.5 rounded-full text-stone-600">{tag}</span>
                  ))}
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full">Print / PDF</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-800 mb-2 group-hover:text-brand-primary transition-colors">{g.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-brand-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open guide <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External links */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-2">External Services & Links</h2>
          <p className="text-stone-500 mb-10 text-sm">Verified links to government, legal, and support services in Victoria.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-secondary p-5 rounded-2xl border border-purple-100 hover:border-brand-primary hover:shadow-sm transition-all flex gap-4 items-start"
              >
                <ExternalLink size={16} className="text-stone-400 group-hover:text-brand-primary mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h3 className="font-bold text-stone-800 mb-1 group-hover:text-brand-primary text-sm transition-colors">{link.name}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
