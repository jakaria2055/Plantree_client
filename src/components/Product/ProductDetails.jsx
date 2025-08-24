import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductStore from "../../store/ProductStore";

function ProductDetails() {
  const { id } = useParams();
  const { Details, DetailsRequest } = ProductStore();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  useEffect(() => {
    (async () => {
      await DetailsRequest(id);
    })();
  }, []);

  if (!Details) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
      </div>
    );
  }

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-950 to-green-800 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-green-900 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Product Image */}
            <div className="flex items-center justify-center p-4 bg-green-800 rounded-lg">
              <img
                src={Details.image}
                alt={Details.title}
                className="w-full h-64 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between text-white">
              <div>
                <h1 className="text-2xl font-bold mb-2">{Details.title}</h1>
                <p className="text-green-200 mb-4">{Details.shortDes}</p>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(Number(Details.star))}
                  </div>
                  <span className="text-green-300">({Details.star})</span>
                </div>

                <div className="text-2xl font-bold text-green-300 mb-6">
                  ${Details.price}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <label className="mr-3 text-green-200">Quantity:</label>
                  <div className="flex items-center border border-green-700 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="w-10 h-10 bg-green-800 hover:bg-green-700 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 h-10 px-2 bg-green-800 text-white text-center border-x border-green-700"
                    />
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="w-10 h-10 bg-green-800 hover:bg-green-700 text-white flex items-center justify-center transition duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => console.log(`Add ${quantity} to cart`)}
                  className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-medium transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;