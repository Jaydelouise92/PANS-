import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Heart, Mail, MessageCircle, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    // In production, this would send to a backend
    setSubmitted(true)
  }

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
            <MessageCircle size={14} className="text-primary" />
            <span className="text-sm font-sans font-semibold text-secondary-foreground uppercase tracking-wide">
              Contact
            </span>
          </div>
          <h1
            className="font-serif font-bold text-foreground leading-tight mb-5 animate-slide-up"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', animationDelay: '0.05s' }}
          >
            Get in{' '}
            <span className="gradient-text">Touch</span>
          </h1>
          <p
            className="font-sans text-muted-foreground leading-relaxed animate-slide-up max-w-2xl"
            style={{ fontSize: '1.1rem', animationDelay: '0.12s' }}
          >
            Have a question, need guidance, or want to share feedback? We're here to help.
            Use the form below to reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left sidebar info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-serif font-bold text-xl text-foreground mb-3">
                  How We Can Help
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  PANS can provide general guidance and advocacy support. We are not a legal service
                  and cannot provide legal advice, but we can help you understand the process and
                  point you toward the right resources.
                </p>
              </div>

              <div
                className="rounded-2xl border border-border p-5"
                style={{ background: 'hsl(var(--secondary))' }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Heart size={16} className="text-primary" fill="currentColor" strokeWidth={0} />
                  <h3 className="font-serif font-semibold text-foreground">Response Time</h3>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  We aim to respond to all enquiries within 2–3 business days. PANS is a volunteer-run
                  service and response times may vary.
                </p>
              </div>

              <div
                className="rounded-2xl border border-border p-5"
                style={{ background: 'hsl(var(--secondary))' }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <AlertCircle size={16} className="text-primary" />
                  <h3 className="font-serif font-semibold text-foreground">In Crisis?</h3>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">
                  If you are in immediate crisis, please contact one of these services:
                </p>
                <ul className="space-y-2">
                  {[
                    { name: 'Lifeline', phone: '13 11 14' },
                    { name: 'Victoria Legal Aid', phone: '1300 792 387' },
                    { name: 'Emergency', phone: '000' },
                  ].map(({ name, phone }) => (
                    <li key={name}>
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-xs font-sans font-semibold text-primary hover:underline"
                      >
                        <Phone size={11} />
                        {name}: {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="rounded-2xl border-2 p-8 text-center"
                  style={{ background: 'hsl(142 60% 97%)', borderColor: 'hsl(142 50% 70%)' }}
                >
                  <CheckCircle2
                    size={48}
                    className="mx-auto mb-4"
                    style={{ color: 'hsl(142 50% 40%)' }}
                  />
                  <h2 className="font-serif font-bold text-xl mb-2" style={{ color: 'hsl(142 50% 28%)' }}>
                    Message Received
                  </h2>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(142 40% 35%)' }}>
                    Thank you for reaching out. We will review your message and get back to you within
                    2–3 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-6 sm:p-8"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  noValidate
                >
                  <h2 className="font-serif font-bold text-xl text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {error && (
                    <div
                      className="rounded-xl border px-4 py-3 mb-5 flex gap-2 items-start"
                      style={{ background: 'hsl(0 70% 97%)', borderColor: 'hsl(0 60% 80%)' }}
                    >
                      <AlertCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(0 60% 45%)' }} />
                      <p className="font-sans text-sm" style={{ color: 'hsl(0 55% 35%)' }}>{error}</p>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block font-sans font-semibold text-sm text-foreground mb-1.5">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-150"
                        style={{ '--tw-ring-color': 'hsl(var(--primary) / 0.4)' } as React.CSSProperties}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-sans font-semibold text-sm text-foreground mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-150"
                        style={{ '--tw-ring-color': 'hsl(var(--primary) / 0.4)' } as React.CSSProperties}
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-sans font-semibold text-sm text-foreground mb-1.5">
                        What can we help with?
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 transition-all duration-150"
                        style={{ '--tw-ring-color': 'hsl(var(--primary) / 0.4)' } as React.CSSProperties}
                      >
                        <option value="">Select a topic…</option>
                        <option value="child-protection">Understanding Child Protection</option>
                        <option value="court">Children's Court question</option>
                        <option value="self-rep">Self-representation support</option>
                        <option value="rights">Parent rights query</option>
                        <option value="resources">Resource request</option>
                        <option value="feedback">Website feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-sans font-semibold text-sm text-foreground mb-1.5">
                        Your Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe how we can help you…"
                        rows={5}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-150 resize-none"
                        style={{ '--tw-ring-color': 'hsl(var(--primary) / 0.4)' } as React.CSSProperties}
                        required
                      />
                    </div>

                    {/* Privacy note */}
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      Your information is kept confidential. PANS does not share personal information
                      with any third parties. This form is for general enquiries only and not for urgent matters.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100"
                      style={{ background: 'var(--gradient-purple)', boxShadow: 'var(--shadow-purple)' }}
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Also find us */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail size={16} className="text-primary" />
            <h3 className="font-serif font-bold text-foreground">Other Ways to Connect</h3>
          </div>
          <p className="font-sans text-sm text-muted-foreground">
            PANS is a growing service. Additional contact options will be added as the organisation expands.
            Thank you for your patience.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
