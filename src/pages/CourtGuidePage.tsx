import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { PageLayout } from '@/components/layout/PageLayout'
import {
  Scale,
  CalendarClock,
  ListChecks,
  BookOpen,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const courtOrders = [
  {
    number: 1,
    title: 'Interim Accommodation Order',
    description:
      'A short-term order made when urgent action is needed. It may allow Child Protection to place a child in out-of-home care while the case is heard.',
    badge: 'Short-term',
    badgeColor: 'amber',
  },
  {
    number: 2,
    title: 'Supervision Order',
    description:
      'A court order that places a child under the supervision of Child Protection while the child remains in the family home.',
    badge: 'Family home',
    badgeColor: 'green',
  },
  {
    number: 3,
    title: 'Care by Secretary Order',
    description:
      'An order that places a child in the care of the Secretary of the Department of Families, Fairness and Housing. The child is placed in out-of-home care.',
    badge: 'Out-of-home care',
    badgeColor: 'purple',
  },
  {
    number: 4,
    title: 'Long Term Care Order',
    description:
      'A longer-term order for children who cannot return to their family in the foreseeable future.',
    badge: 'Long-term',
    badgeColor: 'red',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'First Mention',
    description:
      'The first court date. The magistrate will be told about the case. You should have a lawyer if possible. Interim orders may be made at this hearing.',
  },
  {
    number: 2,
    title: 'Directions Hearing',
    description:
      'A hearing to plan how the case will proceed. Dates are set for further hearings and filing of documents.',
  },
  {
    number: 3,
    title: 'Contested Hearing',
    description:
      'If the case is not resolved by agreement, a contested hearing is held. Both parties present their evidence and the magistrate makes a decision.',
  },
  {
    number: 4,
    title: 'Final Order',
    description:
      "The magistrate makes a final decision about the child\u2019s care arrangements.",
  },
]

const whatToBring = [
  'Any documents you have received from Child Protection',
  'Notes you have taken about your interactions with Child Protection',
  'Your lawyer\u2019s contact details (if you have one)',
  'A support person if allowed',
  'A notepad and pen',
  'Any evidence you wish to present (photos, letters, records)',
]

const courtEtiquette = [
  'Address the magistrate as \u201cYour Honour\u201d',
  'Arrive on time \u2014 courts can run early or late',
  'Turn your phone off or to silent',
  'Speak clearly and calmly',
  'Do not interrupt others while they are speaking',
  "If you don\u2019t understand something, ask for clarification",
]

const badgeStyles: Record<string, { bg: string; text: string }> = {
  amber: { bg: 'hsl(38 95% 94%)', text: 'hsl(38 80% 30%)' },
  green: { bg: 'hsl(142 60% 93%)', text: 'hsl(142 50% 28%)' },
  purple: { bg: 'hsl(var(--secondary))', text: 'hsl(var(--secondary-foreground))' },
  red: { bg: 'hsl(0 70% 94%)', text: 'hsl(0 60% 32%)' },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CourtGuidePage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="hero-gradient mb-12 rounded-2xl px-6 py-10 sm:px-10 sm:py-12">
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
            }}
          >
            Court Guide
          </span>
          <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Children&rsquo;s Court:{' '}
            <span className="gradient-text">What to Expect</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            If Child Protection has made an application to the Children&rsquo;s Court, this guide
            will help you understand what happens and how to prepare.
          </p>
        </section>

        {/* ── What is the Children's Court ───────────────────────────────── */}
        <section className="mb-14">
          <SectionHeading label="Overview" title="What is the Children&rsquo;s Court?" />
          <div
            className="mt-6 rounded-xl border border-border p-5 sm:p-7"
            style={{ background: 'hsl(var(--muted))' }}
          >
            <div className="flex gap-4">
              <Scale
                className="mt-1 h-6 w-6 flex-shrink-0"
                style={{ color: 'hsl(var(--primary))' }}
              />
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                The Children&rsquo;s Court in Victoria is a specialist court that deals with matters
                involving children, including Child Protection cases. It is separate from the
                Magistrates&rsquo; Court and operates under different rules designed to protect
                children&rsquo;s privacy and wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* ── Types of Court Orders ──────────────────────────────────────── */}
        <section className="mb-14">
          <SectionHeading
            label="Court Orders"
            title="Types of Orders the Court Can Make"
            description="The Children's Court can make a range of orders depending on the circumstances of the case."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {courtOrders.map((order, idx) => (
              <div
                key={order.number}
                className="card-hover rounded-xl border border-border bg-card p-5 sm:p-6"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary-foreground"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    {order.number}
                  </div>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      background: badgeStyles[order.badgeColor].bg,
                      color: badgeStyles[order.badgeColor].text,
                    }}
                  >
                    {order.badge}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-base font-semibold text-foreground sm:text-lg">
                  {order.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {order.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Court Process Timeline ─────────────────────────────────────── */}
        <section className="mb-14">
          <SectionHeading
            label="Process"
            title="Steps in the Court Process"
            description="Cases typically move through these hearings, though timelines can vary."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="card-hover group relative flex flex-col rounded-xl border border-border bg-card p-5"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step number */}
                <div
                  className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-sm self-start"
                  style={{ background: 'var(--gradient-purple)' }}
                >
                  <span className="font-serif text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <div className="mb-1.5 flex items-center gap-2">
                  <CalendarClock
                    className="h-3.5 w-3.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'hsl(var(--primary))' }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Preparation Accordion ──────────────────────────────────────── */}
        <section className="mb-14">
          <SectionHeading
            label="Preparation"
            title="How to Prepare for Court"
            description="Being well-prepared can help you feel less overwhelmed on the day."
          />

          <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
            <Accordion className="divide-y divide-border">

              <AccordionItem value="what-to-bring">
                <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-foreground hover:no-underline hover:text-primary sm:text-base">
                  <span className="flex items-center gap-2.5">
                    <ListChecks
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: 'hsl(var(--primary))' }}
                    />
                    What to Bring to Court
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-1">
                  <ul className="space-y-3">
                    {whatToBring.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: 'hsl(var(--primary))' }}
                        />
                        <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="court-etiquette">
                <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-foreground hover:no-underline hover:text-primary sm:text-base">
                  <span className="flex items-center gap-2.5">
                    <BookOpen
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: 'hsl(var(--primary))' }}
                    />
                    Court Etiquette
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-1">
                  <ul className="space-y-3">
                    {courtEtiquette.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertCircle
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: 'hsl(var(--primary))' }}
                        />
                        <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </section>

        {/* ── Legal Help Box ─────────────────────────────────────────────── */}
        <section>
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              borderColor: 'hsl(var(--primary) / 0.35)',
              background: 'hsl(var(--secondary))',
            }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--gradient-purple)' }}
              >
                <PhoneCall className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground sm:text-xl">
                  Getting Legal Help
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  It is strongly recommended that you seek legal advice before attending court.{' '}
                  <strong className="font-semibold text-foreground">Victoria Legal Aid</strong>{' '}
                  provides free legal assistance to people who qualify. If you cannot get a
                  lawyer, see our Self-Representation guide.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:1300792387"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    style={{ background: 'var(--gradient-purple)' }}
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    1300 792 387
                  </a>
                  <Link
                    to="/self-rep"
                    className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
                    style={{
                      borderColor: 'hsl(var(--primary) / 0.4)',
                      color: 'hsl(var(--primary))',
                    }}
                  >
                    Self-Representation Guide &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string
  title: React.ReactNode
  description?: string
}) {
  return (
    <div>
      <span
        className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'hsl(var(--primary))' }}
      >
        {label}
      </span>
      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
