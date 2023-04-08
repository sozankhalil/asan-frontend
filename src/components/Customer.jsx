import React from 'react'
import CustomerCard from './CustomerCard'
import { Link } from 'react-router-dom'
import { CustomerData } from './CustomerData'



const Customer = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-12 mb-10 font-semibold '>Our Popular Customers </h1>
            <div className=' grid gap-12 grid-cols-1 p-10 xl:grid-cols-3 md:grid-cols-2 '>

                {
                    CustomerData.map((value) => {
                        return (

                            <CustomerCard
                                key={value.id}
                                title={value.title}
                                imgSrc={value.imgSrc}
                                address={value.address}
                                phone={value.phone}
                            />
                        )
                    }
                    )
                }
            </div>

            <div className=' text-2xl mt-30 pt-10 text-red-500 text-center '>
                <Link  >See More</Link>
            </div>
        </div>
    )
}

export default Customer


