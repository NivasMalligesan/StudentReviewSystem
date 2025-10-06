import React from 'react'
import { IoAddCircle, IoStar } from 'react-icons/io5'
import { Userprofile } from '../../assets/Assets' // fallback image
import { FaStar } from 'react-icons/fa'

const ReviewsCard = ({ img, name, college, review, approved, content }) => {
  return (
    <div className='flex flex-col shadow gap-2 text-black border border-gray-400 bg-white rounded-xl p-5'>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
        {/* Profile Section */}
        <div className='flex items-center gap-3'>
          <img src={img || Userprofile} alt={name} className='h-10 w-10 rounded-full object-cover' />
          <div>
            <h1 className='font-semibold'>{name}</h1>
            <p className='text-xs text-gray-400'>{college}</p>
          </div>
        </div>

        {/* Rating + Approve Button (Desktop) */}
        {/* Rating + Approve Button (Desktop) */}
<div className='flex items-center gap-3 mt-3 sm:mt-0'>
  <span className=' text-black text-xs px-4 py-1 rounded-2xl flex items-center gap-1'>
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar size={15} key={i} className={i < review ? 'text-yellow-400' : 'text-gray-300'} />
    ))}
  </span>
  {!approved && (
    <button className='bg-black text-white px-4 py-1 rounded-2xl hidden sm:flex items-center gap-2 cursor-pointer'>
      <IoAddCircle /> Approve
    </button>
  )}
</div>
</div>

      {/* Review Content */}
      <div className='mt-2'>
        <p className='bg-white rounded-2xl p-5 sm:ms-10 text-sm border border-gray-400'>
          {content}
        </p>
      </div>

      {/* Approve Button (Mobile) */}
      {!approved && (
        <div className='sm:hidden mt-2'>
          <button className='px-4 py-1 rounded-2xl w-full bg-green- text-white flex items-center justify-center gap-2 cursor-pointer'>
            <IoAddCircle /> Approve
          </button>
        </div>
      )}
    </div>
  )
}

export default ReviewsCard
