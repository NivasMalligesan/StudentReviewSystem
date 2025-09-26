 import React from 'react'
import { Userprofile } from '../../assets/Assets'
import { IoAddCircle, IoStar } from 'react-icons/io5'

const ReviewsCard = () => {
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
                <span className='bg-green-500 text-black text-xs px-4 py-1 rounded-2xl flex items-center gap-2'>5.0 <IoStar/></span>
                <button className='bg-black text-white  px-4 py-1 rounded-2xl hidden sm:flex justify-center items-center gap-2 cursor-pointer'><IoAddCircle/>Approve</button>
            </div>

        </div>
        <div className='mt-2'>
            <p className='bg-white rounded-2xl p-5 sm:ms-10 text-sm border-[1px] border-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ratione amet quo laboriosam accusamus hic ab dolorum aut cumque alias libero nihil voluptatem a eveniet expedita optio iusto, quidem temporibus doloremque aliquid facilis. Dolorum quasi enim corporis eius labore fugit alias accusantium laudantium illo numquam vero aliquid, voluptates maiores minima.</p>
        </div>
        <div className='sm:hidden mt-2'>
                <button className='  px-4 py-1 rounded-2xl w-full text-center sm:hidden bg-black text-white flex items-center justify-center gap-2 cursor-pointer'><IoAddCircle/> Approve</button>
        </div>
    </div>
  )
}

export default ReviewsCard