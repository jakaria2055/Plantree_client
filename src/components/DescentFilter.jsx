import React from "react";

function DescentFilter({ selectDescent, setSelectDescent, Descents }) {
  return (
    <div>
      <label className="block mb-1 font-bold jost-regular">
        📊 Filter by Descent:{" "}
      </label>
      <select
        value={selectDescent}
        onChange={(e) => setSelectDescent(e.target.value)}
        className="p-1 text-sm bg-green-900 rounded border-2 border-gray-300 min-w-[120px]"
      >
        <option value="">All Descent</option>
        {Descents.map((descent) => (
          <option key={descent} value={descent}>
            {descent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DescentFilter;
