"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section fade-up">
      <h1>Contact</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="success-message">
          <h2>
            Thanks for reaching out! 👋
            <br />
            Vansh will get back to you as soon as he can!
          </h2>
        </div>
      )}
    </section>
  );
}