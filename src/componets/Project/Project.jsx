import CardContainer from "../assets/CardContainer/CardContainer";
import HoloButton from "../assets/HoloButton/HoloButton";
import "./Project.scss";
const Project = () => {
  const temp = [
    { name: "Project 1", date: "Aug 2023" },
    { name: "Project 2", date: "Aug 2023" },
    { name: "Project 3", date: "Aug 2023" },
    { name: "Project 4", date: "Aug 2023" },
  ];
  return (
    <div className="project-main">
      <HoloButton title="Explore My Works"
        type="SOLID"
        backColor="transparent"
        textColor="#6919FF"
        borderColor="#6919FF"/>
        <h3>Explore My Works</h3>
        <CardContainer data={temp}/>
    </div>
  );
};

export default Project;
