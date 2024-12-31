import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";
import TerminalPage from "./components/TerminalSection/TerminalPage";
import SkillsSection from "./components/skillsection/skillsection";
import EndSection from "./components/endSection/EndSection";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";
import { inject } from "@vercel/analytics";

const LoadingScreen = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const languages = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "こんにちは",
    "Guten Tag",
    "Здравствуйте",
    "你好",
    "Olá",
    "Merhaba",
    "안녕하세요",
    "salaam",
    "नमस्ते",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center mb-4">
        <span className="text-white text-4xl mb-4">🙏</span>
        <h1 className="text-white text-4xl font-bold">
          {languages[currentLanguage]}
        </h1>
      </div>
    </div>
  );
};

function MainContent() {
  inject();
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <TerminalPage />
      <Projects />
      <EndSection />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
