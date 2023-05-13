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
            <div className='home-content xl:top-3/4'>
                <h1 className='text-2xl text-white pb-6 mb-8 xl:text-4xl'>Share Your Business Or Online Store & Grow With Us</h1>
                <Link to='shareBusiness' className='xl:text-2xl'>Click Here To Share</Link>
            </div>
        </div>
    )
}

export default HomeImg