"use client";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Vansh Tejnani</a>
      <div className="nav-right">
        <a href="/about" target="_blank" rel="noopener noreferrer" className="nav-link">About</a>
        <a href="/projects" target="_blank" rel="noopener noreferrer" className="nav-link">Projects</a>
        <a href="/skills" target="_blank" rel="noopener noreferrer" className="nav-link">Skills</a>
        <a href="/resume" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        <a href="/contact" target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}