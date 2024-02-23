import React from "react";
import logo from "./picture/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartopen, setcartopen] = useState(false);
  const bag = useSelector((state) => state.basket.cart);

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Top 10 Casual Shoes for Spring Shop Our Guide",
    "Byu one get 50% Discount for another Product",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the textIndex to move to the next text
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [texts.length]);

  const navigate = useNavigate();

  const openbasket = () => {
    setcartopen(true);
    navigate("/basket/" + cartopen);
  };
  return (
    <>
      <div className="bg-[#14284d] p-2 text-white font-medium text-center">
        <p className="text-base font-sans sliding-text m-0">
          {texts[textIndex]}
        </p>
      </div>

      <nav className="flex justify-between md:mt-0 mt-1 items-center w-[92%]  mx-auto">
        <div className="w-[14%] md:w-[8%] ">
          <img className="w-full object-fill" src={logo} alt="error" />
        </div>
        {/* <div className="w-[3vw] h-[2vh] absolute top-5 left-[13%]">
          <input
            placeholder="Search for shoes, clothes, etc"
            className="placeholder-transparent w-[100%] h-[100%] px-12 py-2 rounded  border border-black"
          />
        </div> */}
        {/* <div className="lg:left-[130px] lg:top-[82px] md:left-28 md:top-[80px] xs:top-[61px] xs:left-[67px] absolute top-[82px] left-[186px]">
            <GoSearch className="xs:text-[14px]" />
          </div> */}

        <div className="">
          <ul className="flex flex-row md:gap-[2vw] gap-[4vw]">
            <li>
              <Link to={"/"}>
                <p className="font-semibold  hover:text-blue-600 subpixel-antialiased">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <p className="font-semibold hover:text-blue-600 subpixel-antialiased">
                  About us
                </p>
              </Link>
            </li>

            <li className="">
              <button className="font-semibold font-inter">
                {" "}
                <MdAccountCircle className="text-2xl md:text-3xl" />
              </button>
            </li>

            <li onClick={openbasket} className="cursor-pointer  flex">
              <FiShoppingCart className="text-black text-xl mt-1 mr-1" />
              <p className="font-semibold">CART</p>
              <span className="font-semibold">{bag.length}</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
