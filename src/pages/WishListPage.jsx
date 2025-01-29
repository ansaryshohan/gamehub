import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import bgImg from "../assets/sub-banner-img.jpg";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";
import WishListCard from "../components/wishListPageComp/WishListCard";
import { useAuthContext } from "../hooks/useAuthContext";

const WishListPage = () => {
  const { user } = useAuthContext();
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    fetch(`https://game-review-backend.vercel.app/allWishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setWishList(data?.data));
  }, [user?.email]);

  const handleWishListDelete = async (gameId) => {
    // console.log(gameId)
    try {
      const response = await fetch(
        "https://game-review-backend.vercel.app/wishlist",
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ gameId, userEmail: user?.email }),
        }
      );
      const data = await response.json();
      // console.log(data);
      if (data?.deleteData?.acknowledged) {
        setWishList(data?.data);
        toast.error("game removed from wishlist");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  // console.log(wishList);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-52 flex items-center justify-center"
      >
        <SectionHeadline titleText={`WishList`} />
      </div>
      <div className="text-white bg-black min-h-[40vh] pb-10">
        <Title title={"WishList | GameHub"} />
        {wishList?.length === 0 ? (
          <div className="w-10/12 mx-auto h-full flex justify-center items-center pt-16">
            {" "}
            <h3 className="text-2xl font-bold text-red-600 text-center">
              No Games Added in Wishlist
            </h3>{" "}
          </div>
        ) : (
          <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {wishList?.map((singleGameData) => (
                <WishListCard
                  key={singleGameData._id}
                  reviewData={singleGameData}
                  handleWishListDelete={handleWishListDelete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WishListPage;
