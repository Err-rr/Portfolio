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
    date: "Jun 2026 - Present",
    title: "Full Stack Developer",
    org: "FocusDesk, Remote",
    tech: "Node.js • PostgreSQL • REST APIs • Redis",
    desc: [
      "Developing backend for authentication, session orchestration, and platform workflows.",
      "Integrated Redis caching to reduce API latency by 30% while improving throughput.",
      "Designing scalable backend systems focused on reliability and performance.",
    ],
  },

  {
    type: "work",
    side: "right",
    date: "May 2025 - Sep 2025",
    title: "Full Stack Developer",
    org: "TripXPay, Hybrid",
    tech: "Next.js • Firebase • Node.js • REST APIs",
    desc: [
      "Built production-ready features for a B2B travel-fintech platform.",
      "Developed backend services supporting e-KYC workflows and secure credit transactions.",
      "Migrated React to Next.js with SSR while improving SEO and application performance.",
    ],
  },

  {
   type: "work",
   side: "left",
   date: "May 2025 - Aug 2025",
   title: "AI Frontend Trainer",
   org: "Outlier, Remote",
   tech: "React • Next.js • JavaScript • Prompt Engineering",
   desc: [
      "Contributed to training AI models for generating modern, responsive frontend interfaces.",
      "Evaluated model outputs, refined prompts, and improved adherence to production-grade UI.",
      "Provided feedback to enhance model accuracy, design consistency, and overall user experience.",
    ],
  },

  {
    type: "edu",
    side: "right",
    date: "Aug 2024 - Present",
    title: "Bachelor of Technology",
    org: "Delhi Technological University (DTU)",
    desc: [
      "B.Tech in Mechanical Engineering",
      "CGPA: 8.25",
      "Active in software engineering, cybersecurity, and AI projects.",
    ],
  },

  {
    type: "edu",
    side: "left",
    date: "Apr 2021 - Apr 2023",
    title: "Senior Secondary (Class XII)",
    org: "New Modern Public School, Bihar",
    desc: [
      "CBSE Board",
      "Scored 88%",
      "Served as School Head Boy.",
    ],
  },

  {
    type: "edu",
    side: "right",
    date: "Apr 2019 - Apr 2021",
    title: "Secondary (Class X)",
    org: "Vidya Vihar Residential School, Bihar",
    desc: [
      "CBSE Board",
      "Scored 94%",
      "Led Quality Control Circle (QCC) team activities.",
    ],
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
          Experience & Education
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
