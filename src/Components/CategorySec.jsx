import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CategorySec() {
    const { id } = useParams();
    console.log(id);
    const categories = [
    {title:"Men" ,
        imageUrl : "https://www.shutterstock.com/image-photo/solution-problem-young-cute-man-260nw-1395533837.jpg"
    },
    {title:"Women" ,
        imageUrl : "https://www.shutterstock.com/image-photo/full-size-photo-gorgeous-woman-260nw-2273090017.jpg"
    },
    {title:"Kids" ,
        imageUrl: "https://www.shutterstock.com/image-photo/cheerful-funny-stylish-african-american-260nw-2182761671.jpg"
     },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6  '>
        {categories.map((item,idx)=>{
            return (
                <Link to={`/menscollection/${item.title}`} key={idx} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <img className='w-full h-full object-cover rounded-lg shadow-sm'
                    src={item.imageUrl} alt="" />
                    <div className='absolute top-20 left-12'>
                        <p className='text-xl font-bold '>{item.title}</p>
                        <p className='text-gray-600'>View All</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default CategorySec