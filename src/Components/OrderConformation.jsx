import React from "react";
import { useNavigate } from "react-router-dom";

function OrderConformation({ order }) {
  console.log(order.products[0].totalPrice);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order </h2>
      <p>
        Your Order has been placed successfully you will recieve an email
        conformation Shortly
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary </h3>
        <p>Order Number : {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information </h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Item Ordered</h4>
          {order.products.map((item, idx) => {
            return (
              <div key={idx} className="flex justify-between mt-2">
                <p>
                  {item.name} x {item.quantity}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold text-green-500">
            $ {order.totalPrice}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-800">Track Order</button>
        <button onClick={()=>navigate("/")}
         className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800">Continue Shopping</button>
      </div>
    </div>
  );
}

export default OrderConformation;
