import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import stalkerProfile from "../assets/profiles/stalker.png";
import { PROFILE_ROWS } from "../constants/profileRows";
import "./Stalker.css";

const MELTDOWN_SEQUENCE = {
  warning: { next: "structural", duration: 1500 },
  structural: { next: "collapse", duration: 1500 },
  collapse: { next: "aftermath", duration: 2200 },
  aftermath: { next: "complete", duration: 800 },
};

export default function Stalker() {
  const [meltdownPhase, setMeltdownPhase] = useState("idle");
  const pageRef = useRef(null);
  const timersRef = useRef([]);
  const heroImage =
    "https://i.pinimg.com/1200x/18/05/e6/1805e681830f8b727637b176c7057e83.jpg";

  const rows = PROFILE_ROWS.stalker;
  const isMelting = meltdownPhase !== "idle";
  const showOverlay = meltdownPhase === "complete";

  useEffect(() => {
    document.body.classList.toggle("stalker-meltdown-lock", isMelting);

    return () => {
      document.body.classList.remove("stalker-meltdown-lock");
    };
  }, [isMelting]);

  useEffect(() => {
    const root = pageRef.current;
    if (!root || !isMelting) {
      return undefined;
    }

    const fragments = Array.from(
      root.querySelectorAll(
        [
          ".stalker-page-shell",
          ".netflix-navbar",
          ".nav-left",
          ".nav-right",
          ".nav-links li",
          ".hire-btn",
          ".logo",
          ".profile-avatar",
          ".menu-toggle",
          ".hero",
          ".hero-content",
          ".hero-title",
          ".hero-desc",
          ".hero-buttons",
          ".hero-btn",
          ".row",
          ".row-title",
          ".row-posters",
          ".poster",
          ".poster-overlay",
          ".poster-title",
        ].join(", "),
      ),
    );

    fragments.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const lateral = 8 + (index % 5) * 6;
      const rotation = 1.2 + (index % 4) * 0.35;
      const duration = 1.95 + (index % 4) * 0.12;
      const delay = Math.min(index * 0.014, 0.18);

      element.classList.add("meltdown-fragment");
      element.style.setProperty("--meltdown-delay", `${delay}s`);
      element.style.setProperty("--meltdown-x", `${direction * lateral}px`);
      element.style.setProperty(
        "--meltdown-rotate",
        `${direction * rotation}deg`,
      );
      element.style.setProperty("--meltdown-duration", `${duration}s`);
    });

    return () => {
      fragments.forEach((element) => {
        element.classList.remove("meltdown-fragment");
        element.style.removeProperty("--meltdown-delay");
        element.style.removeProperty("--meltdown-x");
        element.style.removeProperty("--meltdown-rotate");
        element.style.removeProperty("--meltdown-duration");
      });
    };
  }, [isMelting]);

  useEffect(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    if (meltdownPhase === "idle" || meltdownPhase === "complete") {
      return undefined;
    }

    const phaseConfig = MELTDOWN_SEQUENCE[meltdownPhase];
    if (!phaseConfig) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setMeltdownPhase(phaseConfig.next);
    }, phaseConfig.duration);

    timersRef.current = [timer];

    return () => {
      window.clearTimeout(timer);
      timersRef.current = [];
    };
  }, [meltdownPhase]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const handleItemClick = (item) => {
    if (item.title !== "Do Not Open") {
      return true;
    }

    if (meltdownPhase === "idle") {
      setMeltdownPhase("warning");
    }

    return false;
  };

  const handleGoBack = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
    setMeltdownPhase("idle");
  };

  return (
    <div
      ref={pageRef}
      className={`stalker-page meltdown-${meltdownPhase}`}
    >
      <div className="meltdown-vignette" aria-hidden="true" />

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

      {(meltdownPhase === "aftermath" || showOverlay) ? (
        <div className="meltdown-atmosphere" aria-hidden="true">
          <span className="dust dust-1" />
          <span className="dust dust-2" />
          <span className="dust dust-3" />
          <span className="dust dust-4" />
          <span className="dust dust-5" />
        </div>
      ) : null}

      {showOverlay ? (
        <div className="meltdown-overlay" role="dialog" aria-modal="true">
          <div className="meltdown-panel">
            <p className="meltdown-warning">{"\u26A0 Curiosity has consequences."}</p>
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
