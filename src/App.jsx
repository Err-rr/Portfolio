import { BrowserRouter, Routes, Route } from "react-router-dom";

import NetflixIntro from "./components/Intro/NetflixIntro";
import WhoIsWatching from "./components/ProfileSelect/WhoIsWatching";
import ScrollToTop from "./components/ScrollToTop";

import Developer from "./pages/Developer";
import Recruiter from "./pages/Recruiter";
import Stalker from "./pages/Stalker";
import Professional from "./pages/Professional";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import Recommendations from "./pages/Recommendations";
import Certifications from "./pages/Certifications";
import Reading from "./pages/Reading";
import TripXpay from "./pages/TripXpay";
import Ecoshala from "./pages/Ecoshala";
import WhoIsShivam from "./pages/WhoIsShivam";

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ GLOBAL SCROLL RESET */}
      <ScrollToTop />

      <Routes>
        {/* Netflix intro ONLY on root */}
        <Route path="/" element={<NetflixIntro />} />

        {/* Who is watching */}
        <Route path="/profiles" element={<WhoIsWatching />} />

        {/* Profile pages */}
        <Route path="/developer" element={<Developer />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/stalker" element={<Stalker />} />

        {/* Other pages */}
        <Route path="/professional" element={<Professional />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/tripxpay" element={<TripXpay />} />
        <Route path="/ecoshala" element={<Ecoshala />} />
        <Route path="/whoisshivam" element={<WhoIsShivam />} />
      </Routes>
    </BrowserRouter>
  );
}
