import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import clothimg from "../../assets/images/clothes.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../App/Store/FilterSlice";
import { FiMenu } from "react-icons/fi";
// import { gsap } from "gsap";
// import "../../App.css";
// import SplitType from "split-type";

function Navigationbutton() {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const [menu, setmenu] = useState(false);

  const openmenu = () => {
    setmenu(!menu);
  };

  return (
    <>
      <div className="flex flex-row md:gap-[20vw] md:mt-12 md:text-sm md:justify-around gap-[12vw] ml-[9%] text-sm mt-6 subpixel-antialiased">
        <h1 className="font-bold font-sans italic">50%OFF</h1>

        <h1 className="font-bold font-sans italic">Free Shipping and return</h1>

        <h1 className="font-bold font-sans italic">
          Different Payment Methods
        </h1>
      </div>

      <div className="flex gap-3 ml-8 mt-6 md:hidden">
        <p className="text-lg font-semibold">Filters</p>
        <button onClick={openmenu} className="flex gap-1">
          {menu ? (
            <IoMdClose className="mt-1 text-2xl" />
          ) : (
            <FiMenu className="mt-1 text-2xl" />
          )}
        </button>
      </div>
      <div className="md:hidden">
        {menu ? (
          <div className="grid grid-cols-2 text-center gap-2 max-w-[50%] mt-4">
            {buttons.map((item, index) => (
              <div key={index} className="">
                <Link to={`/filterproducts/${item}`}>
                  <button
                    onClick={() => dispatch(filterProducts(item))}
                    size="medium"
                    variant="outlined"
                    className="px-1 py-2 font-medium hover:text-blue-500"
                  >
                    {item}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="hidden md:flex md:text-lg md:justify-around md:mt-20  subpixel-antialiased">
        {buttons.map((item, index) => (
          <div key={index} className="">
            <Link to={`/filterproducts/${item}`}>
              <button
                onClick={() => dispatch(filterProducts(item))}
                size="medium"
                variant="outlined"
                className="px-2 py-2 font-medium hover:bg-blue-100 hover:rounded-lg hover:text-blue-500"
              >
                {item}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navigationbutton;
