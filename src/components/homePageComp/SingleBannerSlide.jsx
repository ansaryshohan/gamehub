const SingleBannerSlide = ({ singleBannerData }) => {
  const { image, text } = singleBannerData;
  return (
    <div className="relative">
      <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
      <img
        src={image}
        alt={text}
        className="w-full h-[550px] object-cover object-center"
      />
      <div className="absolute left-0 top-0 z-10 w-full h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white w-7/12 leading-tight">
          {text}
        </h1>
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default SingleBannerSlide;
