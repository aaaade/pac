import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="news" element={<News />} />
          <Route path="news/cac-commence-strike" element={<NewsDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
