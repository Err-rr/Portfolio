import Navbar from "../components/Navbar/Navbar";
import "./Certifications.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import developerProfile from "../assets/profiles/developer.png";

export default function Certifications() {
  return (
    <>
      <Navbar profileImage={developerProfile} activeProfile="developer" />

      <section className="certifications-page">
        <h1>Certifications</h1>

        <div className="certifications-grid single">
          <a
            href="https://drive.google.com/file/d/1TuTpKyE4fP0ruKgZlEUEtAFAqLLN0sQL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card center"
          >
            {/* Icon */}
            <div className="cert-icon-wrapper">
              <span className="cert-icon-unstop">U</span>
            </div>

            {/* Content */}
            <h3>Web Developer</h3>
            <p>Unstop</p>

            {/* External link */}
            <FaExternalLinkAlt className="cert-link-icon" />
          </a>
        </div>
      </section>
    </>
  );
}
