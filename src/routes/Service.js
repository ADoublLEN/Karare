import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/3.jpg";
import Footer from "../components/Footer";
import Urgent from "../components/Urgent";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="Service"
        btnClass="hide"
      />
      <Urgent />
      <Footer />
    </>
  );
}

export default Service;
