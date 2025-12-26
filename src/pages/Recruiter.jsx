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
        title="Shivam Kumar"
        description="A full-stack and AI-focused engineer with a strong product mindset, experienced in delivering scalable web applications, intelligent search systems, and production-ready solutions from concept to deployment."
      />

      <AutoScrollRow title="Today's Top Picks for Recruiter" />
      <AutoScrollRow title="Continue Watching for Recruiter" />
    </>
  );
}
