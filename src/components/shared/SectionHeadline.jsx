import image from "../../assets/products_1.png"

const SectionHeadline = ({titleText}) => {
  return (
    <div className="text-center py-8">
    {/* Section Title */}
    <h2 className="text-3xl font-bold text-white mb-4">{titleText}</h2>
    {/* Line with Icon */}
    <div className="relative flex items-center justify-center py-4">
      <div className="w-3/12 sm:w-1/12 h-[2px] bg-gray-300"></div>
      <div className="absolute w-12 h-12 rounded-full flex justify-center items-center">
        <img
          src={image}
          alt="icon"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default SectionHeadline