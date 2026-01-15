"use client";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    { title: "Relocate Right", description: "Relocate Right is a full-stack, map-driven location recommendation app designed to help users find the best areas to live based on personal preferences. Built with React, TypeScript, Tailwind CSS, and Internet Computer technologies, the app delivers data-backed relocation insights through an intuitive interface and OpenStreetMap visualization.", link: "https://relocateright.vercel.app/" },
    { title: "BloomLoop", description: "BloomLoop is a social habit-tracking app where daily habits grow into a virtual garden. Users track habits, earn achievements, customize their space, and interact with friends through shared gardens and leaderboards—all with smooth animations and a calming, nature-inspired design that works on desktop and mobile.", link: "https://bloomloop-4ns.caffeine.xyz/" },
    { title: "Active+", description: "Active+ is a local-first, full-featured fitness management app designed to help users plan workouts, track strength and cardio performance, and personalize their training experience. Built with a privacy-focused, offline-friendly architecture, the app delivers structured exercise management, performance insights, and customizable themes through a clean, intuitive interface.", link: "https://activeplus-coq.caffeine.xyz/" },
    { title: "Quadratic Nerds", description: "Quadratic Nerds is an interactive educational math game built in Processing to help Grade 10 students practice factoring quadratic equations. The game features randomized quadratic questions, clickable answer buttons, score tracking, and immediate feedback, creating an engaging and structured way for students to strengthen their problem-solving skills through gameplay.", link: "https://github.com/vansht04/Quadratic-Nerds" },
    { title: "Turtle Race Simulation", description: "The Turtle Race project is a Python program that simulates a race between four turtles using the turtle graphics module. Each turtle moves at a random speed, making every race different. The program uses object-oriented programming to control the race setup and logic. A countdown starts the race, and a victory message is shown when a turtle wins.", link: "https://github.com/vansht04/Real-Time-Turtle-Race-Simulation" },
    { title: "Animated Party Lights", description: "This project uses Python’s turtle graphics module to create a colorful light display on a black background. Random positions, directions, and colors are generated to draw glowing lines and dots across the screen. Each “light” appears in a different place, making the design unique every time the program runs. The project demonstrates randomness, functions, and creative use of turtle graphics.", link: "https://github.com/vansht04/Animated-Party-Lights-Visualization" },
  ];

  return (
    <section id="projects" className="section fade-up">
      <h1 className="about-title">Projects</h1>

      <div className="about-cards">
        {projects.map((project) => (
          <div key={project.title} className="about-card fade-up">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.link} className="project-link" target="_blank">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}