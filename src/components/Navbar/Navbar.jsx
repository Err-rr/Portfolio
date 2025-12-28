import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ profileImage, activeProfile }) {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path, { state: { profile: activeProfile } });
  };

  return (
    <nav className="netflix-navbar">
      <div className="nav-left">
        <span className="logo">SHIVAM KUMAR</span>

        <ul className="nav-links">
          <li onClick={() => go("/profiles")}>Home</li>
          <li onClick={() => go("/professional")}>Professional</li>
          <li onClick={() => go("/skills")}>Skills</li>
          <li onClick={() => go("/projects")}>Projects</li>
        </ul>
      </div>

      <div className="nav-right">
        {/* Hire Me already passes state correctly */}
        <Link
          to="/hire-me"
          state={{ profile: activeProfile }}
          className="hire-btn"
        >
          Hire Me
        </Link>

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
