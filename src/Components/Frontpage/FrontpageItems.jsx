import { Tooltip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../App/Store/CartSlice";
import "../../App.css";
import { useState } from "react";

function FrontpageItems({
  id,
  name,
  img,
  color,
  price,
  size,
  text,
  totalPrice,
}) {
  const original = text;

  const [isexpand, setexpand] = useState(false);

  const shorttext = isexpand ? original : original.slice(0, 50);

  const leftsize = size[0];
  const leftcolor = color[0];

  const amount = 1;

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 border lg:w-[28vw] sm:w-[40vw] rounded-lg w-[82vw] pb-2 hover:scale-105 transition-hover duration-500 ease-in-out">
        <div className="lg:w-[26vw] sm:w-[38vw] w-[78vw] h-[40vh] mx-auto mt-2 relative group">
          <img
            className="w-full h-full object-cover rounded-lg hover:opacity-30"
            src={img}
            alt="image"
          />
          <div className="absolute lg:left-[28%] sm:top-[44%] sm:left-[27%]  md:top-[44%] md:left-[27%] top-[44%] left-[29%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button
              onClick={() =>
                dispatch(
                  addtocart({
                    id: id,
                    name: name,
                    img: img,
                    color: leftcolor,
                    price: price,
                    size: leftsize,
                    text: text,
                    totalPrice: totalPrice,
                    amount: 1,
                  })
                )
              }
              className="px-6 py-2 font-bold bg-[#14284d] text-white rounded-xl hover:bg-gray-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className=" mt-4 text-center">
          <span className="font-bold  text-black ">{name}</span>
          <br />

          <span className="font-light text-black text-sm">
            {shorttext} {""}
            {original.length > 100 && (
              <button
                onClick={() => setexpand(!isexpand)}
                className="text-blue-700 cursor-pointer"
              >
                {isexpand ? "See Less" : "See More"}
              </button>
            )}
          </span>
        </div>
        <div className="flex ml-12 mt-3 gap-32 md:gap-32 lg:gap-24  font-light text-black text-xs">
          <span className=""> Size Left : {leftsize}</span>
          <span className="">
            {" "}
            Color :{" "}
            <span
              style={{ background: leftcolor }}
              className="rounded-full px-2 ml-2"
            ></span>
          </span>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
}

export default FrontpageItems;
