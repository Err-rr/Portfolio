import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import stalkerProfile from "../assets/profiles/stalker.png";
import { PROFILE_ROWS } from "../constants/profileRows";
import "./Stalker.css";

export default function Stalker() {
  const [meltdownPhase, setMeltdownPhase] = useState("idle");
  const pageRef = useRef(null);
  const heroImage =
    "https://i.pinimg.com/1200x/18/05/e6/1805e681830f8b727637b176c7057e83.jpg";

  const rows = PROFILE_ROWS.stalker;
  const isMelting = meltdownPhase !== "idle";

  useEffect(() => {
    document.body.classList.toggle("stalker-meltdown-lock", isMelting);

    return () => {
      document.body.classList.remove("stalker-meltdown-lock");
    };
  }, [isMelting]);

  useEffect(() => {
    const root = pageRef.current;
    if (!root || meltdownPhase !== "melting") return undefined;

    const fragments = Array.from(
      root.querySelectorAll(".netflix-navbar, .hero, .row-title, .poster"),
    );

    fragments.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const lateral = 40 + (index % 5) * 24;
      const rotation = 8 + (index % 7) * 3;
      const duration = 2.4 + (index % 4) * 0.18;
      const delay = Math.min(index * 0.08, 0.95);

      element.classList.add("meltdown-fragment");
      element.style.setProperty("--meltdown-delay", `${delay}s`);
      element.style.setProperty(
        "--meltdown-x",
        `${direction * lateral}px`,
      );
      element.style.setProperty(
        "--meltdown-rotate",
        `${direction * rotation}deg`,
      );
      element.style.setProperty(
        "--meltdown-duration",
        `${duration}s`,
      );
    });

    const timer = window.setTimeout(() => {
      setMeltdownPhase("complete");
    }, 3900);

    return () => {
      window.clearTimeout(timer);

      fragments.forEach((element) => {
        element.classList.remove("meltdown-fragment");
        element.style.removeProperty("--meltdown-delay");
        element.style.removeProperty("--meltdown-x");
        element.style.removeProperty("--meltdown-rotate");
        element.style.removeProperty("--meltdown-duration");
      });
    };
  }, [meltdownPhase]);

  const handleItemClick = (item) => {
    if (item.title !== "Do Not Open") {
      return true;
    }

    if (meltdownPhase === "idle") {
      setMeltdownPhase("melting");
    }

    return false;
  };

  const handleGoBack = () => {
    setMeltdownPhase("idle");
  };

  return (
    <div
      ref={pageRef}
      className={`stalker-page ${meltdownPhase === "melting" ? "meltdown-active" : ""} ${meltdownPhase === "complete" ? "meltdown-complete" : ""}`}
    >
      <div className="stalker-page-shell">
        <Navbar
          profileImage={stalkerProfile}
          activeProfile="stalker"
        />

        <HeroBanner
          bgImage={heroImage}
          title="Shivam Kumar"
          description="I like breaking things (ethically), building things (properly), and obsessing over how systems behave in the real world from AI-powered searches to security puzzles and side projects that got a little out of hand."
        />

        <AutoScrollRow
          title={rows.topPicksTitle}
          items={rows.topPicks}
          disableInteractions={isMelting}
          onItemClick={handleItemClick}
        />

        <AutoScrollRow
          title={rows.continueTitle}
          items={rows.continueWatching}
          disableInteractions={isMelting}
          onItemClick={handleItemClick}
        />
      </div>

      {meltdownPhase === "complete" ? (
        <div className="meltdown-overlay" role="dialog" aria-modal="true">
          <div className="meltdown-panel">
            <p className="meltdown-warning">⚠ Curiosity has consequences.</p>
            <div className="meltdown-actions">
              <button
                type="button"
                className="meltdown-btn primary"
                onClick={() => window.location.reload()}
              >
                Restart Portfolio
              </button>
              <button
                type="button"
                className="meltdown-btn secondary"
                onClick={handleGoBack}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
