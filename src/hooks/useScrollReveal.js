import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.section__inner, .dark-card');

    targets.forEach((el, i) => {
      el.classList.add('reveal');
      // stagger cards within the same parent
      const siblings = el.parentElement?.querySelectorAll('.dark-card');
      if (el.classList.contains('dark-card') && siblings?.length > 1) {
        const idx = Array.from(siblings).indexOf(el);
        el.style.transitionDelay = `${idx * 80}ms`;
      }
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
