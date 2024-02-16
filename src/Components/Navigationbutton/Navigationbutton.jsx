import React, { useEffect } from "react";

import clothimg from "../../assets/images/clothes.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../App/Store/FilterSlice";
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

  // useEffect(() => {
  //   const mytext = new SplitType(".sale");

  //   gsap.to(".char", {
  //     y: 0,
  //     stagger: 0.05,
  //     delay: 0.2,
  //     duration: 0.1,
  //   });
  // }, []);

  return (
    <>
      <div className="bg-transparent flex flex-row justify-around mt-44 py-3 subpixel-antialiased">
        {/* text-black bg-gradient-to-b from-black to-transparent */}
        <div className="font-bold font-sans  leading-none italic">
          <h1>50%OFF</h1>
        </div>
        <div className="font-bold font-sans  leading-none ">
          <h1>Free Shipping and return</h1>
        </div>
        <div className="font-bold font-sans  leading-none ">
          <h1>Different Payment Methods</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mb-8 gap-10 text-xl  subpixel-antialiased">
        {buttons.map((item, index) => (
          <div key={index} className="mr-4">
            <Link to={`/filterproducts/${item}`}>
              <button
                onClick={() => dispatch(filterProducts(item))}
                size="medium"
                variant="outlined"
                className="px-4 py-2 font-medium rounded hover:bg-blue-100 hover:rounded-lg hover:text-blue-500"
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
