import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
function App() {
  return (
    <>
      <div className="grid gap-20 text-dark-0 transall">
        <Navbar />
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
