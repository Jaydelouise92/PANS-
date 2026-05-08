import { Link } from 'react-router-dom';
import { AlertTriangle, Heart, Phone, Users, Shield } from 'lucide-react';

export default function EmotionalImpact() {
  return (
    <div className="bg-brand-secondary pt-16">
      {/* Header */}
      <section className="px-6 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
            Wellbeing
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            The emotional impact of child removal
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Having a child removed by Child Protection is one of the most
            painful experiences a parent can go through. What you are feeling is
            real, and you are not alone.
          </p>
        </div>
      </section>

      {/* Crisis bar */}
      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto bg-white border border-purple-100 rounded-xl p-5 flex gap-3 items-start">
          <Phone size={20} className="text-brand-primary shrink-0 mt-1" />
          <p className="text-stone-700 leading-relaxed">
            <strong>If you need to talk to someone right now:</strong> call{' '}
            <strong>Lifeline on 13 11 14</strong> (24 hours) or{' '}
            <strong>Beyond Blue on 1300 22 4636</strong>. If you are in
            immediate danger, call <strong>000</strong>.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-purple-100 p-6 md:p-10 space-y-10">

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What you might be feeling</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              There is no “right” way to feel after a child is removed. Many
              parents describe a mixture of:
            </p>
            <ul className="space-y-2">
              {[
                'Shock and disbelief — the world suddenly feels unreal.',
                'Grief, like a death, even though your child is alive.',
                'Anger at workers, the system, your partner, yourself.',
                'Guilt and shame, even when nothing was your fault.',
                'Fear about the future and what happens next.',
                'Numbness — feeling nothing, struggling to get out of bed.',
                'Physical symptoms — chest pain, headaches, nausea, no appetite.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              All of these are normal responses to an extremely abnormal event.
              Many parents say they feel “crazy”. You are not crazy. You are a
              parent in shock.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">It is a form of grief</h2>
            <p className="text-stone-700 leading-relaxed">
              Researchers call what parents go through after a child removal{' '}
              <em>ambiguous loss</em> — your child is still alive, but they are
              not with you. This kind of loss can feel harder to grieve because
              there are no rituals for it, and other people often do not
              understand. Be patient with yourself.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">The first weeks</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              In the first weeks after removal, focus on the basics:
            </p>
            <ul className="space-y-2">
              {[
                'Drink water. Eat small things, even if you are not hungry.',
                'Try to sleep, even short rests.',
                'Tell one safe person what has happened — a friend, GP, or counsellor.',
                'Take any medication you normally take.',
                'Stay away from alcohol and other drugs if you can — they make grief and contact decisions harder.',
                'Do not make big decisions (moving house, ending relationships) if you can help it.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Looking after yourself for the long road</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Child Protection involvement is rarely a quick process. To get
              through it, you will need to look after yourself in small,
              everyday ways.
            </p>
            <ul className="space-y-2">
              {[
                'Build a small routine — same wake-up time, simple meals, a daily walk.',
                'Keep a notebook for your thoughts, contact visits, and meeting notes.',
                'See your GP. Ask about a Mental Health Treatment Plan, which gives you up to 10 subsidised sessions with a psychologist.',
                'Find one person you can be honest with — a counsellor, peer support worker, or trusted friend.',
                'Limit time on social media, especially around your case.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">When to get extra help</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Please reach out to a doctor or one of the lines below if you
              experience any of the following:
            </p>
            <ul className="space-y-2">
              {[
                'Thoughts of harming yourself or ending your life.',
                'Drinking or using more, often, to cope.',
                'Not eating or sleeping for several days.',
                'Feeling completely numb or disconnected for more than a couple of weeks.',
                'Flashbacks, panic attacks, or being unable to leave the house.',
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-primary mt-1 shrink-0">•</span>
                  <span className="text-stone-700 leading-relaxed">{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Support services in Victoria</h2>
            <ul className="space-y-3">
              {[
                { name: 'Lifeline', contact: '13 11 14 — 24 hours, every day' },
                { name: 'Beyond Blue', contact: '1300 22 4636' },
                { name: 'Suicide Call Back Service', contact: '1300 659 467' },
                { name: 'MensLine Australia', contact: '1300 78 99 78' },
                { name: '1800RESPECT (family violence)', contact: '1800 737 732' },
                { name: 'PANDA (perinatal mental health)', contact: '1300 726 306' },
                { name: '13YARN (Aboriginal & Torres Strait Islander crisis line)', contact: '13 92 76' },
                { name: 'GriefLine', contact: '1300 845 745' },
              ].map((row, i) => (
                <li key={i} className="flex gap-3 items-start bg-brand-secondary border border-purple-100 rounded-xl p-4">
                  <Phone size={18} className="text-brand-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-stone-900">{row.name}</div>
                    <div className="text-stone-700 text-sm">{row.contact}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Helping your child cope</h2>
            <p className="text-stone-700 leading-relaxed">
              Children also feel grief, fear and confusion when they are
              removed. During contact visits, focus on small everyday joy. Avoid
              talking about the case or making promises about the future. Show
              your child, in small ways, that you love them and you are
              alright.
            </p>
          </div>

        </article>
      </section>

      {/* Related */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-stone-900 mb-4">Related guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/mental-health" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Mental health support</h4>
              <p className="text-stone-600 text-sm">Crisis lines and ongoing services in Victoria.</p>
            </Link>
            <Link to="/supervised-contact" className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
              <h4 className="font-semibold text-stone-900 mb-1">Supervised contact</h4>
              <p className="text-stone-600 text-sm">How visits work and how to make them go well.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> PANS provides general support
            information. We are not a counselling service or a crisis line. If
            you need urgent help, please call <strong>Lifeline 13 11 14</strong>{' '}
            or <strong>000</strong> in an emergency.
          </p>
        </div>
      </section>
    </div>
  );
}
