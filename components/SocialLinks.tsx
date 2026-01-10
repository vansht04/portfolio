"use client";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="socials fade-up">
      <a href="https://github.com/vansht04" target="_blank" rel="noopener noreferrer">
        <div className="icon-container">
          <Image src="/github.png" alt="GitHub" width={32} height={32} style={{ objectFit: "contain" }} />
        </div>
      </a>
      <a href="https://linkedin.com/in/vansh-tejnani" target="_blank" rel="noopener noreferrer">
        <div className="icon-container">
          <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} style={{ objectFit: "contain" }} />
        </div>
      </a>
    </div>
  );
}