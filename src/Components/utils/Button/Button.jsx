import React, { useState } from "react";

const Button = ({ text, icon, onClick, className }) => {
  const [hovered, setHovered] = useState(false);

  const getRandomGradient = () => {
    const colors = [
      "#f5d939",
      "#ff0099",
      "#0000FF",
      "#00ff91",
      "#00FFFF",
      "#9b730a",
      "#702fd0",
      "#986278",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color1 = colors[randomIndex];
    const color2 = colors[(randomIndex + 1) % colors.length];
    return `linear-gradient(60deg, ${color1}, ${color2})`;
  };

  const getRandomColor = () => {
    const colors = ["#961541", "#144948"];
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * colors.length);
    } while (randomIndex === getRandomColor.lastRandomIndex);

    getRandomColor.lastRandomIndex = randomIndex;
    return colors[randomIndex];
  };

  getRandomColor.lastRandomIndex = -1;

  // hover gradient
  const bgGradient = `linear-gradient(#161725, #161725) padding-box,
               ${getRandomGradient()} border-box`;

  const hoverBgGradient = `linear-gradient(60deg, ${getRandomColor()}, ${getRandomColor()}) padding-box, ${getRandomGradient()} border-box`;

  const buttonStyle = {
    background: `${hovered ? hoverBgGradient : bgGradient}`,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    color: "#e9e9ff",
    padding: "5px 20px",
    border: "3px solid transparent",
    borderRadius: "10px",
    display: "inline-block",
    fontSize: "22px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      className="items-center text-center"
      onClick={onClick}
      style={buttonStyle}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${className}`}>
        {icon && <span className="md:text-3xl">{icon}</span>}
        {text && <span className="text-base md:text-xl mt-2">{text}</span>}
      </div>
    </button>
  );
};

export default Button;
