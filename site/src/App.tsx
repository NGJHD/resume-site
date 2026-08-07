import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </>
  );
}

export default App;
