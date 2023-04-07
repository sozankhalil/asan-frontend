import React from 'react'
import CustomerCard from './CustomerCard'
import { Link } from 'react-router-dom'

const Customer = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-10 font-semibold'>Our Popular Customers </h1>
            <CustomerCard />
            <Link className=' text-lg mt-14 pt-10 ' >See More</Link>
        </div>
    )
}

export default Customer