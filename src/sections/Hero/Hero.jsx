import Beams from '../../components/Beams/Beams';
import './Hero.css';

export default function Hero() {
  const handleScroll = href => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__aurora">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={18}
          lightColor="#ffffff"
          speed={1.8}
          noiseIntensity={1.6}
          scale={0.18}
          rotation={30}
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__bloom hero__bloom--1" />
      <div className="hero__bloom hero__bloom--2" />

      <div className="hero__inner">
        <div className="hero__badge hero__anim" style={{ animationDelay: '0ms' }}>
          <span className="hero__badge-dot" />
          Available for work &middot; KL, Malaysia
        </div>

        <h1 className="hero__name hero__anim" style={{ animationDelay: '120ms' }}>
          Nithyanatha
        </h1>

        <p className="hero__subtitle hero__anim" style={{ animationDelay: '280ms' }}>
          Digital Creative &middot; Front-End Developer &middot; Content Creator
        </p>

        <p className="hero__desc hero__anim" style={{ animationDelay: '420ms' }}>
          Building clean visuals, smooth user experiences, and modern digital
          work that helps brands stand out.
        </p>

        <div className="hero__ctas hero__anim" style={{ animationDelay: '560ms' }}>
          <button className="hero__cta-primary" onClick={() => handleScroll('#contact')}>
            Get In Touch
          </button>
          <button className="hero__cta-secondary" onClick={() => handleScroll('#services')}>
            View My Work
          </button>
        </div>

        <div className="hero__stats hero__anim" style={{ animationDelay: '680ms' }}>
          {[
            { value: '5+', label: 'Tech Skills' },
            { value: '4', label: 'Languages' },
            { value: '100%', label: 'Committed' },
          ].map(stat => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
