import React from 'react';

const SearchInput = ({ search, setSearch, category, setCategory }) => {
    return (
        <div>
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 justify-between border border-gray-100">
  {/* Search Input */}
  <div className="relative flex-1 w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-3 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
    </svg>
    <input
      type="text"
      value={search}
      placeholder="Search pets or locations..."
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-300 outline-none transition duration-200"
    />
  </div>

  {/* Category Dropdown */}
  <div className="relative">
    <select
    value={category}
    onChange={(e)=>setCategory(e.target.value)}
   
      className="appearance-none border
       border-gray-200 rounded-xl py-2.5 px-4 pr-10 bg-gradient-to-r from-orange-50 to-white text-gray-700 focus:ring-2 focus:ring-orange-400 focus:border-orange-300 outline-none transition duration-200"
    >
      <option value="All">All Categories</option>
      <option value="Pets (Adoption)">🐾 Pets (Adoption)</option>
      <option value="Pet Food">🍖 Pet Food</option>
      <option value="Accessories">🎀 Accessories</option>
      <option value="Care Products">🧴 Care Products</option>
    </select>

    {/* Dropdown Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-3 top-3 text-gray-400 pointer-events-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>
        </div>
    );
};

export default SearchInput;