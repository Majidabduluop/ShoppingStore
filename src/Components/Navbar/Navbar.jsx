import React from "react";
import logo from "./picture/logo.png";
import { IoIosHeartEmpty } from "react-icons/io";
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
    "25th Birthday Sale: We're launching deals like confetti! Shop Our Sale",
    "Top 10 Casual Shoes for Spring Shop Our Guide",
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
      <div className="">
        <div className="bg-[#14284d] p-2 text-white font-medium text-center">
          <h1 className="text-base font-sans sliding-text">
            {texts[textIndex]}
          </h1>
        </div>

        <div className="flex flex-row justify-around">
          <div className="w-[8%] absolute top-[44px] left-10">
            <img className=" w-full object-fill" src={logo} alt="error" />
          </div>
          <div className="absolute top-[68px] left-44">
            <input
              placeholder="Search for shoes, clothes, etc"
              className="px-12 py-2 rounded-lg  border border-black"
            />
          </div>
          <div className="absolute top-[82px] left-[186px]">
            <GoSearch />
          </div>

          <div className="flex flex-row ml-96 absolute top-[36px] right-[70px] ">
            <div>
              <Link to={"/"}>
                <p className="font-semibold text-lg hover:text-blue-600 mr-6 mt-[34px] subpixel-antialiased">
                  Home
                </p>
              </Link>
            </div>
            <div>
              <Link to={"/about"}>
                <p className="font-semibold text-lg hover:text-blue-600 mr-6 mt-[34px] subpixel-antialiased">
                  About us
                </p>
              </Link>
            </div>

            <div className="mt-8">
              <button className="font-semibold font-inter">
                {" "}
                <MdAccountCircle className="text-3xl" />
              </button>
            </div>

            <Tooltip title="Your Cart">
              <div onClick={openbasket} className="mt-9 ml-3 cursor-pointer  ">
                <FiShoppingCart className="text-black text-2xl" />
              </div>
            </Tooltip>
            <div className="mt-[35px] ml-2 font-inter">
              <p>CART</p>
            </div>
            <div className="font-bold mt-[35px] ml-1">
              <span>{bag.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
