import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F2F0F7] border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
              <div>
                <p className="font-bold text-brand-primary text-sm">PANS Victoria</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Parent Advocacy & Navigation</p>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Clear information, practical resources, and support for parents facing Child Protection involvement in Victoria.
            </p>
            <div className="flex items-center gap-2 mt-4 text-stone-400 text-sm">
              <MapPin size={14} /> Victoria, Australia
            </div>
          </div>

          <div>
            <h4 className="font-bold text-stone-700 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Start Here', path: '/start-here' },
                { label: 'First 48 Hours Guide', path: '/first-48-hours' },
                { label: 'Resources', path: '/resources' },
                { label: "Who We Support", path: '/who-we-support' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-stone-500 hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-700 mb-4 text-sm uppercase tracking-wider">Guides</h4>
            <ul className="space-y-2">
              {[
                { label: 'Parent Rights Guide', path: '/parent-rights' },
                { label: 'The System Explained', path: '/system-explained' },
                { label: "Understanding Children's Court", path: '/childrens-court' },
                { label: 'Mental Health Support', path: '/mental-health' },
                { label: 'About the Founder', path: '/founder' },
                { label: 'Funding & Transparency', path: '/funding' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-stone-500 hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 pt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex gap-3">
            <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Important:</strong> PANS provides general information and navigation support only. This is not legal advice and does not replace legal representation. If you need legal advice, please contact Victoria Legal Aid on 1300 792 387.
            </p>
          </div>
          <p className="text-center text-stone-400 text-xs">
            © {new Date().getFullYear()} PANS – Parent Advocacy and Navigation Support. All rights reserved. General information only, not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
