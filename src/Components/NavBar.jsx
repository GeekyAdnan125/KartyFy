import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { setSearchTerm } from '../redux/productSlice';
function NavBar() {
    const products = useSelector(state => state.cart.products)
    console.log(products) 
    const user = useSelector(state=>state.userDetails.details)
    const name = user.username
    const [search , setSearch] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(setSearchTerm(search))
      navigate("/filterData")
    }
    return (
        <nav className='bg-zinc-800 shadow-md text-white '>
            <div className='mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to='/'>Kartify</Link>
                </div>
                <div className='relative flex w-full flex-1 mx-4'>
                     <form 
                     onSubmit={(e)=>handleSearch(e)}
                     className='w-full search-box'>
                        <input 
                        onChange={(e)=>setSearch(e.target.value)}
                        value={search}
                        type="text" className='w-full border outline-none py-2 px-4 text-black'  placeholder="Men's , Womens's , Kids" />
                        <FaSearch
                         className='absolute  top-3 right-3 text-red-500 text-bold text-lg'></FaSearch>
                     </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/cart' className='relative'> 
                    <FaCartShopping />
                    {products.length > 0 && (
                        <span className='absolute -top-2 left-3  p-1 text-xs bg-red-600 rounded-full flex items-center justify-center  text-white'>{products.length}</span>
                    )}
                    </Link>
                    <Link to="/login" className='hidden md:block'> 
                      { name ?  name : <span>Login | Registor</span>} 
                    </Link>
                    <button className='block md:hidden'>
                         <FaUser className='text-lg'>{name}</FaUser>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-xm font-bold'>
                <Link to='/'
                className='hover:underline'>
                  Home
                </Link>
                <Link  to='/shop'
                className='hover:underline'>
                  Shop
                </Link>
                <Link  to='/footer'
                 className='hover:underline'>
                  Contact
                </Link>
                <Link  to='/about'
                 className='hover:underline'>
                  About
                </Link>
            </div>
        </nav>
    )
}
export default NavBar