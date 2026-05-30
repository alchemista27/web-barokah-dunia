'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('main > section, .footer'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!targets.length || reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    document.body.classList.add('reveal-ready');

    targets.forEach((target, index) => {
      target.classList.remove('is-visible');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 55, 220)}ms`);
    });

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
