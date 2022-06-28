import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import "../App.css";

const Home = () => {
  return (
    <div name="home" className="home-container w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-fuchsia-500 text-2xl">Hi 👋, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Himesh Bhandari
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#dfdfe1] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building web based
          application.
        </p>
        <div>
          <Link to="work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex text-center items-center hover:bg-fuchsia-600 hover:border-fuchsia-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
