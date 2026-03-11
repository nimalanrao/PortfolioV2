import { useState, useEffect } from 'react';
import GlassSurface from '../GlassSurface/GlassSurface';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ showName = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = href => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`island-outer ${scrolled ? 'island-outer--scrolled' : ''} ${open ? 'island-outer--open' : ''}`}>
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={open ? 24 : 100}
        backgroundOpacity={0.06}
        saturation={1.4}
        brightness={55}
        blur={14}
        distortionScale={-160}
        className="island-glass"
      >
        {/* Main bar */}
        <div className="island-bar">
          <button
            className="island-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="island-logo__dot" />
            <span className={`island-logo__name${showName ? ' island-logo__name--visible' : ''}`}>Nithyanatha</span>
          </button>

          <ul className="island-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <button className="island-link" onClick={() => handleNav(link.href)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button className="island-cta" onClick={() => handleNav('#contact')}>
            Hire Me
          </button>

          <button
            className={`island-burger ${open ? 'island-burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`island-mobile ${open ? 'island-mobile--open' : ''}`}>
          <div className="island-divider" />
          <ul className="island-mobile-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <button className="island-mobile-link" onClick={() => handleNav(link.href)}>
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="island-cta island-mobile-cta" onClick={() => handleNav('#contact')}>
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </GlassSurface>
    </div>
  );
}
