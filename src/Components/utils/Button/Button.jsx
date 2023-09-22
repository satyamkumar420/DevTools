const Button = ({ text, icon, onClick, className }) => {
  const getRandomGradient = () => {
    const colors = ["#f5d939", "#ff0099", "#0000FF", "#00ff91", "#00FFFF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color1 = colors[randomIndex];
    const color2 = colors[(randomIndex + 1) % colors.length];
    return `linear-gradient(60deg, ${color1}, ${color2})`;
  };

  const getRandomColor = () => {
    const colors = ["#f5d939", "#ff0099", "#0000FF", "#00ff91", "#00FFFF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const buttonStyle = {
    background: `linear-gradient(#161725, #161725) padding-box,
               ${getRandomGradient()} border-box`,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    color: "#e9e9ff",
    padding: "5px 20px",
    border: "3px solid transparent",
    borderRadius: "5px",
    display: "inline-block",
    fontSize: "22px",
    cursor: "pointer",
  };

  return (
    <button
      className="transition-all duration-300 ease-in-out items-center text-center"
      onClick={onClick}
      style={buttonStyle}
    >
      <div className={`${className}`}>
        {icon && <span className="md:text-3xl">{icon}</span>}
        {text && <span className="text-base md:text-xl">{text}</span>}
      </div>
    </button>
  );
};

export default Button;
