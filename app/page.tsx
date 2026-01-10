"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="hero-section fade-up">
      <div className="hero-container">
        {/* Profile Image */}
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
          <h1 className="fade-up">Hey, I'm Vansh Tejnani!</h1>
          <p className="hero-subtitle fade-up">Aspiring Software Developer</p>
          <p className="hero-description fade-up">
            I specialize in building scalable, high-quality web applications
            with a strong focus on clean architecture, performance, and
            user-centered design.
          </p>

          <div className="hero-buttons fade-up">
            {/* Resume button stays opening in a new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>

            {/* Projects button opens in the same tab */}
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}