import { Music, Palette, Sparkles, UtensilsCrossed } from 'lucide-react';
import { culturePillars } from '../data/events';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, typeof Music> = {
  Music,
  Palette,
  Sparkles,
  UtensilsCrossed,
};

export default function Culture() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="culture" className="section-py">
      <div className="container-px mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2026360/pexels-photo-2026360.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Culture gabonaise"
                  className="h-80 w-full object-cover sm:h-96 lg:h-[480px]"
                  loading="lazy"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-3xl border-2 border-gabon-green/30" />
              {/* Quote card */}
              <div className="absolute -bottom-6 left-4 max-w-xs rounded-2xl border border-ink-200 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8">
                <p className="font-display text-sm italic leading-relaxed text-ink-700">
                  « La culture gabonaise est un pont entre les ancêtres et les
                  générations futures. »
                </p>
                <p className="mt-2 text-xs font-semibold text-gabon-green">
                  — Patrimoine vivant d'Afrique centrale
                </p>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <span className="chip bg-gabon-blue/10 text-gabon-blue">
                <Sparkles className="h-3.5 w-3.5" />
                Notre culture
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Un patrimoine vivant,
                <br />
                une créativité sans frontières
              </h2>
              <p className="mt-4 text-ink-500">
                Le Gabon est un carrefour culturel d'Afrique centrale où
                traditions ancestrales et expressions contemporaines coexistent.
                Des masques sacrés du Bwiti aux scènes jazz de Libreville,
                chaque événement raconte une histoire.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {culturePillars.map((pillar, i) => {
                  const Icon = iconMap[pillar.icon] ?? Sparkles;
                  return (
                    <div
                      key={pillar.title}
                      className="group rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:border-gabon-green/30 hover:shadow-lg"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gabon-green/10 text-gabon-green transition-colors group-hover:bg-gabon-green group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                        {pillar.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
