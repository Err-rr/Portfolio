import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Hero/HeroBanner";
import AutoScrollRow from "../components/Rows/AutoScrollRow";

import stalkerProfile from "../assets/profiles/stalker.png";
import { PROFILE_ROWS } from "../constants/profileRows";

export default function Stalker() {
  const heroImage =
    "https://i.pinimg.com/1200x/18/05/e6/1805e681830f8b727637b176c7057e83.jpg";

  const rows = PROFILE_ROWS.stalker;

  return (
    <>
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
      />

      <AutoScrollRow
        title={rows.continueTitle}
        items={rows.continueWatching}
      />
    </>
  );
}
