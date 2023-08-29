import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      {/* <WhyUs />
      <Services /> */}
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
