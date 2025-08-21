import React, { useEffect, useState } from "react";
import { SAMPLE_TOOLS } from "../../GardeningToolsData";
import { Link } from "react-router-dom";

function GardeningTools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setTools(SAMPLE_TOOLS);
  }, []);

  console.log(tools);
  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">Gardenning & Tools</h2>
        <p className="max-w-2xl">
          Grow with confidence using our premium tools! Durable, ergonomic, and
          designed for every gardener—from beginner to pro. Cultivate your dream
          garden effortlessly!" 🌿🛠️
        </p>
      </div>

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-2 xl:grid-cols-3">
        {tools.map((item, index) => (
          <div
            key={index}
            className=" bg-green-900 flex items-center justify-center p-2 rounded-md shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md"
          >
            <div className="max-w-sm w-full bg-green-950 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative">
                <img
                  src={item.img}
                  alt="Product"
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 mt-1">{item.type}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-100">
                      Discount: ${item.discount}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      Price: ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-yellow-400">★★★★</div>
                    <div className="text-gray-300">★</div>
                  </div>
                </div>
                <Link to={`/cart/${item?.id}`} className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-950 font-medium py-3 rounded-lg transition-colors">
                  Add to Cart
                  <i className="ri-shopping-cart-fill font-bold mx-2"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GardeningTools;
