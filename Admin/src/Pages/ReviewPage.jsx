import React, { useState } from 'react';
import FilterReviews from '../Components/ReviewComponents/FilterReviews';
import ReviewCard from '../Components/ReviewComponents/ReviewCard';
import { Userprofile } from '../assets/Assets';

const ReviewPage = () => {
  const [filters, setFilters] = useState({
    rating: 0,
    verified: false,
    approved: false,
    college: '',
    branch: '',
  });

  const [collegeReviews, setCollegeReviews] = useState([
    {
      img: Userprofile,
      name: 'Nivas',
      college: 'Bannari Amman Institute of Technology - Sathyamangalam',
      branch: 'Computer Science',
      userVerified: true,
      reviewVerified: false,
      rating: 5,
      date: '2025-09-20',
      reviewText: 'Excellent faculty and campus environment. Strong placements!',
      likes: 23,
    },
    {
      img: Userprofile,
      name: 'Anitha',
      college: 'PSG College of Technology - Coimbatore',
      branch: 'Electronics & Communication',
      userVerified: true,
      reviewVerified: false,
      rating: 4,
      date: '2025-09-15',
      reviewText: 'Very supportive staff and good learning resources.',
      likes: 15,
    },
    {
      img: Userprofile,
      name: 'Rahul',
      college: 'Kumaraguru College of Technology - Coimbatore',
      branch: 'Information Technology',
      userVerified: false,
      reviewVerified: false,
      rating: 3,
      date: '2025-09-10',
      reviewText: 'Average experience, infrastructure could be better.',
      likes: 8,
    },
    {
      img: Userprofile,
      name: 'Mythili',
      college: 'VIT - Vellore',
      branch: 'Computer Science',
      userVerified: true,
      reviewVerified: true,
      rating: 5,
      date: '2025-09-05',
      reviewText: 'Amazing campus life and very supportive professors!',
      likes: 40,
    },
    {
      img: Userprofile,
      name: 'Karthik',
      college: 'SRM Institute of Science and Technology - Chennai',
      branch: 'Mechanical Engineering',
      userVerified: false,
      reviewVerified: true,
      rating: 4,
      date: '2025-09-01',
      reviewText: 'Good labs and facilities, but the administrative work is slow.',
      likes: 12,
    },
    {
      img: Userprofile,
      name: 'Priya',
      college: 'Amrita Vishwa Vidyapeetham - Coimbatore',
      branch: 'Civil Engineering',
      userVerified: true,
      reviewVerified: false,
      rating: 5,
      date: '2025-08-28',
      reviewText: 'Lovely campus and very helpful faculty. Highly recommend!',
      likes: 30,
    },
    {
      img: Userprofile,
      name: 'Vikram',
      college: 'VIT - Vellore',
      branch: 'Electronics & Communication',
      userVerified: false,
      reviewVerified: true,
      rating: 4,
      date: '2025-08-20',
      reviewText: 'Great learning environment and plenty of opportunities.',
      likes: 18,
    },
  ]);

  // ✅ Approve Review
  const handleApprove = (name) => {
    setCollegeReviews((prev) =>
      prev.map((review) =>
        review.name === name ? { ...review, reviewVerified: true } : review
      )
    );
  };

  // ✅ Remove Review
  const handleRemove = (name) => {
    setCollegeReviews((prev) => prev.filter((review) => review.name !== name));
  };

  // ✅ Apply filters dynamically
  const filteredUsers = collegeReviews.filter((review) => {
    if (filters.rating > 0 && review.rating < filters.rating) return false;
    if (filters.verified && !review.userVerified) return false;
    if (filters.approved && !review.reviewVerified) return false;
    if (filters.college && !review.college.toLowerCase().includes(filters.college.toLowerCase()))
      return false;
    if (filters.branch && !review.branch.toLowerCase().includes(filters.branch.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="p-5 sm:mx-5 overflow-y-auto hide-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1 w-full bg-white shadow text-black rounded-xl p-5">
          <FilterReviews filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-3 w-full p-5">
          <h1 className="text-xl font-future">Manage Reviews</h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[500px] overflow-y-auto hide-scrollbar rounded-2xl">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((review, index) => (
                <ReviewCard
                  key={index}
                  {...review}
                  onApprove={() => handleApprove(review.name)}
                  onRemove={() => handleRemove(review.name)}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">
                No reviews match the filter criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
