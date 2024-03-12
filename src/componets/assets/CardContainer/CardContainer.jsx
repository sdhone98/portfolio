import ProjectCard from "../ProjectCard/ProjectCard";
import "./CardContainer.scss";
const CardContainer = (props) => {
  return (
    <div className="card-container">
      {props.data.map((item) => (
        <ProjectCard name={item.name} date={item.date} />
      ))}
    </div>
  );
};

export default CardContainer;
