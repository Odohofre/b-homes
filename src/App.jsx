import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Company from "./components/Company";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
      <Popular />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
