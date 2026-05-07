import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Clock, AlertTriangle, CheckCircle2, Mail, Shield, Phone } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const supportOptions = [
  { value: 'general', label: 'General guidance & navigation' },
  { value: 'investigation', label: 'Child Protection investigation' },
  { value: 'case-plan', label: 'Case plan or safety plan' },
  { value: 'court', label: 'Court preparation' },
  { value: 'meetings', label: 'Preparing for a meeting' },
  { value: 'rights', label: 'Understanding my rights' },
  { value: 'services', label: 'Navigating required services' },
  { value: 'documents', label: 'Understanding documents or orders' },
  { value: 'reunification', label: 'Reunification support' },
  { value: 'other', label: 'Something else' },
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  supportType: 'general',
  message: '',
  // honeypot fields — never shown to real users
  website: '',
  phone_verify: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));
  const touch = (key: string) => setTouched((t) => ({ ...t, [key]: true }));

  // Client-side validation
  const errors: Record<string, string> = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!form.email.trim()) errors.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.message.trim() || form.message.length < 10) errors.message = 'Please enter a message (at least 10 characters).';

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    if (!isValid) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          subject: form.subject,
          supportType: form.supportType,
          message: form.message,
          // honeypot — will be empty for real users
          website: form.website,
          phone_verify: form.phone_verify,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm(initialForm);
        setTouched({});
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to send your message. Please try again or email us directly.');
    }
  };

  const Field = ({ id, label, required, error }: { id: string; label: string; required?: boolean; error?: string }) => (
    <label className="block space-y-1.5">
      <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
        {label} {required && <span className="text-brand-primary">*</span>}
      </span>
      {error && touched[id] && (
        <span className="text-red-500 text-xs ml-2">{error}</span>
      )}
    </label>
  );

  const inputClass = (id: string) =>
    `w-full px-4 py-3 rounded-xl border bg-white outline-none text-sm transition-all
    ${touched[id] && errors[id]
      ? 'border-red-300 ring-2 ring-red-100 focus:border-red-400'
      : 'border-purple-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'}`;

  if (status === 'success') {
    return (
      <div className="pt-16">
        <section className="min-h-[70vh] flex items-center justify-center px-6 bg-brand-secondary">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 text-center max-w-lg shadow-xl border border-purple-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Message Received</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Thank you for contacting PANS. Your message has been received. We aim to respond within 24–48 hours — please check your inbox and spam folder.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors text-sm"
            >
              Send Another Message
            </button>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Contact</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Get in Touch with PANS</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            You do not need to have the right words — just reach out when you are ready. All messages are treated with care and confidentiality.
          </p>
        </div>
      </section>

      {/* Disclaimer banner */}
      <section className="py-5 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Please note:</strong> PANS does not provide legal advice or emergency assistance. If you are in crisis, call <strong>Lifeline on 13 11 14</strong>. For legal advice, contact <strong>Victoria Legal Aid on 1300 792 387</strong>.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16">

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Before You Reach Out</h2>
              <div className="space-y-5">
                {[
                  { icon: <MessageCircle size={18} />, title: 'How support is delivered', desc: 'Via email, phone, or online meetings. In-person support may be available in parts of Victoria.' },
                  { icon: <Clock size={18} />, title: 'Response times', desc: 'PANS aims to respond within 24–48 hours. Times may vary depending on current capacity.' },
                  { icon: <Shield size={18} />, title: 'Confidentiality', desc: 'Your message is treated with care and confidentiality. PANS does not share your information.' },
                  { icon: <Mail size={18} />, title: 'Email directly', desc: 'ourvoicemattersaus@gmail.com' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-stone-800 mb-0.5 text-sm">{item.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-secondary border border-purple-100 rounded-2xl p-6">
              <h3 className="font-bold text-stone-800 mb-4 text-sm">PANS can help with:</h3>
              <ul className="space-y-2">
                {[
                  'Understanding Child Protection processes',
                  'Knowing your rights as a parent',
                  'Preparing for meetings or court',
                  'Understanding letters and orders',
                  'Navigating required services',
                  'Finding legal aid and support services',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-stone-600 text-xs">
                    <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-purple-100 rounded-2xl p-6">
              <h3 className="font-bold text-stone-800 mb-3 text-sm flex items-center gap-2"><Phone size={14} className="text-brand-primary" /> Emergency contacts</h3>
              <div className="space-y-2 text-xs text-stone-600">
                <p><strong>Lifeline:</strong> 13 11 14 (24/7 crisis support)</p>
                <p><strong>Victoria Legal Aid:</strong> 1300 792 387</p>
                <p><strong>Child Protection (DFFH):</strong> 13 12 78</p>
                <p><strong>Emergency:</strong> 000</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-brand-secondary border border-purple-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-stone-900 mb-7">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot fields — hidden from real users, trap bots */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', tabIndex: -1 } as React.CSSProperties}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set('website', e.target.value)} />
                  <input type="text" name="phone_verify" tabIndex={-1} autoComplete="off" value={form.phone_verify} onChange={(e) => set('phone_verify', e.target.value)} />
                </div>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Field id="firstName" label="First Name" required error={errors.firstName} />
                    <input
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={(e) => set('firstName', e.target.value)}
                      onBlur={() => touch('firstName')}
                      className={inputClass('firstName')}
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Field id="lastName" label="Last Name" required error={errors.lastName} />
                    <input
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => set('lastName', e.target.value)}
                      onBlur={() => touch('lastName')}
                      className={inputClass('lastName')}
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Field id="email" label="Email Address" required error={errors.email} />
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    onBlur={() => touch('email')}
                    className={inputClass('email')}
                    autoComplete="email"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Preparing for a court hearing"
                    value={form.subject}
                    onChange={(e) => set('subject', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                  />
                </div>

                {/* Support type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">What do you need help with?</label>
                  <select
                    value={form.supportType}
                    onChange={(e) => set('supportType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                  >
                    {supportOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Field id="message" label="Your Message" required error={errors.message} />
                  <textarea
                    rows={6}
                    placeholder="Tell us a bit about your situation and what you need help with. You don't need to share everything — just what feels right."
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    onBlur={() => touch('message')}
                    className={`${inputClass('message')} resize-none`}
                  />
                  <p className="text-xs text-stone-400 text-right">{form.message.length} / 5000</p>
                </div>

                {/* Consent notice */}
                <div className="bg-white border border-purple-100 rounded-xl p-4">
                  <p className="text-xs text-stone-500 leading-relaxed">
                    By submitting this form, you understand that PANS provides general information and navigation support only — not legal advice. Your message will be treated with care and confidentiality.
                  </p>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                    <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{errorMsg || 'Something went wrong. Please try again or email us directly at ourvoicemattersaus@gmail.com'}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Form disclaimer */}
                <p className="text-center text-xs text-stone-400 leading-relaxed">
                  PANS provides general information and support only. PANS does not provide legal advice or emergency assistance.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
