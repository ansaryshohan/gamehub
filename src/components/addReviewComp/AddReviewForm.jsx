// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import InputField from "../login&register/InputField";

const AddReviewForm = () => {
  const { user } = useAuthContext();

  const renderYearContent = (year) => {
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText}>{year}</span>;
  };

  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        noValidate=""
        action=""
        className="space-y-6"
        onSubmit={handleAddReviewSubmit}
      >
        <div className="space-y-1 text-sm">
          <InputField label={"Game Title"}>
            <input
              type="text"
              name="gameTitle"
              id="gameTitle"
              placeholder="Game Title"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField label={"Game Image"}>
            <input
              type="text"
              name="gameImg"
              id="gameImg"
              placeholder="Game Image Url"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField label={"Review details"}>
            <textarea
              type="text"
              name="reviewDetails"
              id="reviewDetails"
              placeholder="Game review details"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 resize-none"
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between">
          <InputField label={"Enter a Rating (0-10):"}>
            <input
              type="number"
              name="rating-input"
              id="rating-input"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              placeholder="0-10"
              min={0}
              max={10}
            />
          </InputField>
          <InputField label={"Publishing Year:"}>
            <DatePicker
              selected={new Date()}
              renderYearContent={renderYearContent}
              showYearPicker
              dateFormat="yyyy"
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-violet-600 bg-gray-50"
            />
          </InputField>

          <InputField label={"Genres "}>
            <select
              name="genres"
              id="genres"
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-violet-600 bg-gray-50"
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
