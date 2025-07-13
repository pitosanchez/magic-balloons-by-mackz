import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FloatingBalloons from "./components/FloatingBalloons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingBalloons />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
