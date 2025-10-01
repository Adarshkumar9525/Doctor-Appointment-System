// import React from 'react'
// import { doctors } from '../assets/assets'

// const TopDoctors = () => {
//   return (
//     <div className=' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//         <h1 className='text-3xl font-medium'>Top Doctors to BOOK</h1>
//         <p className='sm:w-1/3 text-center text-sm'>simply browes through our extensive list of trusted doctors</p>
//        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//             {doctors.slice(0,10).map((item,index)=>(
                
//                 <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
//                     <img className='bg-blue-50' src={ item.image} alt="" />
//                     <div className='p-4'>
//                         <div className='flex item-center gap-2 text-sm text-center text-green-500'>
//                         <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                     </div>
//                     <p>{item.name}</p>
//                     <p>{item.speciality}</p>
//                 </div>
//                 </div>
                
//             ))}
//         </div>
//         <button>more</button>
//     </div>
//   )
// }

// export default TopDoctors

import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const TopDoctors = () => {

     const navigate = useNavigate()
     const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to BOOK</h1>
      <p className='sm:w-1/3 text-center text-sm'>simply browse through our extensive list of trusted doctors</p>
      
      {/* Fixed grid classes and added key prop */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item, index) => (
          <div  onClick={()=> navigate(`/appointment/${ item._id}`)}
            key={item.id || index} // Use item.id if available, otherwise fallback to index
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
          >
            {/* Improved image with proper sizing and alt text */}
            <img 
              className='bg-blue-50 w-full h-40 object-cover' 
              src={item.image} 
              alt={`Dr. ${item.name}, ${item.speciality}`} 
            />
            <div className='p-4'>
              {/* Fixed typo: item-center → items-center */}
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='font-medium text-gray-900 text-lg '>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Styled the more button */}
      <button  onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='mt-10 px-12 py-3 bg-blue-50 text-gray-600 rounded-full hover:bg-blue-600 transition-colors'>
        More
      </button>
    </div>
  )
}

export default TopDoctors