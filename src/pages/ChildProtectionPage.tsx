import { ReactNode } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { PageLayout } from '@/components/layout/PageLayout'
import {
  FileText,
  Search,
  ShieldCheck,
  ClipboardList,
  BookOpen,
  Gavel,
  RefreshCw,
  HeartHandshake,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const stages = [
  {
    number: 1,
    icon: FileText,
    title: 'Reports and Notifications',
    subtitle: undefined,
    body: "Child Protection receives a report (called a notification) from someone concerned about a child's safety or wellbeing. Reports can come from teachers, doctors, neighbours, or anyone else. Reports are confidential and you may not know who made a report.",
  },
  {
    number: 2,
    icon: Search,
    title: 'Initial Investigation',
    subtitle: 'also called a Child Protection Investigation',
    body: "After a report is received, a Child Protection practitioner will investigate the concerns. They may visit your home, speak with your children, contact your family members, and speak with professionals involved in your child\u2019s life such as teachers or doctors.",
  },
  {
    number: 3,
    icon: ShieldCheck,
    title: 'Risk Assessment',
    subtitle: undefined,
    body: "The practitioner will assess the level of risk to your child. They will consider the nature of the concerns, your child's age and vulnerability, your capacity as a parent, and any protective factors in your family.",
  },
  {
    number: 4,
    icon: ClipboardList,
    title: 'Safety Planning',
    subtitle: undefined,
    body: 'If Child Protection believes there is an immediate risk to your child, they may work with you to create a Safety Plan. A Safety Plan outlines steps to keep your child safe while further assessment occurs. You may be asked to sign a Safety Plan.',
  },
  {
    number: 5,
    icon: BookOpen,
    title: 'Case Planning',
    subtitle: undefined,
    body: 'If Child Protection decides to remain involved, they will develop a Case Plan with you. A Case Plan outlines the concerns identified, the goals for your family, and the supports and services that will be provided. You have the right to participate in developing your Case Plan.',
  },
  {
    number: 6,
    icon: Gavel,
    title: 'Court Involvement',
    subtitle: undefined,
    body: "If Child Protection cannot resolve the concerns through voluntary cooperation, or if a child needs to be removed from their home, they may make an application to the Children\u2019s Court. This is called a protection application.",
  },
  {
    number: 7,
    icon: RefreshCw,
    title: 'Ongoing Support and Monitoring',
    subtitle: undefined,
    body: 'While a case is open, a practitioner will be regularly involved with your family. They will review progress, update the Case Plan, and assess whether concerns are being addressed.',
  },
  {
    number: 8,
    icon: HeartHandshake,
    title: 'Reunification or Case Closure',
    subtitle: undefined,
    body: 'The goal of Child Protection is to keep families together where it is safe to do so. When the concerns have been addressed, Child Protection will work toward closing the case or, if a child has been placed in care, toward reunification with the family.',
  },
]

const keyTerms = [
  {
    term: 'Notification',
    definition: 'A report made to Child Protection about concerns for a child.',
  },
  {
    term: 'Investigation',
    definition: 'The process of gathering information to assess the concerns.',
  },
  {
    term: 'Risk Assessment',
    definition: "An evaluation of the level of risk to a child's safety and wellbeing.",
  },
  {
    term: 'Case Plan',
    definition: 'A document outlining the concerns, goals, and supports for a family.',
  },
  {
    term: 'Protection Application',
    definition: "An application made to the Children\u2019s Court for a court order.",
  },
  {
    term: 'Protective Order',
    definition: "A legal order made by the Children\u2019s Court about a child\u2019s care.",
  },
  {
    term: 'Out-of-Home Care',
    definition: 'When a child is placed in the care of another person or family.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChildProtectionPage() {
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
            Child Protection
          </span>
          <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Understanding the{' '}
            <span className="gradient-text">Child Protection Process</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The Child Protection system can feel confusing and overwhelming. This guide explains
            each stage in plain language so you know what to expect.
          </p>
        </section>

        {/* ── Rights banner ──────────────────────────────────────────────── */}
        <ImportantBox>
          <strong className="block mb-1 font-semibold text-foreground">Your Rights Matter</strong>
          You have the right to participate in this process. You have the right to be heard, to
          access information about your case, and to seek legal advice at any stage.
        </ImportantBox>

        {/* ── Process flow ───────────────────────────────────────────────── */}
        <section className="mt-14">
          <SectionHeading
            label="The 8 Stages"
            title="How the Process Works"
            description="Child Protection cases typically move through these stages, though every family's situation is different."
          />

          <div className="relative mt-10">
            {/* Vertical connector line */}
            <div
              className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px sm:block"
              style={{
                background:
                  'linear-gradient(to bottom, hsl(var(--primary) / 0.35), hsl(var(--primary) / 0.05))',
              }}
            />

            <div className="flex flex-col gap-5">
              {stages.map((stage, idx) => {
                const Icon = stage.icon
                return (
                  <div
                    key={stage.number}
                    className="card-hover group relative flex gap-4 rounded-xl border border-border bg-card p-5 sm:gap-6 sm:p-6"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {/* Number badge */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-sm"
                        style={{ background: 'var(--gradient-purple)' }}
                      >
                        <span className="font-serif text-sm font-bold text-primary-foreground">
                          {stage.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="mb-2 flex items-center gap-2.5">
                        <Icon
                          className="h-4 w-4 flex-shrink-0 transition-colors group-hover:text-primary"
                          style={{ color: 'hsl(var(--primary))' }}
                        />
                        <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                          {stage.title}
                        </h3>
                      </div>
                      {stage.subtitle && (
                        <p className="mb-2 text-xs italic text-muted-foreground">
                          {stage.subtitle}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {stage.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Key Terms Accordion ────────────────────────────────────────── */}
        <section className="mt-16">
          <SectionHeading
            label="Glossary"
            title="Key Terms Explained"
            description="Understanding the language used in Child Protection can help you feel more in control."
          />

          <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
            <Accordion className="divide-y divide-border">
              {keyTerms.map((item) => (
                <AccordionItem key={item.term} value={item.term}>
                  <AccordionTrigger className="px-6 py-4 text-sm font-semibold text-foreground hover:no-underline hover:text-primary sm:text-base">
                    {item.term}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-1">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.definition}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Bottom callout ─────────────────────────────────────────────── */}
        <section className="mt-14">
          <ImportantBox>
            <strong className="block mb-1 font-semibold text-foreground">
              Seek Support Early
            </strong>
            If you are involved with Child Protection, you do not have to manage alone. Contact a
            family lawyer, a support service, or a legal aid organisation as early as possible to
            understand your rights and options.
          </ImportantBox>
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
  title: string
  description?: string
}) {
  return (
    <div className="mb-2">
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

function ImportantBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-xl border px-5 py-4 sm:gap-4 sm:px-6 sm:py-5"
      style={{
        borderColor: 'hsl(var(--primary) / 0.35)',
        background: 'hsl(var(--secondary))',
      }}
    >
      <div
        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary-foreground"
        style={{ background: 'hsl(var(--primary))' }}
      >
        !
      </div>
      <p className="text-sm leading-relaxed text-foreground sm:text-base">{children}</p>
    </div>
  )
}
