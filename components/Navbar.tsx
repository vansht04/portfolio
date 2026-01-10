"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo with glow hover */}
      <Link href="/" className="logo">
        Vansh Tejnani
      </Link>

      <div className="nav-right">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/skills" className="nav-link">Skills</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}