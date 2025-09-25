import React from 'react'
import ReviewsCard from './ReviewsCard'

const ReviewList = () => {
  return (
    <div className='bg-white shadow-lg text-black rounded-xl p-5'>
        <h1 className='text-2xl font-future'>Recent Reviews</h1>
        <div className="flex flex-col gap-3 mt-5 overflow-y-auto max-h-[400px] hide-scrollbar">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </div>
    </div>
  )
}

export default ReviewList