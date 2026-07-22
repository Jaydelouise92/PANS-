import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Search } from 'lucide-react';
import PrintButton from '../../components/PrintButton';
import LastUpdated from '../../components/LastUpdated';

const terms = [
  { term: 'Applicant', definition: 'The party making an application to the court. In child protection matters, this is usually the Secretary of the Department of Families, Fairness and Housing (DFFH).' },
  { term: 'Care by Secretary Order', definition: 'A court order that places a child in the care of the Secretary of DFFH. The child may be placed in out-of-home care such as foster care or kinship care.' },
  { term: 'Case Conference', definition: 'A meeting involving Child Protection workers, parents, and sometimes other parties to discuss the case plan and safety of the child.' },
  { term: 'Case Plan', definition: 'A document that outlines the goals, actions, and responsibilities of everyone involved in the case — including what parents are expected to do.' },
  { term: 'Children\'s Court', definition: 'A specialist court in Victoria that hears child protection and criminal matters involving people under 18. Hearings are generally closed to the public.' },
  { term: 'Court Order', definition: 'A legally binding decision made by a magistrate or judge. You must comply with a court order. Breaching a court order can have serious consequences.' },
  { term: 'Custody', definition: 'In the child protection context, custody usually refers to who has legal responsibility for day-to-day care of a child. This is different from guardianship.' },
  { term: 'DFFH', definition: 'Department of Families, Fairness and Housing — the Victorian government department responsible for Child Protection services.' },
  { term: 'Directions Hearing', definition: 'A preliminary hearing where the magistrate gives directions about how the case will proceed — for example, what evidence is needed and when the next hearing will be.' },
  { term: 'Dispositional Hearing', definition: 'The hearing where the magistrate decides what order (if any) to make about the child after hearing all the evidence.' },
  { term: 'Emergency Order', definition: 'An urgent order made to protect a child immediately, before a full hearing can occur. These are time-limited but can be extended.' },
  { term: 'Family Group Conference', definition: 'A meeting that brings together the child\'s family and extended network to develop a plan to keep the child safe, often as an alternative to court proceedings.' },
  { term: 'Founding Hearing', definition: 'The hearing where the magistrate decides whether the grounds for making a child protection order have been established (\'founded\').' },
  { term: 'Guardian', definition: 'A person with legal responsibility for major decisions about a child\'s life (such as education, medical treatment, and religion). Different from the person providing day-to-day care.' },
  { term: 'ICL', definition: 'Independent Children\'s Lawyer — a lawyer appointed to represent the interests of the child in court proceedings, separately from the parents and Child Protection.' },
  { term: 'Interim Accommodation Order', definition: 'A temporary order that allows a child to be placed in alternative accommodation while the court matter is ongoing.' },
  { term: 'Kinship Care', definition: 'A placement where a child is cared for by a relative or someone else known to them, rather than an unrelated foster carer.' },
  { term: 'Magistrate', definition: 'The judicial officer who presides over the Children\'s Court and makes decisions about court orders.' },
  { term: 'Mention', definition: 'A brief court hearing used to check on the progress of a case, confirm that parties are ready to proceed, or make administrative orders.' },
  { term: 'On Notice', definition: 'When you have been formally notified that an application has been made or that you are required to attend court. You must respond to notices from the court.' },
  { term: 'Party to Proceedings', definition: 'A person or organisation formally involved in the court case — for example, parents, Child Protection, and sometimes the child. Parties have the right to legal representation.' },
  { term: 'Protection Application', definition: 'The formal application made to the Children\'s Court to seek a child protection order in relation to a child.' },
  { term: 'Protective Intervention Order', definition: 'An order that may impose conditions on parents or others to ensure the safety of the child, without removing the child from their care.' },
  { term: 'Reunification', definition: 'The process of returning a child to their family home after a period of out-of-home care. This is usually governed by specific conditions in a case plan.' },
  { term: 'Respondent', definition: 'The person responding to an application in court — often a parent when Child Protection has made an application about their child.' },
  { term: 'Safety Plan', definition: 'A document that identifies the risks to a child\'s safety and outlines the steps that will be taken to manage those risks, often agreed before a case plan is developed.' },
  { term: 'Secretary', definition: 'The Secretary of the Department of Families, Fairness and Housing (DFFH). In legal documents, "the Secretary" is the entity that makes child protection applications.' },
  { term: 'Supervision Order', definition: 'An order that allows a child to remain living at home (or with a carer) while Child Protection maintains oversight and the parents comply with conditions.' },
  { term: 'Undertaking', definition: 'A formal promise made to the court — for example, a parent may give an undertaking to complete a parenting program. Breaching an undertaking is a serious matter.' },
  { term: 'Victoria Legal Aid (VLA)', definition: 'The government-funded service that provides free legal advice and representation to eligible people. In child protection matters, call 1300 792 387.' },
];

export default function CourtTermsGuide() {
  const [search, setSearch] = useState('');

  // ⚡ Bolt Optimization: Use React.useMemo to cache filtered results.
  // We return early when search is empty to avoid filtering/allocation altogether.
  // We also convert the query to lowercase once outside the loop to avoid redundant operations.
  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(query) ||
        t.definition.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div className="pt-16 print:pt-0">
      {/* Print header */}
      <div className="hidden print:block mb-8 pb-6 border-b-2 border-stone-300">
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">PANS Victoria — Parent Advocacy, Navigation & Support</p>
        <h1 className="text-3xl font-serif text-stone-900">Understanding Court Terms</h1>
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
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Reference Guide</span>
              <h1 className="text-4xl font-serif text-stone-900 mb-3">Understanding Court Terms</h1>
              <LastUpdated date="May 2026" className="mb-4" />
              <p className="text-stone-600 leading-relaxed max-w-xl">
                A plain-language glossary of terms you may encounter in Child Protection documents, court applications, and hearings in Victoria.
              </p>
            </div>
            <PrintButton className="shrink-0 mt-2" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white max-w-4xl mx-auto space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3 no-print">
          <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            These definitions are provided as general guidance only. Laws and processes can change. For legal advice about your specific situation, contact Victoria Legal Aid on <strong>1300 792 387</strong>.
          </p>
        </div>

        {/* Search */}
        <div className="relative no-print">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search terms…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm"
          />
        </div>

        {/* Terms */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-stone-400 text-sm text-center py-8">No terms match your search.</p>
          ) : (
            filtered.map((t, i) => (
              <div key={i} className="bg-brand-secondary border border-purple-100 rounded-xl p-5">
                <h3 className="font-bold text-stone-900 text-base mb-1.5">{t.term}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{t.definition}</p>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="no-print bg-white border border-purple-100 rounded-2xl p-6 text-center">
          <p className="text-stone-600 text-sm mb-4">Need help understanding a term not listed here?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-primary/90 transition-colors">
              Ask PANS
            </Link>
            <Link to="/system-explained" className="border border-brand-primary text-brand-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-secondary transition-colors">
              The System Explained
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
