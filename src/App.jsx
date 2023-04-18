import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Company from "./components/Company";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Popular from "./components/Popular";
import Value from "./components/Value";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
      <Popular />
      <Services />
      <Value />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
