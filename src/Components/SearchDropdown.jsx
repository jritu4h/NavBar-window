import React, { useState } from "react";

const SearchDropdown = ({ toggleDropdown, activeDropdown, dropdownRef }) => {
  // Local state for managing dropdown visibility


  const handleToggle = () => {
   
    toggleDropdown("search"); // Toggle the dropdown on/off
  };


  return (
    <div className="relative">
      {/* Search Button */}
      <button
        id="search-btn"
        className="icon-btn focus:outline-none"
        onClick={handleToggle} // Use the handler function
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>

      {/* Search Section */}
      <div
        id="search-container"
        ref={dropdownRef}
        className={`search-container absolute top-16 -right-[330%] transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-0 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[800px] bg-white shadow-lg p-6 transition-all duration-300 ${
          activeDropdown==='search' ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } origin-top py-8`}
      >
        
  

        {/* Search Input with Label */}
        <div className="relative mb-6">
          <input
            type="text"
            id="search-input"
            placeholder="Search insights, services, and experts"
            className="w-full border-t border-gray-300 rounded-lg py-2 px-4 pl-10 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 left-3 w-5 h-5 text-red-400"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>

        {/* Popular Searches */}
        <div className="popular-searches border-t-2 border-r-2 p-5 border-black">
          <p className="font-semibold text-sm text-gray-700 mb-2">Popular Searches</p>
          <ul className="space-y-1">
            <li className="text-gray-600 hover:text-red-500 cursor-pointer">Agile</li>
            <li className="text-gray-600 hover:text-red-500 cursor-pointer">Digital</li>
            <li className="text-gray-600 hover:text-red-500 cursor-pointer">Strategy</li>
          </ul>
        </div>

        {/* Recently Visited */}
        <div className="mt-6">
          <p className="font-semibold text-sm text-gray-700 mb-2">Recently Visited</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Thumbnail"
                className="w-10 h-10 rounded"
              />
              <span className="text-gray-600 hover:text-red-500 cursor-pointer">Recent Page Title 1</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Thumbnail"
                className="w-10 h-10 rounded"
              />
              <span className="text-gray-600 hover:text-red-500 cursor-pointer">Recent Page Title 2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
