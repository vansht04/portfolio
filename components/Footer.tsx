"use client";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>© {new Date().getFullYear()} Vansh Tejnani. All rights reserved.</p>
    </footer>
  );
}