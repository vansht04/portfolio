"use client";
import { FaLaptopCode, FaUsers, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section about-section fade-up">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro fade-up">
        I'm a software engineer passionate about building clean, maintainable, and scalable applications. 
        I enjoy learning new technologies and crafting products that make an impact.
      </p>

      <div className="about-cards">
        <div className="about-card fade-up">
          <div className="card-icon"><FaLaptopCode /></div>
          <h2>Technical Skills</h2>
          <p>Proficient in modern web technologies and building scalable apps.</p>
        </div>
        <div className="about-card fade-up">
          <div className="card-icon"><FaUsers /></div>
          <h2>Collaboration</h2>
          <p>Strong team player with experience in agile development and mentorship.</p>
        </div>
        <div className="about-card fade-up">
          <div className="card-icon"><FaLightbulb /></div>
          <h2>Problem Solving</h2>
          <p>Adept at analyzing complex problems and designing effective solutions.</p>
        </div>
        <div className="about-card fade-up">
          <div className="card-icon"><FaProjectDiagram /></div>
          <h2>Project Management</h2>
          <p>Experienced in managing small to medium-sized projects efficiently.</p>
        </div>
      </div>
    </section>
  );
}