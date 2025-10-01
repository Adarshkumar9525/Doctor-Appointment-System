// import React, { useState } from 'react'
// import {assets} from '../assets/assets'

// export const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: "Edward Vincet",
//     image: assets.profile_pic,
//     email: "adarsh@gmail.com",
//     phone: '952530273',
//     address: {
//       line1: '57th Cross Richmond',
//       line2: 'Circle, Crush Road, London'
//     },
//     gender: 'Male-01-20',
//     dob: '2000-01-20'
//   });
//   const [isEdit,setEdit] = useState(true)
//   return (
//     <div className='max-w-lg flex flex-col gap-2 text-sm'>
//      <img className='w-36 rounder' src={userData.image} alt="" />
//      {
//       isEdit
//       ? <input className='bg-gray50 text-3xl font-madium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name:e.target.value}))} />
//       :<p className='font-medium text-netural-800 mt-4'>{userData.name}</p>
//      }

//      <hr className='bg-zinc-400 h-[1px] border-none' />
//      <div>
//       <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
//       <div className='grid grid-cols[1fr_3fr] gap-y-2.5 mt mt-3 text-netural-700' >
//         <p>Email id:</p>
//         <p>{userData.email}</p>
//         <p>Phone:</p>
//         {
//       isEdit
//       ? <input type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone,name:e.target.value}))} />
//       :<p>{userData.phone}</p>
//      }
//      <p>Address:</p>{
//       isEdit 
//       ? <p>
//         <input onChange={(e) => setUserData({...prev, address:{...prev.address, line1: e.target.value}})} value={ userData.address.line1} type="text" />
//         <br />
//         <input onChange={(e) => setUserData({...prev, address:{...prev.address, line2: e.target.value}})} value={ userData.address.line2} type="text" />
//       </p>
//       :
//       <p>
//         {userData.address.line1}
//         <br />
//         {userData.address.line2}
//       </p>
//      }
//       </div>
//      </div>
//      <div>
//       <p>
//         BASIC INFORMATION
//       </p>
//       <div>
//         <p>Gender</p>
//          {
//       isEdit
//       ? <select onChange={(e) =>setUserData({...prev, gender: e.target.value})} value={ userData.gender}>
//         <option value="Male"> Male</option>
//         <option value="Female"> Female</option>
//       </select>
//       :<p>{userData.gender}</p>
//      }
//      <p>Birthday</p>
//      {
//       isEdit ? <input type="date" onChange={(e) =>setUserData(prev({...prev, dob: e.target.value}))} value={userData.dob}/>
//       : <p>{userData.dob}</p>
//      }
//       </div>
//      </div>
//      <div>
//       {
//      isEdit 
//     ? <button onClick={() => setEdit(false)}>Save information</button>
//     : <button onClick={() => setEdit(true)}>Edit</button>
// }

//      </div>
//     </div>
//   )
// }

// export default MyProfile/

import React, { useState } from 'react';
import { assets } from '../assets/assets';

export const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincet",
    image: assets.profile_pic,
    email: "adarsh@gmail.com",
    phone: '952530273',
    address: {
      line1: '57th Cross Richmond',
      line2: 'Circle, Crush Road, London'
    },
    gender: 'Male-01-20',
    dob: '2000-01-20'
  });
  
  const [isEdit, setEdit] = useState(false);

  return (
    <div className='max-w-lg mx-auto p-4 flex flex-col gap-4 text-sm'>
      <img className='w-36 h-36 rounded-full object-cover' src={userData.image} alt="Profile" />
      
      {/* Name Field */}
      <div>
        {isEdit ? (
          <input 
            className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 p-2 rounded border'
            type="text" 
            value={userData.name} 
            onChange={e => setUserData(prev => ({...prev, name: e.target.value}))} 
          />
        ) : (
          <p className='font-medium text-neutral-800 mt-4 text-2xl'>{userData.name}</p>
        )}
      </div>

      <hr className='bg-zinc-400 h-[1px] border-none' />
      
      {/* Contact Information */}
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-2 gap-y-2.5 mt-3 text-neutral-700'>
          <p>Email id:</p>
          <p className='text-blue-400'>{userData.email}</p>
          
          <p>Phone:</p>
          {isEdit ? (
            <input 
              className='p-1 border rounded'
              type="text" 
              value={userData.phone} 
              onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))} 
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}
          
          <p className=' font-medium'>Address:</p>
          {isEdit ? (
            <div className='flex flex-col gap-1'>
              <input 
                className='p-1 border rounded bg-gray-50'
                onChange={(e) => setUserData(prev => ({
                  ...prev, 
                  address: {...prev.address, line1: e.target.value}
                }))} 
                value={userData.address.line1} 
                type="text" 
              />
              <input 
                className='p-1 border rounded bg-gray-50'
                onChange={(e) => setUserData(prev => ({
                  ...prev, 
                  address: {...prev.address, line2: e.target.value}
                }))} 
                value={userData.address.line2} 
                type="text" 
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      
      {/* Basic Information */}
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-2 gap-y-2.5 mt-3 text-neutral-700'>
          <p>Gender:</p>
          {isEdit ? (
            <select 
              className='p-1 border rounded'
              onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          
          <p>Birthday:</p>
          {isEdit ? (
            <input 
              className='p-1 border rounded'
              type="date" 
              onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))}
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      
      {/* Edit/Save Button */}
      <div className='mt-6'>
        {isEdit ? (
          <button 
            className='bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600'
            onClick={() => setEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button 
            className='bg-gray-500 text-black px-4 py-2 rounded hover:bg-blue-600'
            onClick={() => setEdit(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;