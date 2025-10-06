import React from 'react';
import { FaStar, FaCheckCircle, FaThumbsUp, FaDumpster } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
import { Userprofile } from '../../assets/Assets';

const ReviewCard = ({
  img,
  name,
  college,
  branch,
  userVerified,
  reviewVerified,
  rating,
  date,
  reviewText,
  likes,
  onApprove,
  onRemove
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 flex flex-col gap-4 h-full hover:shadow-lg transition">
      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
        <img
          src={img || Userprofile}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-black flex items-center gap-2">
            {name} {userVerified && <FaCheckCircle className="text-blue-500" />}
          </span>
          <span className="text-sm text-gray-500">
            {college} - {branch}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`text-base ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">{date}</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{reviewText}</p>

      {/* Likes + Approve */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaThumbsUp /> {likes}
        </div>

        {/* Conditional Buttons */}
        {!reviewVerified ? (
          <button
            className="flex items-center gap-2 px-3 py-1 bg-yellow-500 text-white rounded-2xl text-sm hover:bg-yellow-600 transition"
            onClick={onApprove}
          >
            <IoAddCircle /> Approve Review
          </button>
        ) : (
          <button
            className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-2xl text-sm hover:bg-red-700 transition"
            onClick={onRemove}
          >
            <FaDumpster /> Remove Review
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
