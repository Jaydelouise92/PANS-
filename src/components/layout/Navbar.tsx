import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavChild = { label: string; path: string };
type NavItem =
  | { label: string; path: string }
  | { label: string; children: NavChild[] };

const navLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  {
    label: 'Resources',
    children: [
      { label: 'All support resources', path: '/resources' },
      { label: 'Child Protection process', path: '/system-explained' },
      { label: "Children's Court guide", path: '/childrens-court' },
      { label: 'Parents\u2019 rights', path: '/parent-rights' },
      { label: 'Disability Rights', path: '/disability-rights' },
      { label: 'Supervised contact', path: '/supervised-contact' },
      { label: 'Self-represented parents', path: '/self-represented' },
      { label: 'Emotional impact of removal', path: '/emotional-impact' },
    ],
  },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropdownOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-brand-primary text-sm tracking-tight">PANS Victoria</span>
            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Parent Advocacy, Navigation & Support</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navLinks.map((link) =>
            'children' in link ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    link.children.some((c) => isActive(c.path))
                      ? 'text-brand-primary bg-purple-50 font-semibold'
                      : 'text-stone-600 hover:text-brand-primary hover:bg-purple-50'
                  }`}
                >
                  {link.label}{' '}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdownOpen && (
                  <div
                    role="menu"
                    aria-label={link.label}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-purple-100 py-2 w-64">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          role="menuitem"
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-purple-50 hover:text-brand-primary ${
                            isActive(child.path)
                              ? 'text-brand-primary font-semibold'
                              : 'text-stone-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-primary bg-purple-50 font-semibold'
                    : 'text-stone-600 hover:text-brand-primary hover:bg-purple-50'
                }`}
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

        <button
          type="button"
          className="lg:hidden text-stone-600 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-purple-100 px-4 py-4 flex flex-col gap-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            'children' in link ? (
              <div key={link.label}>
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-stone-400 mt-2">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                      isActive(child.path)
                        ? 'text-brand-primary bg-purple-50 font-semibold'
                        : 'text-stone-600 hover:bg-purple-50'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-primary bg-purple-50 font-semibold'
                    : 'text-stone-600 hover:bg-purple-50'
                }`}
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
