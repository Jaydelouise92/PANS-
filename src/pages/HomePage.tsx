import { Link } from 'react-router-dom';
import {
  Shield,
  BookOpen,
  Heart,
  Clock,
  Scale,
  Users,
  FileText,
  HandHeart,
  Brain,
  ArrowRight,
  Sparkles,
} from 'lucide-react';


/* ─── Data ─────────────────────────────────────────────────────────────── */

const pillars = [
  {
    icon: Shield,
    title: 'Plain Language Information',
    desc: 'We explain complex Child Protection and court processes in everyday language that is easy to understand.',
  },
  {
    icon: BookOpen,
    title: 'Practical Guidance',
    desc: 'Step-by-step guides to help you prepare for meetings, understand case plans, and navigate court processes.',
  },
  {
    icon: Heart,
    title: 'Advocacy Support',
    desc: "We support parents who are self-representing in Children's Court, helping you feel more prepared and confident.",
  },
];

const helpCards = [
  {
    icon: Clock,
    title: 'First 48 Hours',
    desc: 'What to do when Child Protection first contacts you.',
    href: '/start-here',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: Shield,
    title: 'Understanding Child Protection',
    desc: 'Learn the stages of the Child Protection process from initial contact to case closure.',
    href: '/child-protection',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: Scale,
    title: "Children's Court Guide",
    desc: 'Plain language guide to court processes, orders, and what to expect at hearings.',
    href: '/court-guide',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: Users,
    title: 'Self-Representation',
    desc: "Support and guidance for parents representing themselves in Children's Court.",
    href: '/self-rep',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: FileText,
    title: 'Parent Rights',
    desc: 'Know your rights during investigations and throughout the Child Protection process.',
    href: '/rights',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    desc: 'Services, supports, and resources to protect your wellbeing through this difficult time.',
    href: '/mental-health',
    accent: 'text-primary',
    bg: 'bg-secondary',
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(268 60% 70%), transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(280 55% 65%), transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(260 60% 75%), transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary border border-accent rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm font-sans font-medium text-secondary-foreground">
              Free support for Victorian families
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-6 animate-slide-up"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', animationDelay: '0.05s' }}
          >
            You Don't Have to&nbsp;
            <span className="gradient-text">Face This Alone</span>
          </h1>

          {/* Subheading */}
          <p
            className="font-sans text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ fontSize: '1.2rem', animationDelay: '0.12s' }}
          >
            PANS provides plain-language guidance, practical resources, and advocacy support
            for parents in regional Victoria navigating Child Protection and Children's Court.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.2s' }}>
            <Link
              to="/start-here"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100 shadow-md"
              style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
            >
              <Clock size={16} />
              Start Here — First 48 Hours
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm border-2 border-primary text-primary bg-background hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Explore Resources
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IS PANS ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
              What is PANS?
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
              PANS — the Parent Advocacy &amp; Navigation Service — is here to walk alongside you
              when the system feels overwhelming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-8 border border-border card-hover group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE CAN HELP GRID ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
              How We Can Help
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Explore our guides and resources — each one designed to be clear, practical,
              and easy to use even during the most stressful moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpCards.map(({ icon: Icon, title, desc, href }, i) => (
              <Link
                key={title}
                to={href}
                className="group bg-card rounded-2xl p-6 border border-border card-hover flex flex-col"
                style={{
                  boxShadow: 'var(--shadow-card)',
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                    <Icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground leading-snug">{title}</h3>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTICE ─────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-2 p-6 sm:p-8"
            style={{
              background: 'hsl(48 96% 95%)',
              borderColor: 'hsl(38 85% 72%)',
            }}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: 'hsl(38 92% 50%)' }}>
                <span className="text-white font-bold text-lg leading-none">!</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2"
                  style={{ color: 'hsl(32 80% 28%)' }}>
                  Important Notice
                </h3>
                <p className="font-sans leading-relaxed"
                  style={{ color: 'hsl(32 65% 30%)', fontSize: '0.95rem' }}>
                  PANS is <strong>not a legal service</strong>. We do not provide legal advice.
                  Always seek professional legal advice for your specific situation. The information
                  on this site is for general guidance only and does not constitute legal, financial,
                  or professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER CALLOUT ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, hsl(268 60% 50% / 0.08) 0%, hsl(280 45% 88% / 0.3) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
            style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}>
            <HandHeart size={26} className="text-primary-foreground" />
          </div>

          <div className="inline-flex items-center gap-2 bg-secondary border border-accent rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-secondary-foreground">
              Our Story
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-5 leading-snug">
            Built from lived experience
          </h2>

          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            PANS was created by a mother and criminology student who navigated the Child Protection
            system firsthand. We understand what you're going through because we've been there.
            This resource exists so no parent has to feel as lost and alone as we did.
          </p>

          <Link
            to="/founder"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100"
            style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
          >
            Meet Our Founder
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
    );
    }
