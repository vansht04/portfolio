"use client";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    { title: "Task Manager", description: "Full-stack task manager app", link: "https://yourproject.com/task-manager" },
    { title: "E-Commerce Store", description: "Next.js storefront with payments", link: "https://yourproject.com/e-commerce-store" },
    { title: "Chat App", description: "Real-time chat app with WebSockets", link: "https://yourproject.com/chat-app" },
    { title: "Portfolio Redesign", description: "This portfolio site", link: "https://yourproject.com/portfolio-redesign" },
    { title: "API Task List", description: "REST API with Node.js", link: "https://yourproject.com/api-task-list" },
    { title: "Weather Dashboard", description: "Responsive weather app", link: "https://yourproject.com/weather-dashboard" },
  ];

  return (
    <section id="projects" className="section fade-up">
      <h1 className="about-title">Projects</h1>

      <div className="about-cards">
        {projects.map((project) => (
          <div key={project.title} className="about-card fade-up">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}