import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Section title="Home" />} />
            <Route path="/about" element={<Section title="About" />} />
            <Route path="/education" element={<Section title="Education" />} />
            <Route path="/working-experience" element={<Section title="Working Experience" />} />
            <Route path="/licenses-and-certifications" element={<Section title="Licenses and Certifications" />} />
            <Route path="/organization" element={<Section title="Organization" />} />
            <Route path="/skills" element={<Section title="Skills" />} />
            <Route path="/honorary-titles-and-awards" element={<Section title="Honorary Titles and Awards" />} />
            <Route path="/technologies" element={<Section title="Technologies Used" />} />
            <Route path="/project" element={<Section title="Project" />} /> {/* ✅ Ini yang ditambahkan */}
            <Route path="/contact" element={<Section title="Contact" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
