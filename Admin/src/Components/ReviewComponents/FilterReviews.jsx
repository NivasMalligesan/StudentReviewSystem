import React, { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCaretDown } from 'react-icons/io5';

const FilterReviews = ({ filters, setFilters }) => {
  const handleInputChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const [isOpen, setIsOpen] = useState(true); // Default open for larger screens
  const contentRef = useRef(null);
  const [height, setHeight] = useState('auto');

  // Detect screen size to control open/close state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(true); // always open for screens ≥ sm
      } else {
        setIsOpen(false); // collapsible for smaller screens
      }
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth height transition for collapsible behavior
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col h-full justify-between transition-all duration-300">
      <div>
        {/* Header with caret only visible on small screens */}
        <div
          className={`flex justify-between items-center ${
            window.innerWidth < 640 ? 'cursor-pointer' : ''
          }`}
          onClick={() => {
            if (window.innerWidth < 640) setIsOpen(!isOpen);
          }}
        >
          <h1 className="text-2xl font-future">Filters</h1>
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
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            window.innerWidth >= 640 ? '' : ''
          }`}
        >
          {/* Search by College */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Search by College</label>
            <input
              type="text"
              value={filters.college}
              onChange={(e) => handleInputChange('college', e.target.value)}
              placeholder="Enter college"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search by Branch */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Search by Branch</label>
            <input
              type="text"
              value={filters.branch}
              onChange={(e) => handleInputChange('branch', e.target.value)}
              placeholder="Enter branch"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ⭐ Filter by Rating */}
          <div className="flex flex-col mt-5">
            <label className="text-sm text-black">Filter by Rating</label>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    filters.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => handleInputChange('rating', star)}
                />
              ))}
            </div>
            {filters.rating > 0 && (
              <p
                className="text-sm text-gray-600 mt-1 cursor-pointer underline"
                onClick={() => handleInputChange('rating', 0)}
              >
                Clear Rating Filter
              </p>
            )}
          </div>

          {/* Verified Users Only */}
          <div className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) => handleInputChange('verified', e.target.checked)}
              id="verified"
              className="w-4 h-4"
            />
            <label htmlFor="verified" className="text-sm text-black">
              Verified Users Only
            </label>
          </div>

          {/* Approved Reviews Only */}
          <div className="flex items-center gap-2 mt-5 mb-4">
            <input
              type="checkbox"
              checked={filters.approved}
              onChange={(e) => handleInputChange('approved', e.target.checked)}
              id="approved"
              className="w-4 h-4"
            />
            <label htmlFor="approved" className="text-sm text-black">
              Approved Reviews Only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterReviews;
