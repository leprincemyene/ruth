import { useEffect, useState } from 'react';
import { Menu, X, CalendarHeart } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À la une', href: '#featured' },
  { label: 'Programme', href: '#programme' },
  { label: 'Culture', href: '#culture' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-50/85 shadow-sm backdrop-blur-xl border-b border-ink-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gabon-green text-white shadow-lg shadow-gabon-green/30 transition-transform group-hover:scale-105">
              <CalendarHeart className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
                Gabon Culture
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Événements & Patrimoine
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#programme" className="btn-primary">
              Voir le programme
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white/60 text-ink-700 backdrop-blur transition-colors hover:bg-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-200/60 bg-ink-50/95 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programme"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Voir le programme
          </a>
        </nav>
      </div>
    </header>
  );
}
