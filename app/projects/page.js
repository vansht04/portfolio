import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="page">
      <Navbar />
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <ProjectCard
            title="Portfolio Website"
            description="My personal portfolio built with Next.js and React."
            link="https://github.com/YourUsername/portfolio"
            img="/assets/project1.png"
          />
          <ProjectCard
            title="Weather App"
            description="A React app fetching live weather data from an API."
            link="https://weatherapp.example.com"
            img="/assets/project2.png"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}