import "./hero.css";

export default function HeroBanner({ bgImage, title, description }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="play"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="hero-fade" />
    </section>
  );
}
