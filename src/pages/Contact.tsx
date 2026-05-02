import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Clock, AlertTriangle, CheckCircle2, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', supportType: 'general', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          supportType: formData.supportType,
          message: formData.message,
        }),
      });
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) setFormData({ firstName: '', lastName: '', email: '', supportType: 'general', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Contact</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Get in Touch with PANS</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            If you are navigating the child protection system and would like guidance or navigation support, you are welcome to reach out. You do not need to have the right words — just start the conversation.
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Please note:</strong> PANS does not provide legal advice or emergency support. If you are in crisis, call <strong>Lifeline on 13 11 14</strong>. For legal advice, contact <strong>Victoria Legal Aid on 1300 792 387</strong>.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif text-stone-900 mb-8">Before You Contact Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1 text-sm">How Support is Delivered</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">Support is provided via email, phone, or online meetings. In-person support may be available in some parts of Victoria.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1 text-sm">Response Times</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">PANS aims to respond within 24–48 hours. Response times may vary depending on current capacity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1 text-sm">Email</h4>
                  <p className="text-stone-500 text-sm">ourvoicemattersaus@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-brand-secondary border border-purple-100 rounded-2xl p-6">
              <h3 className="font-bold text-stone-800 mb-4 text-sm">PANS can help with:</h3>
              <ul className="space-y-2">
                {[
                  'Understanding Child Protection processes',
                  'Knowing your rights as a parent',
                  'Preparing for meetings or court',
                  'Understanding letters, orders, and documents',
                  'Navigating required services',
                  'Finding the right legal or support services',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-stone-600 text-xs">
                    <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-stone-900 mb-3">Message Received</h3>
                <p className="text-stone-600 leading-relaxed">Thank you for reaching out to PANS. We will respond to your message within 24–48 hours. Please check your inbox (and spam folder) for a reply.</p>
              </motion.div>
            ) : (
              <div className="bg-brand-secondary border border-purple-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">First Name *</label>
                      <input required type="text" placeholder="Jane" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Last Name *</label>
                      <input required type="text" placeholder="Smith" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Email Address *</label>
                    <input required type="email" placeholder="jane@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">What do you need help with? *</label>
                    <select required value={formData.supportType} onChange={(e) => setFormData({ ...formData, supportType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all">
                      <option value="general">General guidance & navigation</option>
                      <option value="court">Court preparation</option>
                      <option value="investigation">Child Protection investigation</option>
                      <option value="case-plan">Case plan or safety plan</option>
                      <option value="meetings">Meeting preparation</option>
                      <option value="rights">Understanding my rights</option>
                      <option value="services">Navigating required services</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Your Message *</label>
                    <textarea required rows={5} placeholder="Tell us a bit about your situation and what you need help with. You don't need to share everything — just what feels relevant." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all resize-none" />
                  </div>
                  <div className="bg-white border border-purple-100 rounded-xl p-4">
                    <p className="text-xs text-stone-500 leading-relaxed">By submitting this form, you understand that PANS provides general information and navigation support only — not legal advice. Your message will be treated with care and confidentiality.</p>
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or email us directly at ourvoicemattersaus@gmail.com</p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
