import React, { useEffect } from 'react'
import { Categories, mockData } from '../Assets/mockData'
import InfoSection from '../Components/InfoSection'
import CategorySec from '../Components/CategorySec'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Shop from './Shop'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const  navigate = useNavigate()
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)
    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])
    return (
        <div>
            <div className='bg-white mt-2 text-black px-4 md:px-16 md:mt-2 sm:overflow-x-hidden '>
                <div className='container  mx-auto md:px-16  flex flex-col md:flex-row space-x-3 mt-6 '>
                    <div className='w-full md:w-3/12'>
                        <div className='bg-red-600 w-full text-white text-lg font-bold px-2 py-3'>
                            SHOP BY CATEGORIES
                        </div>
                        <ul className='space-y-3 bg-gray-100 p-3 border'>
                            {Categories.map((item, idx) => {
                                return (
                                    <Link onClick={()=>alert("Clicked!!")} key={idx} className='flex items-center text-lg'>
                                        <div className='w-2 h-2 border border-red-500 mr-2 rounded-full'></div>
                                        {item}
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='w-full md:w-9/12  mt-8 md:mt-0 h-96 relative'>
                        <img
                            className="h-full w-full"
                            src="https://img.freepik.com/free-photo/surprised-man-showing-mobile-screen-shopping-bag-standing-against-yellow-background_1258-160889.jpg?t=st=1730837934~exp=1730841534~hmac=1b0bbebae22e8b47a09d32fde281875ed72d16a18c50bf19d30287f140c76367&w=1380" alt="" />
                        <div className='absolute top-16 left-[50%]'>
                            <p className='text-gray-600'>Code with Adnan</p>
                            <h2 className='text-3xl font-bold'>WELCOME TO E-SHOP</h2>
                            <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS+ PRODUCTS</p>
                            <button 
                            onClick={()=>navigate("/shop")}
                            className='bg-red-600 px-8 py-1.8 text-white mt-4 hover:bg-red-700
                        transform transition-transform duration-300 hover:scale-105'
                            >SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <InfoSection />
                <CategorySec />


                <div className="container mx-auto py-12">
                    <h2 className='text-2xl font-bold mb-6 text-center'>Top products </h2>
                    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4 cursor-pointer'>
                        {products.products.slice(0, 5).map((productItem, idx) => {
                            return (
                                <ProductCard key={idx} productItem={productItem} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Shop/>
        </div>
    )
}

export default Home