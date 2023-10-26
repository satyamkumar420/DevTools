import { Helmet } from "react-helmet-async";

const TimeConverter = () => {
  return (
    <>
      <Helmet>
        <title>Time Converter</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Time Converter
          </h3>
        </div>
      </div>
    </>
  );
};

export default TimeConverter;
