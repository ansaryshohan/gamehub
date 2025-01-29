import BannerSlider from "../components/homePageComp/BannerSlider";
import GetInTouchSection from "../components/homePageComp/GetInTouchSection";
import NewsletterSection from "../components/homePageComp/NewsLetterSection";
import TopGamesSection from "../components/homePageComp/TopGamesSection";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <BannerSlider />
      <TopGamesSection />
      <NewsletterSection/>
      <GetInTouchSection/>
    </div>
  );
};

export default HomePage;
