import React from "react";
import ProductStore from "../store/ProductStore";
import { Link } from "react-router-dom";

function SearchComponents() {
  const { SearchKeyword, SetSearchKeyword } = ProductStore();
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="flex items-center bg-green-950 rounded-lg shadow-md overflow-hidden border border-white focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition-all duration-200">
          <input
            type="text"
            placeholder="Find your plants..."
            value={SearchKeyword}
            onChange={(e) => SetSearchKeyword(e.target.value)}
            className="w-full px-4 py-3 text-gray-200 leading-tight focus:outline-none"
          />
          <Link
            to={
              SearchKeyword.length > 0
                ? `/ProductListByKeyword/${SearchKeyword}`
                : `/`
            }
            className="p-3 bg-green-700 hover:bg-green-800 transition-colors duration-200 flex items-center justify-center"
          >
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchComponents;