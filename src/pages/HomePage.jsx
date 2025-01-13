import BannerSlider from "../components/homePageComp/BannerSlider";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div>
      <Title title={"HomePage | GameHub"} />
      <BannerSlider/>
      <div className="w-full md:w-11/12 mx-auto">HomePage</div>
    </div>
  );
};

export default HomePage;
