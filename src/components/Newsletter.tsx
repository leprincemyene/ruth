import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Newsletter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="contact" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 sm:px-12 lg:px-16 lg:py-20`}
        >
          {/* Decorative gradient */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gabon-green/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gabon-yellow/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="chip bg-white/10 text-gabon-yellow">
                <Mail className="h-3.5 w-3.5" />
                Newsletter
              </span>
              <h2 className="mt-4 font-display text-3xl font-600 tracking-tight text-white sm:text-4xl">
                Ne manquez aucun
                <br />
                événement culturel
              </h2>
              <p className="mt-4 max-w-md text-ink-300">
                Recevez chaque mois le programme des événements culturels du
                Gabon directement dans votre boîte mail. Gratuit, sans spam.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-gabon-green" />
                  <div>
                    <p className="font-600 text-white">Merci pour votre inscription !</p>
                    <p className="mt-1 text-sm text-ink-300">
                      Vous recevrez bientôt le prochain programme culturel.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-ink-400 backdrop-blur transition-colors focus:border-gabon-green focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gabon-green px-6 py-3 text-sm font-600 text-white shadow-lg shadow-gabon-green/30 transition-all hover:bg-gabon-green/90 active:scale-95"
                    >
                      S'inscrire
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-ink-400">
                    En vous inscrivant, vous acceptez de recevoir nos emails
                    culturels. Désinscription à tout moment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
