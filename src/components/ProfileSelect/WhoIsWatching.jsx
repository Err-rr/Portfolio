import { useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 Keyboard navigation (Netflix-style)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % profiles.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? profiles.length - 1 : prev - 1
        );
      }
      if (e.key === "Enter") {
        window.location.href = profiles[activeIndex].route;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <div className="watching-container">
      <h1 className="watching-title">Who’s watching?</h1>

      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div
            key={profile.name}
            className={`profile-card ${
              index === activeIndex ? "active" : ""
            }`}
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
