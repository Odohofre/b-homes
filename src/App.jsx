import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Company from "./components/Company";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Popular from "./components/Popular";
import FAQ from "./components/Faq";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
      <Popular />
      <Services />
      <Blog />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
