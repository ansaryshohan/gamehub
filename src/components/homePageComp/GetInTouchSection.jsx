import { useState } from "react";
import bgImage from "../../assets/benefits_background.jpg";
import SectionHeadline from "../shared/SectionHeadline";

const GetInTouchSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className=" py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-10/12 mx-auto rounded-lg  p-8 pt-4">
        <SectionHeadline titleText={"Get In Touch"} />

          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            {/* Name and Email Inputs */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
                required
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="5"
              required
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#E43E34] text-white px-8 py-3 rounded-lg hover:bg-[#E43E34]/60 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
