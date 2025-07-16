import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Form, Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold'>Kartify</h2>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid nisi, deleniti ullam doloribus commodi omnis earum blanditiis cimus magnam officiis.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h2 className='text-xl font-semibold'>Quick Links</h2>
          <ul>
            <li><Link to="/" className='hover:underline'>Home</Link></li>
            <li><Link to="/shop" className='hover:underline'>Shop</Link></li>
            <li><Link to="/about" className='hover:underline'>About</Link></li>
            <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-xl font-semibold'>Follow US </h3>
          <div className='flex space-x-4 mt-4'>
            <FaFacebook className='hover:text-gray-400'></FaFacebook>
            <FaLinkedin className='hover:text-gray-400'></FaLinkedin>
            <FaTwitter className='hover:text-gray-400'></FaTwitter>
            <FaGithub className='hover:text-gray-400'></FaGithub>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Your Email' className='w-full p-2 bg-gray-800 border outline-none border-gray-600' />
            <button className='px-4 py-2 bg-red-600 text-white rounded-r-lg'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className='mt-8 border-gray-700 pt-4' >
        <div className='flex felx-col mx-auto md:flex-row justify-between items-center'>
          <p className='text-gray-600'>@copy 2024 e-Shop All right reserved </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:text-gray-400'>Privacy Policy </a>
            <a href="" lassName='hover:text-gray-400'>Terms & condition </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer