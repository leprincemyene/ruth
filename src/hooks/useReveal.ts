import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }
    // Fallback: if IntersectionObserver isn't available, show content
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    // Safety: if element is already in viewport but observer hasn't fired yet
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setVisible(true), 100);
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
