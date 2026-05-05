import { Hero } from "./Hero";
import { ProjectShowcase } from "./ProjectShowcase";
import { About } from "./About";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white antialiased">
      <Hero />
      <ProjectShowcase />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
