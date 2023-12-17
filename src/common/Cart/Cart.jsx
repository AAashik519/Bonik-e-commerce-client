import React, { useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import './cart.css'
import useBookings from '../../Hooks/useBookings'
import axios from 'axios'
const Cart = () => {
 const [ bookings]= useBookings()

 const [CartItem, setCartItem] = useState([])

 const totalPrice = bookings.reduce((sum, obj) => sum + obj.price, 0)

  return (
    <div className=''>
       
           <section className='cart-items'>
        <div className='container flex gap-10  mx-auto'>
          

          <div className='cart-details'>
            {bookings.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

           
            {bookings.map((product) => {
              const productQty = product.price * product.qty

              return (
                <div className='cart-list product flex' key={product._id}>
                  <div className='img'>
                    <img src={product.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{product.name}</h3>
                    <h4>
                      ${product.price}.00 * {product.qty}
                      {/* <span>${productQty}.00</span> */}
              
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    <div className='cartControl flex'>
                      <button className='incCart' onClick={() =>incrementQty(product)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='incCart'>
                      
                      </button>
                      {/* <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button> */}
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' flex items-center gap-5'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>

            <div className='mt-10  w-3/4 mx-auto'>
            <button className='bg-[#E94560] px-4 py-2 rounded   w-full text-white'>Checkout</button>
            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Cart