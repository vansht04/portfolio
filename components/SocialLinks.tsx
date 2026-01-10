"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="socials">
      <a
        href="https://github.com/vansht04"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub size={40} />
      </a>

      <a
        href="https://linkedin.com/in/vansh-tejnani"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  );
}