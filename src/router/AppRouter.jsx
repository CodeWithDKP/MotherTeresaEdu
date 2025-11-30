import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from "../pages/About";
import Team from "../pages/Team";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
