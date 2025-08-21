import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();
  const { LoginFormData, LoginFormOnChange, LoginRequest } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Valid email address required!");
    } else {
      let res = await LoginRequest(LoginFormData);
      if (res) {
        toast.success("Logged in Successfully");
        navigate("/");
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-green-950 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            value={LoginFormData.email}
            onChange={(e) => LoginFormOnChange("email", e.target.value)}
            type="email"
            className="input bg-green-900"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            value={LoginFormData.password}
            onChange={(e) => LoginFormOnChange("password", e.target.value)}
            type="password"
            className="input mb-2 bg-green-900"
            placeholder="Password"
            required
          />

          <UserSubmitButton
            onClick={onFormSubmit}
            className="w-full mt-6 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            text="Next"
          />

          <Link to={`/register`} className="text-gray-300 underline hover:scale-100 transform duration-300">
            don't have account? Sign up.
          </Link>
        </fieldset>
      </div>
    </>
  );
}

export default LoginForm;
