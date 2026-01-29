import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src="jerrom.png" alt="Profile" className="profile-pic" />
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
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">20+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
