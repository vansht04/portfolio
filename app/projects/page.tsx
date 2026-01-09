import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Task Manager", description: "Full-stack task manager app", link: "#" },
    { title: "E-Commerce Store", description: "Next.js storefront with payments", link: "#" },
    { title: "Chat App", description: "Real-time chat app with WebSockets", link: "#" },
    { title: "Portfolio Redesign", description: "This portfolio site", link: "#" },
    { title: "API Task List", description: "REST API with Node.js", link: "#" },
    { title: "Weather Dashboard", description: "Responsive weather app", link: "#" },
  ];

  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div className="project-scroll">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}