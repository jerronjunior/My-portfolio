import './Skills.css';

const skillsData = [
  {
    category: 'Frontend Technologies',
    icon: '</>',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Flutter', 'Dart'],
  },
  {
    category: 'Backend Technologies',
    icon: 'API',
    items: ['Java', 'Node.js'],
  },
  {
    category: 'Database Management',
    icon: 'DB',
    items: ['MySQL', 'Firebase'],
  },
  {
    category: 'Version Control',
    icon: 'Git',
    items: ['Git', 'GitHub'],
  },
  {
    category: 'UI/UX Basics',
    icon: 'UX',
    items: ['Figma', 'Canva', 'User-Centered Design Principles'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-intro">
          Tools and technologies I use to craft responsive products and practical digital
          solutions.
        </p>
        <div className="skills-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category">
              <div className="category-header">
                <span className="category-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="category-title">{group.category}</h3>
              </div>
              <div className="skills-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
