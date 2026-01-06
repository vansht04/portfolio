export default function Skills() {
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "CSS"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}