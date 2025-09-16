import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const Base_Url = "https://plntree-server.vercel.app/api/v1";

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

  CreateInvoiceRequest: async () => {
    try {
      // Don't set isCartSubmit here to avoid re-render before redirect
      let res = await axios.get(`${Base_Url}/CreateInvoice`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });

      // Redirect immediately without touching store state
      if (
        res.data["status"] === "success" &&
        res.data["data"]["GatewayPageURL"]
      ) {
        // Fastest: direct redirect
        window.location.assign(res.data["data"]["GatewayPageURL"]);

        // Or, open in new tab to avoid any UI change
        // window.open(res.data["data"]["GatewayPageURL"], "_blank");
      } else {
        alert("Unable to redirect to payment gateway.");
      }
    } catch (e) {
      unauthorized(e.response?.status);
    }
  },

  InvoiceList: null,
  InvoiceListRequest: async () => {
    try {
      let res = await axios.get(`${Base_Url}/InvoiceList`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      set({ InvoiceList: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  InvoiceDetails: null,
  InvoiceDetailsRequest: async (id) => {
    try {
      let res = await axios.get(`${Base_Url}/InvoiceProductList/${id}`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      set({ InvoiceDetails: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default CartStore;
