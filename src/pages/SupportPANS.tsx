import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Share2, Users, MessageCircle, ArrowRight, Shield, Mail } from 'lucide-react';

const ways = [
  {
    icon: <Share2 size={24} />,
    title: 'Spread the word',
    desc: 'If you know a parent who is struggling to navigate the system, share PANS with them. Word of mouth is how this service reaches the families who need it most.',
    action: null,
    colour: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Share your experience',
    desc: 'If PANS has been helpful to you, letting us know — even anonymously — helps improve the service and encourages others to reach out.',
    action: { label: 'Send feedback', path: '/contact' },
    colour: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: <Users size={24} />,
    title: 'Connect us with organisations',
    desc: 'If you work with an organisation that supports families in the child protection system, we would welcome the opportunity to connect and collaborate.',
    action: { label: 'Get in touch', path: '/contact' },
    colour: 'bg-violet-50 border-violet-200',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: <Heart size={24} />,
    title: 'Future donations',
    desc: 'PANS is currently unfunded and entirely volunteer-run. As the service develops, opportunities to support financially will be made available. Any support will be used transparently to expand access for more families.',
    action: null,
    colour: 'bg-rose-50 border-rose-200',
    iconBg: 'bg-rose-100 text-rose-600',
  },
];

export default function SupportPANS() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-brand-secondary py-20 px-6 overflow-hidden">
        <img src="/home-pathway.png" alt="" aria-hidden className="absolute right-0 bottom-0 h-64 opacity-20 pointer-events-none select-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Support PANS</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Help Us Reach More Families</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS is an independent, unfunded service created from lived experience. If this kind of support matters to you, here is how you can help it reach more parents who need it.
          </p>
        </div>
      </section>

      {/* About funding */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">About PANS</span>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Built on lived experience, not funding</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                PANS was created by a parent who has personally navigated the child protection system in Victoria. It is currently independent — no government grant, no organisation backing, no fee for service.
              </p>
              <p>
                Every hour of support provided by PANS is voluntary. That means it is genuinely limited by time and personal capacity.
              </p>
              <p>
                The goal is to eventually grow PANS into a sustainable, properly-resourced service that can support more families — particularly in regional and rural Victoria where access to support is even more limited.
              </p>
            </div>
            <Link to="/funding" className="inline-flex items-center gap-2 text-brand-primary font-bold mt-6 hover:gap-3 transition-all text-sm">
              Read our full transparency statement <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { label: 'PANS is currently', value: 'Independent & volunteer-run' },
              { label: 'Funding', value: 'Not yet formally funded' },
              { label: 'Service cost to parents', value: 'Free' },
              { label: 'Operated by', value: 'A parent with lived experience' },
              { label: 'Based in', value: 'Victoria, Australia' },
              { label: 'Working With Children Check', value: 'Valid — Victoria' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-purple-100">
                <span className="text-stone-500 text-sm">{item.label}</span>
                <span className="font-bold text-stone-800 text-sm text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">How to Help</span>
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Ways to support PANS</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-sm">There are several meaningful ways to support PANS — even without financial resources.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ways.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`border-2 ${w.colour} rounded-2xl p-8 flex flex-col gap-5`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${w.iconBg}`}>
                  {w.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 text-lg mb-2">{w.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
                {w.action && (
                  <Link to={w.action.path} className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:gap-3 transition-all">
                    {w.action.label} <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency pledge */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-primary text-white rounded-3xl p-10 text-center">
            <Shield size={32} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-serif mb-4">Our transparency commitment</h3>
            <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-6 text-sm">
              PANS will always be clear about what it can and cannot provide. Any future funding or donations will be publicly disclosed and used exclusively to improve and expand services for families. PANS will never accept funding that compromises its independence or the interests of parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors inline-flex items-center gap-2 text-sm">
                <Mail size={15} /> Get in touch
              </Link>
              <Link to="/founder" className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors text-sm">
                About the founder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
