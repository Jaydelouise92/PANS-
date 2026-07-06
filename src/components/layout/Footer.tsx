import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, AlertTriangle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F2F0F7] border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
              <div>
                <p className="font-bold text-brand-primary text-sm">PANS Victoria</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Parent Advocacy, Navigation & Support</p>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Clear information, practical resources, and support for parents facing Child Protection involvement in Victoria.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <MapPin size={13} /> Victoria, Australia
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-stone-700 mb-4 text-xs uppercase tracking-wider">Get Support</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Start Here', path: '/start-here' },
                { label: 'Advocacy & Support', path: '/advocacy-support' },
                { label: 'First 48 Hours Guide', path: '/first-48-hours' },
                { label: 'Who We Support', path: '/who-we-support' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Contact PANS', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-xs text-stone-500 hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-bold text-stone-700 mb-4 text-xs uppercase tracking-wider">Guides & Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'All Resources', path: '/resources' },
                { label: 'Parent Rights Guide', path: '/parent-rights' },
                { label: 'The System Explained', path: '/system-explained' },
                { label: "Children's Court Guide", path: '/childrens-court' },
                { label: 'Mental Health Support', path: '/mental-health' },
                { label: 'Support PANS', path: '/support-pans' },
                { label: 'Share Your Feedback', path: '/parent-feedback' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-xs text-stone-500 hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency contacts */}
          <div>
            <h4 className="font-bold text-stone-700 mb-4 text-xs uppercase tracking-wider flex items-center gap-1.5"><Phone size={12} /> Key Numbers</h4>
            <ul className="space-y-3">
              {[
                { name: 'Lifeline (crisis)', number: '13 11 14', note: '24/7' },
                { name: 'Victoria Legal Aid', number: '1300 792 387', note: 'Free legal advice' },
                { name: 'Child Protection', number: '13 12 78', note: 'DFFH' },
                { name: 'Parentline', number: '13 22 89', note: 'Mon–Fri' },
                { name: 'Emergency', number: '000', note: 'Immediate danger' },
              ].map((c, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-xs text-stone-500">{c.name} <span className="text-stone-400">({c.note})</span></span>
                  <a href={`tel:${c.number.replace(/\s/g, '')}`} className="font-bold text-brand-primary text-sm hover:underline w-fit">
                    {c.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer — broken into clear sentences */}
        <div className="border-t border-purple-200 pt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="text-xs text-amber-800 font-semibold">
                  PANS provides general information and support only.
                </p>
                <p className="text-xs text-amber-800">
                  PANS does not provide legal advice, legal representation, or emergency services.
                </p>
                <p className="text-xs text-amber-700">
                  If you are in immediate danger or crisis, contact emergency services on <a href="tel:000" className="font-bold underline decoration-amber-300 hover:text-amber-900 transition-colors">000</a> or Lifeline on <a href="tel:131114" className="font-bold underline decoration-amber-300 hover:text-amber-900 transition-colors">13 11 14</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-stone-400 text-xs leading-relaxed text-center md:text-left">
              <p>
                © {new Date().getFullYear()} PANS Victoria, Parent Advocacy, Navigation &amp; Support. All rights reserved.
              </p>
              <p className="mt-1 text-stone-400/80">
                Original content, guides and illustrations may not be copied, republished, or used to train AI models without written permission. <Link to="/copyright" className="underline hover:text-brand-primary">Read full copyright notice</Link>.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link to="/about" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">About</Link>
              <Link to="/funding" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">Transparency</Link>
              <Link to="/parent-feedback" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">Feedback</Link>
              <Link to="/privacy" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">Privacy &amp; Cookies</Link>
              <Link to="/copyright" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">Copyright</Link>
              <Link to="/contact" className="text-xs text-stone-400 hover:text-brand-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
