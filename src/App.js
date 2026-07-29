import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Studies from "./Studies";
import Projects from "./Projects"
import Certificates from "./Certificates";
// import Freelancer from "./Freelancer";
import Contact from "./Contact";
import Footer from "./Footer"
import { Galaxy } from 'react-stars-particles'


function App() {
  return (
    <div className="App">
      <Galaxy color='#2f2f2f' quantity={300} />
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Studies />
        <Projects />
        <Certificates />
        {/* <Freelancer /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
