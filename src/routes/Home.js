import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Urgent from "../components/Urgent";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero"
        heroImage="https://images.unsplash.com/photo-1692806511236-a142a098ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2499&q=80"
        title="Build Your Dream"
        text="Explore Career Opportunities"
        buttonText="Try For Free"
        url="/"
        btnClass="show"
      />
      <Careers />
      <Urgent />
      <Footer />
    </>
  );
}

export default Home;
