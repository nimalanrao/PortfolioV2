import BlurText from '../../components/BlurText/BlurText';
import { IconZap, IconBrush, IconBarChart, IconUsers } from '../../components/Icons/Icons';
import './Skills.css';

const skillGroups = [
  {
    title: 'Technical',
    icon: <IconZap />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git', 'GitHub', 'Firebase', 'Vercel'],
  },
  {
    title: 'Creative & Design',
    icon: <IconBrush />,
    skills: ['Content Creation', 'Videography', 'UI/UX Design', 'Visual Design', 'Brand Identity', 'Figma', 'Canva', 'GIMP', 'CapCut', 'Filmora'],
  },
  {
    title: 'Marketing',
    icon: <IconBarChart />,
    skills: ['Social Media Strategy', 'Consumer Psychology', 'E-commerce', 'SEO Basics', 'Digital Branding'],
  },
  {
    title: 'Operations',
    icon: <IconUsers />,
    skills: ['Customer Service', 'Team Collaboration', 'Time Management', 'Communication', 'POS Systems', 'Cash Handling', 'Inventory Management'],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <div className="section__label">03 — Skills</div>
        <BlurText
          text="My Toolkit"
          delay={60}
          animateBy="letters"
          direction="top"
          className="section__heading"
        />
        <p className="section__subheading">
          A versatile set of skills built across development, design, and strategy.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="dark-card skills__card"
            >
              <div className="skills__card-inner">
                <div className="skills__card-header">
                  <span className="skills__icon">{group.icon}</span>
                  <h3 className="skills__group-title">{group.title}</h3>
                </div>
                <div className="skills__pills">
                  {group.skills.map(skill => (
                    <span key={skill} className="skills__pill">{skill}</span>
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
