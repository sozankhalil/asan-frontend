import React from 'react'
import { Link } from 'react-router-dom'


const LoginComponent = () => {
    return (
        <div className='grid place-items-center'>
            <div className=' w-96 bg-gray-300 mt-20 py-8 px-12 text-center rounded-md shadow-md grid place-items-center	'>
                <h1 className='font-semibold text-xl mb-6 '>Login</h1>
                <form action="" className=''>
                    <input type="text" placeholder='Email' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
                    <br />
                    <input type="password" placeholder='Password' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
                    <br />
                   
                </form>
                <button className=' rounded bg-red-500 p-1 text-white px-24'>Login</button>
                <div className='mt-6'>
                    Don't have an account? <Link to='/signup' className='text-red-600 underline 	 '>Sign up here</Link>
                </div>
            </div>

        </div>
    )
}

export default LoginComponent