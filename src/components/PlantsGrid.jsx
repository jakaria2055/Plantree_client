import { useEffect } from "react";
import ProductStore from "../store/ProductStore";
import PlantsCard from "./PlantsCard";
import ProductSkeleton from "../skeleton/ProductSkeleton";

function PlantsGrid({productList}) {
  const { ProductList, ProductListRequest } = ProductStore();

useEffect(() => {
    if (!productList) {
      (async () => {
        await ProductListRequest();
      })();
    }
  }, [productList]);

  const data = productList || ProductList;

  if (data === null) {
    return <ProductSkeleton />;
  } else {
    return (
      <div className="relative  bg-green-900 mb-28 mt-30 flex flex-col gap-5 justify-center">
        <div className="container w-full grid grid-cols-1 gap-x-12 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, i) => (
            <PlantsCard key={i} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default PlantsGrid;
