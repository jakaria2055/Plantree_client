import { useEffect } from "react";
import ProductStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeleton/ProductSkeleton";
import { Link } from "react-router-dom";

function Flower() {
  const { CategoryProductList, CategoryProductListRequest } = ProductStore();
  useEffect(() => {
    (async () => {
      await CategoryProductListRequest("flower");
    })();
  }, []);

  if (CategoryProductList === null) {
    return <ProductSkeleton />;
  } else {
    return (
      <section>
        <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
          <h2 className="lobster-regular text-yellow-500">Flowers</h2>
          <p className="max-w-2xl">
            Brighten your space with nature’s beauty! Our vibrant flowers bring
            color, fragrance, and joy to any home. Shop now and let every bloom
            inspire happiness in your daily life! 🌸✨
          </p>
        </div>

        <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-2 xl:grid-cols-3">
          {/* CARD */}
          {CategoryProductList.map((item, i) => {
            return (
              <div
                key={i}
                className="card card-side bg-green-800 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md"
              >
                <figure className="relative h-full w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={item["image"]}
                    alt="Snake Plant"
                  />
                </figure>
                <div className="card-body w-1/2 p-4">
                  <h2 className="card-title lobster-regular">
                    {item["title"]}
                  </h2>
                  <p className="text-xl">Price: ${item["price"]}</p>
                  <p>{item["shortDes"]}</p>
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
                  <div className="card-actions justify-end">
                    <Link
                      to={`/Details/${item["_id"]}`}
                      className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded-sm text-xl"
                    >
                      <i className="ri-shopping-cart-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Flower;
