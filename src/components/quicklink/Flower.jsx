import React, { useEffect, useState } from "react";
import { SAMPLE_FLOWER } from "../../FlowerData";

function Flower() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    setFlowers(SAMPLE_FLOWER);
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">Flowers</h2>
        <p className="max-w-2xl">Brighten your space with nature’s beauty! Our vibrant flowers bring color, fragrance, and joy to any home. Shop now and let every bloom inspire happiness in your daily life! 🌸✨</p>
      </div>

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-2 xl:grid-cols-3">
        {/* popular-card bg-green-950 w-72 mx-auto p-10 pt-24 rounded-md relative */}

        {/* CARD */}
        {flowers.map((item, index) => (
          <div key={index} className="card card-side bg-green-800 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md">
            <figure className="relative h-full w-1/2">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt="Snake Plant"
              />
            </figure>
            <div className="card-body w-1/2 p-4">
              <h2 className="card-title lobster-regular">{item.name}</h2>
              <strike>
                <p>Price: ${item.price}</p>
              </strike>
              <p className="text-xl">Discount: $ {item.discount}</p>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded-sm text-xl">
                  <i className="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flower;
