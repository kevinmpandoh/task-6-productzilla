import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="h-[70vh] bg-white flex flex-col items-center justify-center p-6">
        <div className="flex flex-col-reverse md:flex-row md:gap-40 items-center mt-10 max-w-5xl">
          <div className="flex flex-col text-center md:text-left md:w-1/2 ">
            <h2 className="text-5xl font-bold text-gray-800 mb-2">
              Kevin Pandoh
            </h2>
            <p className="text-xl text-purple-500 mb-6">
              Fullstack Web Developer
            </p>
            <Link
              to={"/about"}
              className="bg-purple-500 text-white px-4 py-2 mb-2 rounded-md shadow-md hover:bg-purple-600 text-center"
            >
              Learn More About Me
            </Link>
            <Link
              to={"/contact"}
              className="bg-white border border-purple-500 text-purple-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 text-center"
            >
              Hubungi Saya
            </Link>
          </div>

          {/* Foto */}
          <div className="relative md:w-1/2 mt-6 md:mt-0">
            <div className="bg-purple-500 rounded-full w-72 h-72 mx-auto flex items-center justify-center relative">
              <img
                src="/profile.png"
                alt="Kevin Pandoh"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
