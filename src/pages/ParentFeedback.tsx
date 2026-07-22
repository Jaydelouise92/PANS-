import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Star, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { getApiUrl } from '../lib/api';

type Status = 'idle' | 'sending' | 'success' | 'error';

const initialForm = {
  name: '',
  email: '',
  rating: '' as '' | '1' | '2' | '3' | '4' | '5',
  helpful: '' as '' | 'Yes' | 'Somewhat' | 'Not really',
  message: '',
  consentToShare: false,
  website: '',
  phone_verify: '',
};

export default function ParentFeedback() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = <K extends keyof typeof initialForm>(key: K, val: typeof initialForm[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.message.trim().length < 10) {
      setStatus('error');
      setErrorMsg('Please share at least a sentence so we can learn from your experience.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(getApiUrl('/api/parent-feedback'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to send your feedback. Please try again or email us directly.');
    }
  };

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
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Thank you</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Your feedback has been received. Hearing from parents helps PANS get
              better — every word matters.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors text-sm"
            >
              Share more feedback
            </button>
          </motion.div>
        </section>
      </div>
    );
  }

  const helpfulOptions: Array<typeof form.helpful> = ['Yes', 'Somewhat', 'Not really'];

  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Parent Feedback</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-5">
            Tell us how PANS is going
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            PANS is built for parents, by a parent. Your honest feedback — what
            helped, what was confusing, what you wished was here — shapes what
            we add next. You can share anonymously if you'd prefer.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-brand-secondary border border-purple-100 rounded-3xl p-8 shadow-sm space-y-6" noValidate>
            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set('website', e.target.value)} />
              <input type="text" name="phone_verify" tabIndex={-1} autoComplete="off" value={form.phone_verify} onChange={(e) => set('phone_verify', e.target.value)} />
            </div>

            {/* Rating */}
            <fieldset>
              <legend id="rating-label" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Overall, how would you rate PANS?
              </legend>
              <div role="radiogroup" aria-labelledby="rating-label" className="flex gap-2">
                {([1, 2, 3, 4, 5] as const).map((n) => {
                  const selected = form.rating === String(n);
                  return (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => set('rating', String(n) as typeof form.rating)}
                      className={`flex-1 py-3 rounded-xl border transition-all flex items-center justify-center gap-1 ${
                        selected
                          ? 'bg-brand-primary text-white border-brand-primary'
                          : 'bg-white border-purple-200 text-stone-500 hover:border-brand-primary/40'
                      }`}
                      aria-label={`${n} star${n > 1 ? 's' : ''}`}
                    >
                      <Star size={16} fill={selected ? 'currentColor' : 'none'} />
                      <span className="text-sm font-semibold">{n}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Helpful */}
            <fieldset>
              <legend id="helpful-label" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Was the information here helpful?
              </legend>
              <div role="radiogroup" aria-labelledby="helpful-label" className="grid grid-cols-3 gap-2">
                {helpfulOptions.map((opt) => {
                  const selected = form.helpful === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => set('helpful', opt)}
                      className={`py-2.5 rounded-xl border text-sm transition-all ${
                        selected
                          ? 'bg-brand-primary text-white border-brand-primary'
                          : 'bg-white border-purple-200 text-stone-600 hover:border-brand-primary/40'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Message */}
            <div>
              <label htmlFor="pf-message" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                What would you like us to know? <span className="text-brand-primary">*</span>
              </label>
              <textarea
                id="pf-message"
                rows={6}
                required
                placeholder="Tell us what helped, what was hard to find, what you wished was here, or anything else you'd like to share."
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all resize-none"
              />
              <p className="text-xs text-stone-400 text-right mt-1">{form.message.length} / 5000</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pf-name" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                  Your name <span className="text-stone-400 normal-case font-normal">(optional)</span>
                </label>
                <input
                  id="pf-name"
                  type="text"
                  maxLength={100}
                  placeholder="Or leave blank to stay anonymous"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label htmlFor="pf-email" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                  Email <span className="text-stone-400 normal-case font-normal">(optional)</span>
                </label>
                <input
                  id="pf-email"
                  type="email"
                  maxLength={200}
                  placeholder="If you'd like a reply"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <label htmlFor="pf-consent" className="flex gap-3 items-start bg-white border border-purple-100 rounded-xl p-4 cursor-pointer">
              <input
                id="pf-consent"
                type="checkbox"
                checked={form.consentToShare}
                onChange={(e) => set('consentToShare', e.target.checked)}
                className="mt-0.5 accent-brand-primary"
              />
              <span className="text-sm text-stone-600 leading-relaxed">
                You may share my feedback anonymously on the PANS website to help other parents.
                <span className="block text-xs text-stone-400 mt-1">No names, locations, or identifying details will ever be shared.</span>
              </span>
            </label>

            {status === 'error' && (
              <div role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{errorMsg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending…' : (<><Heart size={16} /> Send feedback</>)}
            </button>

            <p className="text-center text-xs text-stone-400 leading-relaxed">
              Your feedback goes straight to the PANS founder. It is read personally — not by a bot.
            </p>
          </form>

          <div className="mt-10 bg-white border border-purple-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-bold text-stone-800 text-sm mb-1">Need a reply or specific support?</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                If you'd like a direct response or help with your situation, the contact form is the better place — feedback here helps us improve the website itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
