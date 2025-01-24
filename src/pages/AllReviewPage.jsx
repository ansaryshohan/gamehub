import AllGames from "../components/homePageComp/AllGames";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";

const AllReviewPage = () => {
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <div className="w-full bg-gray-950 py-10">
        <SectionHeadline titleText={"All Games"}/>
      <AllGames/>
      </div>
    </div>
  );
};

export default AllReviewPage;
