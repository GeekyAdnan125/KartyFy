import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { addTocart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { mensData } from "../Assets/mockData";
import { mockData } from "../Assets/mockData";
import { MensCollection } from "../redux/productSlice";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CollectionDetails() {
  const mens = useSelector((state) => state.product.mensProducts);
  console.log(mens);

  useEffect(() => {
    dispatch(MensCollection(mensData));
  }, []);
  const dispatch = useDispatch();
  const AddHandler = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    toast("Added to cart,go to the card section for order conformation");
    dispatch(addTocart(item));
  };
  const {cat} = useParams()
  const item = mens.filter((item) => item.category ===  cat); 
  console.log(item)
  return (
     <>
       <h1 className="text-xl font-semibold text-center   mt-5">Welcome to  {cat} Section</h1>
       <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5 gap-4 cursor-pointer lg:px-24 mt-5 sm:px-6 mb-4">
      { item && item.map((item, idx) => {
        return (
          <div 
            className="bg-white p-4 shadow rounded relative border 
            transform transition-transform duration-300 hover:scale-102"
          >
            <Link
            to={`/details/${item.id}`}
            >
               <img
              className="w-full h-48 object-contain mb-4"
              src={item.imageurl}
              alt=""
            />
            </Link>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-green-400">
              <span className="text-green-400">$</span>
              {`${item.price}`}
            </p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500"></FaStar>
              <FaStar className="text-yellow-500"></FaStar>
              <FaStar className="text-yellow-500"></FaStar>
              <FaStar className="text-yellow-500"></FaStar>
            </div>
            <div
              onClick={(e) => AddHandler(e, item)}
              className="absolute bottom-4 right-2 
             flex items-center justify-center w-8 h-8 text-center bg-red-800 text-white text-sm rounded-full
             group  hover:bg-red-700 hover:w-32 transform transition-transform duration-300"
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block sm:mx-10   line-clamp-1">
                Add to Cart
              </span>
             
            </div>
          </div>
        );
      })}
    </div>
     </>
  );
}
export default CollectionDetails;