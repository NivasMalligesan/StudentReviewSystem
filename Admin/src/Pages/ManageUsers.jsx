import React, { useState } from 'react';
import FilterUser from '../Components/UsersComponents/FilterUser';
import UserProfileCard from '../Components/UsersComponents/UserProfileCard';
import { Userprofile } from '../assets/Assets';

const ManageUsers = () => {
  const [filters, setFilters] = useState({});
  const [users, setUsers] = useState([
    { img: Userprofile, name: 'Nivas', college: 'Bannari Amman Institute of Technology - Sathyamangalam', branch: 'Computer Science', reviewCount: 120, userVerified: false, joinDate: '2023-05-12' },
    { img: Userprofile, name: 'Niva', college: 'Bannari Amman Institute of Technology - Sathyamangalam', branch: 'Computer Science', reviewCount: 120, userVerified: false, joinDate: '2023-06-01' },
    { img: Userprofile, name: 'Anitha', college: 'PSG College of Technology - Coimbatore', branch: 'Electronics & Communication', reviewCount: 85, userVerified: true, joinDate: '2022-08-15' },
    { img: Userprofile, name: 'Rahul', college: 'Kumaraguru College of Technology - Coimbatore', branch: 'Information Technology', reviewCount: 200, userVerified: false, joinDate: '2021-11-10' },
    { img: Userprofile, name: 'Mythili', college: 'VIT - Vellore', branch: 'Computer Science', reviewCount: 50, userVerified: true, joinDate: '2023-01-20' },
    { img: Userprofile, name: 'Karthik', college: 'SRM Institute of Science and Technology - Chennai', branch: 'Mechanical Engineering', reviewCount: 110, userVerified: true, joinDate: '2022-03-05' },
  ]);

  // ✅ Handle Approve
  const handleApprove = (name) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.name === name ? { ...user, userVerified: true } : user
      )
    );
  };

  // ✅ Handle Remove
  const handleRemove = (name) => {
    setUsers((prev) => prev.filter((user) => user.name !== name));
  };

  // ✅ Apply filters
  const filteredUsers = users.filter((user) => {
    if (filters.name && !user.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
    if (filters.college && !user.college.toLowerCase().includes(filters.college.toLowerCase())) return false;
    if (filters.minReviews && user.reviewCount < filters.minReviews) return false;
    if (filters.userVerified && !user.userVerified) return false;
    return true;
  });

  return (
    <div className="p-5 sm:mx-5 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Filter */}
        <div className="col-span-1 w-full bg-white shadow text-black rounded-xl p-5">
          <FilterUser onFilterChange={setFilters} />
        </div>

        {/* Users */}
        <div className="col-span-3 w-full sm:p-5">
          <h1 className="text-xl font-future">Manage Users</h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[500px] overflow-y-auto hide-scrollbar rounded-2xl">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <UserProfileCard
                  key={index}
                  {...user}
                  onApprove={() => handleApprove(user.name)}
                  onRemove={() => handleRemove(user.name)}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No users match the filter criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
