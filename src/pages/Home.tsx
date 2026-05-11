import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Scale,
  BookOpen,
  Shield,
  Heart,
  Phone,
  AlertTriangle,
  Users,
  FileText,
} from 'lucide-react';
import VideoTemplate from '../components/video/VideoTemplate';

export default function Home() {
  return (
    <div className="bg-brand-secondary">
      {/* ── 1. Hero video ───────────────────────────────────────── */}
      <section className="w-full pt-16 bg-[#F9F8FF]" aria-label="PANS Victoria introduction">
        <div className="relative w-full aspect-video max-h-[85vh] mx-auto">
          <VideoTemplate />
        </div>
        <div className="px-6 pt-6 pb-8">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            <Link
              to="/start-here"
              className="bg-brand-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-primary/90 transition inline-flex items-center gap-2 shadow-lg shadow-brand-primary/20"
            >
              Start Here <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="bg-white border border-brand-primary text-brand-primary px-7 py-3.5 rounded-full font-semibold hover:bg-brand-secondary transition inline-flex items-center gap-2"
            >
              Contact PANS
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. What is PANS — H1 + intro paragraph ─────────────── */}
      <section className="px-6 py-16 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
              PANS Victoria
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-3 leading-tight">
              Child Protection Victoria help and support for parents
            </h1>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-brand-primary bg-brand-secondary border border-purple-100 rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Written by a Victorian parent with lived experience — not by AI
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-3">
              <strong>PANS Victoria</strong> is a free, independent, plain-language
              information service for parents across Victoria, Australia who are
              dealing with Child Protection — the Department of Families, Fairness
              and Housing (DFFH, formerly DHHS) — or appearing in the{' '}
              <Link to="/childrens-court" className="text-brand-primary underline">Children's Court of Victoria</Link>.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              We help you understand the Child Protection process in Victoria,
              know your <Link to="/parent-rights" className="text-brand-primary underline">rights as a parent</Link>,
              prepare for meetings and court, and work out your next step — one
              at a time.
            </p>
            <div className="mt-6 flex gap-5 flex-wrap">
              <Link to="/about" className="text-brand-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                About PANS <ArrowRight size={16} />
              </Link>
              <Link to="/founder" className="text-stone-500 font-medium inline-flex items-center gap-2 hover:text-brand-primary transition-colors">
                Meet the Founder <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/about-hero.png"
              alt="A parent and child walking a calm path together — symbolising the supportive Child Protection navigation provided by PANS Victoria"
              loading="lazy"
              width="800"
              height="600"
              className="w-full rounded-3xl shadow-md object-cover max-h-96"
            />
          </div>
        </div>
      </section>

      {/* ── 3. What this platform helps with ──────────────────── */}
      <section className="bg-white border-b border-stone-200 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            How PANS Victoria helps parents
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            Clear, written information you can read at your own pace. No jargon, no judgment.
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { text: 'Understanding the DFFH Child Protection process in Victoria', to: '/system-explained' },
              { text: 'Knowing your rights as a parent', to: '/parent-rights' },
              { text: 'Preparing for case meetings, case plans and court', to: '/how-it-works' },
              { text: 'Mental health support and crisis lines', to: '/mental-health' },
              { text: 'What to do in the first 48 hours after Child Protection contact', to: '/first-48-hours' },
              { text: "Children's Court Victoria guide and what to expect", to: '/childrens-court' },
              { text: 'How supervised contact works in Victoria', to: '/supervised-contact' },
              { text: 'Working towards reunification — getting your children back', to: '/start-here' },
            ].map((item) => (
              <li
                key={item.text}
                className="bg-brand-secondary border border-purple-100 rounded-xl p-4 flex gap-3 items-start"
              >
                <span className="text-brand-primary font-bold mt-0.5">•</span>
                <Link to={item.to} className="text-stone-700 leading-relaxed hover:text-brand-primary">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Start Here ──────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Start here — first steps for parents
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            If you are not sure where to begin, these three pages are the most important place to start.
          </p>

          <div className="space-y-4">
            <StartCard
              to="/start-here"
              title="Find your stage"
              description="Tell us where you are in the process — investigation, case plan, court, removal or reunification — and we'll show you the most relevant guides."
            />
            <StartCard
              to="/first-48-hours"
              title="First 48 hours after Child Protection contact"
              description="What to do straight after DFFH Child Protection contacts you. Calm, step-by-step, written for stressed parents."
              icon={<Clock size={20} />}
            />
            <StartCard
              to="/parent-rights"
              title="Parents' rights in Child Protection cases (Victoria)"
              description="What you are entitled to during investigation, case management and at the Children's Court."
              icon={<Scale size={20} />}
            />
          </div>
        </div>
      </section>

      {/* ── 5. Key guides ──────────────────────────────────────── */}
      <section className="bg-white border-y border-stone-200 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Key guides for parents in Victoria
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            The areas parents most often need help understanding.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <GuideCard
              to="/system-explained"
              icon={<BookOpen size={20} />}
              title="Child Protection Victoria — process explained"
              description="A plain-language overview of how the Child Protection (DFFH) system works in Victoria, from notification through to case closure or reunification."
            />
            <GuideCard
              to="/childrens-court"
              icon={<Shield size={20} />}
              title="Children's Court Victoria guide"
              description="Hearing types, common court orders, and what to expect at the Children's Court of Victoria."
            />
            <GuideCard
              to="/parent-rights"
              icon={<Scale size={20} />}
              title="Parents' rights — Child Protection Victoria"
              description="What you can ask for, what you can refuse, and what Child Protection must tell you."
            />
            <GuideCard
              to="/supervised-contact"
              icon={<Users size={20} />}
              title="Supervised contact in Victoria"
              description="How supervised visits work, who is in the room, and what helps them go well — a step on the path to unsupervised contact."
            />
            <GuideCard
              to="/self-represented"
              icon={<FileText size={20} />}
              title="Self-represented parent guide (Victoria)"
              description="Practical preparation if you have to appear at the Children's Court without a lawyer."
            />
            <GuideCard
              to="/emotional-impact"
              icon={<Heart size={20} />}
              title="Emotional impact of child removal"
              description="What you might be feeling, why it is normal, and where to get mental health support."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline">
              View all support resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5b. Featured article ──────────────────────────────── */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3 text-center">
            Featured article
          </p>
          <Link
            to="/articles/child-protection-process-victoria"
            className="block bg-white border border-purple-100 rounded-2xl p-6 md:p-8 hover:border-brand-primary/40 hover:shadow-md transition"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-3 leading-tight">
              Understanding the Child Protection process in Victoria
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              From the first phone call to your first case planning meeting —
              what usually happens, what the words mean, and where you can stop
              and breathe. Written for parents, in plain English.
            </p>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold">
              Read the full article <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── 6. Common questions (FAQ for SEO + parent help) ──── */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Common questions from parents
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            Short answers to the questions parents ask most. Each one links to a fuller guide.
          </p>

          <div className="space-y-4">
            <Faq
              question="What is Child Protection in Victoria?"
              answer="In Victoria, Child Protection sits within the Department of Families, Fairness and Housing (DFFH, formerly known as DHHS). Workers investigate concerns about a child's safety, develop a case plan with the family, and apply to the Children's Court when needed."
              link={{ to: '/system-explained', label: 'Read the full DFFH process guide' }}
            />
            <Faq
              question="How do I get my children back in Victoria?"
              answer="Reunification usually means working closely with your case worker, meeting the goals in your case plan, attending all contact visits, and showing the changes you have made. A lawyer through Victoria Legal Aid can help you understand exactly what is required."
              link={{ to: '/start-here', label: 'Start here — find your stage' }}
            />
            <Faq
              question="What happens at the Children's Court of Victoria?"
              answer="The Children's Court Victoria hears child protection matters such as Interim Accommodation Orders, Family Reunification Orders and Care by Secretary Orders. Hearings are usually short and focus on the safety and best interests of the child."
              link={{ to: '/childrens-court', label: "Read the Children's Court guide" }}
            />
            <Faq
              question="How does supervised contact work in Victoria?"
              answer="Supervised contact is a visit between you and your child watched by a worker. Visits usually run one to two hours at a DFFH office, family centre or neutral location. Over time, contact often moves to unsupervised."
              link={{ to: '/supervised-contact', label: 'Read the supervised contact guide' }}
            />
            <Faq
              question="What are my rights as a parent in a Child Protection case?"
              answer="You have the right to a lawyer (free through Victoria Legal Aid), to be told what concerns Child Protection has, to attend case meetings, to see most reports about you, and to disagree at court."
              link={{ to: '/parent-rights', label: 'Read the parents\u2019 rights guide' }}
            />
            <Faq
              question="Is PANS Victoria a law firm?"
              answer="No. PANS provides general information and navigation support only. We are not lawyers and we do not give legal advice. For legal advice, contact Victoria Legal Aid on 1300 792 387."
              link={{ to: '/about', label: 'About PANS Victoria' }}
            />
          </div>
        </div>
      </section>

      {/* ── 6b. Parent feedback CTA ───────────────────────────── */}
      <section className="px-6 py-14 bg-brand-secondary border-y border-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
            Parent Feedback
          </p>
          <h2 className="text-3xl font-serif text-stone-900 mb-3">
            Tell us how PANS is going
          </h2>
          <p className="text-stone-600 leading-relaxed max-w-xl mx-auto mb-6">
            Every piece of feedback from a parent shapes what gets added next.
            Share what helped, what was confusing, or what you wish was here —
            anonymously if you'd prefer.
          </p>
          <Link
            to="/parent-feedback"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition shadow-lg shadow-brand-primary/20"
          >
            Share your feedback <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── 7. Crisis support ──────────────────────────────────── */}
      <section className="px-6 py-14 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto bg-brand-secondary border border-purple-100 rounded-2xl p-6 md:p-8 text-center">
          <Phone size={24} className="text-brand-primary mx-auto mb-3" />
          <h2 className="text-2xl font-serif text-stone-900 mb-2">
            If you need to talk to someone now
          </h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            For legal advice, contact <strong>Victoria Legal Aid on 1300 792 387</strong>.
            <br />
            If you are in crisis or need someone to talk to, call{' '}
            <strong>Lifeline on 13 11 14</strong> (24 hours, every day).
          </p>
          <Link
            to="/mental-health"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
          >
            More crisis and mental health support <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── 8. Disclaimer ──────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-10">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> PANS Victoria provides general information
            and navigation support only. Nothing on this website is legal advice.
            For legal representation or advice about your specific situation,
            please contact Victoria Legal Aid on{' '}
            <strong>1300 792 387</strong> or your nearest community legal centre.
          </p>
        </div>
      </section>

      {/* ── FAQ structured data for Google ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Child Protection in Victoria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "In Victoria, Child Protection sits within the Department of Families, Fairness and Housing (DFFH, formerly DHHS). Workers investigate concerns about a child's safety, develop a case plan with the family, and apply to the Children's Court when needed.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get my children back in Victoria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reunification usually means working closely with your case worker, meeting the goals in your case plan, attending all contact visits, and showing the changes you have made. A lawyer through Victoria Legal Aid can help you understand exactly what is required.',
                },
              },
              {
                '@type': 'Question',
                name: "What happens at the Children's Court of Victoria?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Children\u2019s Court Victoria hears child protection matters such as Interim Accommodation Orders, Family Reunification Orders and Care by Secretary Orders. Hearings are usually short and focus on the safety and best interests of the child.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does supervised contact work in Victoria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Supervised contact is a visit between you and your child watched by a worker. Visits usually run one to two hours at a DFFH office, family centre or neutral location. Over time, contact often moves to unsupervised.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are my rights as a parent in a Child Protection case?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You have the right to a lawyer (free through Victoria Legal Aid), to be told what concerns Child Protection has, to attend case meetings, to see most reports about you, and to disagree at court.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is PANS Victoria a law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. PANS provides general information and navigation support only. We are not lawyers and we do not give legal advice. For legal advice, contact Victoria Legal Aid on 1300 792 387.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

// ── Reusable card components ──────────────────────────────────
function StartCard({
  to,
  title,
  description,
  icon,
}: {
  to: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 hover:shadow-sm transition group"
    >
      <div className="flex gap-4 items-start">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-brand-secondary text-brand-primary flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
            {title}
            <ArrowRight
              size={16}
              className="text-brand-primary opacity-0 group-hover:opacity-100 transition"
            />
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}

function GuideCard({
  to,
  icon,
  title,
  description,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="block bg-brand-secondary border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 hover:bg-white transition"
    >
      <div className="w-10 h-10 rounded-lg bg-white text-brand-primary flex items-center justify-center mb-3 border border-purple-100">
        {icon}
      </div>
      <h3 className="font-semibold text-stone-900 mb-1.5">{title}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}

function Faq({
  question,
  answer,
  link,
}: {
  question: string;
  answer: string;
  link: { to: string; label: string };
}) {
  return (
    <details className="group bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
      <summary className="cursor-pointer font-semibold text-stone-900 flex items-center justify-between gap-3 list-none">
        <span>{question}</span>
        <ArrowRight
          size={16}
          className="text-brand-primary shrink-0 transition-transform group-open:rotate-90"
        />
      </summary>
      <div className="mt-3 pt-3 border-t border-stone-100">
        <p className="text-stone-700 leading-relaxed mb-3">{answer}</p>
        <Link to={link.to} className="text-brand-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
          {link.label} <ArrowRight size={14} />
        </Link>
      </div>
    </details>
  );
}
