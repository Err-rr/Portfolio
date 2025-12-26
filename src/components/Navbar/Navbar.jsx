import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ profileImage }) {
  const navigate = useNavigate();

  return (
    <nav className="netflix-navbar">
      <div className="nav-left">
        <span className="logo">SHIVAM KUMAR</span>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/professional")}>Professional</li>
          <li onClick={() => navigate("/skills")}>Skills</li>
          <li onClick={() => navigate("/projects")}>Projects</li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="hire-btn">Hire Me</button>

        <img
          src={profileImage}
          alt="profile"
          className="profile-avatar"
          onClick={() => navigate("/")}
        />
      </div>
    </nav>
  );
}
