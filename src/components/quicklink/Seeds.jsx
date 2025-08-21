import React, { useEffect, useState } from "react";
import { SAMPLE_SEEDS } from "../../SeedsData";
import { Link } from "react-router-dom";

function Seeds() {
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    setSeeds(SAMPLE_SEEDS);
  }, [setSeeds]);

  console.log(seeds)

  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">Seeds</h2>
        <p className="max-w-2xl">
          "Unlock nature's potential with our premium seeds! Grow vibrant
          blooms, fresh herbs, and homegrown veggies—each packet holds a tiny
          miracle. Start your gardening journey today!" 🌱✨
        </p>
      </div>

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-2 xl:grid-cols-3">
        {/* CARD */}

        {seeds.map((item, idx) => (
          <div key={idx} className="card bg-green-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image at top */}
            <figure className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://example.com/seed-image.jpg"
                alt="Sunflower seeds"
              />
            </figure>

            {/* Card body */}
            <div className="p-5">
              {/* Title and price row */}
              <div className="flex justify-between items-start mb-2">
                <p className="text-xl font-bold text-gray-100">
                  {item?.name}
                </p>
                <div className="text-right">
                  <p className="text-lg font-semibold text-yellow-600">${item?.price}</p>
                </div>
              </div>

              {/* Category and type badges */}
              <div className="flex gap-2 mb-3">
                <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                  {item?.type}
                </span>
                <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                  {item?.category}
                </span>
              </div>

              {/* Seed specs */}
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <p className="font-medium text-gray-300">Germination</p>
                  <p>{item?.germination}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-300">Season</p>
                  <p>{item?.season}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200  mb-4 line-clamp-2">
                {item?.description}
              </p>

              {/* Action button */}
              <Link to={`/cart/${item?.id}`} className="w-full bg-yellow-600 hover:bg-green-950 text-white py-2 px-4 rounded-md transition-colors">
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Seeds;
