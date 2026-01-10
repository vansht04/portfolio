"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo / Name */}
      <Link href="/" className="logo">Vansh Tejnani</Link>

      <div className="nav-right">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/skills" className="nav-link">Skills</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        <Link href="/contact" className="nav-link">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}