import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, FileText, Calendar, MessageCircle, Scale, BookOpen } from 'lucide-react';

export default function SelfRepresented() {
  return (
    <div className="bg-brand-secondary pt-16">
      {/* Header */}
      <section className="px-6 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
            Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Self-represented parent guide
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Practical information for parents in Victoria who are appearing in
            the Children's Court without a lawyer. We strongly encourage you to
            get a lawyer if you can — but if you cannot, this guide will help
            you prepare.
          </p>
        </div>
      </section>

      {/* Try VLA first */}
      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto bg-purple-50 border border-purple-200 rounded-xl p-5">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Before going self-represented, try this</h2>
          <p className="text-stone-700 leading-relaxed mb-3">
            Most parents in Child Protection cases qualify for a free lawyer
            through Victoria Legal Aid (VLA). A lawyer makes a real difference
            to outcomes.
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>
              <strong>Victoria Legal Aid:</strong> 1300 792 387
            </li>
            <li>
              <strong>Your nearest community legal centre:</strong> search
              {' '}<a href="https://fclc.org.au/find-a-clc/" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">fclc.org.au/find-a-clc</a>
            </li>
            <li>
              <strong>Aboriginal legal help:</strong> Victorian Aboriginal Legal
              Service on 1800 064 865
            </li>
          </ul>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-purple-100 p-6 md:p-10 space-y-10">

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What "self-represented" means</h2>
            <p className="text-stone-700 leading-relaxed">
              You are self-represented (sometimes called a <em>litigant in
              person</em>) when you go to court without a lawyer. You speak
              directly to the magistrate yourself, and the other side — usually
              a Child Protection lawyer — will speak about you, not for you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Before the court date</h2>
            <ul className="space-y-3">
              {[
                { icon: <FileText size={18} />, text: 'Read every document the Department gives you. The most important is usually the Disposition Report or Court Report. Highlight things you agree with and things you disagree with.' },
                { icon: <Calendar size={18} />, text: 'Know the date, time, and courtroom. The Children\u2019s Court of Victoria has venues in Melbourne and around the state. Confirm the location 2 days before.' },
                { icon: <BookOpen size={18} />, text: 'Look up unfamiliar terms. The Children\u2019s Court website has a glossary. PANS also has a plain-language glossary in our guides.' },
                { icon: <MessageCircle size={18} />, text: 'Write a short list (one page) of: (1) what you want to say, (2) what orders you would prefer, (3) any questions you want to ask.' },
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-0.5 shrink-0">{row.icon}</span>
                  <span className="text-stone-700 leading-relaxed">{row.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What to bring</h2>
            <ul className="space-y-2">
              {[
                'Photo ID',
                'A copy of every court document you have been given',
                'Your written notes (one page) and a pen',
                'A notebook to write down what is said',
                'A support person if allowed (check with the court — usually permitted in waiting areas)',
                'Water and a small snack',
                'Tissues',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">On the day</h2>
            <ul className="space-y-2">
              {[
                'Arrive at least 30 minutes early. Allow time for security screening.',
                'Wear neat, plain clothing — what you would wear to a job interview.',
                'Check in at the court counter or with the security officer at the door.',
                'Look for the duty lawyer — most Children\u2019s Court venues have a free duty lawyer who can give you a brief, on-the-spot consultation.',
                'When your matter is called, walk to the bar table and say your name clearly.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">How to speak in court</h2>
            <ul className="space-y-2">
              {[
                'Address the magistrate as "Your Honour".',
                'Stand when the magistrate enters or leaves the court, and when you are speaking to the magistrate.',
                'Speak slowly and clearly. It is fine to take a breath.',
                'If you do not understand a question, say "Sorry, Your Honour, could you explain that please?".',
                'Stick to facts. Avoid blaming or interrupting.',
                'If you become upset, ask for a short break.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">If you disagree with what the Department says</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              You have the right to disagree. When it is your turn:
            </p>
            <ul className="space-y-2">
              {[
                'Tell the magistrate which specific points in the report you disagree with.',
                'Explain calmly why, with examples or evidence if you have them (text messages, photos, letters from your doctor, GP, school, counsellor).',
                'Ask for the orders you would prefer.',
                'You can request an "adjournment" (postponement) if you need more time to get a lawyer or evidence.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">After the court date</h2>
            <ul className="space-y-2">
              {[
                'Ask for a copy of any orders the magistrate makes.',
                'Write down everything you can remember, while it is fresh.',
                'If you disagree with the order, you may have a short window to apply for a rehearing or to appeal — get legal advice quickly.',
                'Follow the orders. Even small breaches can affect your case.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Common mistakes to avoid</h2>
            <ul className="space-y-2">
              {[
                'Speaking over the magistrate or other lawyers.',
                'Bringing up the case in front of your child.',
                'Posting about the case on social media.',
                'Missing court dates — if you cannot attend, contact the court immediately.',
                'Going alone if you can avoid it. Take a calm support person.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

        </article>
      </section>

      {/* Related */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-stone-900 mb-4">Related guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/childrens-court" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Children's Court guide</h4>
              <p className="text-stone-600 text-sm">Hearing types, court orders, and what to expect.</p>
            </Link>
            <Link to="/parent-rights" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Parental rights</h4>
              <p className="text-stone-600 text-sm">Your rights during investigation and court.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> This page is general information only and
            is not legal advice. For advice about your specific case, contact
            Victoria Legal Aid on <strong>1300 792 387</strong> or your local
            community legal centre. Even one short call with a lawyer can help.
          </p>
        </div>
      </section>
    </div>
  );
}
