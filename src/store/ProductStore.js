import axios from "axios";
import { create } from "zustand";

const Base_Url = "http://localhost:8080/api/v1";

const ProductStore = create((set) => ({
  ProductList: null,
  ProductListRequest: async () => {
    let res = await axios.get(`${Base_Url}/ReadProduct`);
    if (res.data["status"] === "success") {
      set({ ProductList: res.data["data"] });
    }
  },

  PopularProductList: null,
  PopularProductListRequest: async (Remark) => {
    let res = await axios.get(`${Base_Url}/ProductListByRemark/${Remark}`);
    if (res.data["status"] === "success") {
      set({ PopularProductList: res.data["data"] });
    }
  },
}));

export default ProductStore;
