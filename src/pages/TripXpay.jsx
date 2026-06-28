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
              href="https://www.tripxpay.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dm6s07nls/image/upload/v1766940368/Screenshot_2025-12-28_221135_nqkl1a.png"
                alt="TripXpay preview"
              />
            </a>

            {/* DESCRIPTION BELOW IMAGE */}
            <p className="project-image-description">
              TripXPay is a B2B travel-fintech platform that streamlines travel financing through real-time booking, flexible credit workflows, and secure payment infrastructure for travel agencies.
            </p>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="project-content red-box">
            <div className="project-header">
              <h1>TripXPay</h1>
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
              Building scalable technology for modern travel financing.
            </p>

            <div className="project-description">
              <p>
                Developed production-ready full-stack features using Next.js and Firebase, implementing e-KYC workflows, secure credit transactions, and backend services for reliable financial operations.
              </p>

              <p>
                Migrated the platform from React to Next.js with server-side rendering, improving SEO, application performance, and core user and admin workflows while resolving production-level issues.
              </p>
            </div>

            <div className="project-tech">
              <span>Next.js</span>
              <span>Firebase</span>
              <span>JavaScript</span>
              <span>REST APIs</span>
              <span>FinTech</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
