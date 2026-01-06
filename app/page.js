"use client"; // Needed for any interactive JS

export default function HomePage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
          <span className="name">Your Name</span>
        </a>
        <div className="nav-links">
          <a href="/projects">Projects</a>
          <a href="/about">About Me</a>
          <a href="/socials">Socials</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <video autoPlay muted loop className="hero-bg">
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h1>Hi, I'm Your Name</h1>
          <p>Software Engineer • Creator • Innovator</p>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>
        </div>

        {/* Floating Shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
      </section>

      <footer>© 2026 Your Name</footer>
    </>
  );
}