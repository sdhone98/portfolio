import HoloButton from "../assets/HoloButton/HoloButton";
import "./Home.scss";
const Home = () => {

  const message = "Empowering the digital landscape with precision and passion, transforming ideas into immersive online experiences."
  return (
    <div className="home-main">
      <div className="home-main-top">
      <div className="home-left">
        <h1>Turning Code into</h1>
        <h1>Creative Solutions</h1>
      </div>
      <div className="home-right"><p>{message}</p></div>
      </div>
      <div className="home-main-bottom">
        <HoloButton title='Explore My Works' type='HOLO' backColor='#6919FF' textColor='#f6f7fa' borderColor='transparent'/>
        <HoloButton title='Download CV' type='SOLID' backColor='transparent' textColor='#f6f7fa' borderColor='#f6f7fa'/>
      </div>
    </div>
  );
};

export default Home;
