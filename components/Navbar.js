// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo-container">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <span className="name">Your Name</span>
      </Link>
      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/education">Education</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}