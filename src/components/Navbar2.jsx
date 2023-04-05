import './Navbar2Style.css'
import React, { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaBars, FaSearch, FaTimes, FaTwitter } from 'react-icons/fa'

const Navbar2 = () => {
  const [className, setClassName] = useState(false);
  const handleClass = () => setClassName(!className);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className='humbergur1' onClick={handleClick}>
        {click ? <AiOutlineClose size={20} style={{ color: 'black' }} /> : <AiOutlineMenu size={20} style={{ color: 'black' }} />}
      </div>
      <nav className='nav '>
        <Link><img src={logo} alt="" className='logo1 h-12' /></Link>
     
        <div className='search-box-search'>
          <div className={className ? 'search-box' : 'hide-search-box'}>
          <form action="" className='search-form'>
         
            <input type="text" placeholder='Search here...' />
          </form>
            
          </div>
          <div className='search' onClick={handleClass}> {className ? <FaTimes size={20} style={{ color: '#E12424' }} /> : <FaSearch size={20} style={{ color: '#E12424' }} />}
          </div>
        </div>
        <ul className='nav-links'>
          <li><Link>Foods</Link></li>
          <li><Link>Handmade</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>StartUp</Link></li>
          <li><Link>More</Link></li>
          <li ><Link className='in' >Sign In</Link></li>
          <li><Link className='up'>Sign Up</Link></li>
          <li><Link><HiOutlineShoppingBag size={35} style={{ color: '#E12424' }} /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar2