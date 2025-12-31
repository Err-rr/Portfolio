import Navbar from "../components/Navbar/Navbar";
import "./Recommendations.css";

import developerProfile from "../assets/profiles/developer.png";

export default function Recommendations() {
  return (
    <>
      <Navbar
        profileImage={developerProfile}
        activeProfile="developer"
      />

      <section className="recommendations-page">
        <h1>Recommendations</h1>

        <p>
          Shivam is a highly motivated and detail-oriented engineer with a
          strong ability to break down complex problems and turn them into
          scalable, real-world solutions. His curiosity, work ethic, and
          product mindset make him a valuable contributor to any team.
        </p>

        <p>
          He consistently demonstrates ownership, technical depth, and a
          willingness to learn beyond the scope of his role.
        </p>
      </section>
    </>
  );
}
