import { useMemo, useState } from 'react';
import { Calendar, Clock, MapPin, Search, SlidersHorizontal } from 'lucide-react';
import { events, categories, type EventCategory } from '../data/events';
import { useReveal } from '../hooks/useReveal';

const categoryColors: Record<string, string> = {
  Tradition: 'bg-earth-200/60 text-earth-700',
  Musique: 'bg-gabon-blue/10 text-gabon-blue',
  Art: 'bg-gabon-yellow/20 text-earth-700',
  Danse: 'bg-gabon-green/10 text-gabon-green',
  Littérature: 'bg-ink-200 text-ink-600',
  Gastronomie: 'bg-earth-300/50 text-earth-800',
};

export default function Programme() {
  const [active, setActive] = useState<EventCategory | 'Tous'>('Tous');
  const [query, setQuery] = useState('');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = active === 'Tous' || e.category === active;
      const matchQuery =
        query.trim() === '' ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.city.toLowerCase().includes(query.toLowerCase()) ||
        e.venue.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <section id="programme" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="text-center">
            <span className="chip bg-gabon-green/10 text-gabon-green">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Programme complet
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Tous les événements
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-500">
              Filtrez par catégorie ou recherchez par ville, lieu ou titre pour
              trouver l'événement qui vous correspond.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActive('Tous')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === 'Tous'
                    ? 'bg-ink-900 text-white shadow-md'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                Tous
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active === cat
                      ? 'bg-ink-900 text-white shadow-md'
                      : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un événement…"
                className="w-full rounded-full border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm text-ink-800 placeholder:text-ink-400 transition-colors focus:border-gabon-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-gabon-green/20"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => (
                <article
                  key={event.id}
                  className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className={`chip absolute left-3 top-3 ${categoryColors[event.category]}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-ink-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.dateLabel}
                      <span className="text-ink-300">·</span>
                      <Clock className="h-3.5 w-3.5" />
                      {event.time}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink-900">
                      {event.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-500 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-ink-500">
                        <MapPin className="h-3.5 w-3.5 text-gabon-green" />
                        {event.city}
                      </span>
                      <span className="text-sm font-bold text-ink-900">{event.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-200 py-16 text-center">
              <Search className="h-8 w-8 text-ink-300" />
              <p className="mt-3 text-sm font-medium text-ink-500">
                Aucun événement ne correspond à votre recherche.
              </p>
              <button
                onClick={() => {
                  setActive('Tous');
                  setQuery('');
                }}
                className="mt-4 text-sm font-semibold text-gabon-green hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
