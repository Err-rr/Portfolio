import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Certifications.css";

import {
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { PROFILE_IMAGES } from "../assets/profiles";

const certifications = [
  {
    title: "Data Structures & Algorithms in C++",
    issuer: "Unstop",
    link: "https://unstop.com/api/course/certificate/e1abebfe-a6b5-42fb-9f0a-49fdebf7f37b/view",
  },
  {
    title: "MERN Stack Developer",
    issuer: "Unstop",
    link: "https://unstop.com/api/course/certificate/61f4adc2-a142-432a-8ce9-55f3b8053646/view",
  },
  {
    title: "C++ Programming",
    issuer: "Unstop",
    link: "https://unstop.com/api/course/certificate/b805a8f6-efa8-4708-afcb-468a5503028a/view",
  },
  {
    title: "Database Management System",
    issuer: "Unstop",
    link: "https://unstop.com/api/course/certificate/458e9f19-d345-4312-89b1-1221b661e640/view",
  },
  {
    title: "Ethical Hacking",
    issuer: "Unstop",
    link: "https://unstop.com/api/course/certificate/0cb1b4b7-3db5-40b9-aa53-02800ff7aa29/view",
  },
];

export default function Certifications() {
  const location = useLocation();

  const activeProfile = location.state?.profile || "developer";
  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar
        profileImage={profileImage}
        activeProfile={activeProfile}
      />

      <section className="certifications-page">
        <h1>Certifications</h1>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-icon-wrapper">
                <FaGraduationCap className="cert-icon" />
              </div>

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <FaExternalLinkAlt className="cert-link-icon" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}