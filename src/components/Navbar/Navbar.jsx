import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({
  profileImage: profileImageProp,
  activeProfile: activeProfileProp,
}) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  
  const activeProfile =
    activeProfileProp ||
    sessionStorage.getItem("activeProfile") ||
    "developer";

  // persist every render-safe
  sessionStorage.setItem("activeProfile", activeProfile);

  const profileImage =
    profileImageProp ||
    `/profiles/${activeProfile}.png`; 

  const go = (path) => {
    sessionStorage.setItem("activeProfile", activeProfile);
    navigate(path, { state: { profile: activeProfile } });
    setMenuOpen(false);
  };

  return (
    <nav className="netflix-navbar">
      <div className="nav-left">
        <span className="logo" onClick={() => go("/profiles")}>
          SHIVAM KUMAR
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => go("/profiles")}>Home</li>
          <li onClick={() => go("/professional")}>Professional</li>
          <li onClick={() => go("/skills")}>Skills</li>
          <li onClick={() => go("/projects")}>Projects</li>
        </ul>
      </div>

      <div className="nav-right">
        <Link
          to="/hire-me"
          state={{ profile: activeProfile }}
          className="hire-btn"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </Link>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        <img
          src={profileImage}
          alt="profile"
          className="profile-avatar"
          onClick={() => go("/profiles")}
        />
      </div>
    </nav>
  );
}
