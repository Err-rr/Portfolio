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
              A preview of the TripXpay platform showcasing real-time travel
              payment workflows, agency-focused dashboards, and scalable
              transaction handling built for B2B travel operations.
            </p>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="project-content red-box">
            <div className="project-header">
              <h1>TripXpay</h1>
              <a
                href="https://tripxpay.in"
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <p className="project-tagline">
              One platform, everything you need for travel payments.
            </p>

            <div className="project-description">
              <p>
                TripXpay is a B2B travel-fintech platform designed to simplify and
                streamline travel payments for agencies across India. It enables
                real-time booking, flexible credit workflows, and scalable
                payment infrastructure.
              </p>

              <p>
                I contributed as a core full-stack developer, working across
                frontend architecture, backend APIs, and secure payment flows,
                ensuring reliability at scale.
              </p>
            </div>

            <div className="project-tech">
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Firebase</span>
              <span>Payments</span>
              <span>Scalable Systems</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
