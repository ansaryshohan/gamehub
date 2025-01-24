import SectionHeadline from "../shared/SectionHeadline";
import AllGames from "./AllGames";

const TopGamesSection = () => {
  return (
    <div className="bg-[#040308] text-white h-full py-16">
      <SectionHeadline titleText={"Top Games"} />
      <AllGames/>
      </div>
  )
}

export default TopGamesSection