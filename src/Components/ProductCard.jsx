import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addTocart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function ProductCard({productItem}) { 
  const dispatch = useDispatch();
  console.log(productItem)
  const AddHandler = (e,productItem)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addTocart(productItem));
    toast("Added to cart,go to the card section for order conformation");
  } 
  const {id} = useParams()
  return (
    <Link 
    className='bg-white p-4 shadow rounded relative border 
     transform transition-transform duration-300 hover:scale-105 '> 
        <img  className='w-full h-48 object-contain mb-4'
        src={productItem.imageurl}
         alt="" />
        <h3 className='text-lg font-semibold'>{productItem.name}</h3>
        <p className='text-green-400'><span className='text-green-400'>$</span>{`${productItem.price}`}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
        </div>
        <div 
        onClick={(e)=>AddHandler(e,productItem)}
        className='absolute bottom-4 right-2 
        flex items-center justify-center w-8 h-8 text-center bg-red-800 text-white text-sm rounded-full
        group  hover:bg-red-700 hover:w-32 transform transition-transform duration-300'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to Cart</span>
        </div>
    </Link>
  )
}
export default ProductCard 
