import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home"
import ShoppingPage1 from "./pages/ShoppingPage1"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import ShoppingCart from "./pages/ShoppingCart"
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import { ShopContextProvider } from './context/shoppingContext';




export function App() {
  return (
    <>
      <ShopContextProvider>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shoppingPage' element={<ShoppingPage1 />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
      </Routes>
      <Footer />
      </ShopContextProvider>
    </>
  )
}
