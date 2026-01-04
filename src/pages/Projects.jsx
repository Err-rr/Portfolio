import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Projects.css";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROFILE_IMAGES } from "../assets/profiles";

const projects = [
  {
    title: "CV-Based Attendance System",
    description:
      "Attendance is marked automatically using face recognition. Built to work seamlessly in classrooms and labs with real-time recognition.",
    tech: ["React Native", "AWS", "Face Recognition"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940124/Screenshot_2025-12-28_220527_tkvcvl.png",
    liveLink: "",
    githubLink: "https://github.com/dtu-apps-student-team/cv-attendance-app",
  },
  {
    title: "EcoShala",
    description:
      "A gamified environmental learning platform with real-world eco activities, AI-powered plant disease detection, Trash-to-Treasure system, and a 3D India-focused Eco Explorer.",
    tech: ["React", "JavaScript", "AI", "3D Explorer"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766939889/Screenshot_2025-09-11_211529_qnzabx.png",
    liveLink: "https://www.youtube.com/watch?v=qMRkwGMgb14",
    githubLink: "https://github.com/Err-rr/EcoShala",
  },
  {
    title: "TripXPay",
    description:
      "A B2B travel-fintech startup offering Travel Now Pay Later. Contributing as a core tech member building scalable, real-time financing features.",
    tech: ["FinTech", "Full Stack", "Scalable Systems"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940368/Screenshot_2025-12-28_221135_nqkl1a.png",
    liveLink: "https://www.tripxpay.in/",
    githubLink: "",
  },
  {
    title: "Pic2Pick",
    description:
      "AI-powered visual product search. Upload or link an image and instantly find visually similar products using OpenAI CLIP embeddings.",
    tech: ["Python", "Streamlit", "OpenAI CLIP", "NumPy"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940691/Screenshot_2025-12-28_222054_w0njna.png",
    liveLink: "https://pic2pick.streamlit.app/",
    githubLink: "https://github.com/Err-rr/Pic2Pick",
  },
  {
    title: "XrayBotix",
    description:
      "A browser-Xray Fracture detection Website using TensorFlow.js and Teachable Machine. Works with webcam or image upload and no backend required.",
    tech: ["TensorFlow.js", "Teachable Machine", "JavaScript"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940148/Screenshot_2025-12-28_220851_rhayd3.png",
    liveLink: "https://xraybotixai.netlify.app/",
    githubLink: "https://github.com/Err-rr/XrayBotix",
  },
  {
    title: "BraniFy",
    description:
      "A lightweight flashcard web app that helps users learn and retain concepts efficiently using custom decks. It makes revision fun and effective.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940145/Screenshot_2025-12-28_221045_cm3vns.png",
    liveLink: "https://branify-01.netlify.app/",
    githubLink: "https://github.com/Err-rr/BraniFy",
  },
];

export default function Projects() {
  const location = useLocation();
  const activeProfile = location.state?.profile || "developer";
  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar profileImage={profileImage} activeProfile={activeProfile} />

      <section className="projects-page">
        <h1 className="projects-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                {/* TITLE + ICONS */}
                <div className="project-header">
                  <h2>{project.title}</h2>

                  <div className="project-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
