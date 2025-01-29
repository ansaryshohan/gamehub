import subImg from "../../assets/subscribe_image.png";

const NewsletterSection = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white rounded-lg overflow-hidden md:gap-7">
          {/* Image Section */}
          <div className="flex items-center justify-center md:justify-start pt-10">
            <img
              src={subImg}
              alt="Newsletter"
              className="w-10/12 ps-24 object-cover"
            />
          </div>

          {/* Text and Input Section */}
          <div className="md:flex-1 p-4">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white mb-6 pr-6">
              Stay updated with the latest news, offers, and exclusive content
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row items-center gap-4 pr-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <button
                type="submit"
                className="bg-[#E43E34] text-white px-6 py-3 rounded-lg hover:bg-slate-400 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;