import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PlantsGrid from "./PlantsGrid";
import ProductStore from "../store/ProductStore";

function ProductByKeyword() {
  const { ListByKeywordRequest, KeywordProductList } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword]);

  if (KeywordProductList === null) {
    return (
      <section className="bg-green-900">
        <div className="container bg-green-900">
          <h2>No Data Matched</h2>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-green-900">
        <div className="container bg-green-900">
          <PlantsGrid productList={KeywordProductList} />
        </div>
      </section>
    );
  }
}

export default ProductByKeyword;
