import { FaUser } from "react-icons/fa";
import Ratings from "../shared/Ratings";

const UserGameReviews = ({ userComment }) => {
  return (
    <div className="w-10/12 mx-auto pt-10 mt-10 border-t flex justify-start gap-16 items-center">
      <div className="w-20 h-20 rounded-full grid place-items-center border ml-10">
        {userComment?.userImg ? (
          <img
            src={userComment?.userImg}
            alt=""
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <FaUser size={30} color="red" />
        )}
      </div>
      <div className="text-white flex-1">
        <h3 className="font-bold text-2xl">{userComment?.name}</h3>
        <p className="mb-2">{userComment?.userReview}</p>
        <div className="flex items-center justify-start"> <Ratings starCount={userComment?.userRating}/></div>
      </div>
    </div>
  );
};

export default UserGameReviews;
