import { Helmet } from "react-helmet-async";

const JSMinify = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Minify</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            JavaScript Minify
          </h3>
        </div>
      </div>
    </>
  );
};

export default JSMinify;
