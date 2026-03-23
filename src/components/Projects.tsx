import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'JS-Stores',
    description: ' A cross-platform app for managing online stores, supporting Android, iOS,macOS, Linux, Windows, and web, with inventory management tools and a seamlessuser experience.',
    tags: ['Dart', 'Flutter', 'HTML'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Action to talk (A2T)',
    description: 'An application aimed at facilitating communication for non-hearing and non speaking individuals using sign language translation..',
    tags: ['Java', 'Machine Learning', 'Firebase'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Blood Connect Website',
    description: ':A platform that connects blooddonors with recipients, allowing users to register as donors and request blood.',
    tags: ['HTML', 'CSS', 'JavaScript','MySQL'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Price-ur-Plastic',
    description: 'A sustainability-focused platform centered on plastic pricing and awareness.',
    tags: ['Flutter', 'Mobile App', 'Dart'],
    image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/jerronjunior/Price-ur-Plastic',
    demo: '#',
  },
  {
    id: 5,
    title: 'Fitness Gym',
    description: 'A fitness and workout application for training plans, routines, and progress tracking.',
    tags: ['Flutter', 'Fitness', 'Dart'],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/jerronjunior/fitness_gym',
    demo: '#',
  },
  {
    id: 6,
    title: 'Tailor App',
    description: 'An app experience for tailoring-related workflows, customer management, and orders.',
    tags: ['Flutter', 'App Development', 'Dart'],
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/jerronjunior/Tailor-app',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
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
