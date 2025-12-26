import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import recruiterProfile from "../assets/profiles/recruiter.png";

export default function Recruiter() {
  const heroImage =
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80";

  return (
    <>
      <Navbar profileImage={recruiterProfile} />

      <HeroBanner
        bgImage={heroImage}
        title="Recruiter Mode"
        description="Evaluating impact, experience, and real-world problem solving."
      />

      <AutoScrollRow title="Today's Top Picks for Recruiter" />
      <AutoScrollRow title="Continue Watching for Recruiter" />
    </>
  );
}
