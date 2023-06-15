import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
const Search = () => {
  return (
    <div className="serachDiv h-64 w-[85%] m-auto p-10 mt-10 bg-gray-300 rounded-lg space-y-5">
      <div className="flex  w-[95%] h-20 m-auto justify-between px-10 bg-white rounded-lg shadow-xl">
        <div className="flex items-center gap-3">
          <FaSearch />
          <input
            type="text"
            placeholder="Search job here..."
            className="w-44 outline-none text-purple-500"
          />
          <MdOutlineCancel className="cursor-pointer text-gray-500" />
        </div>

        <div className="flex items-center gap-3">
          <FaHome />
          <input
            type="text"
            placeholder="Search job here..."
            className="w-44 outline-none text-purple-500"
          />
          <MdOutlineCancel className="cursor-pointer text-gray-500" />
        </div>

        <div className="flex items-center gap-3">
          <HiLocationMarker />
          <input
            type="text"
            placeholder="Search job here..."
            className="w-44 outline-none text-purple-500"
          />
          <MdOutlineCancel className="cursor-pointer text-gray-500" />
        </div>

        <div className="flex items-center">
          <button className="bg-purple-500 text-white h-14 w-20 rounded-lg font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="flex  w-[95%] h-20 m-auto justify-between items-center px-10 rounded-lg">
        <div className="space-x-2">
          <label htmlFor="sort" className="text-gray-500 font-bold">
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="bg-white px-4 py-1 rounded-md text-purple-600 "
          >
            <option value="Relevance">Relevance</option>
            <option value="Inclusive">Inclusive</option>
            <option value="Starts With">Starts With</option>
            <option value="Contains">Contains</option>
          </select>
        </div>

        <div className="space-x-2">
          <label htmlFor="type" className="text-gray-500 font-bold">
            Type:
          </label>
          <select
            name="type"
            id="type"
            className="bg-white px-4 py-1 rounded-md text-purple-600"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Remote">Remote</option>
            <option value="Contract">Contract</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </div>

        <div className="space-x-2">
          <label htmlFor="level" className="text-gray-500 font-bold">
            Level:
          </label>
          <select
            name="level"
            id="level "
            className="bg-white px-4 py-1 rounded-md text-purple-600"
          >
            <option value="Fresher">Fresher</option>
            <option value="Beginner">Beginner</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <span className="text-gray-500 font-semibold">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
