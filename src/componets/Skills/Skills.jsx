import "./Skills.scss";
const Skills = () => {
  const imagesName = [
    "Angulat",
    "CSS",
    "Djnago",
    "HTML 5",
    "Java",
    "JavaScript",
    "Kotlin",
    "Python",
    "React",
    "Spring Boot",
  ];
  const path = "../../../src/resouces/tech stack logos/";
  return (
    <div className="main-container">
      <h3>Skills</h3>
      <div className="skills-main">
        <div className="logos-container">
          {imagesName.map((name, index) => (
            <img
              key={index}
              src={path + name + ".png"}
              alt={name}
              className="gray-scale"
            />
          ))}
          {imagesName.map((name, index) => (
            <img
              key={"dup-" + index}
              src={path + name + ".png"}
              alt={name}
              className="gray-scale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
