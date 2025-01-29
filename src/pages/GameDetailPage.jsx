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
  const [isGameInWishlist, setIsGameInWishlist] = useState(false);
  const [commentInput, setCommentInput] = useState({
    ratingInput: 0,
    reviewDetails: "",
  });
  const [commentInputError, setCommentInputError] = useState({
    ratingInputError: "",
    reviewDetailsError: "",
  });

  // review data finding and setting
  useEffect(() => {
    fetch(`http://localhost:3000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data[0]))
      .catch((err) => console.log(err));
  }, [id]);



  // wishlist data finding and setting
  useEffect(() => {
    if (!user?.email || !id) return;

  fetch(`http://localhost:3000/wishlist/${user?.email}`)
    .then((res) => {
      // console.log("Response status:", res.status);
      return res.json();
    })
      .then((data) => {
        const wishlistArray = data?.data?.wishlist || [];
        const findGameInWishlist = wishlistArray.includes(id);
        // console.log(data,findGameInWishlist);
        if (findGameInWishlist) {
         return setIsGameInWishlist(true);
        }
      })
      .catch((err) => console.log(err));
  }, [user?.email, id]);

  const handleWishList = async (gameId) => {
    try {
      const response = await fetch("http://localhost:3000/wishlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ gameId, userEmail: user?.email }),
      });
      const data = await response.json();
      if (data?.insertData?.acknowledged) {
        setIsGameInWishlist(true);
        toast.success("game added in wishlist");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const handleWishListDelete = async (gameId) => {
    try {
      const response = await fetch("http://localhost:3000/wishlist", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ gameId, userEmail: user?.email }),
      });
      const data = await response.json();
      // console.log(data);
      if (data?.deleteData?.acknowledged) {
        setIsGameInWishlist(false);
        toast.error("game removed from wishlist");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleFormDataOnChange = (e) => {
    setCommentInputError({ ...commentInputError, commentInputError: "" });
    if (e.target.name === "ratingInput") {
      const value = Number(e.target.value);

      if (value >= 0 && value <= 10) {
        setCommentInputError({
          ...commentInputError,
          ratingInputError: "",
        });
        return setCommentInput({
          ...commentInput,
          [e.target.name]: e.target.value,
        });
      }
      return setCommentInputError({
        ...commentInputError,
        ratingInputError: "give a rating between 0-10",
      });
    }
    setCommentInput({ ...commentInput, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const commentInfo = {
      gameId: id,
      commentData: {
        userRating: commentInput.ratingInput,
        userReview: commentInput.reviewDetails,
        name: user.displayName,
        userImg: user.photoURL,
        id: crypto.randomUUID(),
        userEmail: user.email,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/add-comment", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(commentInfo),
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
      {/* page heading */}
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
      {/* game details section */}
      <div className="w-full bg-gray-950 py-16 text-white">
        <div className="relative w-10/12 mx-auto flex flex-col md:flex-row justify-start items-stretch gap-10">
          <div className="w-2/5">
            <img
              src={gameData?.image}
              alt=""
              className="sticky top-10 w-full"
            />
          </div>
          <div className="md:px-5 pb-5 flex-1">
            <div className=" flex justify-between items-center">
              <h3 className="text-xl md:text-3xl font-bold mb-5 capitalize">
                {gameData?.gameName}
              </h3>
              {/* wishlist icon  section*/}
              {isGameInWishlist ? (
                <button onClick={() => handleWishListDelete(id)}>
                  <p className="w-12 h-12 rounded-full border grid place-content-center">
                    {" "}
                    <FaHeart color="red" size={20} />{" "}
                  </p>
                </button>
              ) : (
                <button onClick={() => handleWishList(id)}>
                  <p className="w-12 h-12 rounded-full border grid place-content-center">
                    {" "}
                    <FaHeart color="gray" size={20} />{" "}
                  </p>
                </button>
              )}
            </div>
            <p className="text-lg">{gameData?.review}</p>
            <div className="text-lg mt-3 flex gap-3 items-center font-bole">
              Rating: <Ratings starCount={gameData?.rating} />
            </div>
            <div className="text-lg mb-8 mt-3 flex gap-3 items-center font-bole">
              Genre:{" "}
              <span className="capitalize text-lg font-bold text-purple-400">
                {gameData?.genre}
              </span>
            </div>
            <div className="border rounded-2xl p-5">
              <p className="text-lg font-bold">Add your comment:</p>
              <GameReviewForm
                handleFormDataOnChange={handleFormDataOnChange}
                handleFormSubmit={handleFormSubmit}
                commentInputError={commentInputError}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          {gameData?.comments?.length > 0 ? (
            gameData?.comments?.map((userComment) => (
              <UserGameReviews
                key={userComment?.id}
                userComment={userComment}
              />
            ))
          ) : (
            <div className="w-10/12 mx-auto pt-10 mt-10 border-t flex justify-center gap-16 items-center text-2xl text-red-600 ">
              No Comments available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
