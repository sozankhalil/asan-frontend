import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {ShopContext} from '../context/shoppingContext'



const Shopping1Card = (props) => {
  const { id, imgsrc, name, description, price }=props.data;  
  const { addToCart,cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
     
      <div >
        <div className='border-2 pb-8 w-full object-cover '>
          <div>
            <img src={imgsrc} alt="" className='w-full h-40 object-cover' />
          </div>
          <div>
            <h1 className='font-semibold p-2'>{name} </h1>
            <p className='text-sm pb-1 px-2 '>{description}</p>
            <div className='flex justify-end px-4 font-bold'>
              <h1 className=''>{price} IQD</h1>
            </div>
          </div>
    <div className='flex justify-center border-2  mx-16 mt-5  bg-red-600 text-zinc-100 p-1 hover:bg-gray-500 '>
            <button className='text-base text-centr w-full' onClick={() => addToCart(id)} >+ Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>  }  </button>
    </div>
        
  </div>

      </div>

    </div>
  )
}

export default Shopping1Card