import { useNavigate, useRouteError } from "react-router-dom";
import Title from "../components/shared/Title";
import errorImg from "../assets/The-404-Page.jpg";

const ErrorPage = () => {
  const error= useRouteError()
  const navigate= useNavigate()
  // console.log(error)
  return (
    <div className="w-full pt-20 flex flex-col justify-center items-center text-center gap-4">
      <Title title={"GameHub"}/>
      <img src={errorImg} alt="error image" className="w-7/12 h-80 object-cover" />
      <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="card-actions justify-center mt-1">
          <button
            className="btn btn-accent"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>
        </div>
    </div>
  )
};

export default ErrorPage;
