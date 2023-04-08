import React from 'react'
import shopping1Img from '../images/handmadecover.jpg'

const HeroShoppingImg = () => {
  return (
    <div>
          <div className=' items-center px-8 pt-12 relative xl:pt-0 '>
              <img src={shopping1Img} alt="" className='h-96 w-full object-cover' />
          </div>
          <div className='bg-rose-300  absolute w-32 h-32 rounded-full  text-center align-middle pt-8 left-20 top-96'>
              <h1 className='absolute font-semibold '> Khanm Hand-made</h1>
          </div >
    
    </div>
  )
}

export default HeroShoppingImg