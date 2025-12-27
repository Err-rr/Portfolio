import Navbar from "../components/Navbar/Navbar";
import "./Skills.css";

import {
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiStreamlit,
  SiNumpy,
  SiOpenai,
  SiHuggingface,
  SiNetlify,
  SiFlask,
  SiFirebase,
} from "react-icons/si";


import developerProfile from "../assets/profiles/developer.png";

const skillSections = [
  {
    title: "Frontend & App Development",
    skills: [
      { icon: <FaReact />, name: "React", desc: "Component-based UI" },
      { icon: <FaReact />, name: "React Native", desc: "Mobile App Development" },
      { icon: <SiNextdotjs />, name: "Next.js", desc: "React Meta-Framework" },
    ],
  },

  {
    title: "Programming & Backend",
    skills: [
      { icon: <FaPython />, name: "Python", desc: "Core Programming Language" },
      { icon: <FaJs />, name: "JavaScript", desc: "Web & App Logic" },
      { icon: <SiFlask />, name: "Flask", desc: "Backend APIs & Services" },
      { icon: <SiStreamlit />, name: "Streamlit", desc: "ML & Data Apps" },
    ],
  },

  {
    title: "AI / ML & Data",
    skills: [
      { icon: <SiOpenai />, name: "OpenAI CLIP", desc: "Image-Text Embeddings" },
      { icon: <SiHuggingface />, name: "HuggingFace", desc: "Transformers & NLP" },
      { icon: <SiNumpy />, name: "NumPy", desc: "Numerical Computing" },
      { icon: <SiOpenai />, name: "FAISS", desc: "Vector Similarity Search" },
    ],
  },

  {
    title: "Cloud, DevOps & Deployment",
    skills: [
      { icon: <SiNetlify />, name: "Netlify", desc: "Frontend Deployment" },
      { icon: <SiFirebase style={{ color: "#ff111dff" }} />, name: "Firebase", desc: "Auth & Realtime DB" },
      { icon: <FaGitAlt />, name: "Git & GitHub", desc: "Version Control" },
      { icon: <FaLinux />, name: "Linux", desc: "Development Environment" },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Navbar profileImage={developerProfile} />

      <section className="skills-page">
        {skillSections.map((section, i) => (
          <div key={i} className="skills-section">
            <h2>{section.title}</h2>

            <div className="skills-grid">
              {section.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <p>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
