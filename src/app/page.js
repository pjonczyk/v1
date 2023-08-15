import Header from "../components/Header";
import About from "../components/sections/about";
import Experience from "../components/sections/Experience/experience";
import Projects from "../components/sections/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
