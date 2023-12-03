import SEO from "../../Components/MetaTags/SEO";
import AuthorImage from "../../assets/author.jpg";
import { NavLink } from "react-router-dom";
import {
  IconGithub,
  IconLinkedinCircled,
  IconEmailOpen,
} from "../../Components/Icons/Icons";

const Authors = () => {
  return (
    <>
      <SEO
        title={"Authors | DevToo1s.dev"}
        description={"Authors | DevToo1s.dev"}
        keywords={
          "Authors - online free devtoo1s.dev, devtoo1s, devtools, authors"
        }
        url={"https://www.devtoo1s.dev/authors"}
      />
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Authors Details
          </h3>
          <div className="flex justify-center md:justify-start">
            <div className=" mt-5 bg-[#1a1c2e] p-5 rounded-lg text-sm sm:text-lg w-fit shadow-lg">
              <div className="flex justify-center">
                <img
                  src={AuthorImage}
                  className="rounded-full"
                  alt="Authors"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center my-5">
                <h1 className="text-4xl text-white font-medium my-2">
                  Satyam Kumar
                </h1>
                <h3 className="mb-2 text-xl">🥷Full Stack Developer🥷</h3>
                <h3 className="text-gray-400 mb-3">
                  R.G.P.V University, Bhopal
                </h3>
                <div className="flex justify-center gap-x-8 text-xl sm:text-2xl mt-8">
                  <NavLink
                    className="text-white hover:text-blue hover:bg-blue-500/10 rounded-full p-1 "
                    to="https://github.com/satyamkumar420"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconGithub />
                  </NavLink>
                  <NavLink
                    className="text-white hover:text-blue hover:bg-blue-400/10  rounded-full p-1"
                    to="https://www.linkedin.com/in/satyamkumar404/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconLinkedinCircled />
                  </NavLink>
                  <NavLink
                    className="text-white hover:text-blue hover:bg-blue-400/10  rounded-full p-1"
                    to="mailto:satyamkumar2460@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconEmailOpen />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
