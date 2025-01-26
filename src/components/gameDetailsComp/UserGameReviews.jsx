import { FaUser } from "react-icons/fa";
import Ratings from "../shared/Ratings";

const UserGameReviews = ({ userReview }) => {
  return (
    <div className="w-10/12 mx-auto pt-10 mt-10 border-t flex justify-start gap-16 items-center">
      <div className="w-20 h-20 rounded-full grid place-items-center border ml-10">
        {userReview?.userImg ? (
          <img
            src={userReview?.userImg}
            alt=""
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <FaUser size={30} color="red" />
        )}
      </div>
      <div className="text-white flex-1">
        <h3 className="font-bold text-2xl">{userReview?.name}</h3>
        <p className="mb-2">{userReview?.userReview}</p>
        <div className="flex items-center justify-start"> <Ratings starCount={userReview?.userRating}/></div>
      </div>
    </div>
  );
};

export default UserGameReviews;
