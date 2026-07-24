import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav name={profile.name} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience profile={profile} />
      <Projects profile={profile} />
      <Education profile={profile} />
      <Skills profile={profile} />
      <Contact profile={profile} />
    </div>
  );
}
