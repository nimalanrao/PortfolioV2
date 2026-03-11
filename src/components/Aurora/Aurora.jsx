import { useEffect, useRef } from 'react';
import './Aurora.css';

export default function Aurora({ colorStops, amplitude = 1, speed = 0.5, blend = 0.5 }) {
  const ref = useRef(null);

  // Apply CSS custom properties so the CSS animation can use the user's colors
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const c = colorStops || ['#1a0a3e', '#7c6fff', '#0a1a3e'];
    el.style.setProperty('--aurora-c1', c[0]);
    el.style.setProperty('--aurora-c2', c[1]);
    el.style.setProperty('--aurora-c3', c[2] || c[0]);
    el.style.setProperty('--aurora-speed', `${Math.max(0.1, 12 / speed)}s`);
    el.style.setProperty('--aurora-scale', amplitude);
  }, [colorStops, amplitude, speed]);

  return <div className="aurora" ref={ref} aria-hidden="true" />;
}
