import React from "react";

function background() {
  return (
    <div>
      {" "}
      <div className=" flex flex-col justify-center items-center mt-6 ">
        <div className="bg-green-500 text-red-600  py-1  w-[55%] text-center rounded-lg">
          <p className=" tracking-normal leading-none font-mono font-semibold font-">
            Sales Upto 50%
          </p>
        </div>
        <div className="w-[70%] h-[100vh] mt-6 relative">
          <img src={clothimg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default background;
