import { useEffect, useState } from 'react';
import './Experience.css';

const experienceLetters = [
  {
    id: 1,
    title: 'Experience Letter 1',
    issuer: 'Professional Experience',
    description:
      'This document highlights the responsibilities, contributions, and professional growth during my first experience period.',
    pdfUrl: '/experience/experience-letter-1.pdf',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Experience Letter 2',
    issuer: 'Professional Experience',
    description:
      'This second experience letter reflects the work completed, achievements, and continued development in my career journey.',
    pdfUrl: '/experience/experience-letter-2.pdf',
    image:
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Experience() {
  const [selectedLetter, setSelectedLetter] = useState<(typeof experienceLetters)[number] | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedLetter(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <p className="section-kicker">Career Highlights</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {experienceLetters.map((letter) => (
            <div key={letter.id} className="experience-card">
              <div className="experience-image">
                <img src={letter.image} alt="" />
                <span className="experience-image-label">Career document</span>
              </div>
              <div className="experience-badge">Experience Letter</div>
              <h3 className="experience-title">{letter.title}</h3>
              <p className="experience-description">{letter.description}</p>

              <div className="experience-meta">
                <span>{letter.issuer}</span>
              </div>

              <button
                type="button"
                className="experience-btn"
                onClick={() => setSelectedLetter(letter)}
              >
                View Letter
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedLetter && (
        <div
          className="experience-modal"
          role="presentation"
          onClick={() => setSelectedLetter(null)}
        >
          <div
            className="experience-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="experience-modal-toolbar">
              <div>
                <span className="experience-modal-eyebrow">Career document</span>
                <h3 id="experience-modal-title">{selectedLetter.title}</h3>
              </div>
              <button
                type="button"
                className="experience-modal-close"
                aria-label="Close experience letter"
                onClick={() => setSelectedLetter(null)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <iframe
              src={selectedLetter.pdfUrl}
              title={selectedLetter.title}
              className="experience-modal-frame"
            />
          </div>
        </div>
      )}
    </section>
  );
}
