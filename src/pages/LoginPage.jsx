import { Link } from "react-router-dom";
import loginImg from "../assets/services-1.png.webp";
import SocialLogin from "../components/login&register/SocialLogin";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center gap-8 min-h-screen border border-red-500 bg-gray-800 text-white">
      <div className="hidden md:block">
        <img src={loginImg} alt="" className="rounded-xl" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <div className="flex justify-end text-xs ">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">
            Sign in
          </button>
        </form>
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
