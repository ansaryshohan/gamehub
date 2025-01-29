import bgImg from "../assets/home-banner4.jpg";
import AddReviewForm from "../components/addReviewComp/AddReviewForm";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";

const AddReviewPage = () => {
  return (
    <div className="">
      <Title title={"Add-Review | GameHub"} />

      <div className="relative w-full min-h-screen pb-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[3]"></div>
        <img src={bgImg} alt="" className=" absolute top-0 left-0 w-full h-full object-cover z-[2]" />
        <div className="relative w-full h-full md:w-11/12 top-0 left-[50%] translate-x-[-50%] z-10 text-white ">
          <SectionHeadline titleText={"Add A New Game Review"} />
          <div className="w-10/12 md:w-1/2 mx-auto">
            <AddReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewPage;
