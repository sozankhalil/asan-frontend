import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { Shopping1Data } from'./Shopping1Data'
import { ShopContext } from '../context/shoppingContext'
import CartItem from './CartItem'
const ShoppingCartBasket = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
    <div className='w-96 m-auto p-2'>
      <div>
        <h1 className='font-bold text-xl text-center'>Your Cart Items</h1>
      </div>
      <div>
        {Shopping1Data.map((product)=>{
     if(cartItems[product.id]!==0){
      return <CartItem data={product}/> ;
     }
        })}
      </div>
      {totalAmount > 0 ? <div className=''>
        <p>Subtotal: {totalAmount} IQD </p>
        <div className='flex justify-between mt-4'>
          <button onClick={() => navigate("/shoppingPage")} className='bg-red-500 py-2 px-1 text-gray-50 rounded-sm' >Continue Shopping</button>
          <button className='bg-red-500 py-2 px-1 text-gray-50 rounded-sm '>Check out</button>
        </div>
      </div>: <h1 className='text-center'>Your Cart Is Empty</h1> }

    </div>
  )
}

export default ShoppingCartBasket