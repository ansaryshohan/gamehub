// import { Link } from "react-router-dom";
import bgImg from "../assets/sub-banner-img.jpg";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";
import { useAuthContext } from "../hooks/useAuthContext";

const ProfilePage = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
      <Title title={"Profile | GameHub"} />
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-52 flex items-center justify-center"
      >
        <SectionHeadline titleText={`Welcome ${user?.email}`} />
      </div>
      <div className="flex items-center justify-center pt-10 pb-16 bg-gray-950 text-white">
        <div className="card  w-96 ">
          <figure className="px-10 pt-10">
            {user?.photoURL ? (
              <div className="p-2 flex items-center justify-center border rounded-full">
                <img
                  src={user?.photoURL}
                  alt="Shoes"
                  className="w-32 h-32 rounded-full border border-red-400"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-red-500 border-2 border-red-500">
                {user?.email.slice(0, 1).toUpperCase()}
              </div>
            )}
          </figure>
          <div className="card-body items-center text-center">
            {user?.displayName && <p>Name : {user?.displayName}</p>}
            {user?.email && <p>Email : {user?.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
