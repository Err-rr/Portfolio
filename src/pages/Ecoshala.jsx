import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { PROFILE_IMAGES } from "../assets/profiles";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectDetails.css";

export default function Reading() {
  const location = useLocation();

  const activeProfile =
    location.state?.profile ||
    sessionStorage.getItem("activeProfile") ||
    "developer";

  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar
        profileImage={profileImage}
        activeProfile={activeProfile}
      />

      <section className="project-detail-page">
        <div className="project-detail-card">

          {/* LEFT – IMAGE + DESCRIPTION */}
          <div className="project-image red-box">
            <a
              href="https://www.youtube.com/watch?v=qMRkwGMgb14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dm6s07nls/image/upload/v1766939889/Screenshot_2025-09-11_211529_qnzabx.png"
                alt="EcoShala preview"
              />
            </a>

            <p className="project-image-description">
              EcoShala is a full-stack gamified learning platform that promotes environmental awareness through AI-assisted learning, real-world sustainability challenges, and interactive student engagement.
            </p>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="project-content red-box">
            <div className="project-header">
              <h1>EcoShala</h1>
              <a
                href="https://www.youtube.com/watch?v=qMRkwGMgb14"
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <p className="project-tagline">
              A scalable platform where sustainability meets gamified learning.
            </p>

            <div className="project-description">
              <p>
                Built a full-stack platform featuring authentication, leaderboards, adaptive quizzes, AI-powered plant disease detection, waste-to-treasure recommendations, and immersive environmental learning experiences.
              </p>

              <p>
                Engineered the application using React and Firebase, integrating Gemini-powered learning assistance, real-time activity tracking, reward systems, and scalable data models for student engagement.
              </p>
            </div>

            <div className="project-tech">
              <span>React</span>
              <span>Firebase</span>
              <span>JavaScript</span>
              <span>Gemini API</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
