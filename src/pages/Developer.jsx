import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import developerProfile from "../assets/profiles/developer.png";

export default function Developer() {
  const heroImage =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";

  return (
    <>
      <Navbar profileImage={developerProfile} />

      <HeroBanner
        bgImage={heroImage}
        title="Shivam Kumar"
        description="I build intelligent, end-to-end systems crafting React driven interfaces, Flask powered backends, and AI pipelines using CLIP embeddings—to turn complex ideas into scalable, real-world products."
      />

      <AutoScrollRow title="Today's Top Picks for Developer" />
      <AutoScrollRow title="Continue Watching for Developer" />
    </>
  );
}
