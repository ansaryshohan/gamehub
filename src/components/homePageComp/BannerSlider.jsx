import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper/modules";
import { bannerData } from "./bannerData";
import SingleBannerSlide from "./SingleBannerSlide";

const BannerSlider = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <SingleBannerSlide singleBannerData={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <div className="w-full md:w-11/12 mx-auto">HomePage banner text</div>
    </div>
  );
};

export default BannerSlider;
