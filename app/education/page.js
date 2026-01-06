import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EducationPage() {
  return (
    <div className="page">
      <Navbar />
      <section className="education">
        <h2>Education</h2>
        <p>Bachelor of Computer Science — University Name</p>
        <p>Expected Graduation: 2027</p>
      </section>
      <Footer />
    </div>
  );
}