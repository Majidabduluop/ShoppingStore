import React from "react";
import { storeData } from "../../assets/data/dummyData";
import FrontpageItems from "./FrontpageItems";

function Frontpage() {
  return (
    <>
      <div className="text-center mt-12">
        <p className="text-black font-semibold text-xl">
          SUMMER T-Shirts On Sale 30%, Offer is for limited time
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 md:justify-items-center md:align-items-center md:gap-10 lg:grid-cols-3 lg:gap-[2%] lg:mb-32 grid-cols-1 justify-items-center align-items-center gap-10 mt-14">
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
