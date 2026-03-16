import { Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import {
  Heart,
  ShieldCheck,
  BookOpen,
  Users,
  Scale,
  Download,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Empathy and Respect',
    body: 'Every parent who comes to PANS is treated with dignity and respect. We understand that you are going through an incredibly difficult time.',
  },
  {
    icon: BookOpen,
    title: 'Clear Information',
    body: 'We provide plain-language explanations of complex processes so you can understand what is happening and what your options are.',
  },
  {
    icon: ShieldCheck,
    title: 'Parent-Centred',
    body: 'PANS is built around the needs of parents. Everything we create is designed to be practical, useful, and accessible.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    body: 'We are particularly focused on supporting families in regional Victoria, where services and information can be harder to access.',
  },
]

const whatWeDo = [
  { icon: BookOpen, text: 'Explain the Child Protection system in plain language' },
  { icon: Scale, text: "Provide guides to Children's Court processes and hearings" },
  { icon: Users, text: 'Support parents who are self-representing in court' },
  { icon: ShieldCheck, text: 'Help parents understand and exercise their rights' },
  { icon: Download, text: 'Provide practical downloadable resources and templates' },
  { icon: Heart, text: 'Share information about mental health and support services' },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(268 60% 70%), transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 bg-secondary border border-accent rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Heart size={14} className="text-primary" fill="currentColor" strokeWidth={0} />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              About PANS
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            About{' '}
            <span className="gradient-text">PANS</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            PANS — the Parent Advocacy and Navigation Support service — is a free resource
            created to support parents in regional Victoria who are navigating Child Protection
            involvement and Children's Court processes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Mission
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Why PANS Exists
            </h2>
          </div>

          <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
            <p>
              Many parents encounter the Child Protection system during extremely stressful circumstances
              and often have little understanding of how the system works. Information available online is
              frequently written in legal or bureaucratic language that is difficult to understand, particularly
              during a time of crisis.
            </p>
            <p>
              PANS was created to fill this gap. We provide plain-language explanations of the Child Protection
              system, practical guidance for meetings and court proceedings, and a trusted source of support
              for parents who are trying to understand what is happening to their family.
            </p>
            <p>
              PANS is particularly focused on families in regional Victoria. Parents in regional areas often
              face additional barriers — limited local services, difficulty accessing legal support, and less
              information tailored to their circumstances. We aim to provide guidance that is relevant,
              accessible, and genuinely useful.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              What We Do
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              How PANS Helps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeDo.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="bg-card rounded-xl border border-border p-4 flex gap-3 items-start card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Icon size={15} className="text-primary-foreground" />
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Values
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground">{title}</h3>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-6 sm:p-8 flex gap-4"
            style={{ background: 'hsl(48 96% 96%)', borderColor: 'hsl(38 85% 72%)' }}
          >
            <AlertCircle size={22} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(38 80% 35%)' }} />
            <div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: 'hsl(32 80% 28%)' }}>
                Important Disclaimer
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(32 65% 35%)' }}>
                PANS is <strong>not a legal service</strong> and does not provide legal advice. The
                information on this website is provided for general guidance only. Always seek
                independent professional legal advice for your specific situation. If you need legal
                assistance, contact Victoria Legal Aid on <strong>1300 792 387</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 sm:py-16"
        style={{ background: 'linear-gradient(135deg, hsl(268 60% 50% / 0.06) 0%, hsl(280 45% 88% / 0.2) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
            >
              Contact PANS
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm border-2 border-primary text-primary bg-background hover:bg-secondary transition-all duration-200 hover:scale-105"
            >
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
