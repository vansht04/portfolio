"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section>
      <h1>Contact</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="success-message">
          <h2>Thanks for reaching out! 👋</h2>
          <p>
            I appreciate you taking the time to contact me.
            I’ll get back to you as soon as possible.
          </p>
          <p>
            In the meantime, feel free to connect with me on
            GitHub or LinkedIn below.
          </p>
        </div>
      )}

      <div className="socials">
        <a href="https://github.com/vansht04" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" width={32} height={32} />
        </a>
        <a href="https://linkedin.com/in/vansh-tejnani" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
        </a>
      </div>
    </section>
  );
}