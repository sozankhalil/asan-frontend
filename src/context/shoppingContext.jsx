import { createContext, useState } from 'react'
import React from 'react'
import { Shopping1Data } from '../components/Shopping1Data'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < Shopping1Data.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
};

export const ShoppingContextProvider = (props) => {

  const [cartItem, setCartItem] = useState(getDefaultCart());
  return (
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
  )
}
