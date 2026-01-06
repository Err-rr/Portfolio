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
                alt="TripXpay preview"
              />
            </a>

            {/* 👇 DESCRIPTION BELOW IMAGE */}
            <p className="project-image-description">
              EcoShala is a gamified environmental learning platform designed to make sustainability engaging, interactive, and action-driven for students across India.
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
             One platform where sustainability meets gamified learning.
            </p>

            <div className="project-description">
              <p>
               The platform includes eco-quests, plant health detection using AI, waste-to-repurpose tools, scoring systems, badges, and interactive activities that encourage real-world eco-friendly actions.
              </p>
               
              <p>
                I designed and developed the core platform experience, implementing gamification logic, AI-powered features, activity tracking, and a scalable frontend–backend architecture to support learning at scale.
              </p>
            </div>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Html</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
