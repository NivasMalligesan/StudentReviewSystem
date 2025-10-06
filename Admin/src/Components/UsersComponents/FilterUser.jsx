import React, { useState, useEffect, useRef } from 'react';
import { IoCaretDown } from 'react-icons/io5';

const FilterUser = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [minReviews, setMinReviews] = useState('');
  const [userVerified, setUserVerified] = useState(false);
  const [role, setRole] = useState('');

  const [isOpen, setIsOpen] = useState(true); // always open by default on large screens
  const contentRef = useRef(null);
  const [height, setHeight] = useState('auto');

  // ✅ Handle responsive behavior (auto-open for ≥sm screens)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(true); // force open for large screens
      } else {
        setIsOpen(false); // allow collapsing for small screens
      }
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Smooth height transition for collapse on mobile
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  // ✅ Notify parent whenever filters change
  useEffect(() => {
    onFilterChange({
      name: name.trim(),
      college: college.trim(),
      branch: branch.trim(),
      minReviews: minReviews ? parseInt(minReviews) : null,
      userVerified,
      role: role.trim(),
    });
  }, [name, college, branch, minReviews, userVerified, role, onFilterChange]);

  return (
    <div className="flex flex-col h-full justify-between transition-all duration-300">
      <div>
        {/* Header - clickable only on small screens */}
        <div
          className={`flex justify-between items-center ${
            window.innerWidth < 640 ? 'cursor-pointer' : ''
          }`}
          onClick={() => {
            if (window.innerWidth < 640) setIsOpen(!isOpen);
          }}
        >
          <h1 className="text-2xl font-future">Filters</h1>

          {/* Caret visible only on mobile */}
          <div className="sm:hidden">
            <IoCaretDown
              size={30}
              className={`transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>

        {/* Smooth collapsible content */}
        <div
          ref={contentRef}
          style={{
            maxHeight: window.innerWidth >= 640 ? 'none' : height,
          }}
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
        >
          {/* Search by Name */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Search by Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search by College */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Search by College</label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="Enter college"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search by Branch */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Search by Branch</label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="Enter branch"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>

          {/* Minimum Reviews */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Minimum Reviews Count</label>
            <input
              type="number"
              value={minReviews}
              onChange={(e) => setMinReviews(e.target.value)}
              placeholder="e.g. 100"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Verified Users Only */}
          <div className="flex items-center gap-2 mt-5 mb-4">
            <input
              type="checkbox"
              checked={userVerified}
              onChange={(e) => setUserVerified(e.target.checked)}
              id="verified"
              className="w-4 h-4"
            />
            <label htmlFor="verified" className="text-sm text-black">
              Verified Users Only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterUser;
