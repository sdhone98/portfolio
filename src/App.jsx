import "./App.css";
import About from "./componets/About/About";
import Experiance from "./componets/Experiance/Experiance";
import JobExperiance from "./componets/Experiance/JobExperiance";
import Footer from "./componets/Footer/Footer";
import Home from "./componets/Home/Home";
import NavBar from "./componets/NavBar/NavBar";
import Project from "./componets/Project/Project";
import Skills from "./componets/Skills/Skills";
import CardContainer from "./componets/assets/CardContainer/CardContainer";
import HoloButton from "./componets/assets/HoloButton/HoloButton";
import ProjectCard from "./componets/assets/ProjectCard/ProjectCard";

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experiance/>
      <JobExperiance/>
      <Skills/>
      <Footer/>
      </>
  );
}

export default App;
