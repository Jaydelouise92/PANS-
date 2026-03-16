import { Link } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import {
  Download,
  FileText,
  ClipboardList,
  Gavel,
  BookOpen,
  Heart,
  Scale,
  Clock,
  AlertCircle,
  ArrowRight,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const resourceCategories = [
  {
    category: 'Getting Started',
    color: { bg: 'hsl(268 60% 95%)', text: 'hsl(268 60% 35%)' },
    items: [
      {
        icon: ClipboardList,
        title: 'First 48 Hours Checklist',
        desc: 'A printable checklist of immediate steps to take when Child Protection makes contact.',
      },
      {
        icon: FileText,
        title: 'Contact and Notes Log',
        desc: 'A template for recording all contact with Child Protection.',
      },
      {
        icon: Scale,
        title: 'Rights Summary Card',
        desc: 'A wallet-sized summary of your key rights as a parent.',
      },
    ],
  },
  {
    category: 'Case Planning',
    color: { bg: 'hsl(142 50% 93%)', text: 'hsl(142 50% 28%)' },
    items: [
      {
        icon: BookOpen,
        title: 'Case Plan Meeting Preparation Guide',
        desc: 'How to prepare for and participate in case planning meetings.',
      },
      {
        icon: ClipboardList,
        title: 'Case Plan Review Checklist',
        desc: 'Questions to ask and things to check when reviewing your Case Plan.',
      },
      {
        icon: FileText,
        title: 'Document Organiser Template',
        desc: 'A template for organising your case documents.',
      },
    ],
  },
  {
    category: 'Court Preparation',
    color: { bg: 'hsl(38 95% 93%)', text: 'hsl(38 80% 30%)' },
    items: [
      {
        icon: Gavel,
        title: 'Court Preparation Guide',
        desc: 'Step-by-step guide for preparing for a Children\'s Court hearing.',
      },
      {
        icon: ClipboardList,
        title: 'Self-Representation Checklist',
        desc: 'What to prepare if you are representing yourself.',
      },
      {
        icon: BookOpen,
        title: 'Court Terminology Guide',
        desc: 'Plain language explanations of common legal terms.',
      },
    ],
  },
  {
    category: 'Support and Wellbeing',
    color: { bg: 'hsl(340 60% 94%)', text: 'hsl(340 55% 35%)' },
    items: [
      {
        icon: Heart,
        title: 'Support Services Directory',
        desc: 'Contact information for support services in regional Victoria.',
      },
      {
        icon: FileText,
        title: 'Mental Health Resources List',
        desc: 'Services and resources for parents experiencing stress or crisis.',
      },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
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
            <Download size={14} className="text-primary" />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              Resources &amp; Downloads
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Resources and{' '}
            <span className="gradient-text">Downloads</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            Practical guides, templates, and checklists to help you navigate the Child Protection
            system and Children's Court.
          </p>
        </div>
      </section>

      {/* ── Note Box ─────────────────────────────────────────────────────── */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border-2 p-5 sm:p-6 flex gap-4"
            style={{ background: 'hsl(268 60% 97%)', borderColor: 'hsl(268 60% 80%)' }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
            <div>
              <p className="font-sans font-semibold text-sm text-primary mb-1">
                Resources coming soon
              </p>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                These resources are currently being developed and will be available to download soon.
                If you need immediate support, please{' '}
                <Link to="/contact" className="text-primary font-semibold hover:underline">
                  contact us
                </Link>{' '}
                or call Victoria Legal Aid on{' '}
                <a href="tel:1300792387" className="text-primary font-semibold hover:underline">
                  1300 792 387
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resource Categories ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
          {resourceCategories.map(({ category, color, items }) => (
            <div key={category}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ background: color.bg, color: color.text }}
                >
                  {category}
                </span>
                <div className="flex-1 h-px" style={{ background: 'hsl(var(--border))' }} />
              </div>

              {/* Resource cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className="group bg-card rounded-2xl border border-border p-5 card-hover flex flex-col"
                    style={{ boxShadow: 'var(--shadow-card)', animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--gradient-purple)' }}
                      >
                        <Icon size={19} className="text-primary-foreground" />
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium flex items-center gap-1"
                        style={{ background: 'hsl(268 60% 95%)', color: 'hsl(268 60% 35%)' }}
                      >
                        <Clock size={9} />
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2 text-sm sm:text-base leading-snug flex-1">
                      {title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                      {desc}
                    </p>
                    <button
                      disabled
                      className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-muted-foreground border border-border rounded-lg px-3 py-2 cursor-not-allowed opacity-60 w-fit"
                      aria-label={`Download ${title} — coming soon`}
                    >
                      <Download size={12} />
                      Download — Coming Soon
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA row ──────────────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Scale, label: 'Parent Rights', href: '/rights', desc: 'Know your rights' },
              { icon: Gavel, label: 'Court Guide', href: '/court-guide', desc: 'Understand court processes' },
              { icon: BookOpen, label: 'Child Protection', href: '/child-protection', desc: 'Understand the system' },
            ].map(({ icon: Icon, label, href, desc }) => (
              <Link
                key={href}
                to={href}
                className="group bg-card rounded-2xl border border-border p-5 card-hover text-center"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-1">{label}</h3>
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
  )
}
