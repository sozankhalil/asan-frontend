import React from 'react'
import { Link } from 'react-router-dom'

const SignupComponent = () => {
  return (
    <div className='grid place-items-center'>
      <div className=' w-96 bg-gray-300 mt-20 py-8 px-12 text-center rounded-md shadow-md grid place-items-center	'>
      <h1 className='font-semibold text-xl mb-6 '>Sign Up</h1>
      <form action="" className=''>
          <input type="text" placeholder='Name' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
     <br />
          <input type="text" placeholder='Email' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
     <br />
     
          <input type="password" placeholder='Password' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
     <br /> 
          <input type="password" placeholder='Re-Enter Password' className='border-2 mb-4 h-10 w-64 pl-2 rounded-md' />
      </form>
        <button className=' rounded bg-red-500 p-1 text-white px-24'>Sign Up</button>
      <div className='mt-6'>
          Already a member? <Link to='/signin' className='text-red-600 underline 	 '>Login here</Link>
      </div>
    </div>
  
    </div>
  )
}

export default SignupComponent