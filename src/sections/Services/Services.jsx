import BlurText from '../../components/BlurText/BlurText';
import { IconMonitor, IconVideo, IconPenTool, IconTrendingUp } from '../../components/Icons/Icons';
import './Services.css';

const services = [
  {
    icon: <IconMonitor />,
    name: 'Front-End Development',
    description: 'Building fast, responsive, and visually clean websites using modern web technologies.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: <IconVideo />,
    name: 'Content Creation',
    description: 'Producing engaging product photos, reels, and short-form videos optimized for social platforms.',
    tags: ['Instagram', 'TikTok', 'Reels'],
  },
  {
    icon: <IconPenTool />,
    name: 'UI/UX & Branding',
    description: 'Improving user interfaces and strengthening brand identity for memorable digital experiences.',
    tags: ['Figma', 'UI Design', 'Branding'],
  },
  {
    icon: <IconTrendingUp />,
    name: 'Social Media Strategy',
    description: 'Using marketing psychology and consumer behaviour insights to grow engagement and conversions.',
    tags: ['Strategy', 'Psychology', 'SEO'],
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section__inner">
        <div className="section__label">02 — Services</div>
        <BlurText
          text="What I Do"
          delay={60}
          animateBy="letters"
          direction="top"
          className="section__heading"
        />
        <p className="section__subheading">
          Combining technical skills with creative thinking to deliver work that stands out.
        </p>

        <div className="services__grid">
          {services.map((svc, i) => (
          <div
            key={svc.name}
            className="dark-card services__card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
              <div className="services__card-inner">
                <div className="services__icon">{svc.icon}</div>
                <h3 className="services__name">{svc.name}</h3>
                <p className="services__desc">{svc.description}</p>
                <div className="services__tags">
                  {svc.tags.map(tag => (
                    <span key={tag} className="services__tag">{tag}</span>
                  ))}
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
