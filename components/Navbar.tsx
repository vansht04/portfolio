"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo">Vansh Tejnani</Link> 

      <div className="nav-right">
        {/* All links open in the same tab except Resume button on homepage */}
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/skills" className="nav-link">Skills</Link>

        {/* Resume tab now opens the Resume page in the same tab */}
        <Link href="/resume" className="nav-link">Resume</Link>

        <Link href="/contact" className="nav-link">Contact</Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}