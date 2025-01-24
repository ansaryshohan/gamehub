import BannerSlider from "../components/homePageComp/BannerSlider";
import TopGamesSection from "../components/homePageComp/TopGamesSection";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <BannerSlider />
      <TopGamesSection />
    </div>
  );
};

export default HomePage;
