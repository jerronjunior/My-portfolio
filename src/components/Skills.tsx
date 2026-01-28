import './Skills.css';

const skillsData = {
  'Frontend': [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    
  ],
  'Backend': [
    { name: 'Firebase', level: 90 },
    { name: 'Node.js', level: 82 }, 
    { name: 'REST APIs', level: 85 },
  ],
  'Tools & Others': [
    { name: 'Git', level: 88 },
    { name: 'Figma', level: 80 },
    { name: 'AWS', level: 70 },
    
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
