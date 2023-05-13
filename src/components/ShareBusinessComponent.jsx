import React from 'react'
import img from '../images/sharebusiness.png'

const ShareBusinessComponent = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='mt-16'>
                
            </div>
            <div className='mt-16 mx-4'>
                <img src={img} alt="business image" className=' bg-cover overflow-hidden ' />
            </div>
        </div>

    )
}

export default ShareBusinessComponent