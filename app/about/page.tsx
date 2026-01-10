export default function About() {
  return (
    <section className="section about-section">
      {/* Page Title */}
      <h1 className="section-title">About Me</h1>

      {/* Intro */}
      <p className="about-intro">
        Hello! I’m Vansh, a software engineer passionate about building clean, maintainable, and scalable web applications. 
        I enjoy learning new technologies and creating products that have a real impact.
      </p>

      {/* Who I Am */}
      <div className="about-card">
        <h2>Who I Am</h2>
        <p>
          I specialize in full-stack development using modern technologies such as React, Next.js, Node.js, and TailwindCSS. 
          I thrive on solving complex problems and delivering efficient, high-quality solutions.
        </p>
      </div>

      {/* Core Strengths */}
      <div className="about-card">
        <h2>Core Strengths</h2>
        <ul>
          <li>Frontend Development: Modern UI/UX, responsive design</li>
          <li>Backend Development: Scalable APIs and database design</li>
          <li>Problem Solving: Writing clean, efficient, and optimized code</li>
          <li>Collaboration: Working effectively in team environments</li>
        </ul>
      </div>

      {/* Key Achievements */}
      <div className="about-card">
        <h2>Key Achievements</h2>
        <ul>
          <li>Developed and deployed my personal portfolio using Next.js and Vercel</li>
          <li>Built several web applications as part of personal and freelance projects</li>
          <li>Contributed to open-source projects on GitHub</li>
        </ul>
      </div>
    </section>
  );
}