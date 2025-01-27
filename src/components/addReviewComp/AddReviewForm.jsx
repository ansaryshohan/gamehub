// import { useState } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
import InputField from "../login&register/InputField";

const AddReviewForm = () => {
  const { user } = useAuthContext();
  const [reviewInput, setReviewInput] = useState({
    gameName: "",
    image: "",
    review: "",
    rating: "",
    publishYear: new Date(),
    genre: "action",
    userEmail: "",
    comments: [],
  });

  const [reviewInputError, setReviewInputError] = useState({
    gameNameError: "",
    imageError: "",
    reviewError: "",
    ratingError: "",
  });

  const renderYearContent = (year) => {
    // console.log(year)
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText}>{year}</span>;
  };

  const handleReviewInputOnChange = (e) => {
    // gameName error
    if (e.target.name === "gameName") {
      const value = e.target.value;
      setReviewInputError({
        ...reviewInputError,
        gameNameError: "",
      });
      if (value.length > 0) {
        return setReviewInput({
          ...reviewInput,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        gameNameError: "provide a game name",
      });
    }
    // image error
    if (e.target.name === "image") {
      const value = e.target.value;
      setReviewInputError({
        ...reviewInputError,
        imageError: "",
      });
      if (value.length > 0) {
        return setReviewInput({
          ...reviewInput,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        imageError: "provide a game image url",
      });
    }
    // review error
    if (e.target.name === "review") {
      const value = e.target.value;
      setReviewInputError({
        ...reviewInputError,
        reviewError: "",
      });
      if (value.length > 0) {
        return setReviewInput({
          ...reviewInput,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        reviewError: "give a review about the game",
      });
    }
    // rating error
    if (e.target.name === "rating") {
      const value = Number(e.target.value);
      setReviewInputError({
        ...reviewInputError,
        ratingError: "",
      });
      if (value >= 0 && value <= 10) {
        return setReviewInput({
          ...reviewInput,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        ratingError: "give a rating between 0-10",
      });
    }
    setReviewInput({ ...reviewInput, [e.target.name]: e.target.value });
  };

  const handleAddReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewDataObj = {
      ...reviewInput,
      publishYear: reviewInput.publishYear.getFullYear(),
      userEmail: user.email,
    };
    try {
      if (
        reviewInput.gameName &&
        reviewInput.image &&
        reviewInput.review &&
        reviewInput.rating &&
        reviewInput.publishYear &&
        reviewInput.genre
      ) {
        const reviewResponse = await fetch("http://localhost:3000/add-review", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(reviewDataObj),
        });
        const data = await reviewResponse.json();
        if (data.acknowledged) {
          toast.success("review added successfully");
        }
      } else {
        toast.error("please fill up all the input");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="space-y-6" onSubmit={handleAddReviewSubmit}>
        <div className="space-y-1 text-sm">
          <InputField
            label={"Game Title"}
            error={reviewInputError.gameNameError}
          >
            <input
              type="text"
              name="gameName"
              id="gameName"
              defaultValue={reviewInput.gameName}
              onChange={handleReviewInputOnChange}
              placeholder="Game Title"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              required
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField label={"Game Image"} error={reviewInputError.imageError}>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={reviewInput.image}
              onChange={handleReviewInputOnChange}
              placeholder="Game Image Url"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              required
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField
            label={"Review details"}
            error={reviewInputError.reviewError}
          >
            <textarea
              type="text"
              name="review"
              id="review"
              defaultValue={reviewInput.review}
              onChange={handleReviewInputOnChange}
              placeholder="Game review details"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 resize-none"
              required
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between">
          <InputField
            label={"Enter a Rating (0-10):"}
            error={reviewInputError.ratingError}
          >
            <input
              type="number"
              name="rating"
              id="rating"
              defaultValue={reviewInput.rating}
              onChange={handleReviewInputOnChange}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              placeholder="0-10"
              min={0}
              max={10}
              required
            />
          </InputField>
          <InputField label={"Publishing Year:"}>
            <DatePicker
              selected={reviewInput.publishYear}
              renderYearContent={renderYearContent}
              showYearPicker
              // defaultValue={reviewInput.publishYear}
              onChange={(date) =>
                setReviewInput({
                  ...reviewInput,
                  publishYear: date,
                })
              }
              dateFormat="yyyy"
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-violet-600 bg-gray-50"
            />
          </InputField>

          <InputField label={"Genre "}>
            <select
              name="genre"
              id="genre"
              defaultValue={reviewInput.genre}
              onChange={handleReviewInputOnChange}
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-violet-600 bg-gray-50"
              required
            >
              <option value="action">Action</option>
              <option value="rpg">RPG</option>
              <option value="adventure">Adventure</option>
              <option value="survival">Survival</option>
              <option value="farming">Farming</option>
              <option value="other">Other</option>
            </select>
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField label={"User Email"}>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              defaultValue={user?.email}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-300 text-gray-800 focus:border-violet-600 resize-none"
              disabled
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField label={"User Name"}>
            <input
              type="text"
              name="userName"
              id="userName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-300 text-gray-800 focus:border-violet-600 resize-none"
              disabled
            />
          </InputField>
        </div>
        <div className="w-full grid place-items-center">
          <button
            className="block w-1/3 p-3 text-center text-gray-50 bg-violet-600 rounded-2xl"
            type="submit"
          >
            Add Review
          </button>
        </div>
      </form>
    </>
  );
};

export default AddReviewForm;
