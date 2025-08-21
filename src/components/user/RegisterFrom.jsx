import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper";
import UserStore from "../../store/UserStore";
import UserSubmitButton from "./UserSubmitButton";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  let navigate = useNavigate();
  const { RegisterFormData, RegisterFormOnChange, UserCreateRequest } = UserStore();


  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(RegisterFormData.email)) {
      toast.error("Valid email address required!");
    } else {
      let res = await UserCreateRequest(RegisterFormData);
      if (res) {
        UserStore.getState().VerifyFormChange("email", RegisterFormData.email);
        navigate("/otp");
        toast.success("OTP send to your mail");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Signup</legend>

          <label className="label">Email</label>
          <input
            value={RegisterFormData.email}
            onChange={(e) => RegisterFormOnChange("email", e.target.value)}
            type="email"
            className="border p-2 rounded w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            value={RegisterFormData.password}
            onChange={(e) => RegisterFormOnChange("password", e.target.value)}
            type="password"
            className="border p-2 rounded w-full"
            placeholder="Password"
            required
          />

          <UserSubmitButton
            onClick={onFormSubmit}
            className="w-full mt-6 bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            text="Next"
          />
        </fieldset>
      </div>
    </>
  );
}

export default RegisterForm;
