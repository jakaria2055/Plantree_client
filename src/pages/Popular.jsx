import React, { useEffect } from "react";
import ProductStore from "../store/ProductStore";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import { Link } from "react-router-dom";

function Popular() {
  const { PopularProductList, PopularProductListRequest } = ProductStore();

  useEffect(() => {
    (async () => {
      await PopularProductListRequest("popular");
    })();
  }, []);

  if (PopularProductList === null) {
    return <ProductSkeleton />;
  } else {
    return (
      <section id="popular" className="bg-green-900">
        <div className="flex flex-col items-center gap-3 text-center mb-40 animate-slide-down">
          <h2 className="lobster-regular text-yellow-500">Your Choice Plant</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
        <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* CARD */}
          {PopularProductList.map((item, i) => {
            return (
              <div
                key={i}
                className="popular-card bg-green-950 w-72 mx-auto p-10 pt-24 rounded-md relative"
              >
                <img
                  src={item["image"]}
                  className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
                />
                <p className="italic">{item["shortDes"]}</p>
                <h3>{item["title"]}</h3>


                {/* StarRating */}
                <div className="text-yellow-500 text-xs py-3 flex">
                  {[...Array(5)].map((_, index) => {
                    const rating = parseFloat(item["star"]);
                    const starIndex = index + 1;

                    if (rating >= starIndex) {
                      return <i key={index} className="ri-star-fill"></i>; // Full star
                    } else if (rating >= starIndex - 0.5) {
                      return <i key={index} className="ri-star-half-fill"></i>; // Half star
                    } else {
                      return (
                        <i
                          key={index}
                          className="ri-star-line text-gray-400"
                        ></i>
                      ); // Empty star
                    }
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl">${item["price"]}</p>
                  <Link
                    to={`/cart/${item["_id"]}`}
                    className="bg-yellow-500 px-2 py-1 rounded-sm text-xl"
                  >
                    <i class="ri-shopping-cart-fill"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Popular;
