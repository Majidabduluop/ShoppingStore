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
      <div className="bg-gray-100 border rounded-lg w-[55vh] pb-2 hover:scale-105 duration-500 ease-in-out">
        <div className="w-[50vh] h-[40vh] mx-auto mt-2 relative group">
          <img
            className="w-full h-full object-cover rounded-lg hover:opacity-30"
            src={img}
            alt="image"
          />
          <div className="absolute top-[100px] left-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
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
        <div className="mt-4 text-center">
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
        <div className="font-light text-black text-xs pb-2">
          <span className="ml-1"> Size Left : {leftsize}</span>
          <span className="pl-44">
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
