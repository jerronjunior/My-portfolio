import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'JS-Stores',
    description: ' A cross-platform app for managing online stores, supporting Android, iOS,macOS, Linux, Windows, and web, with inventory management tools and a seamlessuser experience.',
    tags: ['Dart', 'Flutter', 'HTML'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Action to talk (A2T)',
    description: 'An application aimed at facilitating communication for non-hearing and non speaking individuals using sign language translation..',
    tags: ['Java', 'Machine Learning', 'Firebase'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Blood Connect Website',
    description: ':A platform that connects blooddonors with recipients, allowing users to register as donors and request blood.',
    tags: ['HTML', 'CSS', 'JavaScript',],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Real-time weather application with beautiful UI and location-based forecasts.',
    tags: ['React', 'API Integration', 'CSS'],
    image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations and responsive design.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Content management system with markdown support and SEO optimization.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
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
                  <button className="view-project-btn">View Project</button>
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
