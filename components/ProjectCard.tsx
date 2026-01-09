type Props = { title: string; description: string; link: string };

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View →</a>
    </div>
  );
}