import { useEffect, useState } from "react";
import SectionHeadline from "../shared/SectionHeadline";
import AllGames from "./AllGames";

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
      </div>
  )
}

export default TopGamesSection