import HoloButton from "../HoloButton/HoloButton";
import "./ProjectCard.scss";
const ProjectCard = ({ name, date }) => {
  return (
    <div className="card-main">
      {/* <img src="../../../resouces/images/image 1.jpg"> */}
      <label>{date}</label>
        <h5>{name}</h5>
        <HoloButton
          title="Vist Project"
          type="HOLO"
          backColor="transparent"
          textColor="#f6f7fa"
          borderColor="#f6f7fa"
        />
      {/* </img> */}
        
      
    </div>
  );
};
export default ProjectCard;
