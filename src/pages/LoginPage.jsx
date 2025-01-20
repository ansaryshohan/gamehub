import { Link } from "react-router-dom";
import loginImg from "../assets/services-1.png.webp";
import SocialLogin from "../components/login&register/SocialLogin";
import LoginForm from "../components/login&register/LoginForm";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center gap-8 min-h-screen bg-gray-800 text-white">
      <div className="hidden md:block">
        <img src={loginImg} alt="" className="rounded-xl" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
        <LoginForm/>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <SocialLogin />
        <p className="text-xs text-center sm:px-6 ">
          Don{"'"}t have an account?
          <Link
            rel="noopener noreferrer"
            to={"/register"}
            className="underline text-gray-50 ml-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
