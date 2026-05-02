import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Users, Info, ArrowRight } from 'lucide-react';

export default function Funding() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">Funding & Transparency</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">How PANS Operates</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS is committed to operating transparently. This page explains how the service is funded (or not), and what that means for the support we can provide.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-secondary border border-purple-200 rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Currently Independent and Unfunded</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                PANS is currently an independent community initiative operating without formal funding. There is no government grant, organisational backing, or fee-for-service arrangement supporting the work at this stage.
              </p>
              <p>
                Support is provided on a voluntary basis by the founder, who established PANS from lived experience and a commitment to helping families navigate a system that can be very difficult to understand without clear guidance.
              </p>
              <p>
                This means that the support PANS can provide is limited by time and personal capacity. Response times may vary. PANS is not able to take on unlimited cases or provide crisis intervention services.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-serif text-stone-900 mb-5 flex items-center gap-2"><Info size={20} className="text-brand-primary" /> What This Means for You</h3>
              <ul className="space-y-3">
                {[
                  'PANS is free to access — there is no charge for support.',
                  'Response times may vary depending on current capacity.',
                  'PANS cannot take on unlimited cases or provide 24/7 support.',
                  'Services are focused on information, navigation, and preparation — not crisis intervention.',
                  'PANS always refers parents to appropriate services when the need is beyond what we can provide.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-serif text-stone-900 mb-5 flex items-center gap-2"><Shield size={20} className="text-brand-primary" /> Our Commitment to Transparency</h3>
              <ul className="space-y-3">
                {[
                  'PANS will always be clear about what it can and cannot offer.',
                  'Any future funding or donations will be clearly disclosed and used to improve services.',
                  'PANS does not accept funding that would compromise its independence or the interests of parents.',
                  'The founder\'s qualifications and Working With Children Check status are maintained and valid.',
                  'PANS will never misrepresent itself as a legal or professional social services organisation.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 text-sm">
                    <Shield size={14} className="text-brand-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-stone-900 mb-8">How You Can Support PANS</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Users size={20} />, title: 'Spread the Word', desc: 'If PANS has been helpful to you, sharing it with other parents who might need support is one of the most valuable things you can do. Word of mouth is how this service reaches the people who need it most.' },
              { icon: <Heart size={20} />, title: 'Future Donations', desc: 'As PANS develops, opportunities to provide financial support may become available. Any donations will be used transparently to improve resources and expand the reach of the service to more families.' },
              { icon: <Shield size={20} />, title: 'Partnerships', desc: 'PANS is open to connecting with organisations and professionals who share the goal of improving access to support for parents navigating child protection systems — particularly in regional Victoria.' },
              { icon: <Info size={20} />, title: 'Feedback', desc: 'Sharing your experience — what was helpful, what could be better — directly improves the service for other families. You can send feedback through the contact form.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-secondary border border-purple-100 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shrink-0 shadow-sm">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-2 text-sm">{item.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2">
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
