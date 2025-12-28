import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ profileImage, activeProfile }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => {
    navigate(path, { state: { profile: activeProfile } });
    setMenuOpen(false); // close menu on navigation (mobile)
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
          onClick={() => navigate("/profiles")}
        />
      </div>
    </nav>
  );
}
