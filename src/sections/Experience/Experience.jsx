import BlurText from '../../components/BlurText/BlurText';
import './Experience.css';

const expPoints = [
  'Delivered consistent service in fast-paced environments',
  'Prepared and served beverages with attention to quality and presentation',
  'Operated POS systems and handled cash transactions accurately',
  'Managed inventory checks and stock replenishment',
  'Maintained hygiene standards and clean workspaces',
  'Collaborated with team members to ensure efficient daily operations',
];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <div className="section__label">04 — Experience</div>
        <BlurText
          text="My Journey"
          delay={60}
          animateBy="letters"
          direction="top"
          className="section__heading"
        />

        <div className="experience__timeline">
          {/* Education */}
          <div className="experience__node">
            <div className="experience__node-dot experience__node-dot--edu" />
              <div className="dark-card experience__card">
              <div className="experience__card-inner">
                <div className="experience__card-top">
                  <div>
                    <span className="experience__type">Education</span>
                    <h3 className="experience__role">Sijil Pelajaran Malaysia (SPM)</h3>
                    <p className="experience__org">SMK Kepong Baru · Kuala Lumpur</p>
                  </div>
                  <div className="experience__date">2025</div>
                </div>
              </div>
              </div>
          </div>

          {/* F&B Experience */}
          <div className="experience__node">
            <div className="experience__node-dot experience__node-dot--work" />
            <div className="dark-card experience__card">
              <div className="experience__card-inner">
                <div className="experience__card-top">
                  <div>
                    <span className="experience__type">Work Experience</span>
                    <h3 className="experience__role">Barista &amp; F&amp;B Service</h3>
                    <p className="experience__org">Food &amp; Beverage Industry · Kuala Lumpur</p>
                  </div>
                  <div className="experience__date">2025 – Feb 2026</div>
                </div>
                <ul className="experience__list">
                  {expPoints.map((p, i) => (
                    <li key={i} className="experience__list-item">
                      <span className="experience__list-dot" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
