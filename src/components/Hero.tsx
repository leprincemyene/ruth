import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { stats } from '../data/events';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Background gradient + texture */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-earth-50 via-ink-50 to-ink-50" />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />

      {/* Decorative blobs */}
      <div className="absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full bg-gabon-yellow/20 blur-3xl" />
      <div className="absolute -left-24 top-40 -z-10 h-80 w-80 rounded-full bg-gabon-green/15 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <span className="chip bg-gabon-green/10 text-gabon-green">
              <Sparkles className="h-3.5 w-3.5" />
              Saison culturelle 2026
            </span>
            <h1 className="mt-5 font-display text-4xl font-600 leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Vivez la richesse
              <br />
              culturelle du{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gabon-green">Gabon</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-gabon-yellow/50" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              Festivals de musique, expositions d'art, danses traditionnelles et
              célébrations ancestrales. Découvrez les événements qui font
              battre le cœur culturel du pays.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#programme" className="btn-primary">
                Explorer le programme
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#featured" className="btn-ghost">
                À la une
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-ink-400">
              <MapPin className="h-4 w-4 text-gabon-green" />
              <span>Libreville · Port-Gentil · Lambaréné · Franceville</span>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative animate-fade-in lg:h-[520px]">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/99576/pexels-photo-99576.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Masque traditionnel"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                  loading="eager"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Concert de musique"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                  loading="eager"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2024497/pexels-photo-2024497.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Danse traditionnelle"
                  className="h-44 w-full object-cover sm:h-52 lg:h-60"
                  loading="lazy"
                />
              </div>
              <div className="-mt-4 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Gastronomie gabonaise"
                  className="h-44 w-full object-cover sm:h-52 lg:h-60"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-ink-200 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gabon-green/10 text-gabon-green">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-700 text-ink-900">+40 artistes</p>
                <p className="text-xs text-ink-400">à découvrir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-4 lg:mt-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-50 px-6 py-6 text-center">
              <p className="font-display text-3xl font-700 text-gabon-green">{s.value}</p>
              <p className="mt-1 text-xs font-500 uppercase tracking-wide text-ink-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
