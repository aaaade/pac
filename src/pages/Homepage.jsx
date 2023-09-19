import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Tiag from "../components/Tiag";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      {/* <Services /> */}
      <Team />
      <Testimonial />
      <Contact />
      <Tiag />
      <Footer />
    </>
  );
}

export default Homepage;
