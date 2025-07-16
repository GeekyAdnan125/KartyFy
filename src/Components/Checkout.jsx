import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown, FaAnglesUp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Checkout({setOrder}) {
  const [billingToggle, setBillingToggle] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);
  const [paymentmethod, setPaymentMethod] = useState("Cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo , setShippingInfo] = useState({
    address:'',
    city:'',
    zip:''
  })
  const navigate = useNavigate();
  const handleOrder = ()=> {
      const newOrder = {
        products: cart.products,
        orderNumber :    Math.floor(Math.random()*100000),
        shippingInformation : shippingInfo,
        totalPrice : cart.totalprice
      }
      setOrder(newOrder)
      navigate('/ordercomformation')
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4  md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              onClick={() => setBillingToggle(!billingToggle)}
              className="flex items-center justify-between "
            >
              <h3>Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {billingToggle ? (
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter Name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter your gmail"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter Your Contact Number"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="border p-2 mb-6">
            <div
              onClick={() => setShipping(!shipping)}
              className="flex items-center justify-between "
            >
              <h3>Shipping Information</h3>
              {shipping ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {shipping ? (
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Address
                    </label>
                    <input
                      onChange={(e)=>setShippingInfo({...shippingInfo , address:e.target.value})}
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter Address"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      City
                    </label>
                    <input
                      
                       onChange={(e)=>setShippingInfo({...shippingInfo , city:e.target.value})}
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter City Name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Zip Code{" "}
                    </label>
                    <input
                       onChange={(e)=>setShippingInfo({...shippingInfo , zip:e.target.value})}
                      className="w-full px-3 py-2 border outline-none"
                      placeholder="Enter City Code "
                      type="number"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/*Payment Method  */}
          <div className="border p-2 mb-6">
            <div
              onClick={() => setPayment(!payment)}
              className="flex items-center justify-between "
            >
              <h3>Payment Information</h3>
              {payment ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {payment ? (
              <div>
                <div className="space-y-4 space-x-1">
                  <div className="flex items-center space-x-1 mb-2">
                    <input
                      placeholder=""
                      name="payment"
                      type="radio"
                      checked={paymentmethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label className="block text-gray-700" htmlFor="">
                      Cash on delivery
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  <input
                    placeholder=""
                    name="payment"
                    type="radio"
                    checked={paymentmethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700" htmlFor="">
                    Debit Card
                  </label>
                </div>

                {paymentmethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div>
                      <label htmlFor="mb-4">Card Number</label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="mb-4"
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded outline-none"
                        required
                      />
                    </div>
                    <div className="flex justify-between mv-b-4">
                      <div className="block text-gray-700 font-semibold mb-2">
                        <label
                          className="block text-gray-700 font-semibold mb-2"
                          htmlFor=""
                        >
                          Expire Date
                        </label>
                        <input
                          type="text"
                          className="border p-2 w-full rounded outline-none"
                          required
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        <label
                          className="block text-gray-700 font-semibold mb-2"
                          htmlFor=""
                        >
                          CVV
                        </label>
                        <input
                          className="border p-2 w-full rounded outline-none"
                          required
                          placeholder="CVV"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* Order Summary  */}

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((p) => (
              <div key={p.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 object-contain rounded"
                    src={p.image}
                    alt=""
                  />

                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{p.name}</h4>
                    <p className="text-gray-600">
                      {p.price} x {p.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">${cart.totalprice}</span>
            </div>
          </div>
          <button 
          onClick={()=>handleOrder()}
          className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
