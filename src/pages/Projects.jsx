import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Projects.css";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROFILE_IMAGES } from "../assets/profiles";


const projects = [
  {
    title: "Deep Packet Inspection System",
    description:
      "Built a high-performance C++ packet inspection engine that parses L2-L7 traffic, identifies application protocols, and applies multi-threaded flow-based filtering for scalable network analysis.",
    tech: [
      "C++17",
      "Multithreading",
      "PCAP",
      "TCP/IP",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1782616618/Screenshot_2026-06-28_084640_np4p7v.png",
    liveLink: "",
    githubLink: "https://github.com/Err-rr/DPI-DeepPacketInspectionSystem",
  },

  {
    title: "Ethicly",
    description:
      "Developed an AI fairness auditing platform that evaluates machine learning models using industry-standard fairness metrics, interactive visualizations, automated reports, and explainable AI insights.",
    tech: [
      "React",
      "Flask",
      "Python",
      "Machine Learning",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1782616397/Screenshot_2026-06-28_084247_dhj4gj.png",
    liveLink: "https://ethicly-123.web.app/",
    githubLink: "https://github.com/Err-rr/Ethicly",
  },

  {
    title: "EcoShala",
    description:
      "Engineered a full-stack gamified learning platform featuring AI-assisted learning, plant disease detection, sustainability challenges, leaderboards, and immersive 3D environmental exploration.",
    tech: [
      "React",
      "Firebase",
      "Three.js",
      "JavaScript",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766939889/Screenshot_2025-09-11_211529_qnzabx.png",
    liveLink: "https://www.youtube.com/watch?v=qMRkwGMgb14",
    githubLink: "https://github.com/Err-rr/EcoShala",
  },

  {
    title: "Pic2Pick",
    description:
      "Built a visual similarity search engine that retrieves semantically related products using CLIP embeddings, vector search, and optimized inference pipelines for fast image retrieval.",
    tech: [
      "Python",
      "CLIP",
      "FAISS",
      "Streamlit",
      "PyTorch",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940691/Screenshot_2025-12-28_222054_w0njna.png",
    liveLink: "https://pic2pick.streamlit.app/",
    githubLink: "https://github.com/Err-rr/Pic2Pick",
  },

  {
    title: "TripXPay",
    description:
      "Contributed to a B2B travel-fintech platform by developing scalable full-stack features, improving platform reliability, and building production-ready financial workflows.",
    tech: [
      "Next.js",
      "Node.js",
      "REST APIs",
      "FinTech",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940368/Screenshot_2025-12-28_221135_nqkl1a.png",
    liveLink: "https://www.tripxpay.in/",
    githubLink: "",
  },

  {
    title: "CV-Based Attendance System",
    description:
      "Developed a mobile attendance system that automates classroom check-ins using facial recognition with real-time identification and cloud-backed attendance management.",
    tech: [
      "React Native",
      "AWS",
      "CV",
      "Face Recognition",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940124/Screenshot_2025-12-28_220527_tkvcvl.png",
    liveLink: "",
    githubLink: "https://github.com/dtu-apps-student-team/cv-attendance-app",
  },

  {
    title: "XrayBotix",
    description:
      "Built a browser-based fracture detection application that performs on-device X-ray inference using TensorFlow.js without requiring backend infrastructure.",
    tech: [
      "TensorFlow",
      "JavaScript",
      "CV",
      "Teachable Machine",
    ],
    image:
      "https://res.cloudinary.com/dm6s07nls/image/upload/v1766940148/Screenshot_2025-12-28_220851_rhayd3.png",
    liveLink: "https://xraybotixai.netlify.app/",
    githubLink: "https://github.com/Err-rr/XrayBotix",
  },

  {
    title: "BraniFy",
    description:
      "Created a lightweight flashcard application supporting custom study decks and interactive revision workflows to improve knowledge retention and learning efficiency.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage",
    ],
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
