import React from "react";
import { Link, useNavigate } from "react-router-dom";
const About = () => {
  const navigate =  useNavigate() ; 
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to <span className="text-red-600 font-semibold">Kartify</span> – your one-stop destination for high-quality, affordable, and trendy products.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            We aim to deliver the best shopping experience by offering top-notch
            products, excellent customer support, and fast, free shipping.
          </p>
        </div>

         
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Journey</h3>
          <p className="text-gray-600">
            Founded in <strong>2020</strong>, <span className="text-red-600 font-semibold">Kartify</span> started as a small venture with a big dream.
            Today, we’ve served thousands of happy customers and continue to grow.
          </p>
        </div>

         
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h3>
          <p className="text-gray-600">
            Explore our wide range of products, including trendy apparel, accessories, and more.
            Each item is carefully curated to provide a balance of style and quality.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            We’re committed to eco-friendly practices, from sourcing sustainable materials to using recyclable packaging.
            Together, let’s make a positive impact.
          </p>
        </div>
      </div>

       
      <div className="text-center mt-12">
        <button onClick={()=>navigate(-1)}
          className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-green-800 transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default About;
