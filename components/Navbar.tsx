"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        YourName.dev
      </Link>

      <div className="nav-right">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}