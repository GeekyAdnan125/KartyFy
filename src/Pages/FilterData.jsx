import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

function FilterData() {
  const filterProduct = useSelector(state => state.product.filteredData)  
  console.log(filterProduct)
  return (
    
    <div className="container px-4 mx-auto md:px-16 md:mt-2  ">
                <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {filterProduct.length > 0  ? filterProduct.map((productItem,idx)=>{
                        return (
                             <ProductCard key={idx} productItem={productItem}/>
                        )
                    }) : <div>
                         <h1>No  this kind Products is found we will add it sortly !!!</h1>
                      </div>}
                </div>
            </div>
  )
}

export default FilterData