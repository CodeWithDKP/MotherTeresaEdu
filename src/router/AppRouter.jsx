import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Team = lazy(() => import("../pages/Team"));
const Careers = lazy(() => import("../pages/Careers"));
const Contact = lazy(() => import("../pages/Contact"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense
          fallback={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="spinner"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
