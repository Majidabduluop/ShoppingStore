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
    <div className="mb-[570px] mt-20">
      {Details.filter((item) => item.id === paramsid.id).map((single) => (
        <div className="relative flex" key={single.id}>
          <div className="absolute top-[60px] left-[70px] w-[40%] h-[85vh] rounded">
            <img className="w-full h-full object-contain" src={single.img} />
          </div>
          <div className="absolute top-[150px] right-[540px]">
            <p className="font-bold font-sans text-2xl text-black">
              {single.name}
            </p>
          </div>
          <div className="absolute top-[200px] left-[510px] overflow-hidden">
            <p className="font-normal text-base font-sans">{single.text}</p>
          </div>
          <div className="absolute top-[270px] left-[510px] overflow-hidden">
            <p className="font-normal text-base font-sans text-black">
              Type : {single.type}
            </p>
          </div>
          <div className="absolute top-[320px] left-[510px] overflow-hidden">
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
                  className="bg-gray-50  mt-1  text-black text-sm rounded-lg block  py-1.5"
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
                  className="bg-gray-50  mt-1  text-black text-sm rounded-lg block  py-1.5"
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
          <div className="absolute top-[400px] left-[510px] overflow-hidden">
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
                  className="bg-gray-50  mt-1  text-black text-sm rounded-lg block  py-1.5"
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
                  className="bg-gray-50  mt-1  text-black text-sm rounded-lg block  py-1.5"
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
              className="absolute border hover:bg-gray-500 py-1 px-6 rounded-lg bg-[#14284d] text-white top-[485px] left-[510px] font-nono  text-base"
            >
              Add to Basket
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default Singlepage;
