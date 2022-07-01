import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const sendemail = (e) => {
    emailjs
      .sendForm(
        "service_fhewz3l",
        "template_p3q27an",
        e.target,

        "user_2TPI8JuOBXxCyPbQXID5m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      id="contact-container"
    >
      <form onSubmit={sendemail} className="flex flex-col max-w-[600px] w-full">
        <div data-aos="fade-up" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">YOU CAN CONTACT ME HERE!!</p>
        </div>
        <label data-aos="fade-up" className="text-slate-100 py-2">
          Enter Full Name
        </label>
        <input
          className="bg-[#f0f1f6] p-2"
          data-aos="fade-up"
          type="text"
          placeholder="Name"
          name="name"
        />
        <label data-aos="fade-up" className="text-slate-100 py-2">
          Enter Email
        </label>
        <input
          data-aos="fade-up"
          className="my-4 p-2 bg-[#f0f1f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <label data-aos="fade-up" className="text-slate-100 py-2">
          Enter Message
        </label>
        <textarea
          data-aos="fade-up"
          className="bg-[#f0f1f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
