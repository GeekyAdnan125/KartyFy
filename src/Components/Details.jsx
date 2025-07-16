import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MensCollection } from "../redux/productSlice";
import { mensData } from "../Assets/mockData";
import { addTocart } from "../redux/cartSlice";
function Details() {
  const navigate = useNavigate();
  const mens = useSelector((state) => state.product.mensProducts);  
  console.log(mens);
  const { id } = useParams();  
  const item = mens.find((item) => item.id === Number(id));  
  console.log(item);
  const [line, setLine] = useState(true);
  useEffect(() => {
    dispatch(MensCollection(mensData));
  }, []);
  const dispatch = useDispatch();
  const AddHandler = ( item) => {
    dispatch(addTocart(item));
  };
  return (
    <div className="relative h-screen w-full bg-gray-600">
      <RxCross2
        onClick={() => navigate(-1)}
        className="absolute top-[3%] left-[95%] text-4xl cursor-pointer hover:text-gray-900"
      />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 card bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
    
        <div className="image-box w-60 h-60 md:w-1/2 max-w-sm rounded">
          <img
            src={item.imageurl}
            alt={item.name}
            className="p-4 w-full object-center h-full"
          />
        </div>
        <div className="details flex flex-col space-y-4 w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800">
            Title: {item.name}
          </h1>
          <h3 className="text-lg font-semibold text-gray-600">
            Size: {item.size + " "}
          </h3>
          <p className="text-lg text-gray-700">Price: ${Math.floor(item.price)}</p>
          <div className={`flex ${line ? "flex-col items-start" : "flex-row"} `}>
            <p className="text-gray-700 text-lg font-semibold">Description:</p>
            <span
              onClick={() => setLine(!line)}
              className={`${
                line ? "line-clamp-1 text-blue-600" : "line-clamp-6"
              }`}
            >
              {item.description}
            </span>
          </div>
 
          <button 
          onClick={()=>AddHandler(item)}
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;

