import React from 'react'
import logo from '../images/logo.png'
import './NavbarStyle.css'
import { FaSearch, FaTwitter } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/Hi'

import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar '>
            <div className='navLeft flex '>
                <div className='logo '>
                    <Link> <img src={logo} alt="logo" /></Link>
                </div>
                <div className='searchborder rounded-full flex justify-between '>
                    <form action="" className='search-bar'>
                        <input type="text" placeholder='Search here' className='' />
                        <button>  <FaSearch size={20} style={{ color: '#E12424' }} /></button>
                    </form>

                </div>

            </div>
            <div className='navRight'>
                <div className='list '>
                    <ul className='flex '>
                        <li>Foods</li>
                        <li>Handmade</li>
                        <li>Homes ervices</li>
                        <li>StratUp</li>
                        <li>More</li>
                    </ul>
                </div>
                <div className='signin '><Link>Sign In</Link></div>
                <div className='signup'><Link>Sign Up</Link></div>
                <div><HiOutlineShoppingBag size={35} style={{ color: '#E12424' }} className='shopping-icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar