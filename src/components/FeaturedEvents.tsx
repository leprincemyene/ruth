import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { events } from '../data/events';
import { useReveal } from '../hooks/useReveal';

const categoryColors: Record<string, string> = {
  Tradition: 'bg-earth-200/60 text-earth-700',
  Musique: 'bg-gabon-blue/10 text-gabon-blue',
  Art: 'bg-gabon-yellow/20 text-earth-700',
  Danse: 'bg-gabon-green/10 text-gabon-green',
  Littérature: 'bg-ink-200 text-ink-600',
  Gastronomie: 'bg-earth-300/50 text-earth-800',
};

export default function FeaturedEvents() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const featured = events.filter((e) => e.featured);

  return (
    <section id="featured" className="section-py">
      <div className="container-px mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="chip bg-gabon-yellow/20 text-earth-700">
                <Calendar className="h-3.5 w-3.5" />
                À la une
              </span>
              <h2 className="mt-4 font-display text-3xl font-600 tracking-tight text-ink-900 sm:text-4xl">
                Événements incontournables
              </h2>
              <p className="mt-3 max-w-xl text-ink-500">
                Les rendez-vous culturels les plus attendus de la saison,
                sélectionnés pour vous.
              </p>
            </div>
            <a
              href="#programme"
              className="group inline-flex items-center gap-1.5 text-sm font-600 text-gabon-green transition-colors hover:text-gabon-green/80"
            >
              Tout le programme
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((event, i) => (
              <article
                key={event.id}
                className="card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
                  <span
                    className={`chip absolute left-4 top-4 ${categoryColors[event.category]}`}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-500 text-ink-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.dateLabel}
                    <span className="text-ink-300">·</span>
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-600 leading-snug text-ink-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {event.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-500 text-ink-500">
                      <MapPin className="h-3.5 w-3.5 text-gabon-green" />
                      {event.venue}, {event.city}
                    </span>
                    <span className="text-sm font-700 text-ink-900">{event.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
