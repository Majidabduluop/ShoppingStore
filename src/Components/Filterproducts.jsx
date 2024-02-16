import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { gender, clearFilter, sizes, colors } from "../App/Store/FilterSlice";
import { useEffect } from "react";

function Filterproducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  const filteritems = useSelector((state) => state.products.filteritems);

  const { type } = useParams();
  const genders = ["male", "female"];
  const dispatch = useDispatch();
  const color = ["pink", "orange", "gray", "red", "black"];

  const size = ["XL", "L", "M", "S"];

  useEffect(() => {
    return () => {
      dispatch(clearFilter());
    };
  }, [dispatch]);

  return (
    <>
      <div className="ml-8 mt-32 w-full">
        <h1 className="text-3xl ">{type}</h1>
      </div>

      <div className="ml-8 mt-4">
        <span className="text-2xl font-thin mr-12">Filter:</span>
        {genders.map((item) => (
          <button
            onClick={() => dispatch(gender(item))}
            className=" text-black text-2xl font-thin mr-6 hover:text-blue-600"
          >
            {item}
          </button>
        ))}
        <select
          onChange={(event) => dispatch(colors(event.target.value))}
          className="text-black text-xl font-thin mr-4 hover:text-blue-600 outline-none border-none focus:border-white focus:outline-none appearance-none "
        >
          {" "}
          <option>Select a Color</option>
          {color.map((color, index) => (
            <option value={color}>{color}</option>
          ))}
        </select>

        <select
          onChange={(e) => dispatch(sizes(e.target.value))}
          className="text-black text-xl font-thin hover:text-blue-600 outline-none border-none focus:border-white focus:outline-none appearance-none"
        >
          <option>Select a Size</option>
          {size.map((size, index) => (
            <option value={size}> {size} </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(clearFilter())}
          className=" absolute top-[220px] right-[420px] text-black text-xl px-6 py-2 rounded-lg font-thin hover:text-blue-600"
        >
          Clear Filters
        </button>
      </div>

      <div className=" justify-items-center grid grid-cols-4 py-8 gap-12 mx-6  ">
        {filteritems
          ? filteritems.map((itemfilter) => (
              <div>
                <Card
                  id={itemfilter.id}
                  name={itemfilter.name}
                  text={itemfilter.text}
                  img={itemfilter.img}
                  price={itemfilter.price}
                  color={itemfilter.color}
                />
              </div>
            ))
          : products
              .filter((item) => item.type === type)
              .map((pro, index) => (
                <div key={index}>
                  <Card
                    id={pro.id}
                    name={pro.name}
                    text={pro.text}
                    img={pro.img}
                    price={pro.price}
                    color={pro.color}
                  />
                </div>
              ))}
      </div>
    </>
  );
}

export default Filterproducts;
