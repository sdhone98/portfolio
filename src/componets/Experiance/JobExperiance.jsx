import "./JobExperiance.scss";
const JobExperiance = ({ date, projectName, position }) => {
  return (
    <div className="job-main">
      <label>{date}</label>
      <h4>{projectName}</h4>
      <label className="postition">{position}</label>
    </div>
  );
};

export default JobExperiance;
