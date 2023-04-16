import './CustomerCardStyles.css'
import React from 'react'
import { AiFillStar, AiOutlinePhone } from 'react-icons/Ai'
import { CiLocationOn } from 'react-icons/Ci'

import { Link } from 'react-router-dom'
import { CustomerData } from './CustomerData'



const CustomerCard = ({ id, title, imgSrc, address, phone }) => {
    return (
        <div >
          
                <div className=''>
                    <h1 className='title text-base pb-2 font-medium '>{title}</h1>
                <div className='border-2 '>
                    <div className='customer-img '>
                        <img src={imgSrc} alt="image" className='h-60 w-full object-cover'/>
                        </div>
                        <div className='customer-content '>
                            <div className='star-icon flex p-2'>
                                < AiFillStar size={30} style={{ color: '#E12424' }} />
                                < AiFillStar size={30} style={{ color: '#E12424' }} />
                                < AiFillStar size={30} style={{ color: '#E12424' }} />
                                < AiFillStar size={30} style={{ color: '#E12424' }} />
                            </div>
                            <div className='adress-button flex justify-between p-2'>
                                <div className='address-place'>
                                    <div className='flex justify-between'>
                                        <CiLocationOn size={30} style={{ color: '#E12424' }} />
                                        <h1 className=''> {address}</h1> </div>
                                    <div className='flex'>
                                        <AiOutlinePhone size={30} style={{ color: '#E12424' }} />
                                        <h1>{phone}</h1>
                                    </div>
                                </div>
                            <Link className='button-page text-base text-center text-rose-500 hover:bg-slate-500' to='/shoppingPage'> Visit Page </Link>
                            </div>
                        </div>
                   
                </div>
                
            </div>

        </div>
    )
}

export default CustomerCard



    // < AiFillStar size = { 30} style = {{ color: '#E12424' }} />
    //     < AiFillStar size = { 30} style = {{ color: '#E12424' }} />
    //         < AiFillStar size = { 30} style = {{ color: '#E12424' }} />
    //             < AiFillStar size = { 30} style = {{ color: '#E12424' }} />
    //                 < AiFillStar size = { 30} style = {{ color: '#C2ACAC' }} />