import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="page">
      <Navbar />
      <section className="hero">
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Hi, I'm Your Name</h1>
        <p>Second-year CS student • Aspiring Software Engineer</p>
        <a href="/assets/resume.pdf" target="_blank" className="btn">
          View Resume
        </a>
      </section>
      <Footer />
    </div>
  );
}