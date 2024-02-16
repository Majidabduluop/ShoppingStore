import React from "react";
import { storeData } from "../../assets/data/dummyData";
import FrontpageItems from "./FrontpageItems";

// import { gsap } from "gsap";
// import "../../App.css";
// import SplitType from "split-type";

function Frontpage() {
  // const mytext = new SplitType("#saletext");

  // gsap.to(".char", {
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.2,
  //   duration: 0.2,
  // });

  return (
    <>
      <div className=" mx-auto w-[60%] py-1/2  text-center mt-8">
        <p className="text-black font-semibold text-xl">
          SUMMER T-Shirts On Sale 30%, Offer is for limited time
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center align-items-center gap-10 mt-12 ">
        {storeData.slice(0, 9).map((item, index) => (
          <div key={index}>
            <FrontpageItems
              id={item.id}
              name={item.name}
              text={item.text}
              color={item.color}
              price={item.price}
              totalprice={item.totalprice}
              size={item.size}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Frontpage;
