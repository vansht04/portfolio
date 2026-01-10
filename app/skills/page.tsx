"use client";
import { 
  FaCode, FaDatabase, FaReact, FaPython, FaCss3Alt, FaNodeJs, 
  FaUsers, FaLightbulb, FaProjectDiagram, FaGitAlt, FaHtml5, FaJava 
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "JavaScript", description: "Interactive web pages", icon: <FaCode /> },
    { name: "TypeScript", description: "Static typing", icon: <FaCode /> },
    { name: "React", description: "UI components", icon: <FaReact /> },
    { name: "Next.js", description: "Server-side rendering", icon: <FaReact /> },
    { name: "Node.js", description: "Backend development", icon: <FaNodeJs /> },
    { name: "Express", description: "Server framework", icon: <FaNodeJs /> },
    { name: "Python", description: "Scripting & automation", icon: <FaPython /> },
    { name: "CSS / Tailwind", description: "Styling websites", icon: <FaCss3Alt /> },
    { name: "HTML", description: "Markup language", icon: <FaHtml5 /> },
    { name: "MongoDB", description: "NoSQL database", icon: <FaDatabase /> },
    { name: "Git", description: "Version control", icon: <FaGitAlt /> },
    { name: "Teamwork", description: "Collaboration & communication", icon: <FaUsers /> },
    { name: "Problem Solving", description: "Analyzing & solving issues", icon: <FaLightbulb /> },
    { name: "Project Management", description: "Organizing tasks", icon: <FaProjectDiagram /> },
    { name: "Java", description: "Object-oriented programming", icon: <FaJava /> },
  ];

  return (
    <section id="skills" className="skills-section fade-up">
      <h1>Skills</h1>

      <div className="skills-cards">
        {skills.map((skill, index) => (
          <div key={skill.name} className={`about-card fade-up ${index > 5 ? 'delayed' : ''}`}>
            <div className="card-icon">{skill.icon}</div>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}