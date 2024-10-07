import React from "react";
import searchIcon from "../assets/search-icon.svg";

function SearchFilterButton({
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleReset,
  isFiltered,
}) {
  return (
    <div className="flex gap-2 items-center flex-col sm:flex-row sm:justify-end">
      <div className="flex gap-2">
        <div className="flex bg-white pl-2 pr-12 items-center border-[#DFE1E6] border-2 rounded h-[30px] w-[200px]">
          <img
            src={searchIcon}
            alt="search-icon"
            className="w-[16px] h-[16px]"
          />
          <input
            type="text"
            placeholder="Search Here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none font-medium h-[22px] outline-none focus:ring-0 focus:outline-none placeholder:text-[11px] w-full text-[12px] text-gray-500"
          />
        </div>

      </div>

      {isFiltered && (
        <button
          onClick={handleReset}
          className="text-red-500 text-[13px] font-medium cursor-pointer"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default SearchFilterButton;
