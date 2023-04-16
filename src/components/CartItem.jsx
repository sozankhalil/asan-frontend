import React, { useContext } from 'react'
import { ShopContext } from '../context/shoppingContext'

const CartItem = (props) => {
    const { id, imgsrc, name, description, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='border-2   object-cover mt-5 rounded-lg '>
            <div className='flex justify-normal'>
                <div className='w-1/3 mt-8 ml-4'>
                    <img src={imgsrc} alt="" className='w-full h-2/3 object-cover  ' />
                </div>
                <div className='m-10'>
                    <div>
                        <h1 className='font-bold '>{name} </h1>
                        <h1 className='font-semibold mt-5 '>{price} IQD</h1>
                    </div>
                    <div className='mt-4 text-center'>
                        <button className=' text-2xl font-bold pr-4' onClick={()=>removeFromCart(id)}>-</button>
                        <input  className='bg-gray-400 w-1/3 text-center border-gray-400' value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                        <button className=' text-2xl font-bold pl-4 bg-gray-' onClick={()=> addToCart(id)} >+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem

  