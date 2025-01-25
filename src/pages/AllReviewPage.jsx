import { useEffect, useState } from "react";
import AllGames from "../components/homePageComp/AllGames";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";

const AllReviewPage = () => {
  const [allGames, setAllGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-games")
      .then((res) => res.json())
      .then((data) => setAllGames(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <div className="w-full bg-gray-950 py-10">
        <SectionHeadline titleText={"All Games"} />
        <AllGames allGames={allGames}/>
      </div>
    </div>
  );
};

export default AllReviewPage;
