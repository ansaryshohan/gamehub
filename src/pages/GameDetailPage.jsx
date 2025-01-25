import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../assets/sub-banner-img.jpg";
import UserGameReviews from "../components/gameDetailsComp/UserGameReviews";
import InputField from "../components/login&register/InputField";
import Ratings from "../components/shared/Ratings";
import SectionHeadline from "../components/shared/SectionHeadline";

const GameDetailPage = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/game/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data))
      .catch((err) => console.log(err));
  }, [id]);

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
            <h3 className="text-xl md:text-3xl font-bold mb-5">
              {gameData?.gameName}
            </h3>
            <p className="text-lg">{gameData?.comment}</p>
            <div className="text-lg mb-8 mt-3 flex gap-3 items-center font-bole">
              Rating: <Ratings starCount={gameData?.rating} />
            </div>
            <div className="border rounded-2xl p-5">
              <p className="text-lg font-bold">Give Review:</p>
              <form>
                <InputField label={"Enter a Rating (0-10):"}>
                  <input
                    type="number"
                    name="rating-input"
                    id="rating-input"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
                    placeholder="0-10"
                    min={0}
                    max={10}
                  />
                </InputField>
                <InputField label={"Your Comment"}>
                  <textarea
                    type="text"
                    name="reviewDetails"
                    id="reviewDetails"
                    placeholder="Game review details"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 resize-none"
                  />
                </InputField>
                <div className="w-full grid place-items-center mt-5">
                  <button
                    className="block w-1/3 p-3 text-center text-gray-50 bg-violet-600 rounded-2xl"
                    type="submit"
                  >
                    Add Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          {gameData?.user?.map((userReview) => (
            <UserGameReviews key={userReview?.id} userReview={userReview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
