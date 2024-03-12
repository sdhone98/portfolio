import "./App.css";
import About from "./componets/About/About";
import Footer from "./componets/Footer/Footer";
import Home from "./componets/Home/Home";
import NavBar from "./componets/NavBar/NavBar";
import Project from "./componets/Project/Project";
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
      <Footer/>
      </>
  );
}

export default App;
