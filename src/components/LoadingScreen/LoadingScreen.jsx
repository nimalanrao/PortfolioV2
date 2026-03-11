import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | flyout | hidden
  const nRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    const TOTAL_MS = 2500;

    // Non-linear easing: fast start, slow middle, quick finish
    const getProgress = t => {
      const p = Math.min(t / TOTAL_MS, 1);
      if (p < 0.65) return (p / 0.65) * 82;
      if (p < 0.9)  return 82 + ((p - 0.65) / 0.25) * 14;
      return 96 + ((p - 0.9) / 0.1) * 4;
    };

    const step = ts => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const val = Math.min(Math.floor(getProgress(elapsed)), 100);
      setProgress(val);

      if (val < 100) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setProgress(100);
        // Start flyout after brief pause
        setTimeout(() => setPhase('flyout'), 380);
        // Fade screen out
        setTimeout(() => setPhase('hidden'), 1100);
        // Signal completion
        setTimeout(() => onComplete(), 1350);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  // Trigger N fly animation when phase becomes flyout
  useEffect(() => {
    if (phase !== 'flyout' || !nRef.current) return;

    // Measure where the navbar logo dot sits in the viewport
    const logoTarget =
      document.querySelector('.island-logo') ||
      document.querySelector('.navbar__logo');

    const fromX = window.innerWidth / 2;
    const fromY = window.innerHeight / 2;

    let dx = 0;
    let dy = 0;

    if (logoTarget) {
      const rect = logoTarget.getBoundingClientRect();
      // Aim for the left edge of the logo (where the dot/N lands)
      const targetX = rect.left + 22; // offset a little right of the dot
      const targetY = rect.top + rect.height / 2;
      dx = targetX - fromX;
      dy = targetY - fromY;
    }

    // N in navbar is ~14px tall; loading N is ~clamp(7rem,16vw,11rem)
    const loadingNSize = Math.min(
      Math.max(window.innerWidth * 0.16, 7 * 16),
      11 * 16
    );
    const scale = 14 / loadingNSize;

    nRef.current.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
    nRef.current.style.opacity = '0';
  }, [phase]);

  return (
    <div className={`ls ${phase === 'hidden' ? 'ls--out' : ''}`}>
      {/* Big N */}
      <span ref={nRef} className="ls__n">N</span>

      {/* Bottom progress area */}
      <div className="ls__footer">
        <div className="ls__count">{String(progress).padStart(3, '0')}</div>
        <div className="ls__track">
          <div className="ls__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
