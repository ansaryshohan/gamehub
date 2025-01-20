import { useEffect, useState } from "react";
import SectionHeadline from "../shared/SectionHeadline";
import SingleGameCard from "./SingleGameCard";

const AllGames = () => {
  const [allGames, setAllGames] = useState([]);
  useEffect(() => {
    fetch("/gameData.json")
      .then((res) => res.json())
      .then((data) => setAllGames(data))
      .catch((err) => console.log(err));
  }, []);
  console.log("he");

  return (
    <div className="bg-[#040308] text-white h-full py-16">
      <SectionHeadline titleText={"Top Games"} />
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden lg:grid lg:grid-cols-4 gap-6">
          {allGames?.map((game, index) => (
            <SingleGameCard key={index} game={game} />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-6">
          {allGames?.map((game, index) => (
            <SingleGameCard key={index} game={game} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-8">
      <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800"
        >
         View All
        </button>
      </div>
    </div>
  );
};

export default AllGames;
