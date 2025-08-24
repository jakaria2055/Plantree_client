import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const Base_Url = "http://localhost:8080/api/v1";

const CartStore = create((set) => ({
  isCartSubmit: false,

  CartSaveRequest: async (productID, quantity) => {
    try {
      set({ isCartSubmit: true });
      let PostBody = {
        productID: productID,
        qty: quantity,
      };
      let res = await axios.post(`${Base_Url}/SaveCartList`, PostBody, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });

      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response?.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  CartList: null,
  CartCount: 0,
  CartTotal: 0,
  CartVatTotal: 0,
  CartPaybleTotal: 0,
  CartListRequest: async () => {
    try {
      let res = await axios.get(`${Base_Url}/CartList`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
      let total = 0;
      let vat = 0;
      let payble = 0;
      res.data["data"].forEach((item, i) => {
        total =
          total + parseInt(item["qty"]) * parseInt(item["product"]["price"]);
      });

      vat = total * 0.05;
      payble = vat + total;
      set({ CartTotal: total });
      set({ CartVatTotal: vat });
      set({ CartPaybleTotal: payble });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  RemoveCartListRequest: async (cartID) => {
    try {
      set({ CartList: null });
      await axios.post(
        `${Base_Url}/RemoveCartList`,
        { _id: cartID },
        {
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        }
      );
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default CartStore;
