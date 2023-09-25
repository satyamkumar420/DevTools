const CopiedMessage = () => {
  const getRandomColor = () => {
    const colors = [
      "#f5d939",
      "#ff0099",
      "#ff7732",
      "#00ff91",
      "#00FFFF",
      "#00ff1e",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      className="absolute min-w-[100px] bottom-2 left-1/2 -translate-x-1/2 z-50 bg-[#292c46] rounded  mt-2 mr-4  text-sm sm:text-base font-bold p-2 transition-opacity duration-300 transform translate-y-[-25px] shadow-md"
      style={{ color: getRandomColor() }}
    >
      Copied! ✔
    </div>
  );
};

export default CopiedMessage;
