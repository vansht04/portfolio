import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <div className="project-scroll">
        <ProjectCard
          title="Project One"
          description="Full-stack web application using Next.js and Node.js"
          link="https://github.com/yourname/project"
        />
        <ProjectCard
          title="Project Two"
          description="React Native mobile app"
          link="https://github.com/yourname/project2"
        />
        {/* Add more projects here */}
      </div>
    </section>
  );
}