import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";
import { setEmail, unauthorized } from "../utility/utility";

const Base_URL = "https://plntree-server.vercel.app/api/v1";


const UserStore = create((set) => ({
  // ISLogin: () => {
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

  ProfileForm: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFormChange: (name, value) => {
    set((state) => ({
      ProfileForm: {
        ...state.ProfileForm,
        [name]: value,
      },
    }));
  },

  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      let res = await axios.get(`${Base_URL}/ReadProfile`,{
        headers:{
          accesstoken: localStorage.getItem("accesstoken")
        }
      });
    console.log(Cookies.get("accesstoken"))
      if (res.data["data"].length > 0) {
        set({ ProfileDetails: res.data["data"][0] });
        set({ ProfileForm: res.data["data"][0] });
      } else {
        set({ ProfileDetails: [] });
      }
    } catch (e) {
       console.log(Cookies.get("accesstoken"))
      unauthorized(e.response.status);
    }
  },

  ProfileSaveRequest: async (PostBody) => {
    try {
      set({ ProfileDetails: null });
      let res = await axios.post(`${Base_URL}/CreateProfile`, PostBody,{
        headers:{
          accesstoken: localStorage.getItem("accesstoken")
        }
      });
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default UserStore;
