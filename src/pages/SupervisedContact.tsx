import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Users, Clock, FileText, MessageCircle, Shield } from 'lucide-react';

export default function SupervisedContact() {
  return (
    <div className="bg-brand-secondary pt-16">
      {/* Header */}
      <section className="px-6 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
            Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            How supervised contact works in Victoria
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            A plain-language explanation of what supervised contact is, who is in
            the room, what you can and cannot do, and how to make the most of
            each visit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-purple-100 p-6 md:p-10 space-y-10">

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What is supervised contact?</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Supervised contact is a visit between you and your child that takes
              place while another adult watches. The supervisor is there to make
              sure your child is safe and to keep a written record of what
              happens.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Supervised contact is sometimes called a <em>contact visit</em>,
              <em> access visit</em>, or <em>supervised visit</em>. They mean the
              same thing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Why contact is supervised</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              When Child Protection (DFFH) or the Children's Court has concerns
              about your child's safety, contact is usually supervised at first.
              This is to give your child time to feel safe, and to give workers
              time to see how you and your child get on.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Supervised contact is not meant to be a punishment. It is a step in
              a process. Many parents move from supervised contact to unsupervised
              contact over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Who is usually present</h2>
            <ul className="space-y-3">
              {[
                { icon: <Users size={18} />, text: 'You and your child (or children).' },
                { icon: <Shield size={18} />, text: 'A contact supervisor — usually a worker from DFFH, a contracted agency, or sometimes a relative approved by the Department.' },
                { icon: <FileText size={18} />, text: 'Sometimes a second worker or note-taker, especially in the first few visits.' },
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-0.5 shrink-0">{row.icon}</span>
                  <span className="text-stone-700 leading-relaxed">{row.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Where contact takes place</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Common locations in Victoria include:
            </p>
            <ul className="space-y-2">
              {[
                'A DFFH office contact room',
                'A community organisation or family centre',
                'A neutral public place such as a park, library or play centre',
                'Sometimes the home of a family member who has been approved as supervisor',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">How long visits usually last</h2>
            <p className="text-stone-700 leading-relaxed">
              Most supervised visits run for one to two hours. The length is set
              out in your case plan or court order. If you want longer or more
              frequent visits, you can ask your case worker to review the plan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What you can do during contact</h2>
            <ul className="space-y-2">
              {[
                'Hug, hold and play with your child (age-appropriate).',
                'Bring snacks, drinks, books, toys or craft activities (check with your worker first).',
                'Talk about everyday things — school, friends, pets, what they have been up to.',
                'Take photos if the supervisor agrees.',
                'Celebrate birthdays and special occasions if scheduled around the visit.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What you should not do during contact</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Doing any of the following can lead to the visit being ended early
              or to changes in your contact arrangements:
            </p>
            <ul className="space-y-2">
              {[
                'Talking about the case, court, the carer, or Child Protection workers.',
                'Asking your child where they live or who they are with.',
                'Making promises you cannot keep (such as “you\u2019ll be home soon”).',
                'Speaking negatively about the carer, the other parent, or the Department.',
                'Recording the visit without permission.',
                'Arriving under the influence of alcohol or drugs.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Contact notes</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              The supervisor writes notes about each visit. These notes describe
              what happened, what you and your child said and did, and how the
              visit went overall. Contact notes can be used in case planning and
              in court.
            </p>
            <p className="text-stone-700 leading-relaxed">
              You can ask to read the notes from your visits. Ask your case
              worker how to request them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">If a visit is cancelled or changed</h2>
            <p className="text-stone-700 leading-relaxed">
              Visits can be cancelled because of illness, transport, or staffing.
              If a visit is cancelled, ask for it to be rescheduled as soon as
              possible. Keep a written record of every cancellation, who told you,
              and the reason given.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Tips that help</h2>
            <ul className="space-y-3">
              {[
                { icon: <Clock size={18} />, text: 'Arrive 10 minutes early. Late arrivals are noted.' },
                { icon: <MessageCircle size={18} />, text: 'Plan one or two simple activities so there are no awkward silences.' },
                { icon: <FileText size={18} />, text: 'Keep your own short journal after each visit — date, time, what you did, how your child seemed. Useful for court and case meetings.' },
                { icon: <Users size={18} />, text: 'Stay calm if the supervisor interrupts. They are doing their job.' },
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-0.5 shrink-0">{row.icon}</span>
                  <span className="text-stone-700 leading-relaxed">{row.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Moving towards unsupervised contact</h2>
            <p className="text-stone-700 leading-relaxed">
              The goal is usually for contact to become less supervised over
              time, as long as your child is safe. To work towards this, follow
              your case plan, attend every visit, stay calm during contact, and
              keep open communication with your worker.
            </p>
          </div>

        </article>
      </section>

      {/* Related */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-stone-900 mb-4">Related guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/parent-rights" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Parental rights</h4>
              <p className="text-stone-600 text-sm">What you can ask for and what you must be told.</p>
            </Link>
            <Link to="/system-explained" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Child Protection process</h4>
              <p className="text-stone-600 text-sm">How the system works in Victoria, stage by stage.</p>
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
            is not legal advice. For advice about your specific contact
            arrangements, contact Victoria Legal Aid on{' '}
            <strong>1300 792 387</strong>.
            {' '}<Link to="/contact" className="underline font-semibold">Contact PANS</Link> for navigation support.
          </p>
        </div>
      </section>
    </div>
  );
}
