import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const Base_Url = "http://localhost:8080/api/v1";

const ReviewStore = create((set) => ({
  isReviewSubmit: false,
  ReviewFormData: { des: "" },
  ReviewFormOnChange: (name, value) => {
    set((state) => ({
      ReviewFormData: {
        ...state.ReviewFormData,
        [name]: value,
      },
    }));
  },

  ReviewSaveRequest: async (PostBody) => {
    try {
      set({ isReviewSubmit: true });
      let res = await axios.post(`${Base_Url}/create-review`, PostBody, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isReviewSubmit: false });
    }
  },

  ReviewList: null,
  ReviewListRequest: async () => {
    set({ ReviewList: null });
    let res = await axios.get(`${Base_Url}/review-list`);
    if (res.data["status"] === "success") {
      set({ ReviewList: res.data["data"] });
    }
  },
}));

export default ReviewStore;
