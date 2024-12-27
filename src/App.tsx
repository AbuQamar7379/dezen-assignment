import { AboutUs } from "./components/about-us";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { ScaffoldingServices } from "./components/scaffolding-service";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ScaffoldingServices />
      <Projects />
    </div>
  );
}

export default App;
