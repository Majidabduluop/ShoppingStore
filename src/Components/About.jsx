import React from "react";
import cloths from "../assets/images/clothes.jpg";

function About() {
  return (
    <>
      <div className="mt-16 mb-12 relative ">
        <div className="w-[100vw] h-[60vh] lg:h-[88vh]">
          <img src={cloths} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        <div className="absolute top-[26%]  lg:top-[35%] 2xl:left-[12%] text-center text-white">
          <h1 className="font-semibold text-xl lg:text-4xl lg:font-bold ">
            About us
          </h1>
          <p className="font-semibold text-lg mt-6 lg:text-2xl lg:mt-12">
            We are a global family of brands and businesses. We make it possible
            for customers around the world to express themselves through fashion
            and design in a sustainable way.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
