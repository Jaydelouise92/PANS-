import { Link } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import {
  ShieldCheck,
  Scale,
  FileText,
  Globe,
  Users,
  MessageSquare,
  Lock,
  AlertCircle,
  Phone,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const rights = [
  {
    icon: FileText,
    title: 'Right to Information',
    body: 'You have the right to be told why Child Protection is involved and what the specific concerns are. You have the right to access information about your case, including documents held about you and your family (subject to some limitations).',
  },
  {
    icon: Users,
    title: 'Right to Participate',
    body: 'You have the right to participate in assessments, case planning meetings, and court proceedings. Your views, your relationship with your children, and your capacity as a parent should be considered.',
  },
  {
    icon: Scale,
    title: 'Right to Legal Representation',
    body: 'You have the right to seek legal advice and to be represented by a lawyer. If you cannot afford a lawyer, you may be eligible for assistance from Victoria Legal Aid.',
  },
  {
    icon: Globe,
    title: 'Right to an Interpreter',
    body: 'If English is not your first language, you have the right to an interpreter. Child Protection should provide interpreter services free of charge.',
  },
  {
    icon: ShieldCheck,
    title: 'Right to a Support Person',
    body: 'You have the right to have a support person present during meetings and court proceedings. This may be a family member, a friend, or an advocate.',
  },
  {
    icon: MessageSquare,
    title: 'Right to Appeal',
    body: 'If you disagree with decisions made by the Children\'s Court, you may have the right to appeal. Seek legal advice about your options.',
  },
  {
    icon: Lock,
    title: 'Right to Privacy',
    body: 'Child Protection is required to handle your personal information in accordance with privacy legislation. Information about your case should be treated confidentially.',
  },
  {
    icon: AlertCircle,
    title: 'Right to Complain',
    body: 'If you believe Child Protection has not treated you fairly or has made errors, you have the right to make a complaint. Complaints can be made to the Department of Families, Fairness and Housing or to the Commission for Children and Young People.',
  },
]

const ifNotRespected = [
  'Document what happened (date, time, what was said or done)',
  'Speak with your lawyer or contact Victoria Legal Aid',
  'Contact the Department of Families, Fairness and Housing complaints line',
  'Seek advocacy support through PANS',
]

const keyContacts = [
  {
    label: 'Victoria Legal Aid',
    phone: '1300 792 387',
    href: 'tel:1300792387',
  },
  {
    label: 'Commission for Children and Young People',
    phone: '1300 782 978',
    href: 'tel:1300782978',
  },
  {
    label: 'Department of Families, Fairness and Housing',
    phone: '1800 007 734',
    href: 'tel:1800007734',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function RightsPage() {
  return (
    <PageLayout>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(268 60% 70%), transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 bg-secondary border border-accent rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              Parent Rights
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Your Rights as a{' '}
            <span className="gradient-text">Parent</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            Understanding your rights during a Child Protection investigation can help you feel
            more prepared and ensure the process is fair.
          </p>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border border-border p-6 sm:p-8"
            style={{ background: 'hsl(var(--muted))' }}
          >
            <p className="font-sans text-muted-foreground leading-relaxed">
              As a parent involved with Child Protection, you have important rights. Knowing these rights
              can help you engage with the process more confidently and ensure you are treated fairly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rights Cards ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Your Rights
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Your Rights as a Parent
            </h2>
            <p className="font-sans text-muted-foreground mt-3 max-w-2xl">
              These rights apply throughout the Child Protection process, from initial contact through
              to any court proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rights.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="bg-card rounded-2xl border border-border p-5 sm:p-6 card-hover"
                style={{ boxShadow: 'var(--shadow-card)', animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    <Icon size={17} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground leading-snug">{title}</h3>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What To Do If Rights Not Respected ───────────────────────────── */}
      <section className="py-14 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* What to do */}
            <div
              className="rounded-2xl border border-border bg-card p-6 sm:p-7"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <AlertCircle size={18} className="text-primary-foreground" />
                </div>
                <h2 className="font-serif font-bold text-lg text-foreground">
                  If Your Rights Are Not Respected
                </h2>
              </div>
              <ul className="space-y-3">
                {ifNotRespected.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key contacts */}
            <div
              className="rounded-2xl border border-border bg-card p-6 sm:p-7"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <h2 className="font-serif font-bold text-lg text-foreground">Key Contacts</h2>
              </div>
              <div className="space-y-4">
                {keyContacts.map(({ label, phone, href }) => (
                  <div key={label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="font-sans font-semibold text-sm text-foreground mb-1">{label}</p>
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-primary hover:underline"
                    >
                      <Phone size={13} /> {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Document everything callout ───────────────────────────────────── */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-6 sm:p-8 flex gap-4"
            style={{
              background: 'hsl(var(--secondary))',
              borderColor: 'hsl(var(--primary) / 0.3)',
            }}
          >
            <AlertCircle size={22} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                Document Everything
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Keep a written record of all interactions with Child Protection — dates, times, what was
                said, and who was present. These notes can be very important if you need to challenge a
                decision or if your case goes to court. Download our{' '}
                <Link to="/resources" className="text-primary font-semibold hover:underline">
                  Contact and Notes Log
                </Link>{' '}
                from the Resources page to help you stay organised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-14 sm:py-16"
        style={{ background: 'linear-gradient(135deg, hsl(268 60% 50% / 0.06) 0%, hsl(280 45% 88% / 0.2) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Need More Support?
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our practical guides and resources, or contact us to request advocacy support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
            >
              Browse Resources
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm border-2 border-primary text-primary bg-background hover:bg-secondary transition-all duration-200 hover:scale-105"
            >
              Contact PANS
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
