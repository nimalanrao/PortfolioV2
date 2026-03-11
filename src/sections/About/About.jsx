import { useEffect, useRef, useState } from 'react';
import BlurText from '../../components/BlurText/BlurText';
import { IconPin, IconGraduate } from '../../components/Icons/Icons';
import './About.css';

const languages = [
  { lang: 'English', level: 'Fluent', pct: 100 },
  { lang: 'Chinese', level: 'Fluent', pct: 100 },
  { lang: 'Malay', level: 'Fluent', pct: 100 },
  { lang: 'Tamil', level: 'Intermediate', pct: 55 },
];

const traits = [
  'Strong work ethic', 'Detail-oriented', 'Team player',
  'Fast learner', 'Adaptable', 'Creative thinker',
  'Problem solver', 'Self-motivated', 'Visually driven',
  'Customer-focused', 'Deadline-focused', 'Multi-lingual',
  'Operations-savvy', 'Content creator', 'Brand builder',
];

export default function About() {
  const [barsVisible, setBarsVisible] = useState(false);
  const langsRef = useRef(null);

  useEffect(() => {
    const el = langsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <div className="section__label">01 — About</div>
        <BlurText
          text="Who I Am"
          delay={60}
          animateBy="letters"
          direction="top"
          className="section__heading"
        />

        <div className="about__grid">
          {/* Bio */}
          <div className="dark-card about__card about__card--bio">
            <div className="about__bio">
              <div className="about__bio-header">
                <div className="about__avatar">N</div>
                <div>
                  <h3 className="about__bio-name">Nithyanatha</h3>
                  <p className="about__bio-loc"><IconPin /> Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              <p className="about__bio-text">
                Digital creative skilled in front-end development, content creation, and marketing psychology.
                Combines technical ability with real-world operations experience to build clean visuals,
                smooth user experiences, and modern digital work that helps brands stand out.
                Motivated, detail-oriented, and able to work both independently and in fast-paced team environments.
              </p>
              <div className="about__education">
                <div className="about__edu-icon"><IconGraduate /></div>
                <div>
                  <p className="about__edu-school">SMK Kepong Baru</p>
                  <p className="about__edu-detail">SPM · Completed 2025 · Kuala Lumpur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="dark-card about__card" ref={langsRef}>
            <div className="about__langs">
              <h4 className="about__card-title">Languages</h4>
              {languages.map((l, i) => (
                <div key={l.lang} className="about__lang-item">
                  <div className="about__lang-row">
                    <span className="about__lang-name">{l.lang}</span>
                    <div className="about__lang-meta">
                      <span className="about__lang-pct">{l.pct}%</span>
                      <span className="about__lang-level">{l.level}</span>
                    </div>
                  </div>
                  <div className="about__lang-bar">
                    <div
                      className="about__lang-bar-fill"
                      style={{
                        width: barsVisible ? `${l.pct}%` : '0%',
                        transitionDelay: `${i * 130}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="dark-card about__card">
            <div className="about__traits">
              <h4 className="about__card-title">Traits</h4>
              <div className="about__traits-grid">
                {traits.map(t => (
                  <span key={t} className="about__trait-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
