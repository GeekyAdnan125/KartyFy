import React, { useState } from "react";
import {
  FaAudioDescription,
  FaHeadset,
  FaLock,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function InfoSection() {
    const info = [
        {
          icon: <FaShippingFast className="text-3xl text-red-600" />,
          title: "Free Shipping",
          description: "Get your orders delivered with no extra cost.",
          d1: "Enjoy free delivery on all orders, ensuring quick and cost-free service to your doorstep. No hidden fees, no surprises—just hassle-free shipping for every order.",
        },
        {
          icon: <FaHeadset className="text-3xl text-red-600"/>,
          title: "Support 24/7",
          description: "We are here to assist you anytime.",
          d1: "Our support team is available 24/7 to help with orders, returns, or product queries, ensuring a seamless shopping experience anytime you need assistance.",
        },
        {
          icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
          title: "100% Money Back",
          description: "Full refund if you are not satisfied.",
          d1: "Not satisfied? Our money-back guarantee ensures a quick and hassle-free refund process, giving you peace of mind with every purchase.",
        },
        {
          icon: <FaLock className="text-3xl text-red-600" />,
          title: "Payment Secure",
          description: "Your payment information is safe with us.",
          d1: "Your payment details are protected with advanced encryption, ensuring secure and worry-free transactions every time you shop.",
        },
        {
          icon: <FaTag className="text-3xl text-red-600" />,
          title: "Discount",
          description: "Enjoy the best prices on our products.",
          d1: "Grab amazing deals and discounts on premium products. Shop smart with seasonal offers, bundle deals, and exclusive savings.",
        },
      ];
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {info.map((item, idx) => (
          <div
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
            key={idx}
            className="relative flex flex-col items-center text-center p-4 border rounded-lg shadow-md
              cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-500">{item.description}</p>
            {hoverIndex === idx && (
              <div className="absolute bottom-0 left-0 right-0 bg-blue-300 bg-opacity-80 text-white p-3 text-sm rounded-b-lg">
                <p>{item.d1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
