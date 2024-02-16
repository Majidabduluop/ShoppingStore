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
      <div className="mt-6 px-full py-24 bg-[#14284d] relative">
        <div className="absolute top-[40px] left-[530px] w-[12%] h-[12vh]">
          <img
            src={logo}
            className="w-full h-full rounded-xl object-cover"
            alt=""
          />
        </div>

        <div className="w-[50%] mx-auto mt-8 ">
          <hr className="w-full border-t-2 border-white " />
        </div>
        <div className="flex flex-row gap-[300px] mt-12 ml-96 text-base font-semibold subpixel-antialiased text-white">
          <div className="mt-1">
            <Link to={"/"}>
              <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer subpixel-antialiased ">
                Home
              </p>
            </Link>
            <Link to={"/about"}>
              <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer subpixel-antialiased">
                About us
              </p>
            </Link>

            <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer">
              Help
            </p>
          </div>
          <div className="mt-1">
            <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer">
              Contact Us
            </p>
            <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer">
              phone no: 041-4032737896
            </p>
            <p className="mt-1 hover:font-bold hover:text-red-500 cursor-pointer">
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
