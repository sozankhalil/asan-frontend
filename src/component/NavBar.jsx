import React from 'react'
import logo from '../images/logo.png'
import './NavBarStyle.css'
import { FaSearch, FaTwitter } from 'react-icons/fa'


const NavBar = () => {
    return (
        <div className='navbar'>

            <div className='logo '>
                <img src={logo} alt="logo" />
            </div>
            <div className='searchbar'>
                <div className='searchborder'>
                    <p>Search here</p>
                    <div class>
                        <FaSearch size={20} style={{ color: '#E12424' }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar