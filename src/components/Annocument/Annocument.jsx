import React from 'react'

const Annocument = () => {
    const mystyle = {
        width: "30%",
        height: "340px",
      }
      const mystyle1 = {
        width: "68%",
        height: "340px",
      }
  return (
    <div>
         <section className=' py-20'>
        <div className='container mx-auto flex'>
          <div className='img' style={mystyle}>
            <img className='w-full h-full'  src='/public/images/banner-1.png'  />
          </div>
          <div className='img' style={mystyle1}>
            <img  className='w-full h-full'  src='/public/images/banner-2.png'  />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Annocument