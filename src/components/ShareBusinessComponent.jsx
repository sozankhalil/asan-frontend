import React from 'react'
import img from '../images/business.jpg'

const ShareBusinessComponent = () => {
    return (
        <div className='grid bg-gray-300 my-16 mx-6 md:grid-cols-3  '>
            <div className='my-8   w-full md:col-span-2'>
                <form action="" className='w-full   '>
                    <label htmlFor="" className='ml-4 text-lg'>Business Name</label>
                    <br />
                    <input type="text" placeholder='Business Name' className='h-12  w-5/6 mb-4 ml-4 p-2 md:w-3/4' />
                    <br />
                    <label htmlFor="" className='ml-4 text-lg'>Address</label>
                    <br />
                    <input type="text" placeholder='Address' className='h-12 w-5/6 mb-4 ml-4 p-2  md:w-3/4 ' />
                    <br />
                    <label htmlFor="" className='ml-4 text-lg'>Email</label>
                    <br />
                    <input type="email" placeholder='Email' className='h-12 w-5/6  mb-4 ml-4 p-2  md:w-3/4' />
                    <br />
                    <label htmlFor="" className='ml-4 text-lg'>Phone</label>
                    <br />
                    <input type="text" placeholder='Phone' className='h-12 w-5/6 mb-4 ml-4 p-2  md:w-3/4' />
                    <br />
                    <label htmlFor="" className='ml-4 text-lg'>Website</label>
                    <br />
                    <input type="text" placeholder='website' className='h-12 w-5/6 mb-4 ml-4 p-2  md:w-3/4' />
                    <br />
                    <button className=' rounded h-12 ml-4 w-5/6  bg-red-500 p-1 text-white px-24  md:w-3/4'>Submit Now</button>
                </form>
            </div>
            <div className=' mt-10 md:flex md:justify-center md:object-cover md:mt-20'>
                <img src={img} alt="business image" className='  w-full  md:object-fill md:mr-20  md:rounded-lg md:pb-20 ' />
            </div>
        </div>

    )
}

export default ShareBusinessComponent