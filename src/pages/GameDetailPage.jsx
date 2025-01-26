import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import bgImg from "../assets/sub-banner-img.jpg";
import GameReviewForm from "../components/gameDetailsComp/GameReviewForm";
import UserGameReviews from "../components/gameDetailsComp/UserGameReviews";
import Ratings from "../components/shared/Ratings";
import SectionHeadline from "../components/shared/SectionHeadline";
import { useAuthContext } from "../hooks/useAuthContext";

const GameDetailPage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [gameData, setGameData] = useState({});
  const [reviewInput, setReviewInput] = useState({
    ratingInput: 0,
    reviewDetails: "",
  });
  const [reviewInputError, setReviewInputError] = useState({
    ratingInputError: "",
    reviewDetailsError: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/game/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data[0]))
      .catch((err) => console.log(err));
      
  }, [id]);
  

  const handleFormDataOnChange = (e) => {
    setReviewInputError({ ...reviewInputError, reviewInputError: "" });
    if (e.target.name === "ratingInput") {
      const value = Number(e.target.value);

      if (value >= 0 && value <= 10) {
        setReviewInputError({
          ...reviewInputError,
          ratingInputError: "",
        });
        return setReviewInput({
          ...reviewInput,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        ratingInputError: "give a rating between 0-10",
      });
    }
    setReviewInput({ ...reviewInput, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      gameId: id,
      reviewData: {
        userRating: reviewInput.ratingInput,
        userReview: reviewInput.reviewDetails,
        name: user.displayName,
        userImg: user.photoURL,
        id: crypto.randomUUID(),
        userEmail: user.email,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/add-review", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      const { data } = await response.json();
      // console.log(data);
      if (data.updateResponse.acknowledged) {
        e.target.reset();
        toast.success("review added successfully");
        setGameData(data.updateData[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-72 flex items-center justify-center"
      >
        <SectionHeadline titleText={`${gameData?.gameName}`} />
      </div>
      <div className="w-full bg-gray-950 py-16 text-white">
        <div className="relative w-10/12 mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
          <div>
            <img src={gameData?.image} alt="" className="sticky top-10" />
          </div>
          <div className="md:px-5 pb-5 ">
            <div className=" flex justify-between items-center">
              <h3 className="text-xl md:text-3xl font-bold mb-5">
                {gameData?.gameName}
              </h3>
              <p className="w-12 h-12 rounded-full border grid place-content-center">
                {" "}
                <FaHeart color="red" size={20} />{" "}
              </p>
            </div>
            <p className="text-lg">{gameData?.comment}</p>
            <div className="text-lg mt-3 flex gap-3 items-center font-bole">
              Rating: <Ratings starCount={gameData?.rating} />
            </div>
            <div className="text-lg mb-8 mt-3 flex gap-3 items-center font-bole">
              Genre: {gameData?.genre}
            </div>
            <div className="border rounded-2xl p-5">
              <p className="text-lg font-bold">Give Your Review:</p>
              <GameReviewForm
                handleFormDataOnChange={handleFormDataOnChange}
                handleFormSubmit={handleFormSubmit}
                reviewInputError={reviewInputError}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          {gameData?.reviews?.length > 0 ? (
            gameData?.reviews?.map((userReview) => (
              <UserGameReviews key={userReview?.id} userReview={userReview} />
            ))
          ) : (
            <div className="w-10/12 mx-auto pt-10 mt-10 border-t flex justify-center gap-16 items-center text-2xl text-red-600 ">No reviews available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
