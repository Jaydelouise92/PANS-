import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Start Here', path: '/start-here' },
  { label: 'Child Protection', path: '/child-protection' },
  { label: 'Court Guide', path: '/court-guide' },
  { label: 'Self-Representation', path: '/self-rep' },
  { label: 'Parent Rights', path: '/rights' },
  { label: 'Resources', path: '/resources' },
  { label: 'Mental Health', path: '/mental-health' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function NavLink({
  path,
  label,
  currentPath,
  onClick,
}: {
  path: string
  label: string
  currentPath: string
  onClick?: () => void
}) {
  const isActive =
    path === '/' ? currentPath === '/' : currentPath.startsWith(path)

  return (
    <Link
      to={path}
      onClick={onClick}
      className={cn(
        'text-sm transition-colors duration-200 hover:text-primary',
        isActive
          ? 'text-primary font-semibold underline underline-offset-4 decoration-2 decoration-primary/60'
          : 'text-foreground/70 font-medium'
      )}
    >
      {label}
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border/60 shadow-[0_1px_8px_0_hsl(270_25%_20%/0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-200">
              <Heart
                className="w-5 h-5 text-primary"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-lg text-foreground tracking-tight">
                PANS
              </span>
              <span className="text-[10px] text-muted-foreground font-sans font-medium leading-tight max-w-[180px] hidden sm:block">
                Parent Advocacy &amp; Navigation Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.path} className="px-2 py-1">
                <NavLink
                  path={item.path}
                  label={item.label}
                  currentPath={currentPath}
                />
              </div>
            ))}
          </nav>

          {/* Large screen condensed nav (lg–xl) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5" aria-label="Main navigation compact">
            {navItems.slice(0, 7).map((item) => (
              <div key={item.path} className="px-1.5 py-1">
                <NavLink
                  path={item.path}
                  label={item.label}
                  currentPath={currentPath}
                />
              </div>
            ))}
            <span className="mx-1 text-border">|</span>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary text-sm font-medium h-auto px-1.5 py-1"
                  aria-label="More pages"
                >
                  More…
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <MobileMenuContent
                  currentPath={currentPath}
                  onClose={() => setMobileOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground/70 hover:text-primary hover:bg-primary/8"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <MobileMenuContent
                  currentPath={currentPath}
                  onClose={() => setMobileOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenuContent({
  currentPath,
  onClose,
}: {
  currentPath: string
  onClose: () => void
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Mobile sheet header */}
      <SheetHeader className="px-5 pt-5 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
            <Heart
              className="w-5 h-5 text-primary"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>
          <div className="flex flex-col leading-none">
            <SheetTitle className="font-serif font-bold text-base text-foreground m-0 p-0">
              PANS
            </SheetTitle>
            <span className="text-[10px] text-muted-foreground font-sans font-medium leading-tight mt-0.5">
              Parent Advocacy &amp; Navigation Support
            </span>
          </div>
        </div>
      </SheetHeader>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto py-3 px-3" aria-label="Mobile navigation">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.path)
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground/75 hover:bg-muted hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {!isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent shrink-0" />
                  )}
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer note */}
      <div className="px-5 py-4 border-t border-border/60 bg-secondary/50">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Not a legal service. For guidance only.
        </p>
      </div>
    </div>
  )
}
