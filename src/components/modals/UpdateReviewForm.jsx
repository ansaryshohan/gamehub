import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
import useModalReviewContext from "../../hooks/useModalReviewContext";
import InputField from "../login&register/InputField";

const UpdateReviewForm = ({ setMyReviews }) => {
  const { updatingReviewId } = useModalReviewContext();
  const [updatingReviewData, setUpdatingReviewData] = useState({});
  const { user } = useAuthContext();
  // console.log(updatingReviewData);
  useEffect(() => {
    const fetchData = async () => {
      if (updatingReviewId) {
        const response = await fetch(
          `https://game-review-backend.vercel.app/review/${updatingReviewId}`
        );
        const reviewData = await response.json();
        setUpdatingReviewData({
          ...reviewData[0],
          publishYear: new Date(reviewData[0].publishYear, 0, 1),
        });
      }
    };
    fetchData();
  }, [updatingReviewId]);

  // const [reviewInput, setReviewInput] = useState(updatingReviewData);
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

  const handleUpdateReviewInputOnChange = (e) => {
    // gameName error
    if (e.target.name === "gameName") {
      const value = e.target.value;
      setReviewInputError({
        ...reviewInputError,
        gameNameError: "",
      });
      if (value.length > 0) {
        return setUpdatingReviewData({
          ...updatingReviewData,
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
        return setUpdatingReviewData({
          ...updatingReviewData,
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
        return setUpdatingReviewData({
          ...updatingReviewData,
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
        return setUpdatingReviewData({
          ...updatingReviewData,
          [e.target.name]: e.target.value,
        });
      }
      return setReviewInputError({
        ...reviewInputError,
        ratingError: "give a rating between 0-10",
      });
    }
    setUpdatingReviewData({
      ...updatingReviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateOnSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...restData } = updatingReviewData;
    // console.log(_id,restData);
    const reviewDataObj = {
      ...restData,
      publishYear: updatingReviewData?.publishYear.getFullYear(),
      userEmail: user.email,
    };
    // console.log(reviewDataObj);
    try {
      if (
        updatingReviewData?.gameName &&
        updatingReviewData?.image &&
        updatingReviewData?.review &&
        updatingReviewData?.rating &&
        updatingReviewData?.publishYear &&
        updatingReviewData?.genre
      ) {
        const reviewResponse = await fetch(
          `https://game-review-backend.vercel.app/review/${_id}`,
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewDataObj),
          }
        );
        const { data, myAllReviews } = await reviewResponse.json();
        // console.log(data);
        if (data.acknowledged && data.modifiedCount > 0) {
          toast.success("review updated successfully");
          setMyReviews(myAllReviews);
          document.getElementById("update-modal").close();
        }
      } else {
        toast.error("please fill up all the input");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // console.log(reviewInput)

  return (
    <form className="space-y-6" onSubmit={handleUpdateOnSubmit}>
      <div className="space-y-1 text-sm">
        <InputField label={"Game Title"} error={reviewInputError.gameNameError}>
          <input
            type="text"
            name="gameName"
            id="gameName"
            defaultValue={updatingReviewData?.gameName}
            onChange={handleUpdateReviewInputOnChange}
            placeholder="Game Title"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-600 focus:border-violet-600"
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
            defaultValue={updatingReviewData?.image}
            onChange={handleUpdateReviewInputOnChange}
            placeholder="Game Image Url"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-600 focus:border-violet-600"
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
            defaultValue={updatingReviewData?.review}
            onChange={handleUpdateReviewInputOnChange}
            placeholder="Game review details"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-600 focus:border-violet-600 resize-none"
            required
          />
        </InputField>
      </div>
      <div className="space-y-1 text-sm">
        <InputField
          label={"Enter a Rating (0-10):"}
          error={reviewInputError.ratingError}
        >
          <input
            type="number"
            name="rating"
            id="rating"
            defaultValue={updatingReviewData?.rating}
            onChange={handleUpdateReviewInputOnChange}
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-600 focus:border-violet-600"
            placeholder="0-10"
            min={0}
            max={10}
            required
          />
        </InputField>
      </div>
      <div className="space-y-1 text-sm">
        <InputField label={"Publishing Year:"}>
          <DatePicker
            selected={updatingReviewData?.publishYear}
            renderYearContent={renderYearContent}
            showYearPicker
            onChange={(date) =>
              setUpdatingReviewData({
                ...updatingReviewData,
                publishYear: date,
              })
            }
            dateFormat="yyyy"
            className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-600 focus:border-violet-600 bg-gray-200"
          />
        </InputField>
      </div>
      <div className="space-y-1 text-sm">
        <InputField label={"Genre "}>
          <select
            name="genre"
            id="genre"
            defaultValue={updatingReviewData?.genre}
            onChange={handleUpdateReviewInputOnChange}
            className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-600 focus:border-violet-600 bg-gray-200"
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
            defaultValue={updatingReviewData?.userEmail}
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-red-200 text-gray-600 focus:border-violet-600 resize-none"
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
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-red-200 text-gray-600 focus:border-violet-600 resize-none"
            disabled
          />
        </InputField>
      </div>
      <div className="w-full grid place-items-center">
        <button
          className="block w-1/3 p-3 text-center text-gray-50 bg-violet-600 rounded-2xl"
          type="submit"
        >
          Update Review
        </button>
      </div>
    </form>
  );
};

export default UpdateReviewForm;
