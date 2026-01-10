"use client";

export default function ResumePage() {
  return (
    <section id="resume" className="section fade-up">
      <h1>Resume</h1>
      <p>Feel free to download a copy of my resume below</p>

      <a
        href="/resume.pdf"
        download
        className="btn-secondary"
      >
        Download Resume
      </a>
    </section>
  );
}