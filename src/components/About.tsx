import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                <path d="M12 14C6.47715 14 2 18.4772 2 24H22C22 18.4772 17.5228 14 12 14Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <p className="about-intro">
              Hello! I’m an aspiring Software Engineer and Mobile App Developer with strong skills in Flutter, Dart, Java, and modern web technologies. 
              I enjoy building responsive, user-friendly web and mobile applications with a focus on clean design and efficient code. Passionate about problem-solving 
              and continuous learning, I love turning ideas into practical digital solutions that work seamlessly across devices.
            </p>
            <p className="about-details">
             My journey in web development started several years ago, and since then, 
             I've worked on diverse projects ranging from simple landing pages to complex 
             web applications. I'm constantly learning and staying up-to-date with the latest
              technologies and best practices.

.
            </p>
            <p className="about-focus">
              I’m always eager to learn new technologies and improve my skills through 
              hands-on projects and real-world experience. When I’m not coding, 
              I enjoy exploring new tools, enhancing my existing projects, and expanding 
              my knowledge to grow as a better developer.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">50+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">30+</span>
                <span className="highlight-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
