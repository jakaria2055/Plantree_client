import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SAMPLE_PLANT } from "../plantsData";
import CustomerOrderForm from "../components/CustomerOrderForm";
import Marquee from "react-fast-marquee";
import { SAMPLE_SEEDS } from "../SeedsData";
import { SAMPLE_TOOLS } from "../GardeningToolsData";

function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundPlant = SAMPLE_PLANT.find((item) => item.id === parseInt(id));
    const foundSeed = SAMPLE_SEEDS.find((item) => item.id === parseInt(id));
    const foundTools = SAMPLE_TOOLS.find((item)=> item.id === parseInt(id));
    setProduct(foundPlant || foundSeed || foundTools|| null);
  }, [id]);


  if (!product) {
    return (
      <section>
        <div className="conatiner">
          <h1>Product Not Found</h1>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container grid grid-cols-1 gap-5">
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <h1 className="lobster-regular text-yellow-500">Product Details</h1>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="font-bold text-3xl">{product.name}</h2>
              <p className="italic font-semibold text-xl">{product.s_name}</p>
              <p className="text-yellow-500">Price: ${product.price}</p>
              <p>{product?.germination}</p>
              <p>{product?.description}</p>
              <p>{product?.type}</p>
            </div>
            <img
              src={product.img}
              className="w-64 h-64 object-cover hover:scale-150 transform duration-500"
            />
          </div>
        </div>

        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={true}
          gradientColor={[253, 230, 138]} // RGB values for yellow-200
          gradientWidth={100}
          className="bg-gradient-to-r from-green-900 to-green-950 py-3 text-white font-medium"
        >
          <div className="flex items-center">
            <span className="mx-4">🌿</span>
            <span>
              Transform your space into a lush oasis with our vibrant, easy-care
              plants! Each purchase not only brings life to your home but also
              supports a greener planet. Don't wait—nature's beauty is just a
              click away!
            </span>
            <span className="mx-4">✨</span>
          </div>
        </Marquee>

        {/* CUSTOMER INFO */}
        <div>
          <CustomerOrderForm />
        </div>
      </div>
    </section>
  );
}

export default Cart;
