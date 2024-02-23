import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addtocart } from "../App/Store/CartSlice";
import CustomizedDialogs from "./CustomizedDialogs";
import { Tooltip } from "@mui/material";

function Singlepage() {
  const Details = useSelector((state) => state.products.filteredProducts);
  const paramsid = useParams();
  const [size, setsize] = useState("");
  const [color, setcolor] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      {Details.filter((item) => item.id === paramsid.id).map((single) => (
        <div className="" key={single.id}>
          <div className="w-[80%] mx-auto mt-20 h-[80vh] rounded">
            <img className="w-full h-full object-contain" src={single.img} />
          </div>
          <div className="text-center mt-4">
            <p className="font-bold font-sans text-xl text-black ">
              {single.name}
            </p>

            <p className="font-thin text-sm font-sans mt-0.5">{single.text}</p>
            <p className="font-normal text-base font-sans text-black">
              Type : {single.type}
            </p>
          </div>

          <div className="text-center relative">
            {single.size ? (
              <>
                <label
                  htmlFor="size"
                  className="  text-sm font-medium text-black dark:text-white"
                >
                  Select a Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setsize(e.target.value)}
                  className="bg-gray-50  absolute sm:top-8 sm:left-[40%] 2xl:left-[47%] top-8 left-[35%] md:top-8 md:left-[42%] lg:left-[44%]  text-black text-sm rounded-lg py-1.5 "
                >
                  <option value="">Select Size</option>
                  {single.size?.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <label
                  htmlFor="size"
                  className=" text-lg font-medium text-gray-900 dark:text-white mb-4"
                >
                  Select Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setsize(e.target.value)}
                  className="bg-gray-50  absolute top-8 left-[35%] sm:top-8 2xl:left-[47%] sm:left-[40%] md:top-8 md:left-[42%] lg:left-[44%]  text-black text-sm rounded-lg py-1.5"
                >
                  <option value="">Select Size</option>
                  {single.size?.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          <div className="text-center relative mt-14">
            {single.color ? (
              <>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setcolor(e.target.value)}
                  className="bg-gray-50 absolute top-6 left-[35%] sm:top-8 sm:left-[40%] 2xl:left-[47%] md:top-8 md:left-[42%] lg:left-[44%] text-black text-sm rounded-lg block  py-1.5"
                >
                  <option value="">Select Color</option>
                  {single.color?.map((color) => (
                    <option value={color} key={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setcolor(e.target.value)}
                  className="bg-gray-50  absolute 2xl:left-[47%] top-6 left-[35%] sm:top-8 sm:left-[40%] md:top-8 md:left-[42%] lg:left-[44%] text-black text-sm rounded-lg block  py-1.5"
                >
                  <option value="">Select Color</option>
                  {single.color?.map((color) => (
                    <option value={color} key={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          <Tooltip title="Add to Cart">
            <button
              onClick={() =>
                dispatch(
                  addtocart({
                    id: single.id,
                    name: single.name,
                    img: single.img,
                    text: single.text,
                    size: size,
                    color: color,
                    price: single.price,
                    amount: 1,
                    totalPrice: single.price,
                  })
                )
              }
              className="mt-16 lg:ml-[44%] 2xl:ml-[47%] ml-[34%] sm:ml-[40%] md:ml-[42%] border hover:bg-gray-500 py-2 px-4 rounded-lg bg-[#14284d] text-white font-nono text-base"
            >
              Add to Basket
            </button>
          </Tooltip>
        </div>
      ))}
    </>
  );
}

export default Singlepage;
