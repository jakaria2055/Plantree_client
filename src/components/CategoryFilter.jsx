import React from 'react'

function CategoryFilter({selectCategory, setSelectCategory, categories}) {
  return (
    <div>
        <label className='block mb-1 font-bold jost-regular'>📊 Filter by Category: </label>
        <select
        value={selectCategory}
        onChange={(e)=> setSelectCategory(e.target.value)}
        className='p-1 text-sm bg-green-900 rounded border-2 border-gray-300 min-w-[120px]'
        >
            <option value="">All Category</option>
            {
                categories.map((category)=> (
                    <option key={category} value={category}>{category}</option>
                ))
            }
        </select>
    </div>
  )
}

export default CategoryFilter