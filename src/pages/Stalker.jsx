import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import stalkerProfile from "../assets/profiles/stalker.png";

export default function Stalker() {
  const heroImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

  return (
    <>
      <Navbar profileImage={stalkerProfile} />

      <HeroBanner
        bgImage={heroImage}
        title="Stalker Mode"
        description="Observing patterns, projects, and late-night commits."
      />

      <AutoScrollRow title="Today's Top Picks for Stalker" />
      <AutoScrollRow title="Continue Watching for Stalker" />
    </>
  );
}
