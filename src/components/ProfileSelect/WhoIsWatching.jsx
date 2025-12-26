import { useEffect, useRef, useState } from "react";
import "./profile.css";

import developerImg from "../../assets/profiles/developer.png";
import recruiterImg from "../../assets/profiles/recruiter.png";
import stalkerImg from "../../assets/profiles/stalker.png";

const profiles = [
  { name: "Developer", img: developerImg, route: "/developer" },
  { name: "Recruiter", img: recruiterImg, route: "/recruiter" },
  { name: "Stalker", img: stalkerImg, route: "/stalker" },
];

export default function WhoIsWatching() {
  const [activeIndex, setActiveIndex] = useState(null); // 👈 IMPORTANT
  const [hasInteracted, setHasInteracted] = useState(false);
  const cardRefs = useRef([]);

  // 🎮 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setHasInteracted(true);
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % profiles.length
        );
      }

      if (e.key === "ArrowLeft") {
        setHasInteracted(true);
        setActiveIndex((prev) =>
          prev === null ? profiles.length - 1 : prev === 0 ? profiles.length - 1 : prev - 1
        );
      }

      if (e.key === "Enter" && activeIndex !== null) {
        window.location.href = profiles[activeIndex].route;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // 🎯 Focus ONLY after interaction
  useEffect(() => {
    if (hasInteracted && activeIndex !== null) {
      cardRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, hasInteracted]);

  return (
    <div className="watching-container">
      <h1 className="watching-title">Who’s watching?</h1>

      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div
            key={profile.name}
            ref={(el) => (cardRefs.current[index] = el)}
            className="profile-card"
            tabIndex={0}
            onClick={() => (window.location.href = profile.route)}
          >
            <img src={profile.img} alt={profile.name} />
            <span>{profile.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
