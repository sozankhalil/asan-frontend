import React from 'react'
import { Link } from 'react-router-dom'

const SignupComponent = () => {
  return (
    <div className='grid place-items-center'>
      <div className=' w-96 bg-gray-300 mt-20 py-6 px-8 text-center rounded-sm shadow-md grid place-items-center	'>
      <h1 className='font-bold text-xl mb-6 '>Sign Up</h1>
      <form action="" className=''>
     <input type="text" placeholder='Username' className='border-2 mb-2 h-8 w-64' />
     <br />
     <input type="text" placeholder='Name' />
     <br />
     
     <input type="password" placeholder='Password' />
     <br />
     <input type="password" placeholder='Re-Enter Password' />
      </form>
      <button>Sign Up</button>
      <div>
      Already a member? <Link>Login here</Link>
      </div>
    </div>
  
    </div>
  )
}

export default SignupComponent