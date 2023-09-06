import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/1.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
