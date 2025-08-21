import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Pomodoro from "./components/Pomodoro.tsx";
import GlobalTime from "./components/GlobalTime.tsx";
import Timer from "./components/Timer.tsx";
import DailyPlanner from "./components/DailyPlanner.tsx";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)"); // sm breakpoint in Tailwind is 640px, md is 768px

    const handleScreenChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Screen is small (sm or smaller)
        setActive(false);
      }
    };

    // Set initial state
    if (mediaQuery.matches) {
      setActive(false);
    }

    // Add listener
    mediaQuery.addEventListener("change", handleScreenChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);


  return (
    <Router>
      <div className={`bg-zinc-900 w-full h-full grid ${isActive
        ? "grid-cols-[15%_85%] grid-rows-[7%_93%] md:grid-cols-[250px_1fr] md:grid-rows-[7%_93%]"
        : " grid-rows-[7%_93%] md:grid-cols-[70px_1fr] md:grid-rows-[7%_93%]"
      }`}>
        <div className={`${isActive ? "col-span-1 row-span-2 hidden md:block" : "hidden md:col-span-1 md:row-span-2 md:block"}`}>
          <Sidebar isActive={isActive} setActive={setActive} />
        </div>
        <div className={`${isActive ? "col-span-1 row-span-1" : "col-span-1 row-span-1 yy md:col-span-1 md:row-span-1"}`}>
          <Header />
        </div>
        <div className={`${isActive ? "col-span-1 row-span-1 md:col-span-1 md:row-span-1" : "col-span-1 row-span-1 bg-black md:col-span-1 md:row-span-1"}`}>
          <Routes>
            <Route path="/" element={<Pomodoro />} />
            <Route path="/GlobalTime" element={<GlobalTime />} />
            <Route path="/DailyPlanner" element={<DailyPlanner />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="*" element={<div className="text-white p-8">Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
