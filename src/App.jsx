import { useState, useEffect } from "react";
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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introSeen = sessionStorage.getItem("introSeen");
    if (introSeen) setShowIntro(false);
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("introSeen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <NetflixIntro onFinish={handleIntroFinish} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WhoIsWatching />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recruiter" element={<Recruiter />} />
            <Route path="/stalker" element={<Stalker />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />


          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
