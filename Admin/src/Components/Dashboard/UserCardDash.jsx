import React from 'react'
import { Userprofile } from '../../assets/Assets'
import { IoAddCircle, IoAnalytics } from 'react-icons/io5'

const UserCardDash = () => {
  return (
     <div className='flex flex-col shadow gap-2  text-black border-[1px] border-gray-400 bg-white rounded-xl p-5'>
        <div className='flex flex-col sm:flex-row justify-between  sm:items-center'>
        <div className='flex items-center gap-3'>
            <img src={Userprofile} alt="" className='h-10 w-10 rounded-full object-cover' />
            <div>
                <h1 className=''>Nivas</h1>
                <p className='text-xs text-gray-400'>Bannari Amman Institute of technology - Sathyamangalam </p>
            </div>
        </div>
        <div className='flex items-center gap-3 mt-3 sm:mt-0'>
           
            <button className='bg-black text-white  px-4 py-1 rounded-2xl hidden sm:flex justify-center items-center gap-2 cursor-pointer' ><IoAnalytics/>View Details</button>
        </div>
            <button className='bg-black text-white  px-4 py-1 rounded-2xl sm:hidden flex justify-center items-center gap-2 cursor-pointer'><IoAnalytics/>View Details</button>

        </div>
    </div>
  )
}

export default UserCardDash