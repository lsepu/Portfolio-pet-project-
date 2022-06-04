import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ProjectConfiguration from "./pages/ProjectConfiguration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-config" element={<ProjectConfiguration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
