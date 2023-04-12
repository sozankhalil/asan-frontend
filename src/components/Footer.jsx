import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaGithubAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full px-20 py-10 mt-40 bg-slate-300'>
      <div className='w-auto   md:flex md:justify-between'>
        <div className='h-full max-w-full flex justify-center p-5 pl-10 '>
          <div className='location'>
            <div className='flex mb-4'>
              <FaHome size={20} style={{ color: '#ED3636', marginRight: '2rem' }} />
              <div>
                <p className='leading-8'>Malik-Mahmood-ring-road</p>
                <p className='leading-8'>Sulaymaniyah, Iraq</p>
              </div>
            </div>

            <div className='flex mb-4'>
              <FaPhone size={20} style={{ color: '#ED3636', marginRight: '2rem' }} />
              <h4>  +964 770 866 6837 </h4>
            </div>
            <div className='flex '>
              <FaMailBulk size={20} style={{ color: '#ED3636', marginRight: '2rem' }} />
              <h4> sozan.civil@gmail.com </h4>
            </div>
          </div>
        </div>
       
        <div className='h-full p-4 ml-6'>
          <div className=' flex justify-center'>
            <FaFacebook size={30} style={{ color: '#ED3636', marginRight: '2rem' }} />
            <FaTwitter size={30} style={{ color: '#ED3636', marginRight: '2rem' }} />
            <FaLinkedin size={30} style={{ color: '#ED3636', marginRight: '2rem' }} />
            <FaInstagram size={30} style={{ color: '#ED3636', marginRight: '2rem' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer