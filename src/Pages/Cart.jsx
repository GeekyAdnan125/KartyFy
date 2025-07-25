import React, { useState } from "react";
import { FaTrashAlt }  from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Park-Street kolkata-700001");
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className=" ">
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product,idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 boreder-b">
                      <div className="md:flex items-center space-x-4">
                        <img
                          className="w-16 h-16 object-contain rounded"
                          src={product.image}
                          alt=""/>
                        <div className="flex-1 ml-4">
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex space-x-12 items-center">
                        <p>{product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button 
                          onClick={()=>dispatch(decreaseQuantity(product.id))}
                          className="text-xl font-bold px-1.5 border-r">
                            -
                          </button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button 
                          onClick={()=>dispatch(increaseQuantity(product.id))}
                          className="text-lg font-bold px-1.5 border-r">
                            +
                          </button>
                        </div>
                        <p>${(product.quantity*product.price)}</p>
                        <button
                          onClick={() =>dispatch(removeFromCart(product.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrashAlt>        
                          </FaTrashAlt>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items : </span>
                <span>{cart.totalQuantities}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p>Shipping to </p>
                <span className="text-xs font-bold">{address}</span>
                {/* <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() =>setModelOpen(true)}
                >
                  Change adddress
                </button> */}
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>$ {cart.totalprice}</span>
              </div>
              <Link 
              to="/checkout"
              className="w-full bg-red text-white py-2 px-2 rounded-md bg-green-500 hover:bg-green-800">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-5 mb-5">
          <img
            className="h-96"
            src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
