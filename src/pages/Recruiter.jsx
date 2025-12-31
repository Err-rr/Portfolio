import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import recruiterProfile from "../assets/profiles/recruiter.png";
import { PROFILE_ROWS } from "../constants/profileRows";

export default function Recruiter() {
  const heroImage =
    "https://res.cloudinary.com/dm6s07nls/image/upload/v1766926534/ChatGPT_Image_Dec_28_2025_06_24_15_PM_phwau3.png";

  const rows = PROFILE_ROWS.recruiter;

  return (
    <>
      <Navbar
        profileImage={recruiterProfile}
        activeProfile="recruiter"
      />

      <HeroBanner
        bgImage={heroImage}
        title="Shivam Kumar"
        description="A full-stack and AI-focused engineer with a strong product mindset, experienced in delivering scalable web applications, intelligent search systems, and production-ready solutions from concept to deployment."
      />

      <AutoScrollRow
        title={rows.topPicksTitle}
        items={rows.topPicks}
      />

      <AutoScrollRow
        title={rows.continueTitle}
        items={rows.continueWatching}
      />
    </>
  );
}
