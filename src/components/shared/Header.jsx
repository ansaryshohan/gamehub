import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/gamehub_logo.png";
import { useAuthContext } from "../../hooks/useAuthContext";

const Header = () => {
  const { user,setUser, logOut } = useAuthContext();
  // console.log(user.uid);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        navigate("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-base-100">
      <div className="w-full md:w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/reviews"}>All Reviews</NavLink>
              </li>
              <li>
                <NavLink to={"/add-review"}>Add Reviews</NavLink>
              </li>
              <li>
                <NavLink to={"/my-reviews"}>My Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-36 h-12 rounded-lg object-cover"
              src={logo}
              alt="gameHub logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/reviews"}>All Reviews</NavLink>
            </li>
            <li>
              <NavLink to={"/add-review"}>Add Reviews</NavLink>
            </li>
            <li>
              <NavLink to={"/my-reviews"}>My Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div
            className="w-10 h-10 rounded-full flex justify-center items-center"
            title="wishList"
          >
            <FaHeart size={25} />
          </div>
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  flex justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <FaUser size={25} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              {user?.uid ? (
                <>
                  <li>
                    <Link to={"/profile"}>Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>
                      <Link>Logout</Link>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
