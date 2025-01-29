import { FaHeart } from "react-icons/fa";

const WishListCard = ({ reviewData, handleWishListDelete }) => {
  // console.log(reviewData);

  return (
    <div className="relative">
      <img src={reviewData.image} alt="" className="w-full h-72 object-cover rounded-xl" />
      <div className="absolute bg-black/40 left-0 top-0 w-full h-full"></div>
      <h3 className=" absolute z-10 bottom-4 left-2 text-2xl font-bold text-white">
        {reviewData.gameName}
      </h3>
      <button onClick={() => handleWishListDelete(reviewData?._id)} className="absolute z-10 top-2 right-2">
        <p className="w-12 h-12 rounded-full border grid place-content-center">
          {" "}
          <FaHeart color="red" size={20} />{" "}
        </p>
      </button>
    </div>
  );
};

export default WishListCard;
