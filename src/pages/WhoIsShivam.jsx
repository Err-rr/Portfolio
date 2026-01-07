import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { PROFILE_IMAGES } from "../assets/profiles";
import { FaBookOpen, FaMusic, FaPlane } from "react-icons/fa";
import "./WhoIsShivam.css";

export default function WhoIsShivam() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeProfile =
    location.state?.profile ||
    sessionStorage.getItem("activeProfile") ||
    "developer";

  const profileImage =
    "https://res.cloudinary.com/dm6s07nls/image/upload/v1766922204/WhatsApp_Image_2025-09-24_at_22.54.35_6f0a3a7c_p4niti.jpg";

  const go = (path) => {
    navigate(path, { state: { profile: activeProfile } });
  };

  return (
    <>
      <Navbar profileImage={PROFILE_IMAGES[activeProfile]} activeProfile={activeProfile} />

      <section className="who-page">
        <div className="who-container">

          {/* INTRO */}
          <div className="who-intro">
            <div className="who-image">
              <img src={profileImage} alt="Shivam" />
            </div>

            <div className="who-text">
              <h1>Hey, I’m Shivam.</h1>
              <p className="who-highlight">
                I enjoy building things that feel thoughtful, useful, and quietly powerful.
              </p>
            </div>
          </div>

          {/* ABOUT */}
          <div className="who-card">
            <p>
              I like understanding how things work even for systems, products, or ideas,
              and turning that understanding into clean, intuitive software.
            </p>
            <p>
              I’m curious by nature, focused by habit, and always learning through
              what I build and experience.
            </p>
          </div>

          {/* HOBBIES */}
          <div className="who-hobbies">
            <div className="hobby-card" onClick={() => go("/reading")}>
              <FaBookOpen />
              <span>Reading</span>
            </div>

            <div className="hobby-card" onClick={() => go("/music")}>
              <FaMusic />
              <span>Music</span>
            </div>

            <div className="hobby-card" onClick={() => go("/travelling")}>
              <FaPlane />
              <span>Travelling</span>
            </div>
          </div>

          {/* FOOTER */}
          <div className="who-footer">
            Still learning. Still building. Always curious.
          </div>

        </div>
      </section>
    </>
  );
}
