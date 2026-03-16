import { Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import { Heart, BookOpen, Users, ArrowRight } from 'lucide-react'

export default function FounderPage() {
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
              Our Story
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Built from{' '}
            <span className="gradient-text">Lived Experience</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            PANS was created by a mother who navigated the Child Protection system firsthand and
            wanted to make sure no other parent had to feel as lost and alone as she did.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Avatar placeholder */}
          <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
              style={{ background: 'var(--gradient-purple)' }}
            >
              <Heart size={40} className="text-primary-foreground" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-2">
                A Message from the Founder
              </h2>
              <p className="font-sans text-sm text-muted-foreground">
                Mother, criminology student, and parent advocate
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl border-l-4 pl-6 py-4 pr-4"
              style={{ borderColor: 'hsl(var(--primary))', background: 'hsl(var(--secondary))' }}
            >
              <p className="font-serif italic text-lg text-foreground leading-relaxed">
                "When Child Protection first became involved in my family, I had no idea what was
                happening or what my rights were. I felt completely alone, overwhelmed, and terrified.
                The information available online was written in legal language I couldn't understand.
                I didn't know where to turn."
              </p>
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed">
              After navigating the Child Protection system and Children's Court processes — and
              eventually coming out the other side — the founder of PANS made a decision. She decided
              to take the knowledge she had gained through hard experience and create a resource that
              could help other families in the same position.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed">
              Drawing on her lived experience and her studies in criminology, she began building PANS
              — the Parent Advocacy and Navigation Support service. The goal was simple: to provide
              the kind of plain-language, practical, supportive information that she had desperately
              needed but couldn't find.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed">
              PANS is particularly focused on supporting families in regional Victoria, where access
              to legal services and support organisations is often limited. Many parents in rural and
              regional areas face additional barriers — distance, limited internet access, fewer local
              services, and less community support. PANS aims to bridge that gap.
            </p>

            <div
              className="rounded-2xl border-l-4 pl-6 py-4 pr-4"
              style={{ borderColor: 'hsl(var(--primary))', background: 'hsl(var(--secondary))' }}
            >
              <p className="font-serif italic text-lg text-foreground leading-relaxed">
                "I want every parent who finds themselves in this situation to know that they are not
                alone, that they have rights, and that there are people who understand what they are
                going through. That is why PANS exists."
              </p>
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed">
              PANS is not a legal service and does not provide legal advice. It provides information,
              guidance, and advocacy support. The founder believes deeply that knowledge is power —
              and that every parent deserves to understand the system they are navigating.
            </p>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
              What Drives PANS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Heart,
                title: 'Empathy First',
                body: 'PANS was created by someone who has been through this. Every resource is designed with deep understanding of what parents are experiencing.',
              },
              {
                icon: BookOpen,
                title: 'Plain Language',
                body: 'Complex legal and bureaucratic processes are explained in everyday language. No jargon. No confusion. Just clear, helpful information.',
              },
              {
                icon: Users,
                title: 'Community Focus',
                body: 'PANS is particularly committed to supporting families in regional Victoria, where access to services is often more limited.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
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
            Ready to Get Support?
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our resources or reach out directly — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/start-here"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
            >
              Start Here
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm border-2 border-primary text-primary bg-background hover:bg-secondary transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
