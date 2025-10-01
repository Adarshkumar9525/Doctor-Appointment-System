import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----------left section---- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi saepe deserunt accusamus nemo nam quibusdam iusto veritatis. Eveniet animi facere deleniti iure quasi possimus harum suscipit rerum! Praesentium, totam.</p>
        </div>

        {/* ----------center section---- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            </ul>
            
        </div>
        {/* ----------right section---- */}
        <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
        <li>+91 9525302740</li>
        <li>adarshkumar@716@gmail.com</li>
        </ul>
         </div>
            
       </div>
       {/* --------copyright text ----------*/}
       <div>
       <p className='py-5 text-sm text-center'>Copyright 2024@ Doctapp- All Right Researved</p>
       </div>
    </div>
  )
}

export default Footer