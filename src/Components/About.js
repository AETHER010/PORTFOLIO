import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Himesh, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am fascinated about building new Web Technologies and Products
              and also in areas related to BackEND. And as far as I can, I tend
              to implement my passion for Node.js and Modern Javascript Library
              and Frameworks like React.js , Next.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
