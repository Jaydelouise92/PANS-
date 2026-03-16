import { Link } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import {
  FileText,
  MessageSquare,
  ClipboardList,
  Scale,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  Phone,
  ArrowRight,
  Gavel,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const beforeHearingSteps = [
  {
    number: 1,
    icon: ClipboardList,
    title: 'Gather Your Documents',
    body: 'Collect all letters, notices, and documents from Child Protection. Organise them in date order. Know what each document says.',
  },
  {
    number: 2,
    icon: BookOpen,
    title: 'Understand the Allegations',
    body: 'Read Child Protection\'s application carefully. Make sure you understand what the specific concerns are. Write down anything you disagree with.',
  },
  {
    number: 3,
    icon: MessageSquare,
    title: 'Prepare Your Response',
    body: 'Write down your response to the concerns raised. Include evidence that contradicts the concerns or demonstrates your parenting capacity.',
  },
  {
    number: 4,
    icon: FileText,
    title: 'Prepare Your Evidence',
    body: 'Think about what evidence you have: photos, letters from teachers or doctors, records of your involvement in your child\'s life, evidence of changes you have made.',
  },
  {
    number: 5,
    icon: MessageSquare,
    title: 'Know What You Want to Say',
    body: 'Write down the key points you want to make. Practice speaking clearly and calmly about these points.',
  },
  {
    number: 6,
    icon: Scale,
    title: 'Understand the Orders Being Sought',
    body: 'Make sure you understand what orders Child Protection is asking the court to make and what effect these orders would have.',
  },
]

const inCourtPoints = [
  'You will be addressed directly by the magistrate',
  'Speak clearly and respectfully',
  'Address the magistrate as "Your Honour"',
  'Stick to the facts relevant to your child\'s safety and wellbeing',
  'You can ask the magistrate to explain anything you do not understand',
  'You can request an adjournment (a delay) if you need more time',
]

const gettingHelp = [
  {
    label: 'Victoria Legal Aid',
    phone: '1300 792 387',
    note: 'may provide a duty lawyer at court',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function SelfRepPage() {
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
            <Gavel size={14} className="text-primary" />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              Self-Representation
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Self-Representation in{' '}
            <span className="gradient-text">Children's Court</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            If you do not have a lawyer, this guide will help you understand how to represent
            yourself in Children's Court. You have the right to speak for yourself.
          </p>
        </div>
      </section>

      {/* ── Important Warning ─────────────────────────────────────────────── */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-5 sm:p-6 flex gap-4"
            style={{ background: 'hsl(48 96% 96%)', borderColor: 'hsl(38 85% 72%)' }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(38 80% 35%)' }} />
            <div>
              <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: 'hsl(32 80% 28%)' }}>
                Legal advice is strongly recommended
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(32 65% 35%)' }}>
                Self-representation is challenging. We strongly encourage you to contact{' '}
                <strong>Victoria Legal Aid (1300 792 387)</strong> before your court date.
                They may be able to provide free legal advice or have a duty lawyer available at court.
                PANS is not a legal service and cannot provide legal advice.
              </p>
            </div>
          </div>
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
              Many parents in regional Victoria face Children's Court without a lawyer. While we always
              recommend seeking legal advice, we understand that this is not always possible. This guide
              provides practical guidance to help you navigate the process.
            </p>
          </div>
        </div>
      </section>

      {/* ── Before Your Hearing ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Preparation
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Before Your Hearing
            </h2>
            <p className="font-sans text-muted-foreground mt-3 max-w-2xl">
              Good preparation is the most important thing you can do. Work through each of these steps
              before your court date.
            </p>
          </div>

          {/* Numbered steps with vertical connector */}
          <div className="relative">
            <div
              className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px sm:block"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.35), hsl(var(--primary) / 0.05))',
              }}
            />
            <div className="flex flex-col gap-4">
              {beforeHearingSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.number}
                    className="card-hover group relative flex gap-4 rounded-xl border border-border bg-card p-5 sm:gap-6 sm:p-6"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-sm"
                        style={{ background: 'var(--gradient-purple)' }}
                      >
                        <span className="font-serif text-sm font-bold text-primary-foreground">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="mb-2 flex items-center gap-2.5">
                        <Icon
                          className="h-4 w-4 flex-shrink-0 transition-colors group-hover:text-primary"
                          style={{ color: 'hsl(var(--primary))' }}
                        />
                        <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── In the Courtroom + Adjournment ───────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* In the Courtroom */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Gavel size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-primary">In Court</p>
                  <h2 className="font-serif font-bold text-xl text-foreground">In the Courtroom</h2>
                </div>
              </div>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                When representing yourself, remember:
              </p>
              <ul className="space-y-3">
                {inCourtPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asking for an Adjournment */}
            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    <Scale size={18} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-serif font-bold text-lg text-foreground">Asking for an Adjournment</h2>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  If you are not ready to proceed or need more time to get legal advice, you can ask
                  the magistrate for an adjournment. Say:
                </p>
                <blockquote
                  className="rounded-xl p-4 border-l-4 font-sans text-sm leading-relaxed italic"
                  style={{
                    borderColor: 'hsl(var(--primary))',
                    background: 'hsl(var(--secondary))',
                    color: 'hsl(var(--secondary-foreground))',
                  }}
                >
                  "Your Honour, I would like to request an adjournment so that I can obtain legal advice."
                </blockquote>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3">
                  The magistrate may grant this request.
                </p>
              </div>

              {/* Filing Documents */}
              <div
                className="rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    <FileText size={18} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-serif font-bold text-lg text-foreground">Filing Documents</h2>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  If you need to file documents with the court (such as a statement or evidence), you
                  should do this through the court registry. Ask the registry staff for guidance on how
                  to file documents correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting Help ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Support
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Getting Help
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Victoria Legal Aid',
                phone: '1300 792 387',
                note: 'May provide a duty lawyer at court',
              },
              {
                title: 'Court Registry',
                phone: null,
                note: 'Can provide procedural information (but not legal advice)',
              },
              {
                title: 'PANS',
                phone: null,
                note: 'Can provide advocacy support and guidance',
                isContact: true,
              },
            ].map(({ title, phone, note, isContact }) => (
              <div
                key={title}
                className="bg-card rounded-2xl border border-border p-5 card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <h3 className="font-serif font-bold text-foreground mb-2">{title}</h3>
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-primary hover:underline mb-2"
                  >
                    <Phone size={13} /> {phone}
                  </a>
                )}
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{note}</p>
                {isContact && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-primary hover:underline mt-2"
                  >
                    Contact us <ArrowRight size={11} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Highlighted warning box */}
          <div
            className="rounded-2xl border-2 p-6 sm:p-8"
            style={{
              background: 'hsl(48 96% 96%)',
              borderColor: 'hsl(38 85% 72%)',
            }}
          >
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: 'hsl(38 92% 50%)' }}
              >
                <span className="text-white font-bold text-lg leading-none">!</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-xl mb-2"
                  style={{ color: 'hsl(32 80% 28%)' }}
                >
                  Important Warning
                </h3>
                <p
                  className="font-sans leading-relaxed"
                  style={{ color: 'hsl(32 65% 30%)', fontSize: '0.95rem' }}
                >
                  Self-representation is challenging. We strongly encourage you to contact Victoria
                  Legal Aid{' '}
                  <a
                    href="tel:1300792387"
                    className="font-semibold underline"
                    style={{ color: 'hsl(32 70% 28%)' }}
                  >
                    (1300 792 387)
                  </a>{' '}
                  before your court date. They may be able to provide free legal advice or have a
                  duty lawyer available at court.
                </p>
              </div>
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
            Also Read Our Court Guide
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            Our Children's Court Guide explains court orders, the hearing process, and what to expect
            in plain language.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/court-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
            >
              View Court Guide
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/rights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm border-2 border-primary text-primary bg-background hover:bg-secondary transition-all duration-200 hover:scale-105"
            >
              Know Your Rights
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
