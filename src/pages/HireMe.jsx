import "./Hireme.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { PROFILE_IMAGES } from "../assets/profiles";

export default function HireMe() {
  const location = useLocation();

  // fallback to developer if someone directly opens /hire-me
  const activeProfile = location.state?.profile || "developer";
  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar profileImage={profileImage} />

      <div className="hire-container">
        <div className="hire-card">
          <img
            src="https://res.cloudinary.com/dm6s07nls/image/upload/v1766922204/WhatsApp_Image_2025-09-24_at_22.54.35_6f0a3a7c_p4niti.jpg"
            alt="Shivam Kumar"
            className="hire-avatar"
          />

          <h1 className="hire-name">Shivam Kumar</h1>
          <p className="hire-role">Full-Stack & AI Developer</p>

          <p className="hire-bio">
            I build scalable web apps, AI-powered tools, and developer-centric
            products. Comfortable with React, Flask, ML pipelines, and clean
            system design.
          </p>

          <div className="hire-actions">
            <a
              href="https://www.linkedin.com/in/shivam-kumar-7aa525321"
              target="_blank"
              rel="noreferrer"
              className="hire-btn primary"
            >
              <FaLinkedin size={18} />
              View LinkedIn
            </a>

            <a href="/Resume.pdf" className="hire-btn secondary" target="_blank">
              View Resume
            </a>
          </div>
        </div>

        <p className="hire-chat">
          I’m always up for a chat or a coffee, feel free to reach out !!
        </p>

        <div className="hire-contact">
          <span>
            <FaEnvelope size={18}  color= "#e50914" /> shivaysoni3642@gmail.com
          </span>
          <span>
            <FaPhoneAlt size={18} color= "#e50914" /> +91 9142921275
          </span>
        </div>

        <p className="hire-footer">
          Or we can just talk tech over coffee ☕
        </p>
      </div>
    </>
  );
}
