// app/page.tsx
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact  from "../components/Contact";

export default function HomePage() {
  return (
    <div className="w-[85%] mx-auto py-5" >
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
