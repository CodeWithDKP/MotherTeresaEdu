import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../../components/pages/Home";
import About from "../../components/pages/About";
import Team from "../../components/pages/Team";
import Careers from "../../components/pages/Careers";
import Contact from "../../components/pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Team />} />
          <Route path="/pricing" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
