import React from 'react';
import { FaCheckCircle, FaDumpster, FaStar } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';

const UserProfileCard = ({
  img,
  name,
  college,
  branch,
  reviewCount,
  userVerified,
  joinDate,
  role,
  onApprove,
  onRemove
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col hover:shadow-lg transition">

      {/* Top Section */}
      <div className="flex items-center">
        <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover" />
        <div className="ms-3 flex flex-col">
          <h2 className="text-lg font-semibold flex items-center gap-1">
            {name}
            {userVerified && <FaCheckCircle className="text-blue-500" />}
          </h2>
          <p className="text-sm text-gray-500">{branch}</p>
        </div>
      </div>

      {/* College */}
      <p className="text-sm text-gray-600 mt-2">{college}</p>

      {/* Role */}
      <p className="text-xs text-gray-400 italic">{role}</p>

      {/* Review Count */}
      <p className="text-sm text-gray-700 mt-2 font-medium">{reviewCount} Reviews</p>

      {/* Joined Date */}
      <p className="text-xs text-gray-500 mt-1">Joined on: {joinDate}</p>

      {/* Approve Button */}
      {!userVerified && (
        <div className="flex items-end justify-end">
          <button
            className="flex items-center gap-2 px-3 py-1 bg-black text-white rounded-2xl text-sm transition mt-4 hover:bg-gray-800"
            onClick={onApprove}
          >
            <IoAddCircle /> Approve User
          </button>
        </div>
      )}

      {/* Verified User Buttons */}
      {userVerified && (
        <div className="flex justify-between items-center mt-5">
          <button
            className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-2xl text-sm transition mt-4 hover:bg-red-700"
            onClick={onRemove}
          >
            <FaDumpster /> Remove User
          </button>

          <button className="flex items-center gap-2 px-3 py-1 bg-yellow-500 text-white rounded-2xl text-sm transition mt-4 hover:bg-yellow-600">
            <FaStar /> Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
