import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="section fade-up">
      <h1>Resume</h1>
      <p className="fade-up">
        Feel free to view or download a copy of my resume below.
      </p>

      <div
        className="hero-buttons fade-up"
        style={{ marginTop: "2rem", justifyContent: "center" }}
      >
        {/* View Resume: opens PDF in new tab */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download
          className="btn-secondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}