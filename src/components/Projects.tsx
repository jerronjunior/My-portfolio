import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title 1',
    description: 'Add your project description here. Describe what the project does and its key features.',
    tags: ['Technology1', 'Technology2', 'Technology3'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-demo.com',
  },
  {
    id: 2,
    title: 'Your Project Title 2',
    description: 'Add your project description here. Describe what the project does and its key features.',
    tags: ['Technology1', 'Technology2', 'Technology3'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubLink: 'https://github.com/yourusername/project2',
    liveLink: 'https://project2-demo.com',
  },
  {
    id: 3,
    title: 'Your Project Title 3',
    description: 'Add your project description here. Describe what the project does and its key features.',
    tags: ['Technology1', 'Technology2', 'Technology3'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubLink: 'https://github.com/yourusername/project3',
    liveLink: 'https://project3-demo.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
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
