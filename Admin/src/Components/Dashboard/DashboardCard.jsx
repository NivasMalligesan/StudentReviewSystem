import React from 'react';
import { IoEye } from 'react-icons/io5';

const DashboardCard = ({ title, logo: Logo, info, number, growth }) => {
  // Decide text color based on growth value
  const growthColor = growth >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white rounded-xl p-5 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-future">{title}</h1>
          <p className="text-sm text-black flex items-center gap-1">
            <Logo /> {info}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-2xl">
          <IoEye /> View
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 mt-5">
        <h1 className="text-5xl font-bold">
          {number}{' '}
          <span className="text-sm font-semibold">{title}</span>
        </h1>
        <span className={`${growthColor}`}>
          {growth >= 0 ? `+${growth}%` : `${growth}%`} since last month
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
