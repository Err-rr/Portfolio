import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Skills.css";

import {
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFirebase,
  SiFlask,
  SiCplusplus,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiSocketdotio,
} from "react-icons/si";

import { PROFILE_IMAGES } from "../assets/profiles";

const iconStyle = {
  color: "#fd2222",
};


const skillSections = [
  {
    title: "Programming Languages",
    skills: [
      {
        icon: <SiCplusplus style={iconStyle} />,
        name: "C++",
        desc: "DSA, OOP & Systems Programming",
      },
      {
        icon: <FaPython style={iconStyle} />,
        name: "Python",
        desc: "Backend Development & AI",
      },
      {
        icon: <FaJs style={iconStyle} />,
        name: "JavaScript",
        desc: "Modern Web Development",
      },
      {
        icon: <SiTypescript style={iconStyle} />,
        name: "TypeScript",
        desc: "Type-Safe Development",
      },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      {
        icon: <FaReact style={iconStyle} />,
        name: "React",
        desc: "Component-Based UI",
      },
      {
        icon: <SiNextdotjs style={iconStyle} />,
        name: "Next.js",
        desc: "SSR & Full Stack React",
      },
      {
        icon: <FaReact style={iconStyle} />,
        name: "React Native",
        desc: "Cross-Platform Apps",
      },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      {
        icon: <FaNodeJs style={iconStyle} />,
        name: "Node.js",
        desc: "Backend Services",
      },
      {
        icon: <SiFlask style={iconStyle} />,
        name: "Flask",
        desc: "Python APIs",
      },
      {
        icon: <FaProjectDiagram style={iconStyle} />,
        name: "REST APIs",
        desc: "API Design",
      },
      {
        icon: <SiSocketdotio style={iconStyle} />,
        name: "WebSockets",
        desc: "Real-Time Communication",
      },
    ],
  },

  {
    title: "Databases & Cloud",
    skills: [
      {
        icon: <SiPostgresql style={iconStyle} />,
        name: "PostgreSQL",
        desc: "Relational Database",
      },
      {
        icon: <SiMongodb style={iconStyle} />,
        name: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        icon: <SiFirebase style={iconStyle} />,
        name: "Firebase",
        desc: "Authentication & Firestore",
      },
      {
        icon: <FaAws style={iconStyle} />,
        name: "AWS",
        desc: "Cloud Services",
      },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        icon: <FaCode style={iconStyle} />,
        name: "Gemini API",
        desc: "LLM Integration",
      },
      {
        icon: <SiPytorch style={iconStyle} />,
        name: "CLIP",
        desc: "Vision-Language Models",
      },
      {
        icon: <FaProjectDiagram style={iconStyle} />,
        name: "FAISS",
        desc: "Vector Search",
      },
      {
        icon: <SiTensorflow style={iconStyle} />,
        name: "TensorFlow.js",
        desc: "Browser ML",
      },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      {
        icon: <FaGitAlt style={iconStyle} />,
        name: "Git & GitHub",
        desc: "Version Control",
      },
      {
        icon: <FaDocker style={iconStyle} />,
        name: "Docker",
        desc: "Containerization",
      },
      {
        icon: <FaLinux style={iconStyle} />,
        name: "Linux",
        desc: "Development Environment",
      },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      {
        icon: <SiCplusplus style={iconStyle} />,
        name: "Data Structures",
        desc: "Efficient Problem Solving",
      },
      {
        icon: <FaCode style={iconStyle} />,
        name: "Algorithms",
        desc: "Optimization",
      },
      {
        icon: <SiPostgresql style={iconStyle} />,
        name: "DBMS",
        desc: "Database Systems",
      },
      {
        icon: <FaLinux style={iconStyle} />,
        name: "Operating Systems",
        desc: "Processes & Memory",
      },
      {
        icon: <SiSocketdotio style={iconStyle} />,
        name: "Computer Networks",
        desc: "TCP/IP",
      },
      {
        icon: <FaCode style={iconStyle} />,
        name: "Object-Oriented Programming",
        desc: "Software Design",
      },
    ],
  },
];


export default function Skills() {
  const location = useLocation();

  const activeProfile = location.state?.profile || "developer";
  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar
        profileImage={profileImage}
        activeProfile={activeProfile}
      />

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
