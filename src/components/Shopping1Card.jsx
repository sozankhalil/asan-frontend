import React from 'react'
import { Link } from 'react-router-dom'


import item1 from '../images/item1.jpg'

const Shopping1Card = (props) => {
  return (
    <div>
     
      <div >
        <div className='border-2 h-80 w-full object-cover '>
          <div>
            <img src={props.imgsrc} alt="" className='w-full h-40 object-cover' />
          </div>
          <div>
            <h1 className='font-semibold p-2'>{props.product} </h1>
            <p className='text-sm pb-1 px-2 '>{props.description}</p>
            <div className='flex justify-end px-4 font-bold'>
              <h1 className=''>{props.price} IQD</h1>
            </div>
          </div>
          <div className='flex justify-center border-2 mx-16 mt-1 bg-red-600 text-zinc-100 p-1 hover:bg-gray-500 '>
            <Link className=' text-base text-centr' to='/shoppingCart '> + Add To Cart </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Shopping1Card