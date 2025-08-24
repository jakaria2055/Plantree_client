import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

function GardeningTools() {
  const { CategoryProductList, CategoryProductListRequest } = ProductStore();
  useEffect(() => {
    (async () => {
      await CategoryProductListRequest("tools");
    })();
  }, []);

  if (CategoryProductList === null) {
    return <ProductSkeleton />;
  } else {
    return (
      <section>
        <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
          <h2 className="lobster-regular text-yellow-500">
            Gardenning & Tools
          </h2>
          <p className="max-w-2xl">
            Grow with confidence using our premium tools! Durable, ergonomic,
            and designed for every gardener—from beginner to pro. Cultivate your
            dream garden effortlessly!" 🌿🛠️
          </p>
        </div>

        <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-2 xl:grid-cols-3">
          {CategoryProductList.map((item, i) => {
            return (
              <div
                key={i}
                className=" bg-green-900 flex items-center justify-center p-2 rounded-md shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md"
              >
                <div className="max-w-sm  bg-green-950 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative">
                    <img
                      src={item["image"]}
                      alt="Product"
                      className="w-full h-52 object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <h4  className="text-lg font-bold text-gray-100">{item["title"]}</h4>
                      <p className="text-gray-400 mt-1">{item["shortDes"]}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-xl font-bold text-gray-100">
                          Price: $ {item["price"]}
                        </p>
                      </div>
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
                    <Link
                      to={`/Details/${item["_id"]}`}
                      className="w-fit p-4 bg-yellow-500 hover:bg-yellow-600 text-green-950 font-medium py-3 rounded-lg transition-colors"
                    >
                      Add Cart
                      <i className="ri-shopping-cart-fill font-bold mx-2"></i>
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

export default GardeningTools;
