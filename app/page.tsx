import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoProjects from "./components/NoProjects";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <NoProjects/> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
