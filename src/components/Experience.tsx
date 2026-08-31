import './Experience.css';

const experienceLetters = [
  {
    id: 1,
    title: 'Experience Letter 1',
    issuer: 'Professional Experience',
    description:
      'This document highlights the responsibilities, contributions, and professional growth during my first experience period.',
    pdfUrl: '/experience/experience-letter-1.pdf',
  },
  {
    id: 2,
    title: 'Experience Letter 2',
    issuer: 'Professional Experience',
    description:
      'This second experience letter reflects the work completed, achievements, and continued development in my career journey.',
    pdfUrl: '/experience/experience-letter-2.pdf',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <p className="section-kicker">Career Highlights</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {experienceLetters.map((letter) => (
            <div key={letter.id} className="experience-card">
              <div className="experience-badge">Experience Letter</div>
              <h3 className="experience-title">{letter.title}</h3>
              <p className="experience-description">{letter.description}</p>

              <div className="experience-meta">
                <span>{letter.issuer}</span>
              </div>

              <a
                href={letter.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="experience-btn"
              >
                View Letter
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
