import "./HoloButton.scss";
const HoloButton = ({ title, type, backColor, textColor, borderColor}) => {

    const customStyle = {
        backgroundColor: backColor,
        color: textColor,
        border: '1.5px solid '+borderColor

    }
    
      return (
        // <button className='btn' style={buttonStyle}>
        <button className='btn' style={customStyle}>
          {title}
        </button>
      );
};

export default HoloButton;
