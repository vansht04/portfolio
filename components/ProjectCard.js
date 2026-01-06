// components/ProjectCard.js
export default function ProjectCard({ title, description, link, img }) {
  return (
    <div className="project-card">
      {img && <img src={img} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" className="btn">
        View Project
      </a>
    </div>
  );
}