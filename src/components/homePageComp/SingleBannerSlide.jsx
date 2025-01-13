

const SingleBannerSlide = ({singleBannerData}) => {
  const {image,text}= singleBannerData;
  return (
    <div className="relative">
      <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
        <img src={image} alt={text} className="w-full h-[600px] object-cover object-center" />
        <div className="absolute left-0 top-0 z-10 w-full h-full flex justify-center items-center">
          <h1 className="text-center text-6xl font-bold text-white w-7/12">{text}</h1>
        </div>
    </div>
  )
}

export default SingleBannerSlide