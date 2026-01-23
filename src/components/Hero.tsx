import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Velu Spencer Jerrom</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer & Designer</h2>
        <p className="hero-description">
          I craft beautiful digital experiences with clean code and creative design.
          Passionate about building solutions that make a difference.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get In Touch
          </button>
          <a href="#projects" className="btn btn-secondary">
            View My Work
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
