import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/benefits_background.jpg";
import SectionHeadline from "../shared/SectionHeadline";
import AllGames from "./AllGames";
import { toast } from "react-toastify";

const TopGamesSection = () => {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    let isMounted = true; 

    const fetchTopGames = async () => {
      try {
        const res = await fetch("https://game-review-backend.vercel.app/top-games");

        if (!res.ok) throw new Error("Failed to fetch top games");

        const data = await res.json();
        if (isMounted) setTopGames(data);
      } catch (error) {
        if (isMounted) return toast.error(error.message);
      }
    };

    fetchTopGames();
    // Cleanup
    return () => {
      isMounted = false; 
    };
  }, []);

  return (
    <div
      className=" text-white h-full py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <SectionHeadline titleText={"Top Games"} />
      <AllGames allGames={topGames} />
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
  );
};

export default TopGamesSection;
