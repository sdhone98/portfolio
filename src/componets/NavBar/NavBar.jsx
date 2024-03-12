import HoloButton from "../assets/HoloButton/HoloButton";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <h3 className="fisrt-name">SAGAR</h3>
        <h3 className="last-name">DHONE</h3>
      </div>
      <div className="nav-right">
        <label>WORKS</label>
        <label>ABOUT</label>
        <HoloButton title='Say Hello' type='HOLO' backColor='transparent' textColor='#f6f7fa' borderColor='#f6f7fa'/>
      </div>
    </div>
  );
};

export default NavBar;
