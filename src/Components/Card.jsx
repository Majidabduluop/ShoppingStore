import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleproduct } from "../App/Store/FilterSlice";
import "../App.css";

function Card({ id, name, price, color, img, text }) {
  const original = text;

  const dispatch = useDispatch();

  const [isexpand, setexpand] = useState(false);

  const shorttext = isexpand ? original : original.slice(0, 50);

  const seemore = () => {
    setexpand(!isexpand);
  };
  return (
    <>
      <div className="flex flex-row shrink-0 w-full overflow-hidden relative">
        <div className="w-full  overflow-hidden bg-white hover:bg-gray-50 border rounded-lg hover:scale-95 duration-500 ease-in-out pb-12">
          <div className="w-full h-[50vh] overflow-hidden relative group">
            <img
              src={img}
              className="w-full h-full object-cover hover:opacity-40"
              alt="image"
            />
            <div className="absolute 2xl:left-[35%] lg:left-[34%] top-[44%] left-[27%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Link to={`/singlepage/${id}`}>
                <button className="px-6 py-2 font-bold bg-[#14284d] text-white rounded-xl hover:bg-gray-600">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold mt-2">{name}</p>
            <p className="text-red-900 font-semibold">{price}$</p>

            <p>
              {shorttext} {""}
              {original.length > 100 && (
                <button
                  onClick={seemore}
                  className="text-blue-700 cursor-pointer"
                >
                  {isexpand ? "See Less" : "See More"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
