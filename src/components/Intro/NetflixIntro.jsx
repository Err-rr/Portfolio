import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import introSound from "../../assets/sounds/netflix-intro.mp3";
import "./Intro.css";

export default function NetflixIntro() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [exiting, setExiting] = useState(false);

  const MAX_AUDIO_TIME = 3000; // 🔥 3 seconds

  const handleClick = async () => {
    if (exiting) return;

    const audio = audioRef.current;

    try {
      await audio.play();
    } catch (e) {
      // autoplay blocked, continue animation
    }

    setExiting(true);

    // 🔥 Stop audio + navigate after 3 seconds
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // reset for safety
      navigate("/profiles");
    }, MAX_AUDIO_TIME);
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
