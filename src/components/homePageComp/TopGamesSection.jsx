import { useEffect, useState } from "react";
import SectionHeadline from "../shared/SectionHeadline";
import AllGames from "./AllGames";
import { Link } from "react-router-dom";

const TopGamesSection = () => {
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/top-games")
      .then((res) => res.json())
      .then((data) => setTopGames(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#040308] text-white h-full py-16">
      <SectionHeadline titleText={"Top Games"} />
      <AllGames allGames={topGames}/>
      <div className="flex justify-center items-center pt-8">
        <Link to={"/reviews"}>
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800"
        >
          View All
        </button>
        </Link>
      </div>
      </div>
  )
}

export default TopGamesSection