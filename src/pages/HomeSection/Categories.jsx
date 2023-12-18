import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const data = [
        {
          cateImg: "/public/images/category/cat-1.png",
          category: "shoes",
        },
        {
          cateImg: "/public/images/category/cat2.png",
          category: "monitor",
        },
        {
          cateImg: "/public/images/category/cat3.png",
          category: "watch",
        },
        {
          cateImg: "/public/images/category/cat4.png",
          category: "laptop",
        },
        {
          cateImg: "/public/images/category/cat5.png",
          category: "mobile",
        },
        {
          cateImg: "/public/images/category/cat6.png",
          category: "Music",
        },
    
     
      ]
  return (
    <div className=''>
         <div className=''>
        {data.map((value, index) => {
          return (
            <div className='flex items-center gap-4 mb-4 mt-10  ' key={index}>
             <Link to={`products/${value.category}`} className='flex items-center gap-4'>
             <img className='w-9 h-9' src={value.cateImg} alt='' />
              <span className='font-medium capitalize' >{value.category}</span>
             </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories