const defaultProjects = [
  {
    id: 1,
    title: "Student Portfolio Application",
    description:
      "A modular, responsive portfolio built using React functional components, prop-driven architecture, and custom CSS styling.",
    technologies: ["React", "Vite", "JavaScript", "CSS3"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Campus Event Management System",
    description:
      "A full-stack web application designed to schedule, track, and manage departmental university events with registration handling.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "In Progress",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather dashboard providing real-time meteorological metrics, forecasts, and responsive visual charts.",
    technologies: ["JavaScript", "REST API", "HTML5", "CSS Grid"],
    status: "Completed",
  },
];

function Projects({ projects = defaultProjects }) {
  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="page-container projects-page">
      <section id="projects" className="portfolio-section projects-section">
        <div className="section-container">
          <div className="section-header-block">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subtext">
              Demonstrating component reusability, modular structure, and state management in React.
            </p>
          </div>

          <div className="projects-grid">
            {displayProjects.map((project) => (
              <article key={project.id || project.title} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.status && (
                    <span
                      className={`project-status ${project.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
