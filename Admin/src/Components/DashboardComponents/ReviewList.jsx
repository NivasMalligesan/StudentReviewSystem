import React from 'react'
import ReviewsCard from './ReviewsCard.jsx'
import {Userprofile} from '../../assets/Assets.js'

const ReviewList = () => {
  const reviews = [
    {
      img: Userprofile,
      name: 'Nivas',
      college: 'Bannari Amman Institute of Technology - Sathyamangalam',
      review: '4.0',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      approved: false,
    },
    {
      img: Userprofile,
      name: 'Anitha',
      college: 'PSG College of Technology - Coimbatore',
      review: '4.8',
      content: 'Really good experience, helpful staff and amazing support!',
      approved: true,
    },
    {
      img: '/path-to-img.jpg',
      name: 'Rahul',
      college: 'Kumaraguru College of Technology - Coimbatore',
      review: '4.9',
      content: 'Had a great time, highly recommend for future students!',
      approved: false,
    },
  ]

  return (
    <div className='bg-white shadow text-black rounded-xl p-5'>
      <h1 className='text-2xl font-future'>Recent Reviews</h1>
      <div className="flex flex-col gap-3 mt-5 overflow-y-auto max-h-[400px] hide-scrollbar">
        {reviews.map((r, i) => (
          <ReviewsCard key={i} {...r} />
        ))}
      </div>
    </div>
  )
}

export default ReviewList
