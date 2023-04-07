import './CustomerCardStyles.css'
import React from 'react'
import { AiFillStar, AiOutlinePhone } from 'react-icons/Ai'
import { CiLocationOn } from 'react-icons/Ci'

import khanm from '../images/khanm.jpg'
import { Link } from 'react-router-dom'

const CustomerCard = () => {
    return (
        <div className='customer-card grid gap-4 grid-cols-3 p-4 '>
            <div>
                <h1 className='title text-lg pb-2 font-medium'>Khanm Hand made</h1>
                <div className='border-2'>
                    <div className='customer-img'>
                        <img src={khanm} alt="image" />
                    </div>
                    <div className='customer-content '>
                        <div className='star-icon flex p-2'>
                            <AiFillStar size={30} style={{ color: '#E12424' }} />
                            <AiFillStar size={30} style={{ color: '#E12424' }} />
                            <AiFillStar size={30} style={{ color: '#E12424' }} />
                            <AiFillStar size={30} style={{ color: '#E12424' }} />
                            <AiFillStar size={30} style={{ color: '#C2ACAC' }} />
                        </div>
                        <div className='adress-button flex justify-between p-2'>
                            <div className='address-place'>
                                <div className='flex justify-between'>
                                    <CiLocationOn size={30} style={{ color: '#E12424' }} />
                                    <h1 className=''> Sulaymany, Chwarbax,</h1> </div>
                                <div className='flex'>
                                    <AiOutlinePhone size={30} style={{ color: '#E12424' }} />
                                    <h1>+964 770 123 1234</h1>
                                </div>
                            </div>
                            <Link className='button-page text-base text-center text-rose-500'> Visit Page </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard