import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServicesII from "./sections/ServicesII";
function App() {
  return (
    <>
      <div className="grid gap-20 text-dark-0 transall">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <ServicesII />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
