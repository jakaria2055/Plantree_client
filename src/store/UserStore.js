import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";
import { setEmail } from "../utility/utility";
const Base_URL = "http://localhost:8080/api/v1";

const UserStore = create((set) => ({
  // isLogin: () => {
  //   return !!Cookies.get("accesstoken");
  // },

  isLogin: () => {
    return !!localStorage.getItem("accesstoken");
  },

  LoginFormData: { email: "", password: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [name]: value,
      },
    }));
  },

  RegisterFormData: { email: "", password: "" },
  RegisterFormOnChange: (name, value) => {
    set((state) => ({
      RegisterFormData: {
        ...state.RegisterFormData,
        [name]: value,
      },
    }));
  },

  VerifyFormData: { email: "", otp: "" },
  VerifyFormChange: (name, value) => {
    set((state) => ({
      VerifyFormData: {
        ...state.VerifyFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  UserCreateRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`${Base_URL}/user/register`, postBody);

    setEmail(postBody.email);
    set((state) => ({
      VerifyFormData: { ...state.VerifyFormData, email: postBody.email },
    }));

    set({ isFormSubmit: false });
    return res.data["status"] == "success";
  },

  VerifyOTPRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`${Base_URL}/user/verify`, postBody);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  // LoginRequest: async (postBody) => {
  //   set({ isFormSubmit: true });
  //   let res = await axios.post(`${Base_URL}/user/login`, postBody);
  //   set({ isFormSubmit: false });
  //   return res.data["status"] === "success";
  // },

  LoginRequest: async (postBody) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`${Base_URL}/user/login`, postBody);

      if (res.data["status"] === "success") {
        // ⬇️ Save tokens here
        localStorage.setItem("accesstoken", res.data.accesstoken);
        localStorage.setItem("refreshtoken", res.data.refreshtoken);

        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      return false;
    } finally {
      set({ isFormSubmit: false });
    }
  },

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    try {
      // Just call logout, backend will get refreshtoken from cookies
      let res = await axios.post(
        `${Base_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      set({ isFormSubmit: false });
      return res.data["status"] === "success";
    } catch (e) {
      set({ isFormSubmit: false });
      return false;
    }
  },
}));

export default UserStore;
