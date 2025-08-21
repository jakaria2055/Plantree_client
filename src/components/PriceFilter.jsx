import React from "react";

function PriceFilter({ priceRange, setPriceRange }) {
  return (
    <div>
      <label className="jost-regular">
        Price Range: {priceRange.min} - {priceRange.max}
      </label>
      <div>
        <input
          className="range range-xs bg-green-900 text-yellow-500"
          type="range"
          min="0"
          max="1000"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
          }
        />
        <input
          className="range range-xs bg-green-900 text-yellow-500"
          type="range"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
          }
        />
      </div>
    </div>
  );
}

export default PriceFilter;
