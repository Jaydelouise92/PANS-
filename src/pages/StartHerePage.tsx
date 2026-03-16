import { Link } from 'react-router-dom';
import {
  Wind,
  PenLine,
  BadgeCheck,
  HelpCircle,
  FileX,
  Scale,
  UserCheck,
  BookMarked,
  XCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Shield,
  FileText,
  Layers,
} from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

/* ─── Steps Data ─────────────────────────────────────────────────────────── */

const steps = [
  {
    number: 1,
    icon: Wind,
    title: 'Stay Calm',
    body: 'Try to remain as calm as possible. Child Protection workers assess how you respond to stressful situations. Take a breath and focus on being cooperative and clear.',
  },
  {
    number: 2,
    icon: PenLine,
    title: 'Write Everything Down',
    body: "From the moment contact is made, start keeping notes. Write down the worker's name, their phone number, the date and time of contact, and everything that is said. These notes may be important later.",
  },
  {
    number: 3,
    icon: BadgeCheck,
    title: 'Ask for Identification',
    body: "You have the right to ask the worker for their full name, their role, and the name of their supervisor. Write these details down immediately.",
  },
  {
    number: 4,
    icon: HelpCircle,
    title: 'Ask Why They Are There',
    body: 'Ask the worker to explain the specific concerns that have been reported. You have the right to understand why Child Protection has become involved in your family.',
  },
  {
    number: 5,
    icon: FileX,
    title: 'Do Not Sign Anything Immediately',
    body: 'Do not sign any documents, agreements, or safety plans until you have had a chance to read them carefully and understand what they mean. Ask for time to consider your options.',
  },
  {
    number: 6,
    icon: Scale,
    title: 'Seek Legal Advice',
    body: 'Contact a lawyer as soon as possible. You may be eligible for free legal advice through Victoria Legal Aid (1300 792 387). Even one conversation with a lawyer can help you understand your situation.',
  },
  {
    number: 7,
    icon: UserCheck,
    title: 'Contact Someone You Trust',
    body: 'Reach out to a trusted family member or friend who can support you. Having someone with you during meetings can help you feel less overwhelmed and can act as a witness.',
  },
  {
    number: 8,
    icon: BookMarked,
    title: 'Understand You Have Rights',
    body: "As a parent, you have rights in this process. Read our Parent Rights Guide to understand what you are entitled to during an investigation. You do not have to face this alone.",
  },
];

const warnings = [
  {
    text: "Don't argue or become aggressive",
    note: 'This can negatively affect assessments of your parenting',
  },
  {
    text: "Don't ignore contact from Child Protection",
    note: 'Non-engagement can lead to escalation of the investigation',
  },
  {
    text: "Don't make promises you can't keep",
    note: 'Be honest about your situation and what you are able to do',
  },
  {
    text: "Don't discuss your case on social media",
    note: 'This can complicate your situation and affect court proceedings',
  },
];

const contacts = [
  {
    name: 'Victoria Legal Aid',
    number: '1300 792 387',
    hours: 'Free legal information and referral',
    href: 'tel:1300792387',
    color: 'text-primary',
  },
  {
    name: 'Child Protection Crisis Line',
    number: '13 12 78',
    hours: '24 hours, 7 days a week',
    href: 'tel:131278',
    color: 'text-primary',
  },
  {
    name: 'Lifeline',
    number: '13 11 14',
    hours: 'Crisis support, 24 hours',
    href: 'tel:131114',
    color: 'text-primary',
  },
];

const nextSteps = [
  {
    icon: Shield,
    title: 'Understanding Child Protection',
    desc: 'Learn the stages of the investigation process',
    href: '/child-protection',
  },
  {
    icon: FileText,
    title: 'Parent Rights Guide',
    desc: 'Know your rights throughout the process',
    href: '/rights',
  },
  {
    icon: Layers,
    title: 'All Resources',
    desc: 'Browse all guides and support services',
    href: '/resources',
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function StartHerePage() {
  return (
    <PageLayout>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(268 60% 70%), transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-12 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(280 55% 65%), transparent 70%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-sans text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary border border-accent rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              Start Here
            </span>
          </div>

          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            What To Do in the&nbsp;
            <span className="gradient-text">First 48 Hours</span>
          </h1>

          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            If Child Protection has just made contact with you, it is normal to feel scared and
            overwhelmed. This guide will help you understand what to do right now, step by step.
          </p>
        </div>
      </section>

      {/* ── STEP-BY-STEP TIMELINE ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-2 text-center">
            Your Step-by-Step Guide
          </h2>
          <p className="font-sans text-muted-foreground text-center mb-12 text-sm">
            Work through these steps in order. Each one matters.
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-6 sm:left-7 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, hsl(268 60% 50% / 0.3), hsl(280 45% 88% / 0.5), transparent)' }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map(({ number, icon: Icon, title, body }, idx) => (
                <div
                  key={number}
                  className="relative flex gap-5 sm:gap-7 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  {/* Step circle */}
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: 'var(--gradient-purple)' }}
                    >
                      <span className="font-serif font-bold text-lg text-primary-foreground leading-none">
                        {number}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div
                    className="flex-1 bg-card rounded-2xl border border-border p-5 sm:p-6 mb-2 card-hover"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Icon size={16} className="text-primary flex-shrink-0" />
                      <h3 className="font-serif font-bold text-foreground text-lg">{title}</h3>
                    </div>
                    <p className="font-sans text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT NOT TO DO ────────────────────────────────────────────────── */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-6 sm:p-8"
            style={{
              background: 'hsl(0 85% 98%)',
              borderColor: 'hsl(0 70% 80%)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(0 72% 50%)' }}
              >
                <XCircle size={20} className="text-white" />
              </div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl"
                style={{ color: 'hsl(0 60% 25%)' }}>
                What NOT To Do
              </h2>
            </div>

            <ul className="space-y-4">
              {warnings.map(({ text, note }) => (
                <li key={text} className="flex gap-3.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'hsl(0 72% 50%)' }}
                  >
                    <span className="text-white text-xs font-bold leading-none">✕</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm" style={{ color: 'hsl(0 55% 25%)' }}>
                      {text}
                    </p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: 'hsl(0 40% 40%)' }}>
                      {note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── KEY CONTACTS ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border border-border p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, hsl(268 60% 50% / 0.04) 0%, hsl(280 45% 88% / 0.15) 100%)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--gradient-purple)' }}
              >
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-foreground">
                Key Contacts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contacts.map(({ name, number, hours, href }) => (
                <a
                  key={name}
                  href={href}
                  className="group bg-card rounded-xl border border-border p-4 hover:border-primary/40 transition-all duration-200 hover:shadow-md"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <p className="font-sans font-semibold text-sm text-foreground mb-1">{name}</p>
                  <p className="font-serif font-bold text-xl text-primary mb-1 group-hover:opacity-80 transition-opacity">
                    {number}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">{hours}</p>
                </a>
              ))}
            </div>

            <p className="font-sans text-xs text-muted-foreground mt-5 text-center">
              If you are in immediate danger, always call <strong>000</strong> first.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ────────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, hsl(268 60% 50% / 0.06) 0%, hsl(280 45% 88% / 0.2) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Your Next Steps
          </h2>
          <p className="font-sans text-muted-foreground mb-10">
            Now that you've read the first 48 hours guide, explore these important resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nextSteps.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={href}
                to={href}
                className="group bg-card rounded-2xl border border-border p-5 card-hover text-left"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
                  <Icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-1.5 leading-snug">{title}</h3>
                <p className="font-sans text-xs text-muted-foreground mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                  Read guide <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
