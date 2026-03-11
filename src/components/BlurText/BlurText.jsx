import { useEffect, useRef, useState } from 'react';
import './BlurText.css';

export default function BlurText({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  stepDuration = 0.35,
  onAnimationComplete,
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const lastIndex = elements.length - 1;

  return (
    <p
      ref={ref}
      className={`blur-text ${className}`}
      aria-label={text}
    >
      {elements.map((el, i) => (
        <span
          key={i}
          className={`blur-text__word ${inView ? 'blur-text__word--visible' : ''} blur-text__word--${direction}`}
          style={{
            transitionDelay: inView ? `${i * delay}ms` : '0ms',
            transitionDuration: `${stepDuration * 1000}ms`,
          }}
          onTransitionEnd={
            i === lastIndex && onAnimationComplete ? onAnimationComplete : undefined
          }
        >
          {el}
          {animateBy === 'words' && i < lastIndex ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  );
}
