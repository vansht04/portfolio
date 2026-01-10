import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Profile Image Wrapper */}
        <div className="hero-image">
          <div className="profile-wrapper">
            <Image
              src="/pfp.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="profile"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <h1>Hey, I'm Vansh Tejnani!</h1>
          <p className="hero-subtitle">Aspiring Software Developer</p>
          <p className="hero-description">
            I specialize in building scalable, high-quality web applications
            with a strong focus on clean architecture, performance, and
            user-centered design.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>

            <a
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}