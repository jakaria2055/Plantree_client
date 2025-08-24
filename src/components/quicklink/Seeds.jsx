import { useEffect } from "react";
import ProductStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeleton/ProductSkeleton";
import { Link } from "react-router-dom";

function Seeds() {
  const { CategoryProductList, CategoryProductListRequest } = ProductStore();
  useEffect(() => {
    (async () => {
      await CategoryProductListRequest("seeds");
    })();
  }, []);

  if (CategoryProductList === null) {
    return <ProductSkeleton />;
  } else {
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

          {CategoryProductList.map((item, i) => {
            return (
              <div
                key={i}
                className="card bg-green-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image at top */}
                <figure className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item["image"]}
                    alt="Sunflower seeds"
                  />
                </figure>

                {/* Card body */}
                <div className="p-5">
                  {/* Title and price row */}
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xl font-bold text-gray-100">{item["title"]}</p>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-yellow-600">
                        $ {item["price"]}
                      </p>
                    </div>
                  </div>

                  {/* Category and type badges */}
                  <div className="flex gap-2 mb-3">
                    <span className="bg-green-200 text-green-800 text-xs p-3 rounded">
                      {item["remark"]}
                    </span>
                    {/* StarRating */}
                    <div className="text-yellow-500 text-xs py-3 flex">
                      {[...Array(5)].map((_, index) => {
                        const rating = parseFloat(item["star"]);
                        const starIndex = index + 1;

                        if (rating >= starIndex) {
                          return <i key={index} className="ri-star-fill"></i>;
                        } else if (rating >= starIndex - 0.5) {
                          return (
                            <i key={index} className="ri-star-half-fill"></i>
                          );
                        } else {
                          return (
                            <i
                              key={index}
                              className="ri-star-line text-gray-400"
                            ></i>
                          );
                        }
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200  mb-4 line-clamp-2">
                    {item["shortDes"]}
                  </p>

                  {/* Action button */}
                  <Link
                    to={`/Details/${item["_id"]}`}
                    className="w-full bg-yellow-600 hover:bg-green-950 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Add to Cart
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

export default Seeds;
