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
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <VideoTemplate />
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#F9F8FF] via-[#F9F8FF]/70 to-transparent pt-16 pb-6 px-6">
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

      {/* ── 2. What is PANS ─────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
              PANS Victoria
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-5 leading-tight">
              Plain-language support for parents involved with Child Protection
            </h1>
            <p className="text-lg text-stone-700 leading-relaxed mb-3">
              PANS Victoria is a free, independent information service for
              parents in Victoria who are dealing with the Department of
              Families, Fairness and Housing (DFFH) or the Children's Court.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              We help you understand what is happening, know your rights, and
              work out your next step — one at a time.
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
              alt="A parent and child walking a calm path together"
              className="w-full rounded-3xl shadow-md object-cover max-h-96"
            />
          </div>
        </div>
      </section>

      {/* ── 2. What this platform helps with ──────────────────── */}
      <section className="bg-white border-y border-stone-200 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            What this platform helps with
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            Clear, written information you can read at your own pace. No jargon, no
            judgment.
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Understanding what Child Protection is asking of you',
              'Knowing your rights as a parent',
              'Preparing for meetings, case plans and court',
              'Finding mental health and crisis support',
              'Working out what to do in the first 48 hours',
              'Understanding the Children\u2019s Court process',
            ].map((item) => (
              <li
                key={item}
                className="bg-brand-secondary border border-purple-100 rounded-xl p-4 flex gap-3 items-start"
              >
                <span className="text-brand-primary font-bold mt-0.5">•</span>
                <span className="text-stone-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. Start Here ──────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Start Here
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            If you are not sure where to begin, these three pages are the most
            important place to start.
          </p>

          <div className="space-y-4">
            <StartCard
              to="/start-here"
              title="Find your stage"
              description="Tell us where you are in the process and we'll show you the most relevant guides."
            />
            <StartCard
              to="/first-48-hours"
              title="First 48 hours guide"
              description="What to do straight away after Child Protection contacts you. Calm, step-by-step."
              icon={<Clock size={20} />}
            />
            <StartCard
              to="/parent-rights"
              title="Your rights as a parent"
              description="What you are entitled to during investigation, case management and court."
              icon={<Scale size={20} />}
            />
          </div>
        </div>
      </section>

      {/* ── 4. Support areas / key guides ──────────────────────── */}
      <section className="bg-white border-y border-stone-200 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Key guides
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            The areas parents most often need help understanding.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <GuideCard
              to="/system-explained"
              icon={<BookOpen size={20} />}
              title="Child Protection Victoria \u2014 process explained"
              description="A plain-language overview of how the Child Protection system works in Victoria, from first contact through to case closure."
            />
            <GuideCard
              to="/childrens-court"
              icon={<Shield size={20} />}
              title="Children's Court guide"
              description="Hearing types, common court orders, and what to expect on the day."
            />
            <GuideCard
              to="/parent-rights"
              icon={<Scale size={20} />}
              title="Parents\u2019 rights"
              description="What you can ask for, what you can refuse, and what you must be told."
            />
            <GuideCard
              to="/supervised-contact"
              icon={<Users size={20} />}
              title="Supervised contact"
              description="How visits work, who is in the room, and what helps them go well."
            />
            <GuideCard
              to="/self-represented"
              icon={<FileText size={20} />}
              title="Self-represented parents"
              description="Practical preparation if you have to go to court without a lawyer."
            />
            <GuideCard
              to="/emotional-impact"
              icon={<Heart size={20} />}
              title="Emotional impact of removal"
              description="What you might be feeling, why it is normal, and where to get support."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline">
              View all support resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. If you need to talk to someone now ─────────────── */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto bg-white border border-purple-100 rounded-2xl p-6 md:p-8 text-center">
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

      {/* ── 6. Disclaimer ──────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle
            size={20}
            className="text-amber-600 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> PANS Victoria provides general information
            and navigation support only. Nothing on this website is legal advice.
            For legal representation or advice about your specific situation,
            please contact Victoria Legal Aid on{' '}
            <strong>1300 792 387</strong> or your nearest community legal centre.
          </p>
        </div>
      </section>
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
