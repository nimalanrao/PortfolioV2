import { useEffect, useState } from 'react';
import './ScrollProgressBar.css';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__fill"
        style={{ height: `${progress}%` }}
      />
      {progress > 4 && (
        <span
          className="scroll-progress__label"
          style={{ top: `calc(${progress}% + 5px)` }}
        >
          {Math.round(progress)}%
        </span>
      )}
    </div>
  );
}
