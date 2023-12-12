import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "../components/sections/about";
import Experience from "../components/sections/Experience/experience";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main className="lg:w-1/2 lg:py-24 pt-10">
        <About />
        <Experience />
        <Footer />
      </main>
      <div></div>
    </div>
  );
}
