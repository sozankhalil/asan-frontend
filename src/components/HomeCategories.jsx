import React from 'react'

import { BiRestaurant, BiBookBookmark } from 'react-icons/Bi'
import { FiShoppingBag, FiHome } from 'react-icons/Fi'
import { GrServices } from 'react-icons/Gr'
import { RiScissorsCutFill } from 'react-icons/Ri'
import { GiArtilleryShell } from 'react-icons/Gi'
import { BsThreeDots } from 'react-icons/Bs'

const HomeCategories = () => {
    return (
        <div>
            <div className=''>
                <hr className='mt-20 mb-20' />

                <div className=''>
                    <div className='text-center mt-20 mb-16  font-semibold text-4xl'>
                        <h1 className=''>Categories</h1>
                    </div>
                    <div className='text-center grid place-items-center md:grid-cols-3 lg:grid-cols-4'>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <BiRestaurant size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Restaurant</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <FiShoppingBag size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Shopping</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <GrServices size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Home services</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <RiScissorsCutFill size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Beauty salon</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <GiArtilleryShell size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Hand-made</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <BiBookBookmark size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Books and Arts</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <FiHome size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>Real estate</h1>
                            </div>
                        </div>
                        <div className='border-2 pt-4 pb-4  w-60 mb-8 hover:bg-red-100 cursor-pointer	'>
                            <div className='grid place-items-center mt-4 mb-4'>
                                <BsThreeDots size={80} style={{ color: '#4b4b4b' }} />
                                <h1 className='mt-4'>More</h1>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default HomeCategories