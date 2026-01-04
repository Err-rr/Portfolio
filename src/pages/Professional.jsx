import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import "./Professional.css";

import { PROFILE_IMAGES } from "../assets/profiles";

const timelineData = [
  {
    type: "work",
    side: "left",
    date: "May 2025 - present",
    title: "Full stack Developer",
    org: "TripXpay, Hybrid",
    tech: "Next.js, Firebase, JavaScript, HTML, CSS",
    desc: [
      "Contributing as a core tech team member.",
      "Driving full-stack development and CyberSec efforts.",
      "Building scalable, user-friendly features.",
    ],
  },
  {
    type: "work",
    side: "right",
    date: "May 2025 - Aug 2025",
    title: "Frontend Developer (UI/UX)",
    org: "Outlier, Remote",
    tech: "Next.js, React, JavaScript, HTML, CSS",
    desc: [
      "Crafting UI/UX models.",
      "Selected after hackathon success.",
    ],
  },
  {
    type: "edu",
    side: "left",
    date: "Aug 2024 – Present",
    title: "Bachelor’s Degree",
    org: "Delhi Technological University",
    desc: [
      "Pursuing B.Tech in Mechanical Engineering.",
      "Won 2x Hackathons.",
    ],
  },
  {
    type: "edu",
    side: "right",
    date: "Apr 2021 – Apr 2023",
    title: "Class XII",
    org: "New Modern Public School, Bihar",
    desc: ["Student Council - Headboy", "Scored 88%"],
  },
  {
    type: "edu",
    side: "left",
    date: "Apr 2019 – Apr 2021",
    title: "Class X",
    org: "Vidya Vihar Residential School, Bihar",
    desc: ["QCC - Team Leader", "Scored 94%"],
  },
];

export default function Professional() {
  const itemsRef = useRef([]);
  const location = useLocation();

  // 🔥 dynamic profile logic (same pattern you learned)
  const activeProfile = location.state?.profile || "developer";
  const profileImage = PROFILE_IMAGES[activeProfile];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        profileImage={profileImage}
        activeProfile={activeProfile}
      />

      <section className="professional-container">
        <h1 className="professional-heading">
          Work Experience & Education Timeline
        </h1>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`timeline-item ${item.side}`}
            >
              <div className="timeline-icon">
                {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
              </div>

              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.org}</h4>

                {item.tech && <p className="tech">{item.tech}</p>}

                <ul>
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="timeline-end">
            <FaStar />
          </div>
        </div>
      </section>
    </>
  );
}
