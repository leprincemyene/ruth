import { CalendarHeart, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = [
  {
    title: 'Explorer',
    links: [
      { label: 'À la une', href: '#featured' },
      { label: 'Programme', href: '#programme' },
      { label: 'Culture', href: '#culture' },
      { label: 'Newsletter', href: '#contact' },
    ],
  },
  {
    title: 'Catégories',
    links: [
      { label: 'Musique', href: '#programme' },
      { label: 'Art & Expositions', href: '#programme' },
      { label: 'Traditions', href: '#programme' },
      { label: 'Gastronomie', href: '#programme' },
    ],
  },
  {
    title: 'Villes',
    links: [
      { label: 'Libreville', href: '#programme' },
      { label: 'Port-Gentil', href: '#programme' },
      { label: 'Lambaréné', href: '#programme' },
      { label: 'Franceville', href: '#programme' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 py-14 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gabon-green text-white shadow-lg shadow-gabon-green/30">
                <CalendarHeart className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-ink-900">
                  Gabon Culture
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Événements & Patrimoine
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500">
              La plateforme de référence pour découvrir et suivre les événements
              culturels du Gabon. Festivals, expositions, traditions et
              célébrations — toute l'année, partout au pays.
            </p>

            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-500 transition-all hover:border-gabon-green hover:bg-gabon-green hover:text-white"
                  aria-label="Réseau social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-600 transition-colors hover:text-gabon-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="flex flex-col gap-4 border-t border-ink-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gabon-green" />
              Libreville, Gabon
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-gabon-green" />
              contact@gabon-culture.ga
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-gabon-green" />
              +241 00 00 00 00
            </span>
          </div>
          <p className="text-xs text-ink-400">
            © 2026 Gabon Culture. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
