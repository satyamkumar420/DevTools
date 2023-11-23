import ReactGA from "react-ga";

const PrimaryButton = ({ onClick, text, className, disabled }) => {
  const handleButtonClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "My Button",
    });
    onClick();
  };

  return (
    <button
      className={`bg-blue-600 shadow-md text-white sm:text-lg font-normal hover:bg-blue-800 transition-all ease-in-out rounded-md py-2 px-4 ${className}`}
      onClick={handleButtonClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
