import AllGames from "../components/homePageComp/AllGames";
import BannerSlider from "../components/homePageComp/BannerSlider";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <BannerSlider/>
      <AllGames/>
    </div>
  );
};

export default HomePage;
