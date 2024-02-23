import React from "react";
import logo from "./Navbar/picture/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="max-w-[100%] mt-6 py-24 bg-[#14284d] relative">
        <div className="absolute lg:w-[10%] lg:h-[14vh] lg:top-[12%] lg:left-[45%] md:top-8 md:left-[45%] md:w-[14%]  md:h-[12vh] top-10 left-[42%] text-center w-[20%] h-[14%] ">
          <img
            src={logo}
            className="w-full h-full rounded-xl object-cover"
            alt=""
          />
        </div>

        <div className="w-[100%] mx-auto mt-16 md:mt-[8%]">
          <hr className="w-full border-t-2 border-white " />
        </div>
        <div className="flex flex-row md:space-x-72 justify-center  gap-[16vw] ml-8 text-base font-semibold subpixel-antialiased text-white">
          <div className="mt-14">
            <Link to={"/"}>
              <p className="mt-1 hover:text-red-500 cursor-pointer subpixel-antialiased ">
                Home
              </p>
            </Link>
            <Link to={"/about"}>
              <p className="mt-1  hover:text-red-500 cursor-pointer subpixel-antialiased">
                About us
              </p>
            </Link>

            <p className="mt-1  hover:text-red-500 cursor-pointer">Help</p>
          </div>
          <div className="mt-14">
            <p className="mt-1 hover:text-red-500 cursor-pointer">Contact Us</p>
            <p className="mt-1  hover:text-red-500 cursor-pointer">
              phone no: 041-4032737896
            </p>
            <p className="mt-1  hover:text-red-500 cursor-pointer">
              Email: Onlineshopping@gmail.com
            </p>
            <div className="flex flex-row gap-7  text-2xl mt-3 hover:font-bold  cursor-pointer">
              {" "}
              <span className="hover:text-red-500">
                <FaFacebook />
              </span>
              <span className="hover:text-red-500">
                <BsInstagram />
              </span>
              <span className="hover:text-red-500">
                <CiTwitter />
              </span>
              <span className="hover:text-red-500">
                <CiYoutube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
