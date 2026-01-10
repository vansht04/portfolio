"use client";

export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React / Next.js", level: 95 },
    { name: "Node.js / Express", level: 80 },
    { name: "Python", level: 75 },
    { name: "CSS / Tailwind", level: 90 },
  ];

  return (
    <section id="skills" className="section skills-section fade-up">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}