import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Start Here', path: '/start-here' },
  {
    label: 'About',
    children: [
      { label: 'About PANS', path: '/about' },
      { label: 'Who We Support', path: '/who-we-support' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Meet the Founder', path: '/founder' },
      { label: 'Funding & Transparency', path: '/funding' },
    ],
  },
  { label: 'Advocacy & Support', path: '/advocacy-support' },
  {
    label: 'Guides & Resources',
    children: [
      { label: 'First 48 Hours', path: '/first-48-hours' },
      { label: 'All Resources', path: '/resources' },
      { label: 'Parent Rights Guide', path: '/parent-rights' },
      { label: 'The System Explained', path: '/system-explained' },
      { label: "Children's Court", path: '/childrens-court' },
      { label: 'Mental Health Support', path: '/mental-health' },
    ],
  },
  { label: 'Support PANS', path: '/support-pans' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-brand-primary text-sm tracking-tight">PANS Victoria</span>
            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Parent Advocacy & Navigation</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-600 hover:text-brand-primary rounded-lg hover:bg-purple-50 transition-colors"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.label} <ChevronDown size={14} />
                </button>
                <div
                  className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-purple-100 py-2 w-56">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-purple-50 hover:text-brand-primary ${isActive(child.path) ? 'text-brand-primary font-semibold' : 'text-stone-600'}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path!}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(link.path!) ? 'text-brand-primary bg-purple-50 font-semibold' : 'text-stone-600 hover:text-brand-primary hover:bg-purple-50'}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-2 bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Get Support
          </Link>
        </nav>

        <button className="lg:hidden text-stone-600 p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-purple-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-stone-400 mt-2">{link.label}</div>
                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${isActive(child.path) ? 'text-brand-primary bg-purple-50 font-semibold' : 'text-stone-600 hover:bg-purple-50'}`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path!}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActive(link.path!) ? 'text-brand-primary bg-purple-50 font-semibold' : 'text-stone-600 hover:bg-purple-50'}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
