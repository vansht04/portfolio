import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="page">
      <Navbar />
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: <a href="https://github.com/YourUsername" target="_blank">YourUsername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/YourUsername" target="_blank">Your Name</a></p>
      </section>
      <Footer />
    </div>
  );
}