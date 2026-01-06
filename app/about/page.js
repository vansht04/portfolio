import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="page">
      <Navbar />
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a second-year Computer Science student passionate about building web applications and software solutions.
        </p>
        <p>
          I enjoy solving challenging problems and creating projects that showcase my skills in React, Next.js, and full-stack development.
        </p>
      </section>
      <Footer />
    </div>
  );
}