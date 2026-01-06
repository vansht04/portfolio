export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Your Name</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume.pdf" target="_blank">Resume</a></li>
      </ul>
    </nav>
  );
}