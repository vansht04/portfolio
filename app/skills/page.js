import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SkillsPage() {
  return (
    <div className="page">
      <Navbar />
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React & Next.js</li>
          <li>JavaScript / TypeScript</li>
          <li>HTML & CSS / Tailwind</li>
          <li>Node.js & Express</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}