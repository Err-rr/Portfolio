import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import introSound from "../../assets/sounds/netflix-intro.mp3";
import "./intro.css";

export default function NetflixIntro() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [exiting, setExiting] = useState(false);

  const handleClick = async () => {
    if (exiting) return;

    try {
      await audioRef.current.play();
    } catch (e) {}

    setExiting(true);

    setTimeout(() => {
      navigate("/profiles");
    }, 1300);
  };

  return (
    <div className="intro-screen" onClick={handleClick}>
      <audio ref={audioRef} src={introSound} preload="auto" />
      <h1 className={`intro-text ${exiting ? "exit" : ""}`}>
        SHIVAM&nbsp;KUMAR
      </h1>
    </div>
  );
}
