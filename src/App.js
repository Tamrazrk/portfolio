import AboutMe from "./components/AboutMe";
import BioSection from "./components/BioSection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BioSection />
      <AboutMe />
      <Projects />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
