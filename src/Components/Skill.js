import React, { useEffect } from "react";

import HTML from "../Images/html.png";
import CSS from "../Images/css.png";
import JavaScript from "../Images/javascript.png";
import ReactImg from "../Images/react.png";
import Node from "../Images/node.png";

import net from "../Images/net.png";
import GitHub from "../Images/github.png";

import Mongo from "../Images/mongo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";

const Skill = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            data-aos="flip-left"
            className="boxShadow  hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto pt-1 mt-1" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4">REACT</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4">GITHUB</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={Node}
              alt="HTML icon"
            />
            <p className="my-4">NODE JS</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto pt-1 mt-1"
              src={Mongo}
              alt="HTML icon"
            />
            <p className="my-4">MONGO DB</p>
          </div>
          <div
            data-aos="flip-left"
            className="boxShadow hover:scale-110 duration-500"
          >
            <img
              className="w-25 h-20 mx-auto pt-1 mt-1"
              src={net}
              alt="HTML icon"
            />
            <p className="my-4">.NET</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
