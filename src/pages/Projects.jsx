import Navbar from "../components/Navbar/Navbar";
import "./Projects.css";

import developerProfile from "../assets/profiles/developer.png";

const projects = [
  {
    title: "CV-Based Attendance System",
    description:
      "Attendance is marked automatically using face recognition. Built to work seamlessly in classrooms and labs with real-time recognition.",
    tech: ["React Native", "AWS", "Face Recognition", "AI"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "EcoShala",
    description:
      "A gamified environmental learning platform with real-world eco activities, AI-powered plant disease detection, Trash-to-Treasure system, and a 3D India-focused Eco Explorer.",
    tech: ["React", "JavaScript", "AI", "3D Explorer"],
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TripXPay",
    description:
      "A B2B travel-fintech startup offering Travel Now Pay Later. Contributing as a core tech member building scalable, real-time financing features.",
    tech: ["FinTech", "Full Stack", "Scalable Systems"],
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pic2Pick",
    description:
      "AI-powered visual product search. Upload or link an image and instantly find visually similar products using OpenAI CLIP embeddings.",
    tech: ["Python", "Streamlit", "OpenAI CLIP", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "LeafGuard",
    description:
      "A browser-based plant disease detection app using TensorFlow.js and Teachable Machine. Works with webcam or image upload — no backend required.",
    tech: ["TensorFlow.js", "Teachable Machine", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1524594227084-ec4a84a1d9d9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "BraniFy",
    description:
      "A lightweight flashcard web app that helps users learn and retain concepts efficiently using custom decks.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar profileImage={developerProfile} />

      <section className="projects-page">
        <h1 className="projects-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <h2>{project.title}</h2>
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
