import PageLayout from '@/components/PageLayout'
import {
  Heart,
  Phone,
  MessageCircle,
  Globe,
  Clock,
  Shield,
  Brain,
  Smile,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const crisisServices = [
  {
    name: 'Lifeline',
    desc: 'Crisis support and suicide prevention. Available 24/7.',
    phone: '13 11 14',
    url: 'https://www.lifeline.org.au',
    hours: '24 hours, 7 days',
    color: 'primary',
  },
  {
    name: 'Beyond Blue',
    desc: 'Anxiety, depression, and mental health support.',
    phone: '1300 22 4636',
    url: 'https://www.beyondblue.org.au',
    hours: '24 hours, 7 days',
    color: 'primary',
  },
  {
    name: '1800RESPECT',
    desc: 'National sexual assault, domestic and family violence counselling service.',
    phone: '1800 737 732',
    url: 'https://www.1800respect.org.au',
    hours: '24 hours, 7 days',
    color: 'primary',
  },
  {
    name: 'Kids Helpline',
    desc: 'Free, private and confidential 24/7 phone and online counselling service for young people aged 5–25.',
    phone: '1800 551 800',
    url: 'https://www.kidshelpline.com.au',
    hours: '24 hours, 7 days',
    color: 'primary',
  },
]

const supportServices = [
  {
    name: 'PANDA',
    desc: 'Perinatal Anxiety & Depression Australia. Support for parents experiencing mental health difficulties during or after pregnancy.',
    phone: '1300 726 306',
    url: 'https://www.panda.org.au',
    hours: 'Mon–Sat 9am–7:30pm',
  },
  {
    name: 'MensLine Australia',
    desc: 'Professional telephone and online support service for Australian men with family and relationship concerns.',
    phone: '1300 78 99 78',
    url: 'https://mensline.org.au',
    hours: '24 hours, 7 days',
  },
  {
    name: 'Head to Health',
    desc: 'Australian Government resource for finding the right mental health support near you.',
    phone: '1800 595 212',
    url: 'https://www.headtohealth.gov.au',
    hours: 'Business hours',
  },
  {
    name: 'SANE Australia',
    desc: 'Support for people affected by complex mental health issues.',
    phone: '1800 187 263',
    url: 'https://www.sane.org',
    hours: 'Mon–Fri 10am–10pm',
  },
]

const selfCareTips = [
  {
    icon: Brain,
    title: 'Acknowledge Your Feelings',
    body: "It is normal to feel scared, angry, grief-stricken, or overwhelmed. These are natural responses to an extremely stressful situation. You don't have to push these feelings away.",
  },
  {
    icon: Heart,
    title: 'Reach Out for Support',
    body: 'Talk to trusted friends or family members about what you are going through. You do not have to face this alone. Sharing your experience can reduce feelings of isolation.',
  },
  {
    icon: Shield,
    title: 'Set Boundaries With Information',
    body: 'Try not to obsessively read about your case. While it is important to stay informed, constantly researching can increase anxiety. Set specific times to review information.',
  },
  {
    icon: Smile,
    title: 'Focus on What You Can Control',
    body: 'There will be parts of this process outside your control. Try to focus your energy on the things you can do — attending meetings, keeping appointments, and engaging with support services.',
  },
  {
    icon: Clock,
    title: 'Maintain Routine',
    body: 'Where possible, try to maintain normal daily routines. Regular sleep, meals, and physical activity can have a significant positive impact on your mental health.',
  },
  {
    icon: MessageCircle,
    title: 'Consider Counselling',
    body: 'Talking to a professional counsellor or therapist can be extremely helpful. Your GP can provide a Mental Health Treatment Plan (MHTP) which may give you access to Medicare-subsidised sessions.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function MentalHealthPage() {
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
              Mental Health Support
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Looking After{' '}
            <span className="gradient-text">Yourself</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            Navigating Child Protection and court proceedings can take an enormous toll on your
            mental health. Your wellbeing matters. This page provides information about services
            and supports that can help you through this difficult time.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <div
        className="py-4 px-4 sm:px-6"
        style={{ background: 'hsl(0 70% 96%)', borderBottom: '2px solid hsl(0 70% 85%)' }}
      >
        <div className="max-w-4xl mx-auto flex gap-3 items-center">
          <Phone size={18} className="flex-shrink-0" style={{ color: 'hsl(0 60% 40%)' }} />
          <p className="font-sans text-sm font-medium" style={{ color: 'hsl(0 55% 32%)' }}>
            If you are in immediate danger or crisis, call <strong>000</strong> or go to your nearest emergency department.
          </p>
        </div>
      </div>

      {/* Crisis lines */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Immediate Help
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Crisis Support Lines
            </h2>
            <p className="font-sans text-muted-foreground mt-3 max-w-xl mx-auto">
              These services are available now. You don't have to be in crisis to call — they provide support for anyone who is struggling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {crisisServices.map(({ name, desc, phone, url, hours }) => (
              <div
                key={name}
                className="bg-card rounded-2xl border border-border p-5 sm:p-6 card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <h3 className="font-serif font-bold text-foreground mb-1.5">{name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm font-sans font-bold text-primary hover:underline"
                  >
                    <Phone size={14} />
                    {phone}
                  </a>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {hours}
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe size={11} />
                      Visit website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional support services */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              More Support
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Additional Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportServices.map(({ name, desc, phone, url, hours }) => (
              <div
                key={name}
                className="bg-card rounded-2xl border border-border p-5 card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <h3 className="font-serif font-bold text-foreground mb-1.5">{name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-sans font-semibold text-primary hover:underline"
                  >
                    <Phone size={13} /> {phone}
                  </a>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock size={11} /> {hours}
                  </span>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <Globe size={11} /> Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-care tips */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-2 block">
              Self-Care
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              Looking After Your Wellbeing
            </h2>
            <p className="font-sans text-muted-foreground mt-3 max-w-xl mx-auto">
              These strategies can help you protect your mental health while navigating this difficult process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selfCareTips.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="bg-card rounded-2xl border border-border p-5 sm:p-6 card-hover"
                style={{ boxShadow: 'var(--shadow-card)', animationDelay: `${i * 0.06}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GP tip box */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-6 sm:p-8"
            style={{
              background: 'hsl(var(--secondary))',
              borderColor: 'hsl(var(--primary) / 0.3)',
            }}
          >
            <h3 className="font-serif font-bold text-xl text-foreground mb-3">
              Speak to Your GP
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Your General Practitioner (GP) can be a valuable source of support. They can provide a{' '}
              <strong className="font-semibold text-foreground">Mental Health Treatment Plan (MHTP)</strong>
              , which can give you access to up to 20 Medicare-subsidised sessions with a psychologist or
              other mental health professional each year. Talking to your GP about what you are going through
              is an important first step.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
