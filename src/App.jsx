import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* Skills */}
      <Skills />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* CONTACT */}

      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
