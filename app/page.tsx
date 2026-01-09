import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <h1>Vansh Tejnani</h1>
        <h2>Software Engineer</h2>
        <p>
          I build clean, scalable, and production-ready web applications.
        </p>

        <a href="/resume.pdf" target="_blank" className="btn-primary">
          View Resume
        </a>
      </div>

      <Image
        src="/profile.jpg"
        alt="Vansh Tejnani"
        width={300}
        height={300}
        className="profile-img"
      />
    </section>
  );
}