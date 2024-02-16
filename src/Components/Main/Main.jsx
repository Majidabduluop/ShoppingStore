import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../../Slider/Slider";
import Navigationbutton from "../Navigationbutton/Navigationbutton";
import Frontpage from "../Frontpage/Frontpage";

function Main() {
  return (
    <>
      <Navigationbutton />
      <Slider />
      <Frontpage />
    </>
  );
}

export default Main;
