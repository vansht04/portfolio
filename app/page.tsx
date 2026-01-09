import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <Image src="/profile.jpg" alt="Profile" width={300} height={300} className="profile" />
        </div>
        <div className="hero-text">
          <h1>Vansh Tejnani</h1>
          <p className="hero-subtitle">Aspiring Software Developer</p>
          <p className="hero-description">
            Building scalable and modern web applications with clean code and great UX.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" className="btn-primary">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}