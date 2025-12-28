import "./hero.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

export default function HeroBanner({ bgImage, title, description }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Netflix-style overlay */}
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

        <p className="hero-desc">{description}</p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn play"
          >
            <FaPlay />
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn info"
          >
            <FaInfoCircle />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-fade" />
    </section>
  );
}
