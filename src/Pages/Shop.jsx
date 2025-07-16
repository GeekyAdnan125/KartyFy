import React from 'react'
import ProductCard from '../Components/ProductCard'
import {  useSelector } from 'react-redux';
function Shop() {
    const products  = useSelector(state=>state.product)
    return (
        <div className="container px-4 mx-auto md:px-16 md:mt-2  ">
                <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {products.products.map((productItem,idx)=>{
                        return (
                             <ProductCard key={idx} productItem={productItem}/>
                        )
                    })}
                </div>
            </div>
    )
}

export default Shop