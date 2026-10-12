import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  // Theme state managed by useState
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Student portfolio details
  const studentName = "Param Shah";
  const studentEmail = "24cs093@charusat.edu.in";
  const studentBio =
    "Enthusiastic Computer Science Engineering student passionate about frontend engineering, modern web frameworks, state management, and React Router navigation.";

  const studentDetails = {
    rollNo: "24CS093",
    department: "Computer Science & Engineering",
    institution: "CSPIT, Charusat University",
  };

  const skillList = [
    "HTML5 & Semantic Markup",
    "CSS3 & Responsive Design",
    "JavaScript (ES6+)",
    "React.js & Hooks",
    "React Router DOM",
    "Component State Management",
    "Vite & Modern Tooling",
    "Git & GitHub Workflow",
  ];

  return (
    <div className={`portfolio-app ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      {/* Header with dynamic themeColor based on light/dark mode */}
      <Header
        name={studentName}
        themeColor={isDarkMode ? "#0f172a" : "#1e3a5f"}
        subtitle="Advanced Web Development Frameworks (ITUE301) — Practical 2"
      />

      {/* Navigation bar with NavLink and Theme Toggle */}
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* Main Content Area with React Router Routes */}
      <main className="portfolio-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                studentName={studentName}
                studentBio={studentBio}
                studentDetails={studentDetails}
                skillList={skillList}
              />
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact studentEmail={studentEmail} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Persistent Footer Component */}
      <Footer email={studentEmail} name={studentName} />
    </div>
  );
}

export default App;
