import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import developerProfile from "../assets/profiles/developer.png";
import { PROFILE_ROWS } from "../constants/profileRows";

export default function Developer() {
  const heroImage =
    "https://res.cloudinary.com/dm6s07nls/image/upload/v1766925651/width_1536_ig3utt.png";

  const rows = PROFILE_ROWS.developer;

  return (
    <>
      <Navbar
        profileImage={developerProfile}
        activeProfile="developer"
      />

      <HeroBanner
        bgImage={heroImage}
        title="Shivam Kumar"
        description="I build intelligent, end-to-end systems crafting React driven interfaces, Flask powered backends, and AI pipelines using CLIP embeddings to turn complex ideas into scalable, real-world products."
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
