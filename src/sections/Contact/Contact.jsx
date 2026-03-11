import BlurText from '../../components/BlurText/BlurText';
import { IconMapPin, IconGlobe, IconMail, IconPhone, IconWhatsapp } from '../../components/Icons/Icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <div className="section__label">05 — Contact</div>
        <BlurText
          text="Hire Me"
          delay={50}
          animateBy="words"
          direction="top"
          className="section__heading"
        />
        <p className="section__subheading">
          Open to freelance projects, collaborations, and full-time opportunities.
        </p>

        <div className="contact__grid">
          <div className="dark-card contact__card">
            <div className="contact__card-inner">
              <div className="contact__bloom" />
              <div className="contact__header">
                <div className="contact__status">
                  <span className="contact__status-dot" />
                  Available for work
                </div>
                <h3 className="contact__cta-heading">Ready to build something great?</h3>
                <p className="contact__cta-sub">
                  Whether you need a new website, content strategy, or a full brand overhaul —
                  let's make it happen.
                </p>
              </div>

              <div className="contact__actions">
                <a
                  href="https://wa.me/601128143096"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__btn contact__btn--primary"
                >
                  <IconWhatsapp /> WhatsApp
                </a>
                <a href="mailto:hello@nithyanatha.dev" className="contact__btn contact__btn--secondary">
                  <IconMail /> Send an Email
                </a>
                <a href="tel:01128143096" className="contact__btn contact__btn--secondary">
                  <IconPhone /> Call Me
                </a>
              </div>

              <div className="contact__info">
                <div className="contact__info-item">
                  <span className="contact__info-icon"><IconMapPin /></span>
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
                <div className="contact__info-item">
                  <span className="contact__info-icon"><IconGlobe /></span>
                  <span>Open to remote worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact__footer">
        <p className="contact__footer-text">
          Designed &amp; built by <span className="contact__footer-name">Nithyanatha</span> · 2025
        </p>
      </div>
    </section>
  );
}
