import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const data = [
        {
          cateImg: "/public/images/category/cat-1.png",
          category: "Fashion",
        },
        {
          cateImg: "/public/images/category/cat2.png",
          category: "Electronic",
        },
        {
          cateImg: "/public/images/category/cat3.png",
          category: "Cars",
        },
        {
          cateImg: "/public/images/category/cat4.png",
          category: "Home & Garden",
        },
        {
          cateImg: "/public/images/category/cat5.png",
          category: "Gifts",
        },
        {
          cateImg: "/public/images/category/cat6.png",
          category: "Music",
        },
        {
          cateImg: "/public/images/category/cat7.png",
          category: "Health & Beauty",
        },
        {
          cateImg: "/public/images/category/cat8.png",
          category: "Pets",
        },
        {
          cateImg: "/public/images/category/cat9.png",
          category: "Baby Toys",
        },
        {
          cateImg: "/public/images/category/cat10.png",
          category: "Groceries",
        },
        {
          cateImg: "/public/images/category/cat11.png",
          category: "Books",
        },
      ]
  return (
    <div className=''>
         <div className=''>
        {data.map((value, index) => {
          return (
            <div className='flex items-center gap-4 mb-4  ' key={index}>
             <Link to={`product/${value.category}`} className='flex items-center gap-4'>
             <img className='w-9 h-9' src={value.cateImg} alt='' />
              <span className='font-medium' >{value.category}</span>
             </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories