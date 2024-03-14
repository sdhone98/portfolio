import "./Experiance.scss";
import JobExperiance from "./JobExperiance";
const Experiance = () => {
    const data = [{
        date : 'Date 1',
        projectName: 'Project 1',
        position: 'Developer'
    },
    {
        date : 'Date 2',
        projectName: 'Project 2',
        position: 'Developer 1'
    },
    {
        date : 'Date 3',
        projectName: 'Project 3',
        position: 'Developer 2'
    },]

    const data_1 = ['Python', 'Java', 'Kotlin', 'Spring Boot', 'Djnago', 'JavaScript', 'HTMl', 'CSS', 'React'];


  return (
    <div className="experiance-main">
      <div className="experiance-left-side">
        <h3>Experiance</h3>
        <div className="experiance-container">{data.map((job) => <JobExperiance date={job.date} projectName={job.projectName} position={job.position}/>)}</div>
      </div>
      <div className="experiance-right-side">
        <h3>Expertise</h3>
        
        {data_1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
