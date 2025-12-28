import { BrowserRouter, Routes, Route } from "react-router-dom";

import NetflixIntro from "./components/Intro/NetflixIntro";
import WhoIsWatching from "./components/ProfileSelect/WhoIsWatching";

import Developer from "./pages/Developer";
import Recruiter from "./pages/Recruiter";
import Stalker from "./pages/Stalker";
import Professional from "./pages/Professional";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
