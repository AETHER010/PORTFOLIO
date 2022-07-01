import React, { useEffect } from "react";
import note from "../Images/note.png";
import fps from "../Images/fps.png";
import car from "../Images/car.png";
import TravelDairy from "../Images/TravelDairy.png";
import Blog from "../Images/Blog.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-up" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-fuchsia-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${note})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/HIMESH1998/NoteKeeper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${fps})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Unity Application
              </span>
            </div>
          </div>
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${car})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Unity Application
              </span>
            </div>
          </div>
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${TravelDairy})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/HIMESH1998/Travel_DairySite">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${Blog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/HIMESH1998/MERN-Blog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
