"use client";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="project-card fade-up">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link} className="project-link">View Project</Link>
    </div>
  );
}