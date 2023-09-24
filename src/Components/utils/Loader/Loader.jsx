import "./loader.css";
import { IconSpinner } from "../../Icons/Icons";

const Loader = () => {
  const getRandomColor = () => {
    const colors = [
      "#f5d939",
      "#ff0099",
      "#f96c26",
      "#00ff91",
      "#00FFFF",
      "#00ff1e",
      "#2469fe",
      "#b023fc",
      "#ecfe24",
      "#ff00ff",
      "#ff0000",
      "#0000ff",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="spinner">
      <IconSpinner
        className="spinner_loader "
        style={{ color: getRandomColor() }}
      />
    </div>
  );
};

export default Loader;
