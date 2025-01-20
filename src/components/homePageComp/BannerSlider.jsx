import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import { bannerData } from "./bannerData";
import SingleBannerSlide from "./SingleBannerSlide";

const BannerSlider = () => {
  return (
    <div className="bg-[#040308] text-white">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        speed={1500}
        grabCursor={true}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <SingleBannerSlide singleBannerData={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
