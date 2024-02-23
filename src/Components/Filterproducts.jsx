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
      <div className="ml-4 mt-4 w-full">
        <h1 className="text-3xl ">{type}</h1>
      </div>

      <div className="lg:ml-4 ml-2 mt-6">
        <span className="text-lg font-medium mr-2">Filter:</span>
        {genders.map((item) => (
          <button
            onClick={() => dispatch(gender(item))}
            className=" text-black text-xl font-thin mr-1 lg:mr-2 hover:text-blue-600"
          >
            {item}
          </button>
        ))}
        <select
          onChange={(event) => dispatch(colors(event.target.value))}
          className="text-black text-base font-thin mr-0 lg:mr-2 outline-none border-none focus:border-white focus:outline-none appearance-none "
        >
          {" "}
          <option>Select a Color</option>
          {color.map((color, index) => (
            <option value={color}>{color}</option>
          ))}
        </select>

        <select
          onChange={(e) => dispatch(sizes(e.target.value))}
          className="text-black text-base lg:mr-12 font-thin outline-none border-none focus:border-white focus:outline-none appearance-none"
        >
          <option>Select a Size</option>
          {size.map((size, index) => (
            <option value={size}> {size} </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(clearFilter())}
          className="  font-semibold text-base border bg-blue-900 text-white py-1 px-1 rounded-lg  hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>

      <div className=" justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-6 py-8 gap-12 mx-6  ">
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
