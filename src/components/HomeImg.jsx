import './HomeImgStyles.css'

import React from 'react'
import homeImg from '../images/home.jpg'
import { Link } from 'react-router-dom'

const HomeImg = () => {
    return (
        <div className='home'>
            <div className='home-img '>
               <img src={homeImg} alt="" />
                <div class="layer">
                </div>
            </div>
            <div className='home-content'>
                <h1 className='text-5xl text-white pb-6 mb-8'>Share Your Business Or Online Store & Grow With Us</h1>
                <Link>Click Here To Share</Link>
            </div>
        </div>
    )
}

export default HomeImg