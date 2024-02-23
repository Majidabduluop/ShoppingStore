import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide, dotSlide } from "../App/Store/sliderSlice";
import { sliderData } from "../assets/data/dummyData";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

function Slider() {
  const slide = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  const autoslide = () => {
    dispatch(nextSlide(slide + 1));
  };

  useEffect(() => {
    const interval = setInterval(autoslide, 8000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <>
      <div className="relative mt-10">
        <div className="flex flex-row">
          {sliderData.map((item) => (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slide
                  ? "opacity-100 duration-700 w-full ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div className="w-full h-[50vh] md:h-[86vh]">
                {parseInt(item.id) === slide && (
                  <img
                    className="w-full object-cover h-full"
                    src={item.img}
                    alt="shoes"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute flex bottom-6 left-[40%] mb-3 md:left-[47%]">
          {sliderData.map((dot, index) => (
            <div className="mr-4">
              <div
                key={dot.id}
                className={
                  index === slide
                    ? "bg-blue-600 rounded-full p-1 cursor-pointer"
                    : "bg-white rounded-full p-1 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(slide))}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute bg-gray-50 p-5 rounded-full top-[60%] md:top-[60%] md:left-2 left-2"></div>
        <button
          className="absolute text-black top-[62%] left-[18px] md:top-[62%] font-thin 2xl:top-[62%]"
          onClick={() => dispatch(prevSlide(slide - 1))}
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <div className="absolute bg-gray-50 p-5 rounded-full top-[60%] right-2 md:top-[60%] md:right-2">
          {" "}
        </div>
        <button
          className="absolute text-black top-[62%]  right-[18px] md:top-[62%] 2xl:top-[62%] font-thin"
          onClick={() => dispatch(nextSlide(slide + 1))}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </>
  );
}

export default Slider;
