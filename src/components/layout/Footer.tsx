import { Link } from 'react-router-dom'
import { Heart, AlertTriangle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Start Here', path: '/start-here' },
  { label: 'Child Protection', path: '/child-protection' },
  { label: 'Court Guide', path: '/court-guide' },
]

const supportLinks = [
  { label: 'Self-Representation', path: '/self-rep' },
  { label: 'Parent Rights', path: '/rights' },
  { label: 'Resources', path: '/resources' },
  { label: 'Mental Health', path: '/mental-health' },
]

const organisationLinks = [
  { label: 'About', path: '/about' },
  { label: 'Founder', path: '/founder' },
  { label: 'Contact', path: '/contact' },
]

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: { label: string; path: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-serif font-semibold text-secondary-foreground text-sm tracking-wide uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="text-sm text-secondary-foreground/75 hover:text-primary transition-colors duration-150 font-sans"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 group-hover:bg-primary/20 transition-colors duration-200">
                <Heart
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>
              <span className="font-serif font-bold text-lg text-foreground tracking-tight">
                PANS
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed font-sans max-w-xs">
              Parent Advocacy &amp; Navigation Support — empowering families to
              navigate the system with knowledge, dignity, and care.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinkGroup title="Quick Links" links={quickLinks} />

          {/* Support */}
          <FooterLinkGroup title="Support" links={supportLinks} />

          {/* Organisation */}
          <FooterLinkGroup title="Organisation" links={organisationLinks} />
        </div>

        {/* Disclaimer box */}
        <div className="pb-8">
          <div className="flex gap-3 p-4 rounded-xl bg-accent/50 border border-accent/70">
            <AlertTriangle
              className="w-4 h-4 text-primary/70 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-xs text-accent-foreground/80 leading-relaxed font-sans">
              <span className="font-semibold text-accent-foreground">
                Important Disclaimer:&nbsp;
              </span>
              PANS is not a legal service and does not provide legal advice. The
              information on this website is for general guidance only. Always
              seek professional legal advice for your specific situation.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-sans text-center sm:text-left">
            © 2024 PANS – Parent Advocacy and Navigation Support. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
            <span>Made with</span>
            <Heart
              className="w-3 h-3 text-primary/70 mx-0.5"
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />
            <span>for families</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
