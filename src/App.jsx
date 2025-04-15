import "./App.css";
import MainLayout from "./components/mainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <div>
      <Router basename="/nexwave/">
      {/* <Router> */}
        <Suspense
          fallback={
            <div className="loader">
              <h3>NEXWAVE</h3>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              {/* ADDED FOR GIT HUB DEPOLOYMENT */}
              <Route path="/nexwave" element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
