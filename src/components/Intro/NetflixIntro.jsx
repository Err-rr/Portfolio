import { useEffect } from "react";
import { Howl } from "howler";
import "./intro.css";

const introSound = new Howl({
  src: ["/assets/sounds/netflix-intro.mp3"],
  volume: 0.8,
});

export default function NetflixIntro({ onFinish }) {
  useEffect(() => {
    introSound.play();
    const timer = setTimeout(onFinish, 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-text">SHIVAM&nbsp;KUMAR</div>
    </div>
  );
}
